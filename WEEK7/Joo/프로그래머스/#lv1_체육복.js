// lost와 reserve를 합치는 건 안됨
// 누가 reserve인지 lost인지 알수가 없음

// lost에 있는 값이 reserve에 있으면 reserve에서 빼야함

// 총 5명이 있는데 그 중에 2,4번이 잃어버림
// 그런데 1,3,5가 있어서
// 2번은 1이나 3번한테
// 4번은 3번이나 5번한테 (2번이 3번한테 빌렸으면 5번)
// 그래서 모든 학생이 가능

// 총 5명이 있는데 그 중에 2,4 번이 잃어버림
// 체육복이 있는 사람은 1, 3, 5
// 그 중에 3번이 여벌이 있어서 2번이나 4번한테 빌려준다
// 그러면 있는 사람은 1, 2 , 3, 5

// 총 3명이 있는데 그 중 3번이 잃어버림
// 체육복 있는 사람은 1,2번
// 그 중에 1번이 여벌이 있느나 잃어버린 사람이 인접하지 않아서 못빌려줌

function solution(n, lost, reserve) {
  var answer = 0;
  const list = [];
  for (let i = 0; i <= n; i++) {
    list.push(i);
  }
  for (let i of lost) {
    list[i] = 0;
  }
  console.log(list);

  for (let i of reserve) {
    console.log(i);
    if (i === 1) {
      list[i + 1] = i + 1;
    } else if (i === list.length + 1) {
      list[i - 1] = i - 1;
    } else {
      if (list[i - 1] === 0 && list[i + 1] !== 0) {
        list[i - 1] = i - 1;
      } else if (list[i - 1] !== 0 && list[i + 1] === 0) {
        list[i + 1] = i + 1;
      } else if (list[i - 1] === 0 && list[i + 1] === 0) {
        //선택
        list[i + 1] = i + 1;
      }
    }
  }

  console.log(list);
  return list.filter((v) => v !== 0).length;
}

// -----------------

function sol(n, lost, reserve) {
  let answer = 0;
  let studentClothes = new Array(n + 2).fill(1);
  // 여벌있는 놈들은 +1씩 해주기
  for (const student of reserve) studentClothes[student] += 1;
  // 잃어버린 놈들은 -1씩 해주기
  for (const student of lost) studentClothes[student] -= 1;

  console.log("원본", studentClothes);
  for (let i = 1; i < n + 1; i++) {
    // 잃어버린 놈이면
    if (studentClothes[i] === 0) {
      // 왼쪽, 오른쪽 중에 하나라도 여벌을 가지고 있다면
      if (studentClothes[i - 1] === 2 || studentClothes[i + 1] === 2) {
        // 왼쪽에 여벌이 있다면
        if (studentClothes[i - 1] === 2) {
          studentClothes[i - 1] -= 1;
          studentClothes[i] += 1;
        } else {
          studentClothes[i + 1] -= 1;
          studentClothes[i] += 1;
        }
      }
    }
    console.log(i, "/", studentClothes);
  }
  for (const student of studentClothes) {
    answer += student > 0 ? 1 : 0;
  }
  answer -= 2;

  return answer;
}

sol(5, [1, 4], [3, 5]);

// Fail
// 학생 리스트를 만들 때 쿠션을 왼쪽 오른쪽에 둘다 주는 것이 신기
// 모든 학생이 체육복이 있다고 리스트를 만든다.(1로 표현)
// reserve를 돌면서 여벌이 있는 사람부터 + 1 해주고
// Lost를 돌면서 잃어버린 놈들 -1 해주고
// 문제에서 나온 조건 중 잃어버린 놈은 못 준다 라는 조건까지 충족해줄 수 있음

// 이제 쿠션을 빼고 돌면서
// 잃어버린 놈을 만나면 왼쪽이나 오른쪽에 여벌이 있으면 (둘 다 포함)
// - 왼쪽 놈이 여벌이 있으면 왼쪽 -1 자기 +1
// - 오른쪽 놈이 여벌이 있으면 오른쪽 -1 자기 +1

// 난 두개 다 있을 땐 왼쪽에게 줘라 라고 했는데
// 여기서도 2,0,2 상황이면 왼쪽에서 가져다 쓰는 걸로 택함
// 여기는 순차적으로 돌기때문에 가능한듯
