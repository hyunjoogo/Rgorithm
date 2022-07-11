function solution(N, stages) {
  var answer = [];
  let failedRate = [];
  for (let i = 1; i <= N; i++) {
    let cntA = 0;
    let cntB = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) {
        cntB += 1;
        if (stages[j] === i) {
          cntA += 1;
        }
      }
    }
    failedRate.push([cntA / cntB, i]);
  }

  let usedArr = new Array(failedRate.length).fill(0);

  for (let h = 0; h < N; h++) {
    let max = [-1, -1];
    let idx = -1;
    for (let i = 0; i < failedRate.length; i++) {
      if (failedRate[i][0] > max[0]) {
        if (usedArr[i] === 0) {
          max = failedRate[i];
          idx = i;
        }
      } else if (failedRate[i][0] === max) {
        if (failedRate[i][1] < max[1]) {
          if (usedArr[i] === 0) {
            max = failedRate[i];
            idx = i;
          }
        }
      }
    }
    usedArr[idx] = 1;
    answer.push(max[1]);
  }

  return answer;
}

// 내풀이다.
