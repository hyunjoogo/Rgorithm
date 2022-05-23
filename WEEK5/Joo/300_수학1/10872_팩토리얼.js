const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(number) {
  if (number === 0) {
    return 1;
  }
  if (number === 1) {
    return number;
  }

  return number * solution(number - 1);
}

console.log(solution(Number(input)));

// 1. 어떻게 이런 솔루션을?!
// 재귀함수를 직접 써본것은 처음이다 (마지막에 살짝 검색한건 안비밀)
// 마지막에 종료 조건을 걸어야하는 것을 잊지말자
