// https://www.acmicpc.net/problem/3085
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
    CCP
    CCP
    PPC`
)
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = Number(input.shift());
let arr = [];
let tmp = [];
for (let i = 0; i < n + 2; i++) {
  tmp.push("X");
}
//--------입력받을 사탕 주위에 'X'를 채워주는 과정----------//
arr.push(tmp);

input.forEach((v) => {
  let cur = v;
  cur = "X" + cur + "X";
  arr.push(cur.split(""));
});
arr.push([...tmp]);
//--------입력받을 사탕 주위에 'X'를 채워주는 과정----------//

function calculateMaxLength(n, arr) {
  let maxResult = 0;
  for (let i = 1; i < n + 1; i++) {
    let widthMaxLength = 1,
      heightMaxLength = 1,
      widthCount = 1,
      heightCount = 1;
    let widthCurrentColor = arr[0][0],
      heightCurrentColor = arr[0][0];
    for (let j = 1; j < n + 1; j++) {
      if (widthCurrentColor === arr[i][j]) {
        widthCount++;
        widthMaxLength = Math.max(widthMaxLength, widthCount);
      } else {
        widthCurrentColor = arr[i][j];
        widthCount = 1;
      }
      if (heightCurrentColor === arr[j][i]) {
        heightCount++;
        heightMaxLength = Math.max(heightMaxLength, heightCount);
      } else {
        heightCurrentColor = arr[j][i];
        heightCount = 1;
      }
      maxResult = Math.max(maxResult, widthMaxLength, heightCount);
    }
  }
  return maxResult;
}
function swap(n, arr) {
  // CP
  // tmp = C
  // C 에 P를 할당
  // P자리에 tmp를 할당
  //  최대길이 구하고 원래 자리로 다시 돌리기
  // PC
  // C자리에 P를 할당
  // P자리에 tmp를 할당
  let maxResult = calculateMaxLength(n, arr);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let tmp = arr[i][j];
      arr[i][j] = arr[i - 1][j];
      arr[i - 1][j] = tmp;
      maxResult = Math.max(maxResult, calculateMaxLength(n, arr));
      arr[i - 1][j] = arr[i][j];
      arr[i][j] = tmp;

      arr[i][j] = arr[i + 1][j];
      arr[i + 1][j] = tmp;
      maxResult = Math.max(maxResult, calculateMaxLength(n, arr));
      arr[i + 1][j] = arr[i][j];
      arr[i][j] = tmp;

      arr[i][j] = arr[i][j + 1];
      arr[i][j + 1] = tmp;
      maxResult = Math.max(maxResult, calculateMaxLength(n, arr));
      arr[i][j + 1] = arr[i][j];
      arr[i][j] = tmp;

      arr[i][j] = arr[i][j - 1];
      arr[i][j - 1] = tmp;
      maxResult = Math.max(maxResult, calculateMaxLength(n, arr));
      arr[i][j - 1] = arr[i][j];
      arr[i][j] = tmp;
    }
  }
  return maxResult;
}
console.log(swap(n, arr));
