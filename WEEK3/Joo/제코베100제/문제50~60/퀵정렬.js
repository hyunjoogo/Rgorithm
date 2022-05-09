function quickSort(arr) {
  // 1. 리스트의 크기가 0 또는 1이면 정렬된 것으로 본다.
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // 첫번째값, 중앙인덱스값, 마지막값을 지정하는 세가지 방법이 있다.
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

const array = "5 3 8 4 9 1 6 2 7".split(" ").map((n) => parseInt(n, 10));

console.log(quickSort1(array));

function quickSort1(arr) {
  // 1. 리스트의 크기가 0 또는 1이면 정렬된 것으로 본다.
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[parseInt(arr.length / 2)]; // 첫번째값, 중앙인덱스값, 마지막값을 지정하는 세가지 방법이 있다.
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === parseInt(arr.length / 2)) {
      continue;
    }
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

// parseInt(length / 2) 중앙값

/*
[5, 3, 8, 4, 9, 1, 6, 2, 7] => 피벗 : 5
[3, 4, 1, 2 ] [5] [8, 9, 6, 7]

[1,2] [3] [4] [5]


*/
