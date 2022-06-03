function solution(strings, n) {
  const list = strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return a < b ? -1 : 1;
    return 0;
  });
  return list;
}

// sort() 함수에 대한 이해도가 필요한듯

// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환 //리턴값 있음
// 원 배열이 정렬되는 것에 유의하세요.

// 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.

const months = [5, 7, 2, 8];
months.sort((a, b) => a - b);

// compare(a , b)함수 (callback 함수)
// a, b를 비교했을 때 0 보다 작으면 a를 b보다 낮은 색인으로 정렬 (음수))
// 5 - 7 = -2 이므로 5가 앞으로

// a, b를 비교했을 때 0 보다 크면 b를 a보다 낮은 색인으로 정렬 (양수)
// 7 - 2 = 5 이므로 2가 앞으로

// a, b를 비교했을 때 0 이면 모든 다른 요소에 대해 정렬

// 위에는 +, -로 값을 리턴했을 때이다.
// 객체 안에 한 값을 보고 전체를 움직이려면
// 부등호를 이용하는 것도 방법이다.

// a > b일 때 return 1이면 b를 앞으로 보냄
// a > b일 때 return -1이면 a를 앞으로 보냄
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

items.sort((a, b) => {
  if (a.value > b.value) return -1;
  if (a.value < b.value) return 1;
  return 0;
});

