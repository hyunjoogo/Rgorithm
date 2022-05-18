/*
1 => 1이 1개         => 1 / 1의 갯수
11 => 1이 2개       => 1 / 1의 갯수
12 => 1이 1개 2가 1개 => 1 / 1의 갯수 / 2 / 2의 갯수
1121=> 1이 3개 2가 1개
1321 => 1이 2개 2가 1개 3이 1개
122131 => 1이 3개 2가 2 3이 1개
132231 = > 1이 2개 2가 2 3 2개

*/

const value = "11";
const array = ["1", "2"];
// 1의 갯수를 세자

function solution(n) {
  let answer = "1";
  if (n === 1) {
    return 1;
  }

  //
  for (let i = 1; i < n; i++) {
    // i => 1, n =>2
    console.log("solution", i);
    answer = rule(answer);
  }

  return answer;
}

function rule(answer) {
  let answerMax = 9;
  let result = "";
  // answer에서 1~9까지 숫자카운팅하기
  for (let i = 1; i < answerMax; i++) {
    const regExp = new RegExp(i, "g");

    console.log(answer.match(regExp));
    let count = (answer.match(regExp) || []).length;
    // 1이 몇개가 있는지 없다면 0으로 카운터

    if (count >= 1) {
      result = result + String(i) + String(count);
    }
  }
  return result;
}

console.log(solution(6));
