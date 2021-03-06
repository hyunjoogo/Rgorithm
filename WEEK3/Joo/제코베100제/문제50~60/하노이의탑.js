const route = [];

function hanoi(원판의수, 시작기둥, 목표기둥, 보조기둥) {
  //원판이 한 개일 때에는 바로 옮기면 됩니다.
  if (원판의수 === 1) {
    route.push([시작기둥, 목표기둥]);
    return NaN;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(원판의수 - 1, 시작기둥, 보조기둥, 목표기둥); //  route = [[시작기둥, 보조기둥], [시작기둥, 목표기둥], [보조기둥, 목표기둥]]
  //가장 큰 원반은 목표기둥으로
  route.push([시작기둥, 목표기둥]);
  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(원판의수 - 1, 보조기둥, 목표기둥, 시작기둥);
}

hanoi(3, "A", "C", "B");
console.log(route);
console.log(route.length);

// 원판이 2개일 경우
// 시작 -> 보조
// 시작 -> 목표 (가장 큰 원판이 목표에 들어옴)
// 보조 -> 목표

// 원판이 3개인 경우

// 시작 -> 목표
// 시작 -> 보조
// 목표 -> 보조
// 시작 -> 목표 (가장 큰 원판이 목표에 들어옴)
// 보조기둥 <-> 시작기둥
// 원판 2개와 동일하게 진행
