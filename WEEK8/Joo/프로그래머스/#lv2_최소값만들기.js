// ------- 문제는 맞았지만 효율성은 못 맞춤  -----
function solution(A, B) {
  let answer = 0;

  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += sortA[i] * sortB[i];
  }
}
// -------- 정답 -------------
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce(
    (accumulator, currentValue, currentIndex) =>
      accumulator + currentValue * B[currentIndex],
    0
  );
}

// 왜 A를 오른차순하고 B를 내림차순 한 값을 순서대로 곱하면 최적이 될까?
 
// 그리고 왜 효율성은 떨어질까?

// 참고로 sort는 주어진 배열 자체를 바꾼다.
// reduce를 사용 방법을 다시 배우자.

[1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}, 0);

// 맨 뒤에 오는 0은 누적값이 0, 0번째 인덱스부터 시작하겠다는 뜻
// 누적값, 현재값, 인덱스 순으로 (0, 1, 0)
// return 공식에 맞춰서 누적값+현재값이 누적값으로 된다.
// 1번째 인덱스는 1, 2, 1 으로 시작을 한다.
// 2번째 인덱스는 3, 3, 2
// 3번째 인덱스는 6, 4, 3
// return 6 + 4 해서 10이 리턴된다.