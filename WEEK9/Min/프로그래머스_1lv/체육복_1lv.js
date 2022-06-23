function solution(n, lost, reserve) {
  var answer = 0;
  let isTakeDress = new Array(n + 1).fill(1);
  isTakeDress[0] = 0;
  for (let i = 0; i < lost.length; i++) {
    isTakeDress[lost[i]] = 0;
  }
  console.log(isTakeDress);

  for (let i = 0; i < reserve.length; i++) {
    isTakeDress[reserve[i]] += 1;
  }
  console.log(isTakeDress);

  for (let i = 1; i < isTakeDress.length; i++) {
    if (isTakeDress[i] === 0) {
      if (isTakeDress[i + 1] === 2) {
        isTakeDress[i] += 1;
        isTakeDress[i + 1] -= 1;
      }
    } else if (isTakeDress[i] === 2) {
      if (isTakeDress[i + 1] === 0) {
        isTakeDress[i] -= 1;
        isTakeDress[i + 1] += 1;
      }
    } else {
      continue;
    }
  }
  console.log(isTakeDress);

  for (let i = 0; i < isTakeDress.length; i++) {
    if (isTakeDress[i] >= 1) {
      answer += 1;
    }
  }
  return answer;
}
