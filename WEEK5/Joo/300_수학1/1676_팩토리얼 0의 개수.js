const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
// 1. 나는 어디서 막혔는가?
// 뒤에서 0의 개수를 구하는 것에서 막혔다.
// for문을 꺼꾸로 돌아서 문자열로 바꾸어서 0이 아닌 숫자까지의 count를 구하는 접근방식이었다.
// 하지만 꺼꾸로 돌 때 문자열의 길이에서 -1을 하지 않았고 0번째 인덱스를 가지고 오지 못했다.
// 또, 0일 때는 카운트++ 하고 0이 아닌 숫자를 만났을 때 break를 하는 접근은 하였지만
// 앞숫자를 신경쓰면서 코드가 꼬였다.

// 가장 큰 것은 int의 범위를 신경 못 썼다.
// 이전 팩토리얼 문제에서는 결과값이 int 범위내에서 끝났지만
// 이번문제는 범위가 커져서 값이 Infinity, ~~~+e 이런식으로 나왔다.
// BigInt라는 것을 사용해서 숫자 다음 n을 붙여서 BigInt 숫자를 표현할 수 있다.

// 2. 앞으로 어떻게?

// 좋은 코드에서 보면 수학적 이해가 필요한데
// 5! 는 120 10! = 3628800 15! = 1307...8000
// 즉, 마치 제곱근(루트)처럼 
// 1 ~ 4 사이는 0으로 안끝나고 5 ~ 9 사이는 0 10~ 14 사이는 00
// 이런식으로 나온다고 한다.
// 그래서 입력받은 숫자를 분기치는게 아니고
// while문으로 5로 나눈 몫은 0의 갯수가 되고 그 갯수를 다시 대입하면
// 1 ~ 4 사이가 되어 자동적으로 while문이 끝나게 된다.

// ------ My code ------

function solution(n) {
  if (n === 0n) {
    return 1n;
  }

  return n * solution(n - 1n);
}
const result = solution(BigInt(+input)).toString(10);

let count = 0;
for (let i = result.length - 1; 0 < i; i--) {
  if (result[i] === "0" && result[i - 1] === "0") {
    count++;
  } else if (result[i] === "0" && result[i - 1] !== "0") {
    break;
  }
}

let answer = 0;
for (let i = result.length - 1; i >= 0; --i) {
  if (result[i] !== "0") {
    break;
  }

  ++answer;
}

// ------- Good Code ----------

let n = +input;
let cnt = 0;
while (n > 0) {
  n = parseInt(n / 5, 10);
  cnt += n;
}
console.log(cnt);
