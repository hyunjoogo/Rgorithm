const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1
    9
    1 2 3 4 5 6 7 8 9`
)
  .trim()
  .split("\n")
  .map((v) => v.trim());
const nowChannel = 100;
let target = Number(input[0]);
if (nowChannel === target) {
  return console.log(0);
}
const wrongBtnsNum = Number(input[1]);
if (wrongBtnsNum === 0) {
  return console.log(input[0].length);
}

const wrongBtns = input[2].split(" ").map((v) => +v);
const wrongBtnsMap = new Set();
for (let i of wrongBtns) {
  wrongBtnsMap.add(String(i));
}

const answer = input[0].length;

function minusTarget(target, answer, wrongBtnsMap) {
  let isGo = true;
  while (isGo) {
    let temp_result = false;
    for (let i of String(target)) {
      if (wrongBtnsMap.has(i)) {
        console.log("minus", i, wrongBtnsMap.has(i));
        temp_result = true;
        target -= 1;
        answer += 1;
        break;
      }
    }
    if (!temp_result) {
      console.log("minus", "끝!", answer);
      return answer;
    }
  }
}

function plusTarget(target, answer, wrongBtnsMap) {
  console.log("t", target);
  let isGo = true;
  while (isGo) {
    let temp_result = false;
    for (let i of String(target)) {
      if (wrongBtnsMap.has(i)) {
        console.log("plus", i, wrongBtnsMap.has(i));
        temp_result = true;
        target += 1;
        answer += 1;
        break;
      }
    }
    if (!temp_result) {
      console.log("plus", "끝!", answer);
      return answer;
    }
  }
}

const minus = minusTarget(target, answer, wrongBtnsMap);
// const plus = plusTarget(target, answer, wrongBtnsMap);
// console.log(wrongBtns, wrongBtnsMap);

// console.log(Math.min(minus, plus));
