//  순열
const input = [1, 7, 2, 3];

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  }

  arr.forEach((fixed, index, origin) => {
    console.log("고정 : ", fixed);
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    console.log(rest);
    // 해당하는 fixed를 제외한 나머지 배열 반환해준다. (1=> 2,3 / 2 => 1,3 / 3 => 1,2)

    const permutations = getPermutations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구한다.
    // getPermutations([3], 1)

    const attached = permutations.map((permutation) => [fixed, ...permutation]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두 다 push
  });

  return results; // 결과가 담긴 results를 return
};

console.log(getPermutations(input, 2));

// 조합과 다른 점
// 조합은 고정점 뒤에 있는 값들에 대해서 구하고
// 순열은 고정점을 제외한 값들에 대해서 구하는 것
