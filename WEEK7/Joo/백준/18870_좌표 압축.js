//https://www.acmicpc.net/problem/18870

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    2 4 -10 4 -9`
)
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = Number(input[0]);
const list = input[1].split(" ").map((v) => +v);

const newList = [...new Set(list)].sort((a, b) => a - b);

let obj = {};
newList.forEach((a, index) => (obj[a] = index));

let answer = [];
for (let i = 0; i < list.length; i++) {
  answer.push(obj[list[i]]);
}

console.log(answer.join(" "));


// Set은 중복을 허용하지 않는다.
