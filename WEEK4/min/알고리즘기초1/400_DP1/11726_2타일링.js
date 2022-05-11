let n = require("fs").readFileSync("/dev/stdin").toString();

const num = Number(n);
const DP = new Array(num).fill(0);

for (let i = 1; i <= num; i++) {
  if (i === 1) {
    DP[i] = 1;
  } else if (i === 2) {
    DP[i] = 2;
  } else {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
  }
}

console.log(DP[num]);

// https://www.acmicpc.net/problem/11726
// 점화식을 찾는 과정이 오래걸렸지만 구하기는 쉬웠다.
// PASS
