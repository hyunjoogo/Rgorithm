const nums = [];
for (let i = 1; i <= 20; i++) {
  for (let j = 0; j < i.toString().split("").length; j++) {
    nums.push(i.toString().split("")[j]);
  }
}
console.log(nums.reduce((a, b) => Number(a) + Number(b)));

let arr = [];
let sum = 0;
for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

arr.forEach((n) => {
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
});
console.log(sum);
