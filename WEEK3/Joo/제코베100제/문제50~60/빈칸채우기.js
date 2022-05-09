const word = "ho";
const length = 50;

const mid = Math.floor((length - word.length) / 2);
// Math.abs((50 - hi길이 ) / 2)
// '=' 24 + 'hi' + '=' 24

// 만약 글자 길이가 홀수?
// Math.abs((50 - hot길이 ) / 2) 47 /2 => 23
// '=' 24 + hot + '=' 23
let left = mid;
let right = mid;
if (mid % 2 === 1) {
  left = mid;
  right = mid + 1;
}
const result = "".padStart(left, "=") + word + "".padEnd(right, "=");
console.log(result, result.length);
