// (,)의 숫자가 같아야하고
// )로 시작하면 안되고
//

// ) true
// ( false

function solution(s) {
  var answer = true;
  s = s.replace(/(\(\))+/g, "");
  const list = s.split("");

  let flag = "";
  let leftBraket = 0; // (
  let rightBraket = 0; // )

  for (let i of list) {
    if (i === "(") {
      leftBraket++;
      flag = false;
    } else if (i === ")") {
      rightBraket++;
      flag = true;
    }
  }

  return answer;
}

solution("())))(((");
