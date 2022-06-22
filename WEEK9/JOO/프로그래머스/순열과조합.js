function sol(numbers) {
  let answer;

  answer = getCombination(numbers, numbers.length);
  return answer;
}

function getCombination(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((v) => [v]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getCombination(rest, selectNumber - 1);
    const attached = permutations.map((v) => [fixed, ...v]);
    results.push(...attached);
  });

  return results;
}

const test1 = [6, 10, 2];
const test2 = [3, 30, 34, 5, 9];

sol(test1);
