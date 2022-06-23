// https://gobae.tistory.com/31

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 4
    0 1
    1 2
    2 3
    3 4`
)
  .trim()
  .split("\n")
  .map((v) => v.trim());
console.log(input);

const [n, m] = input[0].split(" ").map((v) => +v); // n = 점의 갯수, m = 간선의 갯수
input.shift();
// const graph = new Array(n).fill(0);
const graph = Array.from({ length: n }, () => new Array(n).fill(0)); // 점의 갯수만큼 n * n 배열을 만든다.

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map((v) => +v);
  console.log(x, y);
  graph[x][y] = 1;
  graph[y][x] = 1;
}

console.log(graph);
