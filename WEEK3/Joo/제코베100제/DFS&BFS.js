// 깊이 우선 탐색 - DFS - stack!
const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

// 방문경로, stack
// while 스택의 길이가 0이 아니면 반복

// 스택에서 뺀 것을 방문경로에 넣기
// 이 밴것과 연결되어 있는 경로 stack에 넣기

function dfs(graph, start) {
  let 방문경로 = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop();
    if (!방문경로.includes(n)) {
      방문경로.push(n);
      let 연결된경로들 = graph[n].filter((x) => !방문경로.includes(x));
      for (let i of 연결된경로들) {
        stack.push(i);
      }
    }
  }
  return 방문경로;
}

console.log(dfs(graph, "E"));

// 너비 우선 탐색
function bfs(graph, start) {
  let 방문경로 = [];
  let queue = [start];

  while (queue.length !== 0) {
    let n = queue.shift();
    if (!방문경로.includes(n)) {
      방문경로.push(n);
      let 연결된경로들 = graph[n].filter((x) => !방문경로.includes(x));
      for (let i of 연결된경로들) {
        queue.push(i);
      }
    }
  }
  return 방문경로;
}

console.log(bfs(graph, "E"));
