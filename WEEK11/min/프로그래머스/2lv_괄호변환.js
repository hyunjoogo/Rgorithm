function solution(p) {
  var answer = "";
  // 1. 빈 문자열인지 판단
  if (p.length === 0) {
    return "";
  }

  // 2. u, v 분리
  let u = "";
  let v = "";
  let cnt = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      cnt += 1;
    } else if (p[i] === ")") {
      cnt -= 1;
    }

    if (cnt === 0) {
      u += p.slice(0, i + 1);
      v += p.slice(i + 1);
      break;
    }
  }
  console.log(u);
  console.log(v);

  // 3. u의 올바른 찾기
  let uCnt = 0;
  let isU = false;
  for (let i = 0; i < u.length; i++) {
    if (p[i] === "(") {
      uCnt += 1;
    } else if (p[i] === ")") {
      uCnt -= 1;
    }

    if (uCnt >= 0) {
      answer += u + solution(v);
      isU = true;
      break;
    } else {
      break;
    }
  }

  // 4. 시행
  if (!isU) {
    answer += "(";
    answer += solution(v);
    answer += ")";
    let changeU = u.slice(1, u.length - 1);
    for (let i = 0; i < changeU.length; i++) {
      if (changeU[i] === "(") {
        answer += ")";
      } else if (changeU[i] === ")") {
        answer += "(";
      }
    }
  }
  return answer;
}

// 문제가 너무 길어서 처음부터 쫄고 들어갔다.
// 문제가 긴 경우 문제를 완벽히 이해하고 예제를 일일이 해보면서 이해하는게 중요하다.
// 문제를 다 읽으면 풀수있다는 자신감 갖자
