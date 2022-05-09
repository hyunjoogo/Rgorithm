const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

const num = Number(input);

const DP = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i - 1] + 1, DP[i / 3] + 1);
  } else if (i % 2 === 0) {
    DP[i] = Math.min(DP[i - 1] + 1, DP[i / 2] + 1);
  } else {
    DP[i] = DP[i - 1] + 1;
  }
}

console.log(DP[num]);

// https://www.acmicpc.net/problem/1463
// 생각보다 어려웠다. 점화식이 나오면 DP를 생각해서 풀도록 연습해야할듯
// 위 코드가 왜 틀렸는지 모르겠다.
// FAIL
