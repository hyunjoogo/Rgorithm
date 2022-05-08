const input = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(" ");
let result = {};
let winner = "";

for (const index of input) {
  result[index] = !result[index] ? 1 : (result[index] += 1);
}
const test = { a: 2, b: 1, c: 3 };

winner = Object.keys(result).reduce((a, b) => {
  return result[a] > result[b] ? a : b;
});
console.log(winner);

// reduce
// a, b => 결과값을 a에 중첩한다.
// a 자리가 누적값을 저장하는 위치
// 콜백함수에서 내 마음대로 해도 된다
// 순환이 끝나면 a를 반환한다.
