function solution(x) {
  var answer = true;
  let strX = String(x);
  let sum = 0;

  for (let i = 0; i < strX.length; i++) {
    sum += +strX[i];
  }

  if (x % sum !== 0) {
    answer = false;
  }

  return answer;
}
