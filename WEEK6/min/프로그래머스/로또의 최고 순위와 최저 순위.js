function solution(lottos, win_nums) {
  let answer = [];
  const rankArray = [6, 6, 5, 4, 3, 2, 1];
  let zeroCount = 0;
  let correctCount = 0;
  let min, max;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zeroCount++;
      continue;
    }

    if (win_nums.includes(lottos[i])) {
      correctCount++;
    }
  }
  console.log(correctCount, zeroCount);

  if (zeroCount === 0) {
    min = correctCount;
    max = correctCount;
  } else {
    if (correctCount === 0) {
      min = 0;
      max = zeroCount;
    } else {
      min = correctCount;
      max = zeroCount + correctCount;
    }
  }
  answer = [rankArray[max], rankArray[min]];
  return answer;
}

// 어렵지는 않았다 순위를 출력하는 부분을 배열로 만든다는 아이디어는 좋았다.
// 예외처리를 제대로 하지 않았다면 답이 안나올 수도 있었다. 테케를 모든 경우의 수를 주어서 잘 풀었던거 같다.
