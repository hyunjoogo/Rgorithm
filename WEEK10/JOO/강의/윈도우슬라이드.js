function maxSubarraySum(arr, num) {
  // 조건1 합산갯수 보다 arr의 길이가 작으면 null 리턴
  if (arr.length < num) {
    return null;
  }

  // 최대합, 임시합 변수를 정한다.
  let maxSum = 0;
  let tempSum = 0;

  // 0,1,2번째까지의 합을 최대합에 지정한다.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // num번째부터 for 루프를 돌면서 
  // 3개의 수를 더해서 temp으로 지정하고 maxSum과 temp중에 큰 값을 maxSum으로 지정한다.

  // 1,2,3 번째까지의 합은 0,1,2번째 합(tempSum)에서 0(i - num)번쨰를 빼고 3(i)번째 합을 더한다.
  // 2,3,4 번째까지의 합은 1,2,3번째 합(tempSum)에서 1(i - num)번쨰를 빼고 4(i)번째 합을 더한다.
  // ...
  for (let i = num; i < arr.length; i++) {
    console.log(i, i - num, arr[i]);
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  // for루프가 끝나면 maxSum을 반환한다.
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 6], 3);
