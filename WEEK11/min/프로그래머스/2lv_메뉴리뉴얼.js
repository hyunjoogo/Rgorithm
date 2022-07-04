function solution(orders, course) {
  var answer = [];
  for (const selectNum of course) {
    let combinations = [];
    for (const order of orders) {
      getCombinations(Array.from(order), selectNum)
        .map((combination) => combination.sort().join(""))
        .forEach((combString) => combinations.push(combString));
    }
    const combCounts = combinations.reduce((counts, combination) => {
      counts[combination] = (counts[combination] || 0) + 1;
      return counts;
    }, {});
    let maxCount = 0,
      maxComb = [];
    for (const comb in combCounts)
      if (combCounts[comb] >= maxCount) maxCount = combCounts[comb];
    for (const comb in combCounts)
      if (combCounts[comb] === maxCount && maxCount >= 2) maxComb.push(comb);

    answer.push(...maxComb);
  }
  answer.sort();
  return answer;
}

function getCombinations(array, selectNum) {
  const result = [];
  if (selectNum === 1) {
    return array.map((item) => [item]);
  }
  array.forEach((fixed, index, origin) => {
    const restCombinations = getCombinations(
      origin.slice(index + 1),
      selectNum - 1
    );
    const attached = restCombinations.map((restCombination) => [
      fixed,
      ...restCombination,
    ]);
    result.push(...attached);
  });
  return result;
}

// 조합 문제인데 다른 사람이 보는 코드를 참고하면서 작성했다.
// js 문법 자체에 대한 부족함을 느껴서 그 부분을 보충하면서 공부해야겠다.
