// https://www.acmicpc.net/problem/2133

const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `12`;
const n = Number(input);

const DP = new Array(n + 1).fill(0);
DP[2] = 3;

for (let i = 4; i <= n; i += 2) {
  DP[i] = DP[i - 2] * DP[2] + 2;
  for (let j = 4; j < i; j += 2) {
    DP[i] += DP[i - j] * 2;
  }
}
console.log(DP[n]);
