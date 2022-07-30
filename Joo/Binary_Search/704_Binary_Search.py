def search(self, nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) -1
    while left <= right: 
        mid = (right + left) // 2 
        midNum = nums[mid]
        if midNum == target: return mid 
        if midNum > target :
            right = mid - 1
        if midNum < target :
            left = mid + 1
    return -1

# 재귀 함수 방식    
def search(self, nums: List[int], target: int) -> int:
    def recu(left, right):
        if left <= right :
            mid = (right + left) // 2
            
            if nums[mid] == target : 
                return mid
            elif nums[mid] > target :
                return recu(left, mid-1)
            else :
                return recu(mid+1, right)
        else :
            return -1
    return recu(0, len(nums) -1)