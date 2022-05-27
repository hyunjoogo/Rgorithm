// https://www.acmicpc.net/problem/11052

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    1 5 6 7`
)
  .trim()
  .split("\n");
let n = Number(input[0]); // 카드 몇개?
const p = input[1]
  .trim()
  .split(" ")
  .map((v) => +v);

// 0번째는 숫자를 맞추기 위해
// ...p는 카드n개 들어있는 카드팩 1번 사는 거랑 같음
const dp = [0, ...p];
//

for (let i = 2; i < dp.length; i++) {
  for (let j = 1; j < i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + dp[j]);
  }
}

// n을 4라고 하면
// 4팩을 1번 사는 금액과 3팩 * 1 + 1팩 * 1 비교
// 위에 값과 2팩 * 1 + 2팩 * 1 비교
// 위에 값과 3팩 * 1 + 1팩 * 1 비교

console.log(dp[n]);
