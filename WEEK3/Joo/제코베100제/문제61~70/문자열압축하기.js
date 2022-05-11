const word = "aaabbbbcdddd";
let result = "";

let first_s = word[0];
let count = 0;

for (let i of word) {
  if (i === first_s) {
    count++;
  } else {
    // 기존꺼 등록해주기
    result += first_s + String(count);
    // 리셋
    count = 1;
    first_s = i;
  }
}
result += first_s + count;
console.log(result);
