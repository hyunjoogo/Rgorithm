const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
8
3 2 7 8 1 4 5 6
5
1 2 3 4 5`
)
  .trim()
  .split("\n");

let testNum = +input.shift();

while (testNum--) {
  let size = +input.shift();
  let list = input.shift().split(' ').map(v => +v);
  // 8
  // [ 3, 2, 7, 8, 1, 4, 5, 6]

  const graph = {};
  for (let i = 0; i < size; i++) {
    if (!graph[i + 1]) graph[i + 1] = [];
    graph[i + 1] = list[i];
  }

  function search(start) {
    function cycle(value) {
      if (graph[value] === start) return delete graph[value];
      let temp = graph[value];
      delete graph[value];
      cycle(temp);
    }

    cycle(start);
  }

  let count = 0;
  for (let i = 1; i <= size; i++) {
    if (Object.keys(graph).length === 0) break;
    if (!graph[i]) continue;
    search(graph[i]);
    count++;
  }
  console.log(count);
}
