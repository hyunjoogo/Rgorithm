const fs = require("fs");
const [input, ...inputs] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6 5
1 2
2 5
5 1
3 4
4 6`
)
  .trim()
  .split("\n");


const [n, m] = input.split(" ").map(v => +v);

const graph = [];
const visited = new Array(n + 1).fill(false);
let count = 0;

for (let i = 1; i <= n; i++) graph[i] = [];

for (let i = 0; i < inputs.length; i++) {
  let [a, b] = inputs[i].split(' ').map(v => +v);
  graph[a].push(b);
  graph[b].push(a);
}
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}


function dfs(v) {
  if (visited[v] === true) return;
  visited[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    if (!visited[v][i]) {
      dfs(graph[v][i]);
    }
  }
}

console.log(count);

// 강의에서 들은 내용으로 하려니까 계속 틀려서
// graph 를 이중배열로 만들고
// visited도 배열로 만들었다.
// 그리고 dfs도 전체를 순회하게 했더니 된다.

