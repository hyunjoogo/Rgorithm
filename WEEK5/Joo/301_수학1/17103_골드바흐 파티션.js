// https://www.acmicpc.net/problem/17103

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `5
    6
    8
    10
    12
    100`
)
  .split("\n")
  .map(Number);
const nums = input.splice(1);

const answer = [];
let prime = new Array(1000001).fill(true);
prime[0] = false;
prime[1] = false;

const prime_sqrt = Math.floor(Math.sqrt(1000001));

for (let i = 2; i < prime_sqrt; i++) {
  if (!prime[i]) continue;
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    for (let k = i + i; k <= 1000001; k += i) {
      prime[k] = false;
    }
  }
}
// 인덱스는 숫자, prime[인덱스]는 소수 여부
nums.forEach((v) => {
  let cnt = 0;
  // 절반하는 이유
  // 2,5 와 5,2는 하나만 카운트
  const length = Math.floor(v / 2);

  for (let i = 2; i <= length; i++) {
    if (v === 8) console.log({ i, vi: v - i, length });

    // 입력값(v) 조합을 찾기 위해 가장 작은 소수(i) 대입하고 입력값 - 소수가 소수인지만 판별
    // 그래서 i는 2부터 시작, v-i 만 판별

    // 입력값 8
    //  2 , 6  => X / 3 , 5  => O / 4,4 => X
    // 5, 3하는 것을 막기위해 length를 입력값의 반만
    if (prime[i] && prime[v - i]) {
      cnt++;
    }
  }
  answer.push(cnt);
});
console.log(answer.join("\n"));
