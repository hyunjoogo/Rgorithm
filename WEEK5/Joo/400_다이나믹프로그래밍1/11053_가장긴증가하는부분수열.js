const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
    10 20 10 30 20 50`
)
  .trim()
  .split("\n");
const n = Number(input[0]);
const array = input[1]
  .trim()
  .split(" ")
  .map((v) => +v);

let list = [];
for (let i = 0; i < array.length; i++) {
  list[i] = 1;
  for (let j = 0; j < i; j++) {
    if (array[j] < array[i]) {
      list[i] = Math.max(list[i], list[j] + 1);
    }
  }
}

console.log(Math.max(...list));
