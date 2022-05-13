const 시간표 = ["12:30", "13:20", "12:40"];
const 현재시간 = "12:40";

function solution(시간표, 현재시간) {
  let answer = [];
  for (let 시간 of 시간표) {
    answer.push(시간체크(시간, 현재시간));
  }
  return answer;
}

function 시간체크(시간, 현재시간) {
  const 시간리스트 = 시간.split(":").map((value) => Number(value));
  const 시간분변환 = 시간리스트[0] * 60 + 시간리스트[1];

  const 현재시간리스트 = 현재시간.split(":").map((value) => Number(value));
  const 현재시간분변환 = 현재시간리스트[0] * 60 + 현재시간리스트[1];

  // console.log(시간분변환 - 현재시간분변환);
  const 차이 = 시간분변환 - 현재시간분변환;
  if (차이 < 0) {
    return "지나갔습니다";
  } else {
    console.log(차이);
    const 시 = String(parseInt(차이 / 60, 10)).padStart(2, "0");
    const 분 = String(차이 % 60).padStart(2, "0");
    return `${시}시간 ${분}분`;
  }
}

console.log(solution(시간표, 현재시간));
/* 
시간이 지났으면 지나갔습니다.
남은 시간 출력


시간+분을 분으로 만들자

1230 => 720 + 30
1240 => 720 + 40
1250 => 720 + 50
1260 -> 720 + 60
1300 => 780 + 00
1310 => 780 + 10
1320 => 780 + 20
...
1413 => 840 + 13 = 853

800 - 760 => 40
853 - 760 => 93

60 넘어가면 
int(n / 60) => 시
n % 60 => 분 

*/
