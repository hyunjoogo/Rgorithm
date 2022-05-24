// https://www.acmicpc.net/problem/1373

const fs = require("fs");
const _input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `11001100`;

let answer = "";
let input = _input;

// --- Good Code ---
while (input.length >= 3) {
  answer = parseInt(input.slice(input.length - 3), 2).toString(8) + answer;
  input = input.slice(0, input.length - 3);
}

if (input.length !== 0) {
  answer = parseInt(input, 2).toString(8) + answer;
}

console.log(answer);

// 나의 코드
const eight = parseInt(input, 2).toString(8);

// 11001100 => 204  => 314
// 2진법으로 구성된 문자열을 뒤에서 3자리씩 자르고
// parseInt('110', 2) => 10진법 숫자가 나온다.
// 4.toString(8) => 4를 8진법으로 변경
// 이 값을 result에 추가
// input값을 계산한 3자리를 제외하고 나머지로 할당
// 반복

// 만약 1, 2 자리가 남으면 다시 계산 후 종료
