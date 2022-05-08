const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(input);

const result = input.reduce((a, b) => (a > b ? a : b));
console.log(result);

const result2 = input.sort((a, b) => b - a);
console.log(result2[0]);
