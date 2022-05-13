// 두 정점이 입력되면 두 정점 사이를 이동할 수 있는 최단거리를 출력

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const user_input = ["A", "F"];

const start = user_input[0];
const end = user_input[1];

function solution() {
  let count = -1; // 어느 넓이에 있느냐?
  // start가 들어오면 +1을 해서 0으로 시작할 수 있도록 -1로 세팅

  const visited = [start];
  const queue = [start];

  while (queue.length !== 0) {
    count += 1;

    let size = queue.length; // 전체 길이 저장

    // 큐에서 맨 앞 노드를 방문경로로 넣기
    for (let i = 0; i < size; i++) {
      // 큐의 맨 앞 노드 가지고 오기
      let node = queue.splice(0, 1);

      // 그 노드가 끝지점이라면 종료!
      if (node === end) {
        return count;
      }

      // 주어진 자료에서 본인과 연결된 노드들을 큐에 넣는다.
      for (let next_node in graph[node]) {
        // 단, 방문경로에 그 노드들이 없을때만
        console.log("n", next_node);
        if (!visited.includes(graph[node][next_node])) {
          visited.push(graph[node][next_node]);
          //  이걸 한꺼번에 왜 넣을까?
          // 너비 우선 탐색에서는 한개씩 넣어잖아?

          queue.push(graph[node][next_node]);
        }
      }
    }
  }
  return count;
}

console.log(solution());
/* 
1. 그래프의 지도를 보자
2. 너비 우선 탐색으로 진행 => queue로 진행






*/
