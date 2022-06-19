function solution(numbers) {
  var answer = 0;
  let numberAry = [];
  for (let i = 0; i < numbers.length; i++) {
    numberAry.push(numbers[i]);
  }

  let makeNumber = [];

  // 모든 수의 경우의 수 찾기
  for (let i = 0; i < numberAry.length; i++) {
    let num = numberAry[i];

    if (num !== "0" && num !== "1") {
      if (!makeNumber.includes(num)) {
        makeNumber.push(num);
      }
    }

    if (numberAry.length >= 2) {
      for (let j = i + 1; j < numberAry.length; j++) {
        let nums;

        if (num === "0") {
          if (numberAry[j] !== "0") {
            nums = numberAry[j];
          } else {
            continue;
          }
        } else {
          nums = num + numberAry[j];
        }

        if (!makeNumber.includes(nums) && nums !== "1") {
          makeNumber.push(nums);
        }
        for (let j = i - 1; j >= 0; j--) {
          nums = nums + numberAry[j];
          if (!makeNumber.includes(nums)) {
            makeNumber.push(nums);
          }
        }
      }

      for (let j = i - 1; j >= 0; j--) {
        let nums;
        if (num === "0") {
          if (numberAry[j] !== "0") {
            nums = numberAry[j];
          }
        } else {
          nums = num + numberAry[j];
        }
        if (!makeNumber.includes(nums) && nums !== "1") {
          makeNumber.push(nums);
        }
        for (let j = i + 1; j < numberAry.length; j++) {
          nums = nums + numberAry[j];
          if (!makeNumber.includes(nums)) {
            makeNumber.push(nums);
          }
        }
      }
    }
  }

  // 소수인지 판다

  for (let i = 0; i < makeNumber.length; i++) {
    let isSqrt = true;
    for (let j = 2; j < makeNumber[i]; j++) {
      if (makeNumber[i] % j === 0) {
        isSqrt = false;
        break;
      }
    }
    console.log(isSqrt);
    if (isSqrt) {
      answer += 1;
    }
  }

  console.log(makeNumber);

  return answer;
}
