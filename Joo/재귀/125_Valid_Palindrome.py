# https://leetcode.com/problems/valid-palindrome/

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # 모든 대문자를 소문자로 변환
        # 영숫자가 아닌 문자를 모둔 제거 후 앞뒤로 동일하게 읽어지는가?
        l = ""
        for i in s:
            if i.isalpha() :
                l = l + i.lower()
            if i.isnumeric():
                l = l + i
        if (l == l[::-1]):
            return True
        return False

# isalpha() 영문자인지 
# isnumeric() 숫자인지
# string[::-1] => reverse() 라고 생각하면 된다.