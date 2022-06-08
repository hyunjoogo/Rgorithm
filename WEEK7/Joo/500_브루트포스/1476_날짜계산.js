const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 4 5`
)
  .trim()
  .split(" ")
  .map((v) => v.trim());

const [E, S, M] = input.map(Number);

let count = 1;
while (true) {
  if (
    (count - E) % 15 === 0 &&
    (count - S) % 28 === 0 &&
    (count - M) % 19 === 0
  ) {
    break;
  }
  count++;
}
console.log(count)
// Fail - 문제는 ..... 메모리 초과가 계속 난다....
// 1. 배열의 값을 각각 변수 지정하기
// - [1, 2, 3] 일 때 const [E, S, M] = [1, 2, 3]

// 2. n주기로 도는 숫자가 겹치는 때 찾기
// n주기란? 문제에서 나온 것 처럼 범위가 넘어가면 다시 1로 되는 것을 말함
// 5주기의 19번째를 찾으면 19 % 5 = 나머지 4를 구해서
// 원범위 (1 ~ 5)의 4번째 숫자가 답이다.

// 15주기일 때 1이 나올 수 있는 방법은 1, 16, 31, 46, ... 이다.
// 즉, 15로 나누면 나머지가 1

// 3가지의 조건이 있으므로 while문을 돌면서 3가지 조건을 충족할 때까지 돌면 된다.

// a로 나누면 나머지가 3, b로 나누면 나머지가 4, c로 나누면 나머지가 5일 때 x 값을 구하라는 문제가 나오곤 했다.


