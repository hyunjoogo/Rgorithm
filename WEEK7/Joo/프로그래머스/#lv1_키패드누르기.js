// https://programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

function checkHand(num, left, right, hand) {
  // 엄지손가락의 현재 위치를 파악하기 위해 딕셔너리로 키패드 생성

  /* 이런 모양이다.
  {
    1 : [0,0], 2 : [0,1], 3 : [0,2],
    4 : [1,0], 5 : [1,1], 6 : [1,2],
    7 : [2,0], 8 : [2,1], 9 : [2,2],
   '*' : [3,0], 0 : [3,1], '#' : [3,2],
 }
*/
  const pad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  // # (x1, y2), (x2, y2)의 좌표간 거리는 |x1 - x2| + |y1 - y2|
  // num은 대상 숫자 (키패드 값)
  // left는 왼손의 현재 위치 (키패드 값) / right는 오른손의 현재 위치 (키패드 값)
  // 대상 숫자와 왼손위치의 거리 =>
  // (대상 숫자의 x에서 왼손의 위치 x를 뺀 절대값 ) + (대상 숫자의 y에서 왼손의 위치 y를 뺀 절대값 )
  // 대상 숫자와 오른손위치의 거리 =>
  // (대상 숫자의 x에서 오른손의 위치 x를 뺀 절대값 ) + (대상 숫자의 y에서 오른손의 위치 y를 뺀 절대값 )
  const dist_left =
    Math.abs(pad[num][0] - pad[left][0]) + Math.abs(pad[num][1] - pad[left][1]);
  const dist_right =
    Math.abs(pad[num][0] - pad[right][0]) +
    Math.abs(pad[num][1] - pad[right][1]);

  console.log(dist_left, dist_right);

  // 두 값을 비교해보고
  if (dist_left < dist_right) {
    // 오른손이 더 멀다
    return "L";
  } else if (dist_left > dist_right) {
    // 왼손이 더 멀다
    return "R";
  } else {
    // 같으면 주 손(hand)와 비교해본다.
    if (hand === "right") {
      return "R";
    } else {
      return "L";
    }
  }
}

function solution(numbers, hand) {
  let result = "";

  let left = "*";
  let right = "#";

  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7) {
      result += "L";
      left = num;
    } else if (num === 3 || num === 6 || num === 9) {
      result += "R";
      right = num;
    } else {
      const mid = checkHand(num, left, right, hand);
      console.log(mid);
      result += mid;
      if (mid === "R") {
        right = num;
      } else {
        left = num;
      }
    }
  });
  return result;
}


// 키패드를 좌표화 시키고 손을 위치화 시키는 문제
// 키패드의 키를 key로 갖고 왼손, 오른손, 아무손도 없는 키패드의 값을 각각 -1, 1, 0로 하여 value로 하는 방식으로 생각했다.
// 그리고 누른 키의 값을 손에 따라 값을 변경하는 방식
// 왼손이 누를지 오른손이 누를지 판단하는건 value를 왼쪽 오른쪽 키패드와 비교해서 
// 문제에서 위 아래까지도 비교하는 바람에..... 실패....

// 오브젝트의 key를 키패드의 숫자, value를 2차원배열의 위치로 나타내고
// 왼손, 오른손의 위치를 left = 키패드 값, right = 키패드 값으로 지정하고
// 현재 대상 키패드와 양손의 위치를 비교할 때 오브젝트에 key만 넣으면 알아서 2차원배열이 딸려오는 형식으로 하는 게 인상적이었다.



// 나중에 왼손이 움직인 횟수랑 오른손이 움직인 횟수를 구하는 문제도 재밌겠다.
