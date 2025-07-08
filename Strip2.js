var triangleNum = 0;

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
      for (let index = 0; index < triangles.length; index++) {
        if (used[index] || index == curIndex) {
          continue;
        }
        // 新しい三角形
        const nextTriangle = triangles[index];
        for (j = 0; j < 3; j++) {
          const a = nextTriangle[j];
          const b = nextTriangle[(j + 1) % 3];
          if ((a == last2[0] && b == last2[1]) || (a == last2[1] && b == last2[0])) {
            // last2の順に並ぶように新三角形の頂点を並び変える
            let next;
            if (nextTriangle[j] == last2[0] && nextTriangle[(j + 1) % 3] == last2[1]) {
              next = [nextTriangle[j], nextTriangle[(j + 1) % 3], nextTriangle[(j + 2) % 3]];
            } else {
              next = [nextTriangle[(j + 1) % 3], nextTriangle[j], nextTriangle[(j + 2) % 3]];
            }
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
      // 前ストリップの長さが奇数なら、もう1つ縮退三角形を挟む
      if ((strips[i - 1].length % 2) == 1) {
        result.push(next);
      }
    }
    result.push(...strips[i]);
  }

  return result;
}
