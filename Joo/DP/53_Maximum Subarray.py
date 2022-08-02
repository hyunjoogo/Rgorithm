class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # 연속되는 arr의 합중 가장 높은 것을 구하는 문제
        if not nums :
            return 0
        curSum = maxSum = nums[0]
        
        
        # nums[1:] => 0번째 인덱스부터가 아닌 1번째 인덱스
        for num in nums[1:]:
            # 이전 합과 0 중에 큰 것에 현재 숫자를 더한 것
            # 이전 합이 음수일 때 양수가 나오면 다시 리셋되는 효과와 비슷하다.
            curSum = max(curSum, 0) + num
            # 위에서 구한 현재 숫자의 합과 최대합의 숫자와 비교해서 리셋이 되는 것을 결정
            maxSum = max(maxSum, curSum)
        return maxSum