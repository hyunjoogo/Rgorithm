function solution(n, info) {
  // 변하지 말아야하는 값
  let scoreGap = 0;
  let totalResult = [];
  // for문 돌때마다 리셋해야하는 값

  for (let j = 0; j <= info.length; j++) {

    let result = new Array(11).fill(0);
    let totalArrow = n;
    let ApScore = 0;
    let LionScore = 0;
    // i를 0부터 시작해서 안되면 1부터 시작하게 만들어야함
    for (let i = j; i <= info.length; i++) {
      if (i ===info.length) {
        console.log(i)
        result[i]  = totalArrow;
        totalArrow =0;
      }
      if (totalArrow === 0) {
        break;
      } else if (totalArrow <= info[i]) {
        continue;
      } else { // 화살개수도 남고 0도 아니면
        result[i] = info[i] + 1;
        totalArrow -= info[i] + 1;
      }
    }

    // i가 0으로 시작했을 때의 점수가 나옴
    for (let i = 0; i < result.length; i++) {
      if (result[i] < info[i]) {
        ApScore += 10 - i;
      } else if (result[i] > info[i]) {
        LionScore += 10 - i;
      } else {
        if (result[i] !== 0 && info[i] !== 0) {
          ApScore += 10 - i;
        }
      }
    }

    // console.log(0, result, ApScore, LionScore, LionScore - ApScore);
    console.log(j, LionScore, ApScore, LionScore - ApScore, totalArrow);


    // 새로 구한 점수차가 저장되어 있는 점수차보다
    // - 작으면 아무것도 하지마
    // - 크거나 같으면 scoreGap 변경, return값도 변경

    if (scoreGap <= LionScore - ApScore) {
      scoreGap = LionScore - ApScore;
      totalResult = result;
    }
    console.log('최종',scoreGap, totalResult);
  }
  return scoreGap === 0 ? [-1] : totalResult
}



solution(9,	[0,0,1,2,0,1,1,1,1,1,1])

// info
// [10 * 2, 9 * 1, 8 * 1, 7 * 1] 총 5발
// 0번째 인덱스부터 비교를 하면?
// 즉 어피치가 맞춘 화살 개수보다 +1을 하는 거지
// 총 화살 개수에서 비교하면서 사용한 화살 개수를 빼주고
// 사용한 화살 개수는 result에 해당 인덱스에 값 변경

// 총 화살 개수가 0이면 종료

// 점수 비교해서 작으면 1번째 인덱스부터 시작

// 만약 남은 화살 개수와 해당 점수의 어피치가 맞춘 화살 개수가 같으면 다음 점수로 넘어가기

/*


*/
