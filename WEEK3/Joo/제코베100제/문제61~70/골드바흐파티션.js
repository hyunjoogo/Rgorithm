// 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다
// 하나의 소수를 두번 사용하는 것을 허용

const 소수리스트 = [];
let val = 100;
let isPrime = true;
const 골드바흐파티션 = [];
for (let i = 2; i < val; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    소수리스트.push(i);
  }

  isPrime = true;
}

for (let n of 소수리스트) {
  if (소수리스트.includes(val - n) && n <= val - n) {
    골드바흐파티션.push([n, val - n]);
  }
}

console.log(골드바흐파티션);
