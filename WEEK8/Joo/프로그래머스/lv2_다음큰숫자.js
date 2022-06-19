function solution(n) {
  var answer = 0;
  const a = n
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;
  console.log(a);
  let number = n;

  let flag = true;
  while (flag) {
    number += 1;
    if (a === find1(number)) {
      flag = false;
    }
  }
  return number;
}

function find1(n) {
  return n
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;
}

// n보다 큰 숫자 m
// 2진수로 변환했을 대 1의 갯수는 같다

// 10진법 숫자는 2진법으로 바꾸고 나서
// 1의 갯수가 같은지 확인

// 효율성을 통과못함

function solution(n) {
  var answer = 0;
  const nCountOne = count1(n.toString(2));
  let counter = 1;

  let flag = false;
  while (!flag) {
    if (nCountOne === find1((n + counter).toString(2))) {
      answer = n + counter;
      flag = true;
    }
    counter++;
  }
  return answer;
}
function count1(str) {
  return str
    .split("")
    .reduce((sum, currentChar) => (currentChar === "1" ? (sum += 1) : sum), 0);
}

// 1. n을 직접 건드리지 않았다.
// - counter라는 변수를 만들어서 n은 보존하고 counter만 올리도록 함
// 2. 1의 갯수를 찾는 함수
// - 난 reduce를 사용함
// 3. while문의 로직
// - 내부 로직을 돌기전에 조건에 만족하면 종료가 되고
// - 만족하지 못하면 counter++를 해주는 형식으로 함
