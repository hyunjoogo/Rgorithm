const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
4
7
10`
)
  .trim()
  .split("\n")
  .map((v) => +v);
input.shift();
let result = [];
const dp = new Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let n of input) {
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  result.push(dp[n]);
}
console.log(result.join("\n"));

// 이전 케이스에 추가적으로 무언가가 붙을 경우 
// dp[n] = dp[n-1] + 알파
// 이런식으로 점화식이 만들어지는 듯하다.

// 대부분 케이스 1,2,3은 거의 껌으로 나오고
// 케이스 4~7까지가 복잡한데 
// 연습장에 알아볼 수 있게 크게 줄을 맞춰서 하면 규칙을 찾을 수 있을 듯하다.
// 만약 코테에서 만난다면 시간잡아먹기 딱 좋을 것 같다.

