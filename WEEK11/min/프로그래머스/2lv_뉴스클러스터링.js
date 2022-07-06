function solution(str1, str2) {
  var answer = 0;
  let str1Arr = [];
  let str2Arr = [];

  for (let i = 0; i < str1.length - 1; i++) {
    let one = str1[i].toUpperCase();
    let two = str1[i + 1].toUpperCase();
    if (
      one.charCodeAt() >= 65 &&
      one.charCodeAt() <= 90 &&
      two.charCodeAt() >= 65 &&
      two.charCodeAt() <= 90
    ) {
      str1Arr.push(one + two);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    let one = str2[i].toUpperCase();
    let two = str2[i + 1].toUpperCase();
    if (
      one.charCodeAt() >= 65 &&
      one.charCodeAt() <= 90 &&
      two.charCodeAt() >= 65 &&
      two.charCodeAt() <= 90
    ) {
      str2Arr.push(one + two);
    }
  }

  let sameArr = [];
  for (let i = 0; i < str1Arr.length; i++) {
    for (let j = 0; j < str2Arr.length; j++) {
      if (str1Arr[i] === str2Arr[j]) {
        sameArr.push(str1Arr[i]);
        str2Arr[j] = 0;
        break;
      }
    }
  }

  let jaCard = 0;

  if (str1Arr.length === 0 && str2Arr.length === 0) {
    jaCard = 1;
  } else {
    if (sameArr.length === 0) {
      jaCard = 0;
    } else {
      jaCard =
        sameArr.length / (str1Arr.length + str2Arr.length - sameArr.length);
    }
  }
  answer = Math.floor(65536 * jaCard);

  return answer;
}

/* 두 문자열을 해당 조건에 맞는 배열로 각각 따로 만든후
  두 배열을 돌면서 교집합을 찾아 합집합과 교집합을 이용해서 자카드 수를 구했다.

  주의할점은 문제에서 두 배열이 모두 공배수 일경우 자카드 수는 무조건 1로 주라는 부분과
  중복되는 원소가 있을 때는 하나로 치는게 아닌 따로 따로 있다고 생각하고 처리하는 부분이다.

  이 두가지 주의할점의 예외케이스를 주지 않아서 계속 에러가 발생했었다.
  문제가 길수록 모든 조건을 꼼꼼히 보는게 중요!!!

*/
