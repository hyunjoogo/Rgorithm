const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
-1
-2
-3
-1
-2`
)
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = Number(input.shift());

let sum = 0;
const obj = {};


const list = input.map(value => {
  const v = Number(value);
  sum += v;
  if (!obj[v]) {
    obj[v] = 1;
  } else {
    obj[v] += 1;
  }

  return v;
});
list.sort((a, b) => a - b);
// 산술평균
if (Math.round(sum / n) === -0) {
  console.log(0);
} else {
  console.log(Math.round(sum / n));
}
// 중앙값
console.log(list[Math.floor(n / 2)]);

const hit = Math.max.apply(null, Object.values(obj));
const arr = [];
for (let numKey in obj) {
  if (obj[numKey] === hit) {
    arr.push(numKey);
  }
}

if (arr.length > 1) {
  arr.sort((a, b) => a - b);
  console.log(arr[1]);
} else {
  console.log(arr[0]);
}
// 범위

const range = list[list.length - 1] - list[0];
console.log(range);
