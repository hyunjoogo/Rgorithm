const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const target = +input[0];
const N = +input[1];
let brokenButton = [];
if (N > 0) {
  brokenButton = input[2].split(" ").map((v) => +v);
}

function check(num, brokenButton) {
  while (true) {
    if (brokenButton.includes(num % 10)) {
      return false;
    } else {
      num = Math.floor(num / 10);
    }
    if (num === 0) {
      break;
    }
  }
  return true;
}
// 부숴진 버튼이 포함되어 있는 숫자인지 아닌지
// true가 나온 경우 내가 눌러서 갈 수 있는 숫자 인것.
function solution(brokenButton, target) {
  let min1 = Math.abs(target - 100); // 전부다 부숴져서 +나 -로만 가야하는 횟수
  let min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= 999999; i++) {
    if (check(i, brokenButton)) {
      // i가 내가 누를 수 있는 숫자라면
      let tmp = i.toString().length + Math.abs(target - i);
      // 그 숫자의 길이와 타겟과의 차이의 절댓값이 누른 버튼 횟수가 된다.
      if (tmp < min2) {
        min2 = tmp;
      } else if (tmp > min2) {
        break; // 더 돌 필요없으니 끝내주자
      }
    }
  }
  let answer = Math.min(min1, min2);
  return answer;
}

console.log(solution(brokenButton, target));
