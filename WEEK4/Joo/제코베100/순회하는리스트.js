const l = [10, 20, 25, 27, 34, 35, 39];

const n = 3;

function rotate(inL, inN) {
  let turn = 1;
  const copyList = [...inL];
  while (turn <= inN) {
    // turn이 입력값보다 작은동안만
    copyList.unshift(copyList.pop());
    turn++;
  }

  const result = [];
  for (let i = 0; i < copyList.length; i++) {
    console.log(copyList[i], inL[i]);
    result.push(Math.abs(copyList[i] - inL[i]));
  }

  const index = result.indexOf(Math.min.apply(null, result));
  console.log("index", index);
  console.log(copyList[index], inL[index]);
}

rotate(l, n);

// 1. 이 문제를 보고 어떻게 이 솔루션을 떠올렸지?
// 순회하는 리스트는 앞이나 뒤의 요소를 빼서 뒤나 앞으로 옮겨주는 방식
// 즉, 하나를 빼서 어딘가에 넣으면 된다. 차례대로 실행하면 됨

// 2. 이것보다 더 좋은 방법은 없을까?
// while문 대신 for문도 괜찮을듯