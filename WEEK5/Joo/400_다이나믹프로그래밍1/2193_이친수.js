// 3자리 이친수의 개수를 출력해라

// 1, 10, 100, 101, 1000, 1001

// 1, 2, 3, 4자리.... 갯수를 먼저 구해놓고
// 답을 내면 될듯

// 그럼 이친수 구하는 점화식을 만들자

const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `3`;

const n = Number(input);
const dp = [
  [0, 0],
  [0, 1],
];

for (let i = 2; i <= n; i++) {
  // 0,1 2자리에 대해서만 dp[1]에 [0, 0]으로 할당하는 방식으로 사용
  // 자리수가 크지 않아서 안썼는데 틀려서 썼음
  dp[i] = [BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]), BigInt(dp[i - 1][0])];
}
const result = (BigInt(dp[n][0]) + BigInt(dp[n][1])).toString();

console.log(result);

// 뒷자리가 0으로 끝나?
// 이전 자리수의 0으로 끝나는 경우의 수  + 이전 자리수의 1으로 끝나는 경우의 수

// 뒷자리가 1으로 끝나?
// 이전 자리수의 0으로 끝나는 경우의 수
// 1로 끝나는 수가 못 오는 이유는 11 연속이 안되어서
