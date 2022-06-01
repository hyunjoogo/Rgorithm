function solution(x) {
  let answer = true;
  const str = x.toString().split("");
  const sum = str.reduce((a, b) => Number(a) + Number(b), 0);
  if (x % sum !== 0) {
    answer = false;
  }

  return answer;
}
