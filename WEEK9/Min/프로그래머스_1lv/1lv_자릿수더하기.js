function solution(n) {
  var answer = 0;
  let sum = 0;
  let strN = (n + "").split("");
  for (let i = 0; i < strN.length; i++) {
    sum += +strN[i];
  }

  answer = sum;
  return answer;
}
