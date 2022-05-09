const input = "1234567";
let result = "";
for (let i = 0; i < input.length; i++) {
  if ((input.length - i) % 3 === 0 && i != 0) {
    result += `,${input[i]}`;
  } else {
    result += input[i];
  }
}

console.log(result);

// 재귀함수 연습
function comma(s) {
  if (s.length < 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
  }
}
console.log(comma(input.toString()));
