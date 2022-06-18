function solution(numbers) {
  let answer = 0;
  const numArr = numbers.split("");
  // console.log(numArr);
  const permutationAll = [];
  for (let r = 1; r <= numbers.length; r++) {
    console.log("r :", r);
    const R = Permutation(numArr, r);

    const permutationR = R.map((arr) => parseInt(arr.join("")));
    console.log("R", R);
    for (let i = 0; i < permutationR.length; i++)
      permutationAll.push(permutationR[i]);
  }
  const permutationSet = [...new Set(permutationAll)];
  for (const number of permutationSet) {
    if (isPrime(number)) answer += 1;
  }
  return answer;
}

function Permutation(arr, r) {
  const result = [];
  if (r === 1) {
    return arr.map((num) => [num]);
  }
  arr.forEach((fixed, index, org) => {
    console.log(fixed, index, org, [
      ...org.slice(0, index),
      ...org.slice(index + 1),
    ]);

    const rest = [...org.slice(0, index), ...org.slice(index + 1)];

    const permutation = Permutation(rest, r - 1);

    const attached = permutation.map((numbers) => [fixed, ...numbers]);

    result.push(...attached);
  });
  return result;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

// solution("17");
solution("011");
