function solution(n) {
  const list = new Array(n + 1).fill(0);
  list[1] = 1;
  list[2] = 2;
  for (let i = 3; i <= n; i++) {
    list[i] = (list[i - 1] + list[i - 2]) % 1234567;
  }
  return list[n];
}

// (list[i - 1] + list[i - 2]) % 1234567;
// list[i - 1] % 1234567 + list[i - 2] % 1234567 는 다르다.

// 각각의 숫자를 123로 나눈 나머지를 더한값이 123을 넘어가는 순간 값이 달라진다.
// 어차피 i-1, i-2도 이전 숫자들을 더해서 123으로 나눈 나머지 값이 들어가 있다.
