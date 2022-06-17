function solution(answers) {
  let answer = [];
  let firstSt = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  let secondSt = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1];
  let thirdSt = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let firstCnt = 0;
  let secondCnt = 0;
  let thirdCnt = 0;
  for (let i = 0; i < answers.length; i++) {
    let k = i;
    if (i >= 10) {
      k = i - 10;
    }

    if (answers[k] === firstSt[k]) {
      firstCnt += 1;
    }

    if (answers[k] === secondSt[k]) {
      secondCnt += 1;
    }

    if (answers[k] === thirdSt[k]) {
      thirdCnt += 1;
    }
  }

  let maxStudent = Math.max(firstCnt, secondCnt, thirdCnt);
  if (maxStudent === firstCnt) {
    answer.push(1);
  }

  if (maxStudent === secondCnt) {
    answer.push(2);
  }

  if (maxStudent === thirdCnt) {
    answer.push(3);
  }
  return answer;
}

// 난 맞다고 생각하는데 도무지 왜 틀린지 모르겠다.
