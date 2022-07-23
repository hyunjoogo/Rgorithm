const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 5 3
5 4
5 2
1 2
3 4
3 1`
)
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m, v] = input.shift().split(" ").map(v => +v);
const edges = input.map(v => v.split(" ").map(Number));
const graph = {}
edges.forEach(([from, to]) => {
  if (!graph[from]) graph[from] = [];
  if (!graph[to]) graph[to] = [];
  graph[from].push(to);
  graph[to].push(from);
})


function DFS(start) {
  const stack = [start];
  const results = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (stack.length) {
    currentVertex = stack.pop();
    results.push(currentVertex);
    graph[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return results;
  // const results = [];
  // const visited = {};
  //
  // function dfs(vertex) {
  //   if (!vertex) return null;
  //   visited[vertex] = true;
  //   results.push(vertex);
  //
  //   graph[vertex].forEach(neighbor => {
  //     if (!visited[neighbor]) {
  //       dfs(neighbor);
  //     }
  //   });
  // }
  //
  // dfs(start);
  // return results;

}

function BFS(start) {
  const queue = [start];
  const results = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (queue.length) {
    currentVertex = queue.shift();
    results.push(currentVertex);
    graph[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return results;
}

Object.keys(graph).forEach(v => graph[v].sort((a,b)=> b-a))
console.log(DFS(v).join(" "));
Object.keys(graph).forEach(v => graph[v].sort((a,b)=> b-a))
console.log(BFS(v).join(" "));
