const fs = require("fs");
const _input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `3245454`;

let answer = "";
let input = _input;

const list = input.split("");
list.forEach((str, i) => {
  const dex = parseInt(str, 8);
  let binary = dex.toString(2);

  if (i !== 0 && binary.length < 3) {
    binary = binary.padStart(3, "0");
  }

  answer += binary;
});
console.log(answer);

// 입력받은 8진수의 문자열을 하나씩 쪼개서
// 10진수 => 2진수 문자열로 전환
// 예시) 1 => 1 => 1
// 예시) 2 => 2 => 10
// 예시) 21 => 15 => 10001
// 8진수의 자리수 각각의 2진수로 변경 후 문자+문자하면 그 수의 2진수가 나온다. (합 아님)
// 하지만 8진수 1~3 은 2진수로 각각 1, 10, 11이다.
// 앞자리 일 때는 상관없지만 중간자리리면 각 2진수의 자리수가 맞지 않다.
//    - 21 => 10001 인데 이대로라면 101이 나온다.
//    - 8진수의 맨 앞자리와 2진수가 3자리가 아니라면 padStart로 0으로 채운다
