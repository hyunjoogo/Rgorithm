// 

// 이름과 포인트를 결합한 obj를 만든다.
// point만 정렬을 한다.

// 새로운 result에 정렬한 값을 차례차례 넣는다.
const name = "손오공 야모챠 메지터 비콜로".split(" ");
const point = "70 10 55 40".split(" ").map((value) => parseInt(value, 10));

const data = {};

for (let i in point) {
  data[point[i]] = name[i];
}

const sort = point.sort((a, b) => b - a);

const result = {};
let count = 1;
for (let i of point) {
  result[data[i]] = count;
  count++;
}
console.log(result);
