// https://www.acmicpc.net/problem/11727

const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `12`;

const n = Number(input);
const dp = new Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}
console.log(dp[n]);
