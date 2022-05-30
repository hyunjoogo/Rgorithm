// https://www.acmicpc.net/problem/2309

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `20
    7
    23
    19
    10
    15
    25
    8
    13`
)
  .trim()
  .split("\n")
  .map((v) => +v);

const sum = input.reduce((a, b) => a + b, 0);
let flag = false;
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < i; j++) {
    if (sum - input[i] - input[j] === 100) {
      const result = input.filter((v) => v !== input[i] && v !== input[j]);
      console.log(result.join("\n"));
      flag = true;
      break;
    }
  }
  if (flag) {
    break;
  }
}

// 9명 중에 7명의 합이 100이 되면 된다.
// 1, 2 빼고 / 1,3/ 1,4/15/16/17/18/19

// index를 잘못 계산해서 애를 먹었음
// 1 ~ 9로 잡아서 비교를 안하는 값이 생겨버렸음
/*
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < i; j++) {
  }
}
*/
// 이런 식으로 이중for문을 돌면 
// (0,0), (1,1), ... (i,i)를 제외하고 
// (1,2), (2,1) ... (i,j), (j,i) 중 하나만 나온다.

// 그리고 지역변수로 flag = false 남겨두고 
// 안쪽for문에 해당조건이 되면 flag = true로 변경하고 break
// 바깥for문 끝에 flag가 true이면 break를 하게 되면
// 해당조건을 만났을 때 안쪽for문이 종료되면 이중for문이 종료가 된다.