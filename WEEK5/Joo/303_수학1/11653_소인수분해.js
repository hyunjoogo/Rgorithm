// https://www.acmicpc.net/problem/11653

const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : `10000000`;
let n = Number(input);
let i = 2;
const result = [];
while (true) {
  if (n === 1) {
    result.push(n);
    break;
  }
  if (n % i === 0) {
    n = n / i;
    result.push(i);
    i = 1;
  }
  i++;
  if (i > n) {
    break;
  }
}

console.log(result.join("\n"));

// 처음에 소수 리스트를 만들고 하는 방식으로 갔는데
// 어찌되었든 틀렸다.


// 검색을 결과
// 1은 소수가 아니므로 2부터 시작해서 i로 나누어 지면 i는 소인수분해 결과가 된다.
// 그리고 다음 수는 몫이다. 예 ) 72 / 2 = 36

// 2부터 시작해서 나누어 지지 않으면 i++
// 전체 식으로 쓰기 위해 나누어 떨어지먄 i를 1로 변경하고 
// 끝나는 조건식은 i > n 이다. 즉, 1 / 2