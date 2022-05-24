// https://www.acmicpc.net/problem/2089

const fs = require("fs");
const _input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `0`;

let n = parseInt(_input, 10);
let result = [];
if (n === 0) {
  result.push(n);
}

while (n !== 0) {
  result.push(n + 2 * Math.ceil(n / -2));
  n = Math.ceil(n / -2);
}

console.log(result.reverse().join(""));

let a = 7;
console.log(a + 2 * Math.ceil(a / -2), a, a / -2, Math.ceil(a / -2));

// 진법을 구하는 방식이 10진수를 ?진수로 나눈 나머지를 꺼꾸로 읽으면 된다.
// 하지만 -2진수의 경우 나누는 수가 음수일 때 몫을 올림해줘야 한다.

// 진법을 구하는 방식이 10진수를 ?진수로 나눈 나머지를 꺼꾸로 읽으면 된다.
//    -2진수의 경우 몫을 올림해줘야 한다.
//    - JS에서 나누기를 하면 정수형태가 아니라 실수형태가 나온다.
//    - (-13 / -2)를 나누면 6.5가 나오는데 버림을 하면 -2 * 6 + 1 = -11 이 되므로
//    - 올림을 해야한다. 그러면 나머지가 1이 나온다.

// 나머지만 result에 넣고 꺼꾸로 읽어주면 된다.
