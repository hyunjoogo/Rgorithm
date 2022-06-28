function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    if ((i % n) + 1 > Math.floor(i / n + 1)) {
      answer.push((i % n) + 1);
    } else {
      answer.push(Math.floor(i / n + 1));
    }
  }
  return answer;
}

// 시간 초과 때문에 이중 반복문을 돌면서 배열을 선언 하는 경우의 풀이는 불가능했다.
// 이중 반복문을 선언해야하는 경우는 시간복잡도가 가능한지 먼저 파악해보자
