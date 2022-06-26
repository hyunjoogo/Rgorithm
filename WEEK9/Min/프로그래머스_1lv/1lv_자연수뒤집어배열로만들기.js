function solution(n) {
  var answer = [];
  let strN = n + "";
  let newArr = strN
    .split("")
    .reverse()
    .map((item) => +item);
  answer = newArr;
  return answer;
}
