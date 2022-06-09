function solution(numbers, hand) {
  var answer = "";
  let nowLeft = "*";
  let nowRight = "#";
  const numberInfo = [
    [4, 2],
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
    [4, 1],
    [4, 3],
  ];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answer += "L";
      nowLeft = numbers[i];
      continue;
    }

    if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answer += "R";
      nowRight = numbers[i];
      continue;
    }

    if (
      numbers[i] === 2 ||
      numbers[i] === 5 ||
      numbers[i] === 8 ||
      numbers[i] === 0
    ) {
      if (nowLeft === "*") {
        nowLeft = 10;
      } else if (nowRight === "#") {
        nowRight = 11;
      }
      let leftDistance = Math.abs(
        Math.abs(numberInfo[nowLeft][0] - numberInfo[numbers[i]][0]) +
          Math.abs(numberInfo[nowLeft][1] - numberInfo[numbers[i]][1])
      );
      let rightDistance = Math.abs(
        Math.abs(numberInfo[nowRight][0] - numberInfo[numbers[i]][0]) +
          Math.abs(numberInfo[nowRight][1] - numberInfo[numbers[i]][1])
      );

      if (leftDistance > rightDistance) {
        answer += "R";
        nowRight = numbers[i];
      } else if (leftDistance < rightDistance) {
        answer += "L";
        nowLeft = numbers[i];
      } else {
        if (hand === "left") {
          answer += "L";
          nowLeft = numbers[i];
        } else {
          answer += "R";
          nowRight = numbers[i];
        }
      }
    }
  }

  return answer;
}
