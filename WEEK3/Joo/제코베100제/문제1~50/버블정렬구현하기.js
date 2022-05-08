// 버블정렬 : 두 인접한 원소를 검사하여 정렬하는 방법

const items = "4 2 3 8 5".split(" ").map((n) => {
  return parseInt(n, 10);
});

function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      console.log(result[i], result[j]);
      if (result[j] > result[j + 1]) {
        let value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }
  return result;
}

console.log(bubble(items));
