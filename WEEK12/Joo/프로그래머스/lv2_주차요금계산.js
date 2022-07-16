// https://school.programmers.co.kr/learn/courses/30/lessons/92341


// 기본 시간, 기본 요금, 단위 시간, 단위 요금

// 차량이 입차된 후 출차된 내역이 없다면 23:59에 출차된 것으로 간주

// 누적 주차 시간이 기본 시간이하라면, 기본 요금을 청구
// 누적 주차 시간이 기본 시간을 초과하면
// 기본 요금 + 단위시간에 따른 단위 요금 청구

// 초과한 시간이 단위 시간으로 나누어 떨어지지 않으면 올림
// ⌈a⌉ : a보다 작지 않은 최소의 정수를 의미합니다. 즉, 올림을 의미합니다.


// 1 . 해당차량의 하루 누적 주차 시간을 계산한다.
// 1회 주차 시간 : 출차시간 - 입차시간

// 2. 누적주차시간에 따른 요금을 측정한다.

// 2.1 기본요금 +  (누적주차시간 - 기본시간) / 단위시간 * 단위요금
// 2.2 단 (누적주차시간 - 기본시간) / 단위시간은 올림을 한다.


function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  const list = {}
  for (let i of records) {
    const record = i.split(' ');

    const time = record[0].split(':').map(v=>+v)
    const min = time[0] === 0 ? time[1] : time[0] * 60 + time[1]

    if (list[record[1]]) {
      list[record[1]].push({time : min, history : record[2]})
    } else {
      list[record[1]] = []
      list[record[1]].push({time : min, history : record[2]})
    }
  }


  const result = Object.keys(list).sort().map((value) => {
    console.log(value, list[value])
    let cumulativeTime=0
    for (let i = 0; i < list[value].length; i = i+2) {
      cumulativeTime += list[value][i+1] ? list[value][i+1].time - list[value][i].time : 1439 - list[value][i].time
    }
    console.log(cumulativeTime)
    if (cumulativeTime < basicTime) {
      return basicFee
    } else {
      return basicFee + Math.ceil((cumulativeTime - basicTime) / unitTime) * unitFee
    }
  })
  return (result)
}
