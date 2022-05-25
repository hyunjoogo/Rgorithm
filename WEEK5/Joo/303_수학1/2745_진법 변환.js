const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `ZZZZZ 36`
).split(" ");
let n = input[0].split("").reverse();
let base = Number(input[1]);
let result = 0;

for (let i = 0; i < n.length; i++) {
  if (n[i] >= "A" && n[i] <= "Z") {
    n[i] = n[i].charCodeAt(0) - 55;
    result += n[i] * Math.pow(base, i);
  } else {
    n[i] = Number(n[i]);
    result += n[i] * Math.pow(base, i);
  }
}

console.log(result);



// B진법을 10진법으로 바꾸는 방법 (B진법은 353535)
// reverse로 뒤에부터 시작해야함
// 35 *36^0 +  35 * 36^1 ...