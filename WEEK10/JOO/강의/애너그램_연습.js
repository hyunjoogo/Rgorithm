// 조건1. 같은 길이의 문자열이어야한다
// 조건2. 문자의 순서는 바뀌어도 되지만 빈도는 바뀌면 안된다.


const validate = (str1, str2) => {
  // 조건1. 적용
  if (str1.length !== str2.length) {
    return false;
  }
  // 빈문자열 2개와 빈문자열 3개는?
  if (str1 === str2) {
    return true;
  }
  // 1. 각각 문자열 오브젝트로 만들기
  // A문자열을 돌면서 각 문자당 빈도수를 {문자 : 빈도수 }로 AObj에 할당한다..
  const frequencyStr1 = {};
  for (let key of str1.toLowerCase()) {
    frequencyStr1[key] = (frequencyStr1[key] | 0) + 1;
  }
  // B문자열을 돌면서 각 문자당 빈도수를 {문자 : 빈도수 }로 BObj에 할당한다..
  const frequencyStr2 = {};
  for (let key of str2.toLowerCase()) {
    frequencyStr2[key] = (frequencyStr2[key] | 0) + 1;
  }


  // 2. A오브젝트를 키루프를 돌면서 B오브젝트와 비교를 한다.
  for (let key in frequencyStr1) {
    // 2.1 만약 그 키가 B에 A가 없다면 false 리턴
    if (!(key in frequencyStr2)) {
      return false;
    }
    // 2.2 빈도값이 같지 않으면 false리턴
    if (frequencyStr1[key] !== frequencyStr2[key]) {
      return false;
    }
  }

  // 3. 모두 통과하면 true 리턴
  return true;
};
console.log(validate('asdfw', 'eeeeq'));


function validAnagram(first, second) {
  // 조건1 동일
  if (first.length !== second.length) {
    return false;
  }

  let lookUp = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // first문자열의 문자와 빈도수를 obj형식으로 만든다.
    lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
  }
  // second문자열을 루프를 돌면서
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // 문자가 lookup에 없으면 false
    if (!lookUp[letter]) {
      return false;
    }
    // 아니면 lookup의 빈도수를 하나 줄인다.
    else {
      lookUp[letter] -= 1;
    }
  }
  return true;
}
console.log(validAnagram('asdfw', 'asfdw'));
