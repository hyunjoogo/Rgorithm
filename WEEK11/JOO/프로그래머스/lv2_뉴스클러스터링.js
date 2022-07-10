function solution(str1, str2) {
  console.log(str1, str2);
  const str1Arr = makeSet(str1);
  const str2Arr = makeSet(str2);
  let target = [...str2Arr];
  if (str1Arr.length === 0 && str2Arr.length === 0) {
    return 65536;
  }

  const intersection = []; // 교집합
  const union = []; // 합집합
  console.log(str1Arr, str2Arr);

  for (let i = 0; i < str1Arr.length; i++) {
    let flag = false;
    for (let j = 0; j < str2Arr.length; j++) {
      if (str1Arr[i] === str2Arr[j]) {
        intersection.push(str1Arr[i]);
        union.push(str1Arr[i]);
        let targetIndex = target.findIndex((value) => value === str1Arr[i]);
        target.splice(targetIndex, 1);

        flag = true;
        break;
      }
    }
    // 다 돌았는데 없어
    if (!flag) {
      union.push(str1Arr[i]);
    }
    console.log(i, intersection, union, target);
  }

  // 모든 for문 종료
  console.log(intersection, union, target);
  union.push(...target);
  console.log("최종답", intersection, union);
  console.log(Math.floor((intersection.length / union.length) * 65536));
}
/*
이중 for문
- 동일한 놈이 있니?
- 있어 > 교집합에 넣어, 합집합에 넣어, 대상에서 지워, 멈춰
- 다 돌았는데 없어 > 합집합에 넣어, 대상에서 지워

[
  'ha', 'an', 'nd',
  'ds', 'sh', 'ha',
  'ak', 'ke'
] [
  'sh', 'ha', 'ak',
  'ke', 'ha', 'an',
  'nd', 'ds'
]

[ 'ak','ke', 'ha']

교집합 ha, an, nd, ds, sh
합집합 ha, an, nd, ds, sh

모든 for문 종료
- 합집합에 나머지 대상들 넣어

교집합은 {FR, NC}, 
합집합은 {FR, RA, AN, NC, CE, RE, EN, CH}
*/

function makeSet(str) {
  const array = [];
  for (let i = 0; i < str.length - 1; i++) {
    let first = str[i].toLowerCase();
    let second = str[i + 1].toLowerCase();
    if (
      97 <= first.charCodeAt() &&
      first.charCodeAt() <= 122 &&
      97 <= second.charCodeAt() &&
      second.charCodeAt() <= 122
    ) {
      array.push(first + second);
    }
  }
  return array;
}

const test = [
  ["FRANCE", "french"],
  ["handshake", "shake hands"],
  ["aa1+aa2", "AAAA12"],
  ["E=M*C^2", "e=m*c^2"],
  ["abcd", "abcfg"],
];

solution(test[2][0], test[2][1]);
