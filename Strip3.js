var triangleNum = 0;

function edgeKey(a, b) {
  return a < b ? `${a}_${b}` : `${b}_${a}`;
}

function makeStrip(data) {
  let i, j, k;

  // 三角形リストを作成（時計回り→反時計回り）
  const triangles = [];
  i = 0;
  while (i < data.length) {
    const n = data[i];
    if (n == 3) {
      triangles.push([data[i + 1], data[i + 3], data[i + 2]]);
      triangleNum++;
      i += 4;
    } else if (n == 4) {
      const a = data[i + 1];
      const b = data[i + 4];
      const c = data[i + 3];
      const d = data[i + 2];
      triangles.push([a, b, c], [a, c, d]);
      triangleNum += 2;
      i += 5;
    }
  }

  // 「辺→三角形リスト」の逆引きテーブル
  const edgeToTriangles = {};
  triangles.forEach((triangle, index) => {
    for (i = 0; i < 3; i++) {
      const a = triangle[i];
      const b = triangle[(i + 1) % 3];
      const key = edgeKey(a, b);
      if (!edgeToTriangles[key]) {
        edgeToTriangles[key] = [];
      }
      edgeToTriangles[key].push(index);
    }
  });

  // 複数ストリップ構築
  const used = new Array(triangles.length).fill(false);
  const strips = [];
  for (k = 0; k < triangles.length; k++) {
    if (used[k]) {
      continue;
    }
    let curIndex = k;
    let cur = [...triangles[curIndex]];
    used[curIndex] = true;
    let strip = [...cur];
    // ストリップを伸ばす
    let extended = true;
    while (extended) {
      extended = false;
      // 末尾2頂点
      const last2 = strip.slice(-2);
      // 末尾2頂点を共有する未使用三角形を探す
      for (i = 0; i < 3; i++) {
        const a = cur[i];
        const b = cur[(i + 1) % 3];
        if ((a == last2[0] && b == last2[1]) || (a == last2[1] && b == last2[0])) {
          // この辺を共有する三角形を探す
          const key = edgeKey(a, b);
          for (const index of edgeToTriangles[key]) {
            if (used[index] || index == curIndex) {
              continue;
            }
            // 新しい三角形
            const nextTriangle = triangles[index];
            // last2の順に並ぶように新三角形の頂点を並び変える
            let next;
            for (j = 0; j < 3; j++) {
              if (nextTriangle[j] == last2[0] && nextTriangle[(j + 1) % 3] == last2[1]) {
                next = [nextTriangle[j], nextTriangle[(j + 1) % 3], nextTriangle[(j + 2) % 3]];
                break;
              }
              if (nextTriangle[j] == last2[1] && nextTriangle[(j + 1) % 3] == last2[0]) {
                next = [nextTriangle[(j + 1) % 3], nextTriangle[j], nextTriangle[(j + 2) % 3]];
                break;
              }
            }
            if (next) {
              // 追加
              strip.push(next[2]);
              used[index] = true;
              curIndex = index;
              cur = next;
              extended = true;
              break;
            }
          }
          if (extended) {
            break;
          }
        }
      }
    }
    strips.push(strip);
  }

  // 複数ストリップを繋げる
  let result = [];
  for (i = 0; i < strips.length; i++) {
    if (i > 0) {
      // 前ストリップの最後の頂点
      const prev = result[result.length - 1];
      // 今ストリップの最初の頂点
      const next = strips[i][0];
      // 縮退三角形を挟む
      result.push(prev, next);
    }
    result.push(...strips[i]);
  }

  return result;
}
