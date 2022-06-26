function solution(n) {
  var answer = "";
  let strN = String(n);
  let usedIndex = new Array(n.length).fill(0);
  let cnt = 0;
  while (cnt < strN.length) {
    let maxIndex = 0;
    let max = -1;

    for (let i = 0; i < strN.length; i++) {
      if (max < +strN[i]) {
        if (usedIndex[i] === 1) {
          continue;
        } else {
          maxIndex = i;
          max = strN[maxIndex];
        }
      }
    }
    usedIndex[maxIndex] = 1;
    cnt += 1;
    answer += strN[maxIndex];
  }
  return +answer;
}

// js 내부함수를 사용하지 않고 각 배열을 돌면서 수동으로 할당했다.
