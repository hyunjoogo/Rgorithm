function solution(numbers) {
  var answer = 0;
  let testAry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i++) {
    testAry[numbers[i]] = 0;
  }

  for (let i = 0; i < testAry.length; i++) {
    answer += testAry[i];
  }
  return answer;
}

// 너무 쉬웠다.
