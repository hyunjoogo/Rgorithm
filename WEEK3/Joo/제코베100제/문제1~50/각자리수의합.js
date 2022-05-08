const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

solution1(input);

function solution(n) {
  const array = n.split("");
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += Number(array[i]);
  }

  console.log(result);
}

// 다른 방식
// 10으로 나눈 나머지 384 => 4
// 10으로 나눈 값을 버림으로 마지막자리 없애기
// while로 반복
function solution1(n) {
  let num = n;
  let sum = 0;
  while (num) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
    console.log(num);
  }
  console.log(sum);
}
