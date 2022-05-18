/*
1,1,3,2,5 => 먹어야하는 순서(index)는 0, 1 , 3, '2', 4
3 // index = 3-1 = 2


*/
// 가장 낮은 초밥 찾기 (가장 낮은 초밥이면 먹기)
// 먹고 원하는 초밥위치인지 확인?

// 이동수 = 0
// 도착한 초밥보다 낮은 점수의 초밥이 있으면 초밥을 먹지 않음

// 먹지 못하면 초밥은 이동하고 (현재 이동수 +1)
// 초밥이 현재 남은 초밥 중 가장 낮은 점수라면 초밥을 먹는다. (remove)

const point = [5, 2, 3, 1, 2, 5];
const dish = 1;

function sol(point, dish) {
  let answer = 0;
  dish -= 1;

  const 정렬리스트 = [...point].sort((a, b) => a - b);
  console.log("시작", point, 정렬리스트);

  while (true) {
    console.log(point, 정렬리스트, `dish:${dish}`);
    // dish를 마이너스 하는 이유는? dish는 초밥의 위치를 가르키니까 (그래서 처음에 -1도 하는거고)
    let p = point.shift(); // point의 첫번째 값
    // 가장 낮은 초밥이면
    if (정렬리스트[0] === p) {
      // 내가 원하는 접시인가?
      if (dish === 0) {
        break;
      }
      // 그렇지 않은 접시인지?
      dish -= 1;
      정렬리스트.shift(); // 현 접시를 먹었기 때문에 정렬리스트에서도 빼야한다.
    }
    // 가장 낮은 초밥이 아니면
    else {
      point.push(p); // 초밥 돌리기
      if (dish === 0) {
        console.log("디쉬가 돌아요", dish, point.length - 1);
        dish = point.length - 1; // 초밥의 위치가 맨 뒤로 움직이니까 뒤로 보내주는 것
      } else {
        dish -= 1;
      }
    }
    answer += 1;
    // break;
  }

  return answer;
}

console.log(sol(point, dish));

// 1. 나는 어디서 막혔는가?
// 내가 푸는 방향이 달랐음
// 나는 level를 올리고 내 앞의 접시와 level이 같다면 종료하는 형식으로 갔지만
// 풀이는 낮은 초밥을 찾으면서 원하는 초밥위치도 같이 돌리는 형식으로 갔다.
// 원하는 초밥의 위치를 index로 생각하고 음수가 되면 length-1로 바꾸어서 맨 뒤로 보냈다.

// 원본을 돌리면서 정렬된 복사본의 0번째 인덱스이면 (즉, 가장 낮은 초밥이면)

// 원본의 가장 앞에 있는 초밥을 뺀다.
// 이 초밥이 복사복의 첫번째 초밥과 같으면
// - 내가 원하는 초밥이면 그대로 종료
// - 내가 원하는 초밥이 아니면
//      - 복사복에서도 빼기
//      - 원하는 초밥 위치 -1
// 이 초밥이 복사복의 첫번째 초밥과 아니면
// 초밥 돌리기
// - 초밥의 위치가 첫번째이면 맨 뒤로 보내주기
// - 아니면 원하는 초밥 위치 -1

//

// --------------- 내 코드  : 실패 -----------
// 중복일 때 무한 반복 돌음

// 함수 : canIEat
// level = 접시레벨 and level +1 = 접시레벨 이면 먹음
// *** 입력 접시와 맞는지 확인하기
// return true
// 접시와 맞지 않으면
// level +1
// level+1  < 접시레벨 이면 못 먹음
// 함수종료

// 0. 사용자입력 인덱스의 dish값 기억하기

// 1. 0번째 index에 캔아이잇 해보기

// 2. point를 돌리자. (다음접시)
// unshift 해서 push하기
// count++

// 1번 반복

// *** 입력 접시와 맞는지 확인하기

function solution(point, dish) {
  const dishValue = point[dish - 1]; // 3
  let level = 1; // 현재레벨
  let count = 0; // 카운터
  let isRight = false;

  while (isRight) {
    // 현재레벨과 디시레벨이 같으면

    let 현재접시 = point[0];
    console.log("나의 레벨", level, "현재접시", 현재접시);

    if (level === 현재접시 || level + 1 === 현재접시) {
      point.shift();
      level = 현재접시;
      count++;
      console.log("먹어서 레벨업 : ", level);
      if (level === dishValue) {
        isRight = true;
      }
    } else {
      point.push(point.shift());
      count++;
      console.log("레벨이 높아서 못 먹음");
    }
    console.log("현재의 point : ", point);
    console.log(`------${count - 1}바퀴 돌았음 ------`);
  }
  return count - 1;
}

// console.log(solution(point, dish));
