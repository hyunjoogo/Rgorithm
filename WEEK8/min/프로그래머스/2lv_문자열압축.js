function solution(s) {
  var answer = 0;
  let cnt = 0;

  // 입력받은 문자열의 길이가 1인경우
  if (s.length === 1) {
    answer = 1;
    return answer;
  }

  // 입력받은 문자열의 길이가 2이상인 경우
  for (let i = 1; i <= s.length / 2; i++) {
    // i = 1인경우
    if (i === 1) {
      let str = s[0];
      cnt += 1;
      for (let j = 1; j < s.length; j++) {
        if (str.slice(-1) === s[j]) {
          str += s[j];
          if (str.length >= 3) {
            continue;
          } else if (str.length === 2) {
            cnt += 1;
          }
        } else {
          str = s[j];
          cnt += 1;
        }
      }
      answer = cnt;
      cnt = 0;
    } else {
      let k = i;
      let j = 0;
      while (j < s.length) {
        if (s.slice(j, j + k) === s.slice(j + k, j + 2 * k)) {
          cnt += k + 1;
          j += k * 2;
        } else {
          cnt += 1;
          j += 1;
        }
      }
      if (answer > cnt) {
        answer = cnt;
      }
      cnt = 0;
    }
  }
  return answer;
}

// 다른 답은 모두 만족하지만 하나의 테케는 만족하지 못함
