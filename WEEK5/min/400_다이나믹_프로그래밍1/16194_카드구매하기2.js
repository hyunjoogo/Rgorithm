const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const cardsPrice = input[1].split(" ").map((item) => +item);

const DP = new Array(n + 1).fill(0);
DP[1] = cardsPrice[0];

for (let i = 2; i <= n; i++) {
  DP[i] = cardsPrice[i - 1];
  for (let j = 1; j < i; j++) {
    DP[i] = Math.min(DP[i], DP[j] + cardsPrice[i - j - 1]);
  }
}

console.log(DP[n]);

// https://www.acmicpc.net/problem/16194
// 처음에 그 전에꺼에 + 1한부분만 계속 구하는경우로 풀었었다 하지만 모든 테케를 통과하지 못해서 힌트를 보고 해결
// FAIL
