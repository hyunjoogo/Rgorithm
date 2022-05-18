const value = "0 1 0 0 0\n0 0 0 2 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";
const split = value.split("\n");
const list = [];

for (let i of split) {
  list.push(i.replace("1", "f").split(" "));
}
for (let i = 0; i < list[0].length; i++) {
  for (let j = 0; j < list[0].length; j++) {
    if (list[i][j] === "f") {
      // 왼쪽 오른쪽이 없을 때
      // 왼쪽 : j가 0일때는 패스
      // 오른쪽 : j가 length-1일 때 패쓰
      list[i][j - 1] = "*";
      list[i][j + 1] = "*";

      // 위 아래가 없을 때
      if (i === 0) {
      } else {
        list[i - 1][j] = "*";
      }
      list[i + 1][j] = "*";
    }
  }
}
console.log(list);

// 1. 나는 어떤 생각을 하다가 막혔는지?
// 2차원 배열을 만들고 조건에 맞는 요소의 주변값을 바꾸는 것에서 막힘
// 의외로 간단했다. i, j의 +1, -1을 해가면 되고
// 범위에서 벗어나는 것은 예외처리하면 된다.

// 2. 다음에는 어떻게 풀 수 있을까?
// 2차원배열은 줄에 해당하는 i와 번째에 해당하는 j가 있다.
// 풀이에는 for of + 변수 추가로 접근하는 방법도 있었다.
// 예외처리만 잘하면 잘 풀릴듯하다.
