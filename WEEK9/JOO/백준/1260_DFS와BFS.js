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

const [n, m, v] = input[0].split(" ").map((v) => +v);
const graph = new Array(n + 1).fill(0, 0, n + 1);

for (let i = 0; i <= n + 1; i++) {
  graph[i] = new Array(n + 1).fill(0, 0, n + 1);
}

for (let i = 0; i < m; i++) {
  const [x, y] = input[i + 1].split(" ").map((v) => +v);
  graph[x][y] = 1;
  graph[y][x] = 1;
  console.log(graph);
}

// https://cider.tistory.com/4
// https://jaekwan.tistory.com/113
// https://ghost4551.tistory.com/25

function DFS(node) {
  let answer = "";
  let visited = new Array(n + 1).fill(false, 0, n + 1);
  let stack = [];

  stack.push(node);

  while (stack.length > 0) {
    let current = stack.pop();

    // 방문하지 않았던 노드라면?
    if (!visited[current]) {
      // 방문한것으로 바꾸어주고
      visited[current] = true;
      // 답에 방문한 노드를 넣어준다.
      answer += current + " ";

      for (let next = n; next >= 1; next--) {
        // 조건1 방문하지 않은 노드이고
        // 조건2 최근방문한 점과 연결된 점이 있다면 (1)
        if (!visited[next] && graph[current][next]) {
          console.log(current, next);
          console.log(visited, graph[current][next]);
          // 방문할 stack에 넣어라.
          stack.push(next);
        }
      }
    }
  }
  console.log(answer);
}

DFS(v);
