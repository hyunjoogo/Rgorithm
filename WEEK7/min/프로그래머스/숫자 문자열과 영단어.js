function solution(s) {
  let answer = 0;
  let result = [];
  let count = 0;

  while (count < s.length) {
    if (s[count] === "z") {
      count += 4;
      result.push(0);
    } else if (s[count] === "o") {
      count += 3;
      result.push(1);
    } else if (s[count] === "e") {
      count += 5;
      result.push(8);
    } else if (s[count] === "n") {
      count += 4;
      result.push(9);
    } else if (s[count] === "t") {
      if (s[count + 1] === "w") {
        count += 3;
        result.push(2);
      } else {
        count += 5;
        result.push(3);
      }
    } else if (s[count] === "f") {
      if (s[count + 1] === "o") {
        count += 4;
        result.push(4);
      } else {
        count += 4;
        result.push(5);
      }
    } else if (s[count] === "s") {
      if (s[count + 1] === "i") {
        count += 3;
        result.push(6);
      } else {
        count += 5;
        result.push(7);
      }
    } else {
      result.push(s[count]);
      count += 1;
    }
  }
  answer = Number(result.join(""));

  return answer;
}

// 문제 자체는 쉬웠지만 너무 노가다로 작성했다. 더 좋으 방법이 있는지 다른사람 풀이도 봐야할꺼같다.
