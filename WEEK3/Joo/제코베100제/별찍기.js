const level = 5;

for (let i = 1; i <= level; i++) {
  let tree = "";
  // 공백을 줄어들게 하는 변수를 찾아라
  for (let k = 1; k <= level - i; k++) {
    tree = tree + " ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    tree = tree + "*";
  }
  console.log(tree);
}

// 마지막 * 뒤에 공백은 왜 생각했니...?
// 2n-1은 홀수 , 2n은 짝수
