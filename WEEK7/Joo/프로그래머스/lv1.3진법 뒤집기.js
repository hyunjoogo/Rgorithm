function solution(n) {
  const three = n.toString(3);
  const reverseThree = three.split("").reverse().join("");

  const answer = parseInt(reverseThree, 3);
  return answer;
}

// 해당숫자.toString(n진법)
// 10진법 숫자를 n진법으로 변환 (문자열)
// 어떤 수를 n진법으로 변환하고 싶은지

// parseInt(변환시키고자하는 문자열, 문자열의 진수)
// 변환시키고자하는 문자열를 10진수로 변환해준다.
// n진법의 문자열을 10진법으로 변환하고 싶은지
