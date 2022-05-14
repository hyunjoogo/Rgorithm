const n = "33";
const rules = ["3", "6", "9"];

/* 
3   1   1
6   1   1
9   1   3

33  1*3+1   4  => 위에 3번을 다 돌았다는 전제하에 도는거니까?
36  1*3+2   5
39  1*3+3   6

63  2*3+1   7 => 위에 2*3번을 돌았다는 전제하
66  2*3+2   8
69  2*3+3   9

93  3*3+1   10=> 위에 2*3번을 돌았다는 전제하
96  3*3+2   11
99  3*3+3   12

333 1*3^2 + 1*3 + 1 13
*/

// 1. 이렇게 생각하려면 어떻게 해야할까?
// 예시값들이 반복방식이 비슷하므로?
// 

function solution(n) {
  const user_input = n.split("");
  let answer = 0;
  let count = 1;
  const obj = { 3: 1, 6: 2, 9: 3 };

  while (user_input.length !== 0) {
    answer += obj[parseInt(user_input.pop(), 10)] * count;
    count *= 3;
  }
  return answer;
}

// 나의 풀이법

function sol(n) {
  let count = 0;
  for (let i = 1; i <= Number(n); i++) {
    if (checkRules(i)) {
      count++;
    }
  }
  return count;
}

function checkRules(n) {
  let result = true;
  for (let i of String(n)) {
    if (!rules.includes(i)) {
      result = false;
    }
  }

  return result;
}

console.log("count", sol(n));

// 1. 어떻게 솔루션을 떠올렸는가?
/*
보자마자 3,6,9 를 문자로 인식하는 구나 생각함
그리고 주어진 숫자를 한개 한개씩 따로 나누고 보게 됨
예를 들어 십의 자리 숫자가 1이라면 안되기때문에?

주어진 숫자를 판별하는 함수를 만들었음
문제는 지금까지 친 박수의 총 합을 구하는 문제여서

주어진 숫자까지 돌면서 룰에 맞으면 카운트를 업하는 방식으로 접근 */

// 2. 더 좋은 방법은 없을까?
/*
이 문제가 주어진 숫자가 룰에 적합한가를 묻는 문제라면 있을듯한데
주어진 숫자까지의 적합한 숫자의 갯수를 묻는 문제니까?
*/
