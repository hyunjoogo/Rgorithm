const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};
const w = nationWidth["korea"];
delete nationWidth["korea"];

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

console.log(entry);

// 비교할 값 저장 (최대값)
let gap = Math.max.apply(null, values);
console.log(gap);

let item = [];
for (let i in entry) {
  console.log(gap, Math.abs(entry[i][1] - w));
  // 최소값을 찾는 로직 (최대값)
  if (gap > Math.abs(entry[i][1] - w)) {
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}
console.log(item[0], item[1] - w);
