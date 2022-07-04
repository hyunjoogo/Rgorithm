// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 6, 8, 9, 13, 15, 28, 30], 28);
// [2, 6, 8, 9, 13, 15, 28, 30]
// S         M               E
// 첫번째 이동 : 이미 M값과 같지 않으므로 M보다 +-1를 하면 된다.
// [2, 6, 8, 9, 13, 15, 28, 30]
//              S    M       E
// 두번째 이동 : 이미 M값과 같지 않으므로 목표값보다 작으므로 S를 M+1 위치로 옮긴다.
// 그리고 나서 S, E의 중간값이 M을 구한다.
// [2, 6, 8, 9, 13, 15, 28, 30]
//                      SM  E
// 중간값과 목표값이 일치
// while문 종료
// return middle 

// 만약 값이 없다면? (중단조건)
// 아래의 상황에서 29가 목표값이면 다시 while문으로 들어간다.
// [2, 6, 8, 9, 13, 15, 28, 30]
//                      SM  E
// S는 M+1 인덱스로 이동하고 (S + E) /2가 M이다.
// [2, 6, 8, 9, 13, 15, 28, 30]
//                          SME
// M값이 목표값이 아니다. 그럼 while문으로 이동하고 인덱스가 범위를 넘어선다.
// 그래서 while문 조건에 start <= end를 하면 start가 end를 넘어가면 while문을 타지 않는다.

// 하지만 while문이 종료가 되면 middle값 리턴하므로 조건문을 만든다.
// middle 인덱스 값과 목표값이 같으면 middle을 리턴하고 
// 아니면 값이 없는 것이므로 -1을 리턴하면 된다.
