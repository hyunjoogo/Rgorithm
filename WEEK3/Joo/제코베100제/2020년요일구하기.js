const startMonth = 1;
const startDay = 1;

const monthOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const daysOfTheWeek = ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"];
// 0 1 2 3  4  5  6
// 7 8 9 10 11 12 13
//  7n + 0 ... 6 ( n이 0부터 시작 )
// 1월 8 / 15 / 22 / 29 +2
//
// 2월 1일은 31일뒤
function calculateDOTW(targetMonth, targetDay) {
  const gapMonth = targetMonth - startMonth; // 1
  const gapDay = targetDay - startDay; // 0

  let totalDays = gapDay;
  for (let i = 0; i < gapMonth; i++) {
    totalDays += monthOfDays[i];
  }
  console.log(daysOfTheWeek[totalDays % 7]); // 31
}

calculateDOTW(2, 29);

// 1월 1일과 월차이, 일차이를 구한다.
// 2020년 월마다의 날짜 구해서 array를 만들어 놓는다.
// 1월 1일의 요일을 시작값으로 같는 array를 만든다.

// 월차이에 맞는 일자를 총 일차이에 더해준다.
// 총 일차이에 맞게 요일 array돌면서 요일을 출력한다.
