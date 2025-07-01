var triangleNum = 0;
function makeStrip(data) {
  const strip = [];
  let lastIndex = -1;
  let lastVertex = -1;
  let nextReverse = false;
  let i = 0;
  while (i < data.length) {
    if (lastIndex >= 0) {
      // インデックスを2個追加
      strip.push(lastIndex);
      strip.push(data[i + 1]);
    }
    if (data[i] == 4) {
      if ((lastVertex == 4) && nextReverse) {
        // 前回が反転させた四角形の場合、反転させる
        lastIndex = data[i + 1]; strip.push(lastIndex);
        lastIndex = data[i + 2]; strip.push(lastIndex);
        lastIndex = data[i + 4]; strip.push(lastIndex);
        lastIndex = data[i + 3]; strip.push(lastIndex);
        nextReverse = true;
      } else if ((lastVertex == 3) && nextReverse) {
        // 前回が反転でない三角形の場合、反転させる
        lastIndex = data[i + 1]; strip.push(lastIndex);
        lastIndex = data[i + 2]; strip.push(lastIndex);
        lastIndex = data[i + 4]; strip.push(lastIndex);
        lastIndex = data[i + 3]; strip.push(lastIndex);
        nextReverse = true;
      } else {
        lastIndex = data[i + 1]; strip.push(lastIndex);
        lastIndex = data[i + 4]; strip.push(lastIndex);
        lastIndex = data[i + 2]; strip.push(lastIndex);
        lastIndex = data[i + 3]; strip.push(lastIndex);
        nextReverse = false;
      }
      triangleNum += 2;
      lastVertex = 4;
      i += 5;
    } else {
      if ((lastVertex == 4) && nextReverse) {
        // 前回が反転させた四角形の場合、反転させる
        lastIndex = data[i + 1]; strip.push(lastIndex);
        lastIndex = data[i + 2]; strip.push(lastIndex);
        lastIndex = data[i + 3]; strip.push(lastIndex);
        nextReverse = false;
      } else if ((lastVertex == 3) && nextReverse) {
        // 前回が反転でない三角形の場合、反転させる
        lastIndex = data[i + 1]; strip.push(lastIndex);
        lastIndex = data[i + 2]; strip.push(lastIndex);
        lastIndex = data[i + 3]; strip.push(lastIndex);
        nextReverse = false;
      } else {
        lastIndex = data[i + 1]; strip.push(lastIndex);
        lastIndex = data[i + 3]; strip.push(lastIndex);
        lastIndex = data[i + 2]; strip.push(lastIndex);
        nextReverse = true;
      }
      triangleNum++;
      lastVertex = 3;
      i += 4;
    }
  }
  return strip;
}
