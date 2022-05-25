// https://www.acmicpc.net/problem/11005

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `60466175 36`
)
  .split(" ")
  .map(Number);

let n = input[0];
const b = input[1];

let result = [];
if (n === 0) {
  result.push(n);
}

while (n !== 0) {
  result.push(n - b * Math.floor(n / b));
  n = Math.floor(n / b);
}

console.log(
  result
    .map((v) => String.fromCharCode(v + 55))
    .reverse()
    .join("")
);


// -2진법변환 방식을 그대로 사용
// 다만 ceil 올림이 아니라 floor 내림으로 변경


// 마지막에 아스키 코드에 맞춰서 바꾸기
// Z => 35 + 55
// A => 10 + 55
