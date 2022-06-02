function makeArray(arr) {
  let cnt = 1;
  const result = [];
  const selectNumArr = [];

  for (let i = 0; i < arr.length; i++) {
    let selectedNum = arr[i];
    if (selectNumArr.includes(selectedNum)) {
      continue;
    } else {
      for (let j = i + 1; j < arr.length; j++) {
        if (selectedNum === arr[j]) {
          cnt += 1;
        }
      }
      if (cnt >= 2) {
        result.push(cnt);
        selectNumArr.push(selectedNum);
      }
      cnt = 1;
    }
  }
  if (result.length === 0) {
    console.log([-1]);
  } else {
    console.log(result);
  }
}

makeArray([8, 1, 1, 1, 8, 2, 3, 4, 4, 7, 1]);
