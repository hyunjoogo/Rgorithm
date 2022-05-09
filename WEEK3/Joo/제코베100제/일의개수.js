const nums = [];
// 아.. 배열을 조인해서 1을 찾자
for (let i = 1; i <= 1000; i++) {
  nums.push(i);
}

const str = nums.join("");

let count = 0;
for (let k of str) {
  if (k === "1") {
    count++;
  }
}

console.log(count);
