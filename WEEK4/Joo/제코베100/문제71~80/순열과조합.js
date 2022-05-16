/*
시작
    1을 선택(고정)하고 -> 나머지 [2,3,4] 중에서 2개씩 조합을 구한다. 
    그리고 그 각각을 고정했던 1에 이어붙인다.
    [1,2,3], [1,2,4], [1,3,4]

    2를 선택(고정)하고 -> 나머지 [3,4] 중에서 2개씩 조합을 구한다. 
    그리고 그 각각을 고정했던 2에 이어붙인다.
    [2,3,4]

    3을 선택(고정)하고 -> 나머지 [4] 중에서 2개씩 조합을 구한다.
    []

    4을 선택(고정)하고 -> 나머지 [] 중에서 2개씩 조합을 구한다.
    []
종료
*/


const input = [1, 2, 3];

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  }

  arr.forEach((fixed, index, origin) => {
    console.log(fixed);
    const rest = origin.slice(index + 1);
    console.log(rest);
    // 해당하는 fixed를 제외한 나머지 뒤를 반환해준다. [2,3]

    const combinations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구한다.
    // getCombinations([3], 1)

    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두 다 push
  });

  return results; // 결과가 담긴 results를 return
};

console.log(getCombinations(input, 2));

// 1. 나는 어떤 생각을 하다가 막혔는지?
// 조합이라는 것을 만든다는 것에서 막혔다.
// 1을 고정하고 2,3 의 조합을 구한다. 2 또는 3이 붙는다.
// [1,2] , [1,3]
// 2를 고정하고 3의 조합을 구한다.
// [2, 3]

// 2. 다음에는 어덯게 풀 수 있을가?
// 이 코드는 계속 봐봐야겠다.

// https://pul8219.github.io/algorithm/algorithm-permutation-and-combination/

