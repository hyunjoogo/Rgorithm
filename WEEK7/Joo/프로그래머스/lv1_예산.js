function solution(d, budget) {
  const list = d.sort((a, b) => a - b);
  let answer = 0;
  let sum = 0;

  // // 리스트의 가장 작은 값이 예산보다 클 경우
  // if (budget < list[0]) {
  //     return 0
  // }

  for (let i = 0; i < list.length; i++) {
    sum += list[i];
    if (sum > budget) {
      break;
    }
    if (sum <= budget) {
      answer++;
    }
  }

  return answer;
}

// 괜찮은 방법
function solution(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach(function (val) {
    money += val;
    if (money <= budget) {
      answer++;
    }
  });
  return answer;
}
