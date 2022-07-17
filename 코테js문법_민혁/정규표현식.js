function solution(dartResult) {
  var answer = 0;
  const scoreArr = [];
  const regex = /\d{1, 2}[SDT]{1}[*|#]?/g;
  for (const dart of dartResult.match(regex)) {
    const num = +dart[0];
    if (dart[1] === "S") {
      num = num ** 1;
    }
    if (dart[1] === "D") {
      num = num ** 2;
    }
    if (dart[1] === "T") {
      num = num ** 3;
    }
    if (dart.length === 2) {
      continue;
    }

    if (dart[2] === "*") {
      if (scoreArr.length === 0) {
        num *= 2;
      } else {
        num *= 2;
        scoreArr.push(scoreArr.pop() * 2);
      }
    } else if (dart[2] === "#") {
      num *= -1;
    }
    scoreArr.push(num);
  }
  console.log(scoreArr);
  return answer;
}
