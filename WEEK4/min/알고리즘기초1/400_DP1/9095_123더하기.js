const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((item) => +item);
const cases = input[0];

const DP = [0, 1, 2, 4];

for (let i = 1; i <= cases; i++) {
  const num = input[i];
  for (let j = 1; j <= num; j++) {
    if (j === 1 || j === 2 || j === 3) {
      continue;
    }

    DP[j] = DP[j - 1] + DP[j - 2] + DP[j - 3];
  }
  console.log(DP[num]);
}

// https://www.acmicpc.net/problem/9095
// 규칙을 찾는게 오래걸렸다.
// PASS
