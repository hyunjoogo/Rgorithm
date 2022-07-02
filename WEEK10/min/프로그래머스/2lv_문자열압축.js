function solution(s) {
  var answer = 0;
  let currentIndex = 0;
  let cnt = 0;

  while (currentIndex < s.length) {
    let str = "";
    let overlapStr = "";
    for (let i = currentIndex; i < s.length; i++) {
      str += s[i];
      if (str.length % 2 === 0) {
        let dividedStr1 = s.substr(currentIndex, Math.floor(str.length / 2));
        let dividedStr2 = s.substr(
          currentIndex + Math.floor(str.length / 2),
          Math.floor(str.length / 2)
        );
        console.log(dividedStr1, dividedStr2, str);
        if (dividedStr1 === dividedStr2) {
          overlapStr = dividedStr1;
        }
      }
    }
    if (overlapStr.length === 0 && currentIndex === 0) {
      cnt += s.length;
      break;
    }

    if (overlapStr.length === 0) {
      cnt += 1;
      currentIndex += 1;
      cnt += 1;
    } else {
      currentIndex += overlapStr.length * 2;
      cnt += overlapStr.length + 1;
    }

    console.log(overlapStr, currentIndex, cnt);
  }

  answer = cnt;

  return answer;
}
