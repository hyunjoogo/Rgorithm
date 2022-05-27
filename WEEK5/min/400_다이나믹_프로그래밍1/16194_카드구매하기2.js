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
  DP[i] = Math.min(DP[i - 1] + cardsPrice[0], cardsPrice[i - 1]);
  // console.log(DP[i]);
}

console.log(DP);
