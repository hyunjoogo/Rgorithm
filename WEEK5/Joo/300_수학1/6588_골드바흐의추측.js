// https://www.acmicpc.net/problem/6588

// 1. 나는 어떤 생각을 하다가 막혔는지?
// 이 문제는 정답은 나왔지만 시간 초과가 떴다.
// 입력받은 값들을 돌면서 소수리스트를 만드는 방식이었는데
// 먼저 소수리스트를 만드는 방식이 더 빠르다고 한다.
// ---- 소수리스트 만드는 방식 ----
// 전체범위 크기의 true로 이루어진 배열을 만들고
// 하나씩 돌면서 다른 수와 나누어 떨어지면 false
// 소수이면 배수 인덱스도 false
// 이렇게 다 돌고 나면 true인 값들만 index를 붙여서 새로운 배열을 만든다.

// 그리고 나서 입력받은 값들을 돌면서 결과를 result에 문자열 추가하는 방식
// 나는 입력값 - 처음소수의 값이 소수인지를 확인하는 로직으로 갔지만
// 이렇게 되면 소수인지 확인하는 로직을 한 번 타야한다.

// ---- 같은 배열끼리 값 비교하기 ----
// 이중 for문을 돌게 되면 어차피 두번째 값이 소수로 들어오게 될 것이고
// 만약 둘의 합이 입력값보다 커지면 안쪽 for문을 break해서
// 바깥 for문을 다음 단계로 넘어가게 하는 방식이었다.
// 만약 둘의 합이 입력값이면 결과를 result에 추가하고
// 다음 단계로 진행된다면 위에 합이 더 커지므로 안쪽 for문은 break가 된다.
// 단, 구분자를 만들어서 바깥 for문이 다음단계로
// 넘어가기 전에 바깥 for문을 break 시킨다.
//    - 한개의 배열의 값을 비교할 때 사용하기 좋은 방법같다.
//    - 인덱스 0 와 인덱스 0,1,2,3... 이렇게 돌 수가 있다.

//  2. 다음에는 어떻게 풀 수 있을까?
// 소수에 대한 이해는 잘 되었고
// 다만 시간초과가 떴을 때 왜 떴는지에 대해 알 수가 없었다.
// 그리고 중간에 입력초과도 떴는데 input을 받아올 때 split() 하기 전에
// trim()를 해야 에러가 나지 않았다.
// 차근차근 생각하고 풀면 괜찮을 문제이다.

const input = require("fs")
  .readFileSync("./input.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((value) => parseInt(value, 10));
input.pop();

// 입력값 / 2 > a   ==>  이 이상 커져봤자 b-a가 안됨
// 입력값 - a = b

// 만약 b 가 홀수 소수가 아니면 a를 다음 홀수 소수로 변경
// 다시 b 구하기
// 반복

// ------------- My Code ---------------
function isPrime(num) {
  // sqrt는 루트(제곱근) 루트1 => 1 ... 루트4 => 2 ... 루트9 => 3 ...
  // ... 사이에 루트?의 값은 떨어지는 루트4,9... 사이의 값이 나온다.
  // 그래서 floor(버림)으로 정수값으로 변환한다.
  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(number) {
  const primeList = []; // 입력값의 절반 중 홀수 소수만
  let a = 0;
  let b = 0;

  for (let i = 3; i <= number / 2; i = i + 2) {
    if (isPrime(i)) {
      primeList.push(i);
    }
  }

  for (let i of primeList) {
    let result = number - i;
    if (isPrime(result)) {
      a = i;
      b = result;
      break;
    }
  }

  if (a === 0 && b === 0) {
    return console.log(`Goldbach's conjecture is wrong.`);
  } else {
    return console.log(`${number} = ${a} + ${b}`);
  }
}
// 시간초과! 실패!

// ------------- Good Code -----------------

let answer = [];
// 1. 전체에서 사용할 소수만 있는 숫자 array 만들기
// 1.1 먼저 범위내의 숫자의 소수 여부를 boolean값으로 리스트 만들기
let prime = new Array(1000001).fill(true);

prime[0] = false;
prime[1] = false;
// 0 ~ 1000000 사이에 소수면 true
for (let i = 2; i < Math.ceil(Math.sqrt(1000001)); i++) {
  let flag = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = false;
      break;
    }
  }

  // i가 소수라면 (flag가 true) i의 배수는 primeList[i의배수]는 false로 변경
  if (flag) {
    for (let k = i + i; k <= 1000000; k += i) {
      prime[k] = false;
    }
  }
}
prime[2] = false;
// 1.2 1.1의 array 중 true인 값만 array로 빼기 (이러면 소수만 있는 array가 나온다.)
const prime_list = [];
prime.forEach((v, i) => {
  if (v) {
    prime_list.push(i);
  }
});

// 2. input값을 돌아다니면서 정답 출력

input.forEach((v) => {
  for (let i = 0; i < prime_list.length; i++) {
    if (prime_list[i] > v) {
      // why?
      answer.push(`Goldbach's conjecture is wrong.`);
    }
    let possible = false;
    // 2.2 3과 다음소수를 차례로 대입해보기
    for (let j = 0; j < prime_list.length; j++) {
      // 2.3 다음소수와의 합이 입력값을 넘어가면 for문 종료
      //      - 즉, 3 + 소수리스트 조합들로 표현불가해서 3을 5로 바꾸기 위해 for문 종료
      if (prime_list[i] + prime_list[j] > v) {
        break;
      }
      // 2.4 3과 다음소수의 합이 입력값이면 정답리스트에 push
      if (prime_list[i] + prime_list[j] == v) {
        answer.push(`${v} = ${prime_list[i]} + ${prime_list[j]}`);
        possible = true;
      }
    }
    if (possible) {
      break;
    }
  }
});

console.log(answer.join("\n"));
