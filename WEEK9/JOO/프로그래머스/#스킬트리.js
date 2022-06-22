function solution(skill, skill_trees) {
  let count = 0;
  for (let tree of skill_trees) {
    const hasSkillList = Array.from(tree).filter((x) => skill.includes(x));
    const indexList = hasSkillList.map((v) => skill.indexOf(v));
    if (checkIndex(indexList)) {
      count++;
    }
  }
  return count;
}

function checkIndex(indexList) {
  for (let i = 0; i < indexList.length; i++) {
    if (indexList[i] !== i) {
      return false;
    }
  }
  return true;
}

// skill[0]이 없으면 탈락, skill[0]보다 앞에 나머지가 있으면 탈락,
// skill[0]과 skill[1] 사이에 skill[2]가 있으면 탈락 등으로 제외할 것을 찾았는데
// 너무 변수가 많았다. 3개 이상이 되었을때를 대비하기 힘들다.

// 해답
// 1. 각각의 트리에서 스킬에 포함되는 것을 제외한다.
// 2. 제외한 나머지 트리와 스킬을 비교하여 스킬 각 문자의 인덱스에 맞게 값을 설정해준다.
// 3. 스킬문자의 순서와 인덱스에 맞게 설정한 배열을 비교하여 순서가 맞으면 카운트를 업해준다.

// 자세한 풀이
// 1. 각각의 트리를 문자별로 나누어 배열에 넣는다.
// - for of 문을 돌면서 skill_trees를 tree로 순회시키면서
// - Array.from(tree)로 [B,A,C,D,E] 배열로 만듬

// 2. 그 배열을 순회하며 문자가 skill에 포함이 되어 있다면 새로운 배열에 포함시킨다.
// - [B,A,C,D,E].filter() 로 순회하고
// - 콜백함수 skill.includes(문자)가 true인 문자만 반환되어 새로운 배열( [B,C,D] )을 리턴
// - skill에 있는 것만 빼낸다.

// 2.1 skill에 포함된 문자가 있는 배열을 순회하면서 skill문자의 몇번째 인덱스값인지를 알 수 있는 배열을 만든다.
// - [B,C,D].map() 로 순회하고
// - 콜백함수 skill.indexOf(문자)의 값을 반환하여 새로운 배열 ( [1,0,2] )을 리턴
// - 2번에서 리턴받은 배열의 값들이 skill 문자의 몇번째인지 구하는 방식이다.
// - 여기서 리턴된 배열의 각각의 값은 skill(CBD)의 위치이다. B는 1번째, C는 0번째, D는 2번째 위치해있다.

// 3. 2.1에서의 배열의 값(인덱스)과 순회하는 i가 하나라도 다르면 false를 반환하고 다 같으면 true를 반환하는 함수를 생성한다.
// - checkIndex(배열) 2.1에서 리턴된 배열을 파라미터로 받는 함수 생성
// - 함수 안에서 for문을 돌면서 파라미터 배열과 for문 i가 다르면 바로 false를 리턴, 문제가 없으면 (다 같으면 ) true를 리턴한다.
// - 파라미터 배열 ([1,0,2])이 0,1,2 순으로 되어 있지 않으면 skill의 순서와 주어진 tree의 순서가 맞지 않다는 이야기다.

// 3.1 true가 반환되면 카운터에 +1 한다.
// - 1번 for of문이 종료되기 전에 3번의 함수의 리턴값이 true이면 카운터를 업해준다.
