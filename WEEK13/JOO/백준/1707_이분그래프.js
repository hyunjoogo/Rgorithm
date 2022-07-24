const fs = require("fs");
let [input, ...inputs] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2
`
)
  .trim()
  .split("\n");

let K = +input;
inputs = inputs
  .map((v) => v.split(" ").map(Number))
  .reverse();

while (K--) {
  let [V, E] = inputs.pop();
  let graph = Array.from({length: V + 1}, () => []);
  let visited = Array.from({length: V + 1}, () => 0);
  let cnt = E;

  while (cnt--) {
    const [a, b] = inputs.pop();
    graph[a].push(b);
    graph[b].push(a);
  }
  const dfs = (start, graph, visited) => {
    visited[start] = SET_A;
    const stack = [start];
    while (stack.length) {
      const node = stack.pop();
      const curSet = visited[node];
      const nextSet = curSet === SET_A ? SET_B : SET_A;
      if (!graph[node]) {
        continue;
      }
      for (let i = 0; i < graph[node].length; i++) {
        const adjNode = graph[node][i];
        if (visited[adjNode] === curSet) {
          return false;
        }
        if (!visited[adjNode]) {
          visited[adjNode] = nextSet;
          stack.push(adjNode);
        }
      }
    }
    return true;
  };



  for (let i = 1; i <= V; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      BFS(i);
    }
  }
  console.log(visited);

}
