function solution(s) {

  const list = s.split(" ");
  const new_list = [];

  // 나눈 문자열을 돌면서 2~3번을 실행
  for (let i = 0; i < list.length; i++) {
    new_list.push(makeJadenClass(i, list));
  }

  return new_list.join(' ');
}

function makeJadenClass(i, list) {
  let result = "";
  for (let j = 0; j < list[i].length; j++) {
    if (j === 0) {
      if (48 <= list[i][j].charCodeAt() && list[i][j].charCodeAt() <= 57) {
        result += list[i][j];
      } else {
        result += list[i][j].toUpperCase();
      }
    } else {
      result += list[i][j].toLowerCase();
    }
  }

  return result;
}

solution("3people unFollowed me");

// 1. 받은 문자열을 나눈다.
// 2. 나눈 문자열의 첫자리를 구분한다.
// 숫자일 때
// 어떻게 판단? charCodeAt으로 판단
// 나머지 문자는 소문자로 변경
// 문자일 때
// 3. 첫문자열을 제외한 나머지를 소문자로 바꾸어준다.
// 4. 변경된 문자열을 합쳐서 출력한다.
