function solution(sizes) {
  var answer = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      let tmp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = tmp;
    }
  }

  const wMax = selectWidth(sizes);
  const hMax = selectHeight(sizes);
  answer = wMax * hMax;

  return answer;
}

function selectWidth(sizes) {
  let max = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (max < sizes[i][0]) {
      max = sizes[i][0];
    }
  }
  return max;
}

function selectHeight(sizes) {
  let max = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (max < sizes[i][1]) {
      max = sizes[i][1];
    }
  }
  return max;
}
