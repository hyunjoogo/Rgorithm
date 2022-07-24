const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
5
2
3
4
1`
)
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = Number(input.shift());
const results = [];
input.forEach(value => results.push(Number(value)));
results.sort((a, b) => b - a);

