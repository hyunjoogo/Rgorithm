const field = [
  [2, 2, 2, 2, 2, 2],
  [2, 1, 2, 0, 0, 2],
  [2, 0, 2, 0, 2, 2],
  [2, 0, 0, 0, 2, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2],
];
const 움직임 = [2, 2, 2, 4, 4, 4];

let x = 1;
let y = 1;
function solution(move) {
  // 2 => 아래로
  // 현재 위치 [1][1]
  for (let i of move) {
    field[x][y] = 0;
    if (i === 2) {
      down();
    } else if (i === 4) {
      right();
    }
  }
  return [x, y];
}

function down() {
  field[x][y + 1] = 1;
  y++;
}
function right() {
  field[x + 1][y] = 1;
  x++;
}
console.log(solution(움직임));
console.log(field);
