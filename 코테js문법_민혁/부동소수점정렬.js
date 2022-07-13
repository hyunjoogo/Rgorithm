// 배열에서 사용하는 내부 메서드중에 sort() 정렬은 문자나 숫자를 자동으로 정렬해준다.
// 하지만 0.xxxxx 로 시작하는 소수점의 경우에는 어떻게 정렬하는지 알아보기 위한 파일이다.

const currentClinetHeight = [0.233333, 0, 0.423213, 0.623123];
currentClinetHeight.sort((a, b) => b - a);

console.log(currentClinetHeight); // 정상적으로 잘 정렬된다.

const clientWeight = [
  [0.125, 1],
  [0.428, 2],
  [0.5, 3],
  [0.5, 4],
  [0, 5],
];

clientWeight.sort((a, b) => b[0] - a[0]);

console.log(clientWeight);

// 이중 배열의 경우 정렬하려면 해당 인덱스를 위에 코드처럼 붙혀야 제대로 동작한다.
