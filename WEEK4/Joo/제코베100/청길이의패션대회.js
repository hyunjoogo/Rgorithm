// 대상배열에 없으면 넣고 있으면 무시

const input = "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3";
function solution(input) {
  const idx = input.split(/[0-9]번: /g);
  idx.shift();
  for (let i = 0; i < idx.length; i++) {
    //공백을 없애주고 ',' 단위로 잘라줍니다.
    idx[i] = idx[i].replace(/ /g, "").split(",");

    for (let j = 0; j < idx[i].length; j++) {
      idx[i][j] = parseInt(idx[i][j], 10);
    }
  }

  const list = [];

  for (let j of idx) {
    for (let k of j) {
      if (!list.includes(k)) {
        list.push(k);
      }
    }
  }
  return list;
}
console.log(solution(input));

// 1. 이 문제를 보고 어떻게 이 솔루션을 떠올렸지?
// 입력값을 자르는 것은 참고했다.
// 해당 리스트의 값이 없으면 리스트에 넣고
// 있으면 그냥 무시하면 된다.

// 2. 이것보다 더 좋은 방법은 없을까?
// 입력값을 자르는 것 말고는 없을 듯