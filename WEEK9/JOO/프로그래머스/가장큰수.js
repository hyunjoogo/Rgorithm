function solution(numbers) {
  var answer = "";
  numbers.sort(sortFunc);
  answer = numbers.join("");
  if (answer[0] === "0") return "0";
  return answer;
}
const sortFunc = (a, b) => {
  const compareA = parseInt(a.toString() + b.toString());
  const compareB = parseInt(b.toString() + a.toString());
  console.log(a, b, a.toString(), b.toString(), compareB - compareA);
  return compareB - compareA;
};

const test1 = [6, 10, 2];
const test2 = [3, 30, 34, 5, 9];

solution(test1);
// 6, 10 비교해서 610 , 106 준비
// 106 - 610 음수이므로 [6, 10] 순으로
// 10, 2를 넣고 102, 210 준비
// 210 - 102 양수이므로 [2, 10] 순으로
// 6, 2 비교해서 62, 26 준비
// 26 - 62 음수이므로 [6, 2] 순으로
// 3가지를 비교했을 때 [ 6, 2, 10 ] 순으로 정렬이 됨

// 원본 두 수를 조합한 숫자로 비교해서 큰수가의 조합을
// 원본 두 수의 순서로 바꾸는 것을 어떻게 생각했을까?
