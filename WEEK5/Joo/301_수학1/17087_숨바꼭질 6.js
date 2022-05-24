const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `3 3
    6 9 11`
)
  .split("\n")
  .map((value) =>
    value
      .trim()
      .split(" ")
      .map((v) => +v)
  );
const [n, s] = input[0]; // 동생의 수,  현재 위치
const locaitons = input[1]; // 동생들 위치

// 동생들과의 차이
const gapLocations = locaitons.map((value) => Math.abs(value - s));

function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

let result = gcd(gapLocations[0], gapLocations[1]);

if (n === 1) {
  console.log(gapLocation[0]);
} else if (n === 2) {
  console.log(result);
} else {
  for (let i = 2; i < n; i++) {
    console.log(gcd(result, gapLocations[i]));
  }
}
