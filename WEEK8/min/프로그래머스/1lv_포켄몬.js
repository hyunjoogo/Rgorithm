function solution(nums) {
  var answer = 0;
  const maxNums = nums.length / 2;
  let selectNum = [];
  for (let i = 0; i < nums.length; i++) {
    if (selectNum.includes(nums[i])) {
      continue;
    } else {
      selectNum.push(nums[i]);
      if (selectNum.length > maxNums) {
        answer = maxNums;
        return answer;
      }
    }
  }
  answer = selectNum.length;
  return answer;
}
