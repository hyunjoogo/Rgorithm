function solution(p) {
  // 1단계
  if (p === '') {
    return ""
  }
  // 조건 중 하나
  if (isCorrect(p)) {
    return p
  }
  let u = "";
  let v = "";
  // 2단계
  // 두개씩 잘라서 균형확인
  // '균형이면' 멈추고 v 추출하기
  // '균형이 아니면' 넘어가?
  for (let i = 0; i < p.length; i = i+2) {
    u += p[i] + p[i+1];
    if (isBalanced(u)) {
      // u를 잘라낸 나머지
      v = p.slice(i+2)
      break;
    }
  }
  // 3단계 u가 "올바른"
  if (isCorrect(u)) {
    // 3단계의 문자열v에 대해 1단계부터 다시 수행
    // 이 말은 재귀를 해라!
    // 3-1단계의 수행한 결과를 u에 붙여서 반환
    let result = u + solution(v);
    return result
  }
  // 4단계 u가 '올바른'
  else if (!isCorrect(u)) {
    // 4-1,2,3에 대한 것
    let result = '(' + solution(v) + ')'
    // 4-4
    // 1. u의 앞뒤 문자를 제거하고,
    // 2. 나머지 문자의 괄호 방향을 뒤집으면
    let temp = u.substring(1, u.length-1)
    let t = ''
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === '(') {
        t += ')'
      } else {
        t += '('
      }
    }
    // 4-3까지이 결과물과 4-4의 결과물을 붙여서 반환
    result += t
    return result
  }

}

// "올바른 괄호 문자열"인지 확인하는 함수
function isCorrect(p) {
  const stack = []

  for (let i = 0;  i < p.length; i++) {
    if (p[i] === '(') {
      stack.push('(')
    } else {
      stack.pop()
    }
  }
  // 길이가 0이면 "올바른" / 아니면 '균형'
  return stack.length === 0;
}

// "균형잡힌 괄호 문자열"인지 확인하는 함수
function isBalanced(p) {
  let count = 0;
  for (let i of p) {
    if (i === '(') {
      count++;
    } else {
      count--;
    }
  }
  // 0이면 "균형" / 아니면 꽝!
  return count === 0;
}
