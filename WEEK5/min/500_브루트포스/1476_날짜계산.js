const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map((item) => +item);
let result = 1;

while (true) {
  let e = result % 15;
  let s = result % 28;
  let m = result % 19;
  if (e === 0) {
    e = 15;
  }
  if (s === 0) {
    s = 28;
  }
  if (m === 0) {
    m = 19;
  }
  if (e === input[0] && s === input[1] && m === input[2]) {
    console.log(result);
    break;
  }

  result += 1;
}

// https://www.acmicpc.net/problem/1476
