// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EC%88%AB%EC%9E%90-%EB%B8%94%EB%A1%9D-JS
// https://programmers.co.kr/learn/courses/30/lessons/12923
function solution(begin, end) {
  const arr = new Array(end - begin + 1).fill(0);

  for (let i = begin; i <= end; i++) {
    arr[i - begin] = getMaxDivisor(i);
  }

  if (begin === 1) arr[0] = 0;

  return arr;
}

const getMaxDivisor = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && n / i <= 1e7) {
      return n / i;
    }
  }
  return 1;
};
