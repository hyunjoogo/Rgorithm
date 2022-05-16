const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const cards = input[1].split(" ").map((item) => +item);

const dp = new Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
  }
}

console.log(dp[n]);

// https://www.acmicpc.net/problem/11052
// 기존에 있던 배열의 값을 이용해서 다음 배열의 값을 구하는거 자체가 DP이다.
// FAIL
