// 오브젝트로 생각했을 때

function solution(s) {
  let answer = "";
  const data = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let temp = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57) {
      answer += s[i];
    } else {
      temp += s[i];
      if (data.hasOwnProperty(`${temp}`)) {
        answer += data[`${temp}`];
        temp = "";
      }
    }
  }

  return Number(answer);
}

// 이것도 나쁘지 않군

function sol(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);

    answer = arr.join(i);
    console.log(arr, i, arr.join(i), answer);
  }

  return Number(answer);
}
sol("one4seveneight");


// 인덱스에 맞게 영어를 value로 갖는 array 생성
// 문자열 s를 정답 설정
// 정답문자열을 돌면서 0번째 인덱스의 문자열인 one으로 split()을 시킴
// one이 있으면 ['', 나머지]가 된다. one이 사라짐
// 그리고 나누어진 ['', 나머지]를 one의 숫자로 join()
// answer = '' + 1 + 나머지 = '1나머지
