const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const target = input[0];
const bannedBtn = input[2].split(" ").map((item) => +item);
let cnt = 0;

// + - 버튼만 눌러서 정답에 도달
cnt = Math.abs(Number(target) - 100);

console.log(cnt);
