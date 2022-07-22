const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 5 1
    1 2
    1 3
    1 4
    2 4
    3 4`
)
  .trim()
  .split("\n")
  .map((v) => v.trim());


// n => 정점, m => 간선
const [n, m, v] = input[0].split(" ").map((v) => +v);
let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(' '));
}
for (let [a, b] of arr) {
  graph[a][b] = 1;
  graph[b][a] = 1;
}
let visited = new Array(n + 1).fill(false);
let list = []

function DFS(node) {
  visited[node] = true;
  list.push(node);
  for (let i = 1; i < graph.length; i++) {
    if (graph[node][i] === 1 && visited[i] === false) {
      DFS(i);
    }
  }
}

DFS(v);
console.log(list);
