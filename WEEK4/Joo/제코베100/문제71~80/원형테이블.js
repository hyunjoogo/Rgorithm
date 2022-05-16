/* 
입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력됩니다.
첫 번째 숫자가 음식의 개수 N, 두 번째 숫자가 K입니다.
첫 번째 가져가는 음식이 K 번째 음식이며 나머지는 첫 번째 음식으로부터 시계방향으로 가져갑니다.

입력
6 3

마지막으로 남는 2개 음식은 어떤 접시인가요?


남은 음식들의 번호를 배열의 형태로 출력합니다.

출력
[3, 5]

*/

const n = 6; // 음식의 갯수
const k = 3; // 첫번째 가지고 가는 K번째 음식

function sol(n, k) {
  let index = 0; //삭제한 인덱스
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i + 1);
  }
  while (result.length > 2) {
    // 랭스가 2보다 큰 동안만
    if (index > result.length - 1) {
      // 인덱스는 0부터 시작이니까
      index -= result.length; // 이래야지 한바퀴 도는 것과 같은 효과가 난다.
      console.log(index, result.length);
    }
    result.splice(index, 1);
    index += k - 1; // 인덱스는 0부터 시작해서 3번째가 0,1,2번째이다 그래서 -1
    console.log(result);
  }

  return result;
}
console.log(sol(n, k));


// 1. 나는 어떤 생각을 하다가 막혔는가?
// 리스트를 회전시키는 방법이 안 떠오름
// ?번째 음식을 리스트에 대입시켜서 카운팅 하는 방법

// 2. 다음에는 어떻게 풀 수 있을지?
// 리스트는 가만히 있고 index를 돌린다는 개념으로 가자
// index가 리스트의 길이 -1 보다 크면 범위를 벗어난 것이니까
// index에서 리스트의 길이를 빼면 다시 앞으로 돌아오는 것

// ?번째 index는 인덱스를 특정수 -1 만큼 더하면 된다.
// index는 0부터 시작이니까 1빼야한다.


// 어레이를 한칸씩 돌리는 로직
const array = [1, 2, 3, 4, 5, 6];

let turn = 1;
while (turn < 6) {
  array.push(array[0]);
  array.splice(0, 1);
  console.log(array);
  turn++;
}
