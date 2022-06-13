function solution(nums) {
  var answer = 0;
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        sum = nums[i] + nums[j] + nums[z];
        // 소수인지 판단
        let cnt = 0;
        let isNum = false; // 소수인지 판단
        for (let h = 2; h <= sum; h++) {
          if (sum % h === 0) {
            cnt += 1;
            if (cnt >= 2) {
              isNum = true;
              break;
            }
          }
        }
        if (!isNum) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}

// 두가지 로직이 필요했다.
// 배열에서 서로다른 수의 합을 구하는 배열과 합해진 수가 소수인지 판단하는 로직
