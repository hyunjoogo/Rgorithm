// 병합정렬은 대표적인 정렬 알고리즘 중 하나
// 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

// 분할부분
function mergeSort(arr) {
  // 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
  if (arr.length <= 1) {
    return arr;
  }

  // 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
  return merge(mergeSort(left), mergeSort(right));
}

// 정렬하고 합치는 부분
function merge(left, right) {
  let result = [];

  // 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

  // 왼쪽, 오른쪽 양쪽에 값이 있다면
  // 왼쪽이 크면 오른쪽꺼를 빼서 넣는다
  // 오른쪽이 크면 왼쪽꺼를 빼서 넣는다
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // 0번째 인덱스끼리 비교할 때 오른쪽이 다 비어있다면
  // 왼쪽 요소를 결과값에 추가하면 된다.
  while (left.length) {
    result.push(left.shift());
  }
  // 0번째 인덱스끼리 비교할 때 왼쪽이 다 비어있다면
  // 오른쪽 요소를 결과값에 추가하면 된다.
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = "1 3 5 4 8 6 7 2".split(" ").map((n) => parseInt(n, 10));

console.log("마지막", mergeSort(array));

/*
[1, 3, 5, 4, 8, 6, 7, 2]
[1, 3, 5, 4], [8, 6, 7, 2]
[1, 3], [5, 4], [8, 6], [7, 2]
[1], [3], [5], [4], [8], [6], [7], [2]

// 병합시작
[1, 3], [4, 5], [6, 8], [2, 7]
// 항상 0번째 인덱스를 비교
[1, 3, 4, 5], [2, 6, 7, 8]
// 항상 0번째 인덱스를 비교
*/
