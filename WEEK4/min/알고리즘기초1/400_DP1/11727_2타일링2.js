const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const num = Number(input);
const DP = new Array(num + 1).fill(0);

for (let i = 1; i <= num; i++) {
  let sum = 0;
  if (i === 1) {
    DP[i] = 1;
  } else if (i === 2) {
    DP[i] = 3;
  } else {
    if (i % 2 === 0) {
      for (let j = 1; j <= i - 1; j++) {
        sum += DP[j];
      }

      DP[i] = (sum + 2) % 10007;
    } else {
      for (let j = 1; j <= i - 1; j++) {
        sum += DP[j];
      }

      DP[i] = (sum + 1) % 10007;
    }
  }
}

console.log(DP[num]);

// https://www.acmicpc.net/problem/11727
// 점화식 구하는데 오래걸렸다.
// PASS
