function solution(n, t, m, p) {
  let str = "";
  for (let i = 0; i <= t * m; i++) {
    str += i.toString(n);
    if (str.length > t * m) {
      str = str.substring(0, t * m);
      break;
    }
  }
  let result = "";
  for (let i = 1; i <= str.length; i++) {
    if (i % m === p) {
      result += str[i - 1];
    } else if (i % m === 0 && m === p) {
      result += str[i - 1];
    }
  }
  result.length = t * m;
  return result.toUpperCase();
}

// 진법 n, 
// 미리 구할 숫자의 갯수 t, => 몇번 대답하는지?
// 게임에 참가하는 인원 m, 
// 튜브의 순서 p 


// t에 대한 개념을 이해하는데 오래걸렸다.

// 0~?까지 숫자를 n진법으로 변환하면 str에 할당한다.
// 그리고 순서에 맞게 문자열을 출력하면 된다.

// 먼저 십진법 0부터 ?까지 구하는 것이 문제였다.
// t가 계산해야 할 숫자가 아니라 본인이 몇번 대답하는지에 대한 숫자이다.
// 0부터 t * m까지 (10이하의 숫자를 대비)
// n진법으로 변환하여 str로 쭉 나열하는 방식으로 변환을 하였다.
// str의 길이가 t*m보다 크면 for문을 중간에 종료하고
// 필요없는 길이 (t*m 이상)는 잘라내었다.

// 왜 t*m이냐면 
// 5번을 말하는데 총인원수가 4명이라면 
// 20개만 계산하여 마지막 순서일 경우를 대비하면 된다.

// 구한 str을 순서에 맞게 출력하면 된다.
// for문을 도는데 몇번째를 구연하기 위해 i를 1부터 시작하고
// str의 해당 번째를 총 인원수로 나눈 나머지가 본인 순서일 때가 본인의 차례이다.
// 다만 마지막 번째 (m === p) 일 때는 나머지가 0이므로 따로 처리를 해줘야한다.



const test1 = [2, 4, 2, 1];
const test2 = [16, 16, 2, 1];
const test3 = [16, 16, 2, 2];
const [n, t, m, p] = test3;
solution(n, t, m, p);