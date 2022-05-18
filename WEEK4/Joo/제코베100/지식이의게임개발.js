// -움직일 수 있는 공간(0)
// -캐릭터(1)
// -벽(2)

const m = 4; // 번째
const n = 5; // 줄
const 캐릭터위치 = [0, 0];
const 장애물 = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3],
];

// 벽을 둘러야 한다. 0번째는 다 벽 , m + 2번째도 벽
// 0번째 줄도 벽
// n+1번째도 벽
const field = [];
for (let i = 0; i < n + 2; i++) {
  const x = [];
  for (let j = 0; j < m + 2; j++) {
    // 0번째 i || 6번째 i는 2
    if (i === 0 || i === n + 1) {
      x.push(2);
    } else if (j === 0 || j === m + 1) {
      x.push(2);
    } else if (i === 캐릭터위치[0] + 1 && j === 캐릭터위치[1] + 1) {
      x.push(1);
    } else {
      x.push(0);
    }
  }
  field.push(x);
}
장애물.forEach((value) => {
  field[value[0] + 1][value[1] + 1] = 2;
});
console.log(field);
