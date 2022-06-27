function solution(arr) {
  var answer = [];
  let usedNum = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== usedNum) {
      usedNum = arr[i];
      answer.push(arr[i]);
    }
  }

  return answer;
}
