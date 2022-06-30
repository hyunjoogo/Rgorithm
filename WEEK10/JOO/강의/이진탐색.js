const arr = [1, 2, 3, 5, 6, 7, 8, 10, 15, 36];
const target = 15;

function search(array, value) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2); 
    let currentElement = array[middle];

    if (currentElement > value) {
      max = middle - 1;
    } else if (currentElement < value) {
      min = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search(arr, target));

// naive solution
// 0번째부터 arr를 for문으로 돌면서 같으면 리턴하는 방식
// 없다면 -1 리턴
// O(N)

// Refactor
// !!대상 arr는 순서정렬이 되어 있어야 한다.
// 대충 여기를 중간으로 잡고 target이 중간값보다 큰지 작은지 비교
// 크다면 작은 숫자는 찾는 대상에서 제외하고
// 큰 숫자 중에 중간값을 잡고 다시 target과 중간값이 큰지 작은지 비교
// ...
// 해당 숫자가 없으면 -1 리턴
// Log(N)
