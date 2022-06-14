function solution(arr1, arr2) {
  const [row, col] = [arr1.length, arr2[0].length];
  let answer = new Array(row);
  for (let i = 0; i < row; i++) {
    answer[i] = new Array(col);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      answer[i][j] = arr1[i].reduce(
        (sum, arr1Value, rowIndex) => sum + arr1Value * arr2[rowIndex][j],
        0
      );
    }
  }

  return answer;
}

const test1 = [
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ],
];

const test2 = [
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ],
];

const [arr1, arr2] = test1;
solution(arr1, arr2);
