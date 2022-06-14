function solution(n) {
  let answer = sum(n);
  return answer % 1234567;
}

function sum(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }
  return sum(n - 1) + sum(n - 2);
}

console.log(solution(31));

// 재귀로 푸니까 시간초과가 나버렸다.
// 그래서 DP로 풀었다.

function solution(n) {
    const num = Number(n);
    const list = new Array(num+1).fill(0);
    list[0] = 0
    list[1] = 1
    list[2] = 1

    for (let i = 2; i < list.length; i++) {
        list[i] = (list[i-2] + list[i-1]) % 1234567
    }

    return list[num]
}
