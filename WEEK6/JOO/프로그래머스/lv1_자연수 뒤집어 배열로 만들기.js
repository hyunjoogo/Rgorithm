function solution(n) {
  // 문자풀이
  // return (n+"").split("").reverse().map(v => parseInt(v));

  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10); // arr.push(1의 자리수)
    n = Math.floor(n / 10);
    // 10으로 나눈 몫을 소수버림한 값을 n에 할당
    // 12345 => 1234
  } while (n > 0);

  return arr;
}

console.log(solution(34342));
