function solution(progresses, speeds) {
  var answer = [];
  let arrayIdx = 0;
  while (arrayIdx < progresses.length) {
    let cnt = 0;
    for (let i = arrayIdx; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[arrayIdx] >= 100) {
      cnt += 1;
      for (let i = arrayIdx + 1; i < progresses.length; i++) {
        if (progresses[i] >= 100) {
          cnt += 1;
        } else {
          break;
        }
      }
      arrayIdx += cnt;
      answer.push(cnt);
    }
  }
  return answer;
}

// 스택 큐 자료구조를 사용하지 않고 구한 코드이다.
