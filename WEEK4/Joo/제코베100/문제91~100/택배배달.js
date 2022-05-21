const 배달원 = 3;
const 배달시간 = [1, 2, 1, 3, 3, 3];

/*
a b c
1 2 1 => 상차
------ 1시간 경과
0 1 0

a b c 
3 1 3 => 상차
----- 2시간 경과
2 0 2

a b c
2 3 2 => 상차 (택배 끝)
----- 3시간 경과
1 2 1 

a b c
1 2 1
----- 4시간 경과
0 1 0

a b c 
0 1 0
----- 5시간 경과
0 0 0

*/

// 상차
// getItem(array);

// 시간 경과
// spentTime(array); // 1시간

// array = 남은 택배 잔여거리
// 상차 함수
// 어레이 중 0 이 있으면 배달시간의 앞 요소를 빼서 넣어준다.
// 만약 배달시간이 비어 있으면 넣어주지 않는다.

// 어레이의 요소들이 0 아니면 -1

// array의 모든 요소가 0이 되었을 때 종료

function solution(배달원, 배달시간) {
  const array = Array(배달원).fill(0);
  let count = 0;

  getItem(array);
  // array의 모든 요소가 0일때 까지
  // getItem => spentTime
  while (!array.every((value) => value === 0)) {
    getItem(array);
    spentTime(array);
    count++;
    console.log(array, "모든택배 상차?", 배달시간.length === 0);
  }

  return count;
}

function getItem(array) {
  if (배달시간.length === 0) {
    return;
  }
  for (let i in array) {
    if (array[i] === 0) {
      array[i] = 배달시간.shift();
    }
  }
}
function spentTime(array) {
  for (let i in array) {
    if (array[i] !== 0) {
      array[i] = array[i] - 1;
    }
  }
}

// console.log(solution(배달원, 배달시간));

// ------ 다른 사람 코드
// 모든 택배가 상차되었을 경우 종료

function sol(n, list) {
  let answer = 0;
  let man = Array(n).fill(0);

  while (list.length !== 0) {
    for (let j = 0; j < man.length; j++) {
      if (man[j] === 0) {
        man[j] = list.shift();
      }
    }
    man = man.map((x) => (x = x - 1));
    console.log(man);
    answer++;
  }
  answer += Math.max.apply(null, man);
  return answer;
}
console.log(sol(배달원, 배달시간));

// 1. 이 문제를 보고 어떻게 이 솔루션을 떠올렸지?
// 문제 해석이 어려웠지만 스텝 바이 스텝해보니까 어느정도 정리가 되었다.
// 상차를 할 때 현재 배달원들이 0이라면 아이템 리스트에서 하나씩 빼주면 되었다.
//    - 아이템리스트가 없으면 더이상 넣지 않는다.
// 1시간씩 흐를 때 배달원들의 리스트에서 -1씩 해주고 
//    - 0보다 작을 때는 아누것도 하지 않는다.

// 배달원들의 리스트의 모든 값이 0일 때까지 
// 상차 => 시간지나기 를 반복

// 2. 이것보다 더 좋은 방법은 없을까?
// 배달원의 리스트의 값을 조건으로 거는 것보다 list의 길이를 조건으로 거는 것이 더 좋아보였다.


// list의 길이가 0이면되면 while문은 종료
// 배달원들의 남은 시간은 최대값이 0이 되면 다 돌린 것이기 때문에
// 최대값만 구해서 시간에 추가하면된다.