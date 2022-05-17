const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);
// 9명 난쟁이의 합
let sumNine = 0;
let sum;
for (let i = 0; i < 9; i++) {
  sumNine = sumNine + input[i];
}
sum = sumNine;
loop1: for (let i = 0; i < 8; i++) {
  loop2: for (let j = i + 1; j < 9; j++) {
    sum = sum - (input[i] + input[j]);
    // console.log(input[i]);
    // console.log(sum);
    if (sum === 100) {
      const result = input.filter(
        (item) => item !== input[i] && item !== input[j]
      );

      result.sort(function (a, b) {
        return a - b;
      });
      for (let i = 0; i < 7; i++) {
        console.log(result[i]);
      }
      break loop1;
    }
    sum = sumNine;
  }
}

// https://www.acmicpc.net/problem/2309
// 입력 받는 부분에서 고생했다.
// PASS
