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
    failedRate.push([i, cntA / cntB]);
  }
  failedRate.sort((a, b) => b[1] - a[1]);
  failedRate.forEach((item) => answer.push(item[0]));
  return answer;
}
