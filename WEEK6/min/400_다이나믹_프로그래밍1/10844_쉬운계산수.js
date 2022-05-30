const input = require("fs").readFileSync("/dev/stdin").toString();
const n = +input;

const dp = Array.from(new Array(n + 1), () => new Array(10));
const maxNum = 1000000000;

dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

if (n === 1) {
  console.log(9);
} else {
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j + 1] % maxNum;
      } else if (j === 9) {
        dp[i][j] = dp[i - 1][j - 1] % maxNum;
      } else {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % maxNum;
      }
    }
  }
  let sum = 0;
  for (let i = 0; i <= 9; i++) {
    sum += dp[n][i];
  }

  console.log(sum % maxNum);
}

// https://www.acmicpc.net/problem/10844
// 문제 자체가 이해가 안됨 그래서 예제를 보고 풀었다. 이차원 배열이라 조금 어려웟다.
// FAIL
