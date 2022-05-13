const 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
// const 탑 = ["ABCDEF"];
const 규칙 = "ABD";

const s = "ABCDEF";
function solutions(전체블록, 규칙) {
  let answer = [];
  for (let 부분블록 of 전체블록) {
    answer.push(블록순서체크(부분블록, 규칙));
  }
  return answer;
}

function 블록순서체크(부분블럭, 규칙) {
  console.log(부분블럭);

  let index = 규칙.indexOf(규칙[0]);
  for (let i of 부분블럭) {
    console.log(규칙.includes(i));
    if (규칙.includes(i)) {
      if (index > 규칙.indexOf(i)) {
        return "False";
      }
      index = 규칙.indexOf(i);
    }
  }
  return "True";
}

console.log(solutions(탑, 규칙));
