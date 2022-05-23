const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `3
  4 10 20 30 40
  3 7 5 12
  3 125 15 25`
).split("\n");
const t = +input[0];
input.shift();
const newInput = input.map((v) =>
  v
    .trim()
    .split(" ")
    .map((i) => +i)
);

// 최대공약수 구하는 함수
function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}
const answer = [];
newInput.forEach((list) => {
  list.shift();
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      result += gcd(list[i], list[j]);
    }
  }
  answer.push(result);
});
console.log(answer.join("\n"));

/* 
임의의 두 자연수 a, b가 주어졌을때. 둘중 큰 값이 a라고 하면
a를 b로 나눈 나머지를 n 이라고 하면 (a%b = n)
n이 0일때, b가 최대 공약수(GCD)

만약 n이 0이 아니라면, a에 b값을 다시 넣고 n를 b에 대입 한 후 다시 위에 step2부터 반복

6 4 
n= 2
4 2 
n= 0 그래서 2가 최대공약수

*/

// 1. 어떻게 그런 생각을?
// 최대공약수를 구하는 방식은 검색을 함
// 그래도 재귀함수 만드는 건 직접

// 나올 수 있는 조합을 만드는 이중for문도 직접해봄

// trim()을 안하면 백준에서 미스처리 나니까 조심할 수 있도록

// 2. 이것보다 더 좋은 방법은 없을까?
