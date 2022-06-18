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
  let find = false
  const nCountOne = countOne(n.toString(2))
  let counter = 1
  while(!find){
      if(nCountOne === countOne((n+counter).toString(2))){
          answer = n + counter
          find = true
      }
      counter++
  }
  return answer;
}
const countOne = (str) =>{
  return str.split('').reduce((sum, currentChar) =>
      currentChar === '1' ? sum += 1 : sum, 0)
}

//
