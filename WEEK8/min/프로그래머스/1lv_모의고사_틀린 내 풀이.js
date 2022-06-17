function solution(answers) {
  let answer = [];
  let firstSt = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  let secondSt = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1];
  let thirdSt = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let firstCnt = 0;
  let secondCnt = 0;
  let thirdCnt = 0;
  for (let i = 0; i < answers.length; i++) {
    if (i >= 10) {
      i -= 10;
    }

    if (answers[i] === firstSt[i]) {
      firstCnt += 1;
    }

    if (answers[i] === secondSt[i]) {
      secondCnt += 1;
    }

    if (answers[i] === secondSt[i]) {
      thirdCnt += 1;
    }
  }

  // 3명중 많이 갖고 맞춘 사람수 구하는 로직
  if (firstCnt > secondCnt) {
    if (firstCnt > thirdCnt) {
      answer.push(1);
      if (secondCnt > thirdCnt) {
        answer.push(2);
        answer.push(3);
        return answer;
      } else if (secondCnt < thirdCnt) {
        answer.push(3);
        if (secondCnt !== 0) {
          answer.push(2);
        }
        return answer;
      } else {
        if (secondCnt !== 0) {
          answer.push(2);
          answer.push(3);
        }
        return answer;
      }
    } else {
      if (firstCnt === thirdCnt) {
        answer.push(1);
        answer.push(3);
        if (secondCnt !== 0) {
          answer.push(2);
        }
        return answer;
      } else {
        answer.push(3);
        answer.push(1);
        if (secondCnt !== 0) {
          answer.push(2);
        }
        return answer;
      }
    }
  } else if (firstCnt < secondCnt) {
    if (secondCnt > thirdCnt) {
      answer.push(2);
      if (firstCnt > thirdCnt) {
        answer.push(1);
        if (thirdCnt !== 0) {
          answer.push(3);
        }
        return answer;
      } else if (thirdCnt > firstCnt) {
        answer.push(3);
        if (firstCnt !== 0) {
          answer.push(1);
        }
        return answer;
      } else {
        if (firstCnt !== 0) {
          answer.push(1);
          answer.push(3);
          return answer;
        }
      }
    }
  } else {
    if (firstCnt > thirdCnt) {
      answer.push(1);
      answer.push(2);
      if (thirdCnt !== 0) {
        answer.push(3);
      }
      return answer;
    } else if (firstCnt < thirdCnt) {
      answer.push(3);
      if (firstCnt !== 0) {
        answer.push(1);
        answer.push(2);
      }
      return answer;
    } else {
      if (firstCnt !== 0) {
        answer = [1, 2, 3];
        return answer;
      }
    }
  }

  return answer;
}
