const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
8
3 2 7 8 1 4 5 6
10
2 1 3 4 5 6 7 9 10 8`
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


    // graph idx
    // 1 => 3 => 7 => 5
    // value
    // 3 => 7 => 5 => 1
    // 1로 가니까 undefined
    // 순열사이클 하나 종료

    function search(start) {
      function cycle(value) {
        if (graph[value] === start) return delete graph[value];
        let temp = graph[value]
        delete graph[value];
        cycle(temp)
      }
      cycle(start)
    }

    let count = 0;
    for (let i = 1; i < size; i++) {
      if (Object.keys(graph).length === 0) break;
      if (!graph[i]) continue;
      search(graph[i]);
      count++;
    }
    console.log(count);

    // 2로 가자
    // idx
    // 2
    // value
    // 2
    // 2로 가니까 undefined
    // 순열사이클 하나 종료

    // 3 undefined
    // 4



}
