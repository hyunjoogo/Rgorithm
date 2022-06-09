// https://www.acmicpc.net/problem/1764
// https://velog.io/@whzjqkrtm12/%EB%B0%B1%EC%A4%80%EC%97%90%EC%84%9C-nodeJS-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-04-%ED%95%B4%EC%89%AC%EB%A7%B5-Map-Object-Set-18870%EB%B2%88-123123
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 4
    ohhenrie
    charlie
    baesangwook
    obama
    baesangwook
    ohhenrie
    clinton`
)
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const listenList = input.splice(0, n);
const seeList = input;
const listen = new Set(listenList);
const see = new Set(seeList);

const result = new Set([...listen].filter((v) => see.has(v)));
console.log([result.size, ...result].sort().join('\n'));
