// https://www.acmicpc.net/problem/10844

// dp[3] = 이전 dp[2] +  이전 dp[4]

// dp[0] = 이전 dp[1]
// dp[9] = 이전 dp[8]

const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `3`;

const n = Number(input);

const dp = new Array(n + 1).fill();

for (let i = 0; i <= n; i++) {
  dp[i] = new Array(10).fill(0);
}
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][0] = dp[i - 1][1] % 1000000000;
    } else if (j === 9) {
      dp[i][9] = dp[i - 1][8] % 1000000000;
    } else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
  }
}


console.log(dp[n].reduce((a, b) => (a + b) % 1000000000, 0));


// 15990_더하기 5 문제와 비슷한 느낌
// 뒤에 숫자가 0~9로 끝날 때의 경우의 수를 저장하면 된다. (end-0~9)
// 예 ) end-1은 이전 정수의 end-0과 이전 정수의 end-2를 더하면 된다.
// 예 n = 3 이면? 101, 121, 321 
// 같은 자리가 연속되면 안되므로 이전 문제와 비슷하다.
// 다만 end-0, end-9는 각각 -1, 0이 안되므로 이전 정수의 1, 8만 더하면 된다.
// 그리고 나머지 구하는 방식도 비슷하다.

// const dp = new Array(n + 1).fill(new Array(10).fill(0));
// 이런식으로 2차원배열을 만들었는데
// 안 배열의 값이 다같이 바뀌는 이슈가 있었다.
// dp를 만들 때 new Array(10).fill(0)의 주소값이 같으므로 나오는 이슈였다.
// 예를 들어 주소값 100이 [100, 100, 100, ...] 이렇게 깔려서
// 첫번째 값이 바뀌면 뒤에 값도 바뀌는 이슈가 생기는 것
// 그래서 dp를 생성할 때 for문으로 생성하니까 문제는 해결이 되었다.

// 그리고 아버지 말로는 저것은 자바스타일
// for문을 돌면서 빈배열에 push를 하는 스타일을 쓰는 것을 추천해주심