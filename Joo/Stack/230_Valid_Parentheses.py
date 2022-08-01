class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        match = {'(' : ')', '{' : '}', '[' : ']'}
        for i in s:
            if i in match:
                stack.append(i)
            elif not stack or match[stack.pop()] != i:
                print(i)
                return False
        return not stack

'''
두번째 트라이... 
하지만 ({[ 일 때 stack에 넣는것 까지는 되었는데....
)}] 일 때가 문제였다. 
1. stack에서 pop을 해서 ({[ 중에서 하나가 나올 것이고 
그 값이 match 딕셔너리에 key에 대응하는 value와 같지 않다면 
return False
2. pop을 하지 않았는데 stack이 빈값이다.
return False

즉, i가 ']'인데 
1. pop한 값은 '{' 이고 match['{']는 '}'이다.
- 맞지 않으므로 False
2. stack이 비어있다? 
- ]와 맞출 짝이 없다는 것이다.

모든 stack을 다 돌았는데 
stack에 남아있다면 False


'''
# 두번째 문제를 풀었다.