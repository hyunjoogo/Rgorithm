// https://www.acmicpc.net/problem/11726
const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `10`;

const n = Number(input);
const dp = new Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}
console.log(dp[n]);


// 솔직히 노가다로 해서 갯수를 구하고 패턴을 찾으라는 건데
// 2*1을 오른쪽에 두었을 때 
// 이전 경우의 수를 더하면 되는 것 같지만
// 2*1을 두는 경우의 수도 있다.
// 중복을 빼야한다.

// 그래서 몇개를 노가다하면 패턴이 보인다...? ㅋㅋㅋㅋㅋㅋㅋ