const scores = "97 86 75 66 55 97 85 97 97 95 85".split(" ");

console.log(scores.sort((a, b) => a - b));

// 1. 오름차순 정렬
// 2. 큰 숫자 3가지를 골라서 다른 곳으로 옮겨
// 3. 옮길때 카운트를 세

let top3 = [];
let count = 0;

while (top3.length < 4) {
  // sort한 array의 마지막을 뺀다
  let value = scores.pop();
  // top3에 없으면 넣는다.
  if (!top3.includes(value)) {
    top3.push(value);
  }
  // top3에 이미 들어가 있더라도 카운트는 올라간다.
  count++ - 1;
  // 4등까지 들어가는데 length가 4가 되는 순간
  // 멈추기때문에 공동 4등은 생각안해도 된다.
  // 다만 카운터는 4등이 들어가면서 하나 올라가기 때문에 하나를 빼야한다.
}
