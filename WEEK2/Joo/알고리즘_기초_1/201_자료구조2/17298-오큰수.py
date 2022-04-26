# https://www.acmicpc.net/problem/17298

from collections import deque
input = __import__('sys').stdin.readline
n = int(input())
seq = list(map(int, input().rstrip().split()))

# deque는 일반 list의 append, pop보다 빠르다.
stack = deque()
# 먼저 -1로 기본값을 만든다.
result = [-1] * n

for i in range(n):
    # 들어오는 숫자가 있는 숫자보다 크면!
    while stack and (stack[-1][0] < seq[i]):
        
        tmp, idx = stack.pop()
        result[idx] = seq[i]
    # stack에 넣을 때 [값, 인덱스]를 같이 넣으면 빠르다.
    stack.append([seq[i], i])

print(*result)

# 리스트의 한 값과 나머지 값들을 비교할 때 
# for문을 생각하는 것은 맞았다.
# 그리고 처음값과 나머지 값을 비교해서 작은 값은 


# 1번과 나머지 비교
# 2번과 나머지 비교를 생각하는 것이 아니라
# 1번이 돌면서 순서를 정한다고 생각하자
# 그 순서들을 스텍에 쌓는것이고
# result 리스트에 인덱스 순으로 정리하는 것
# 3, 2, 4 가 있으면
# 스텍에 3을 넣고 2와 비교해서 2가 더 작으니까 스텍에 쌓고
# 4가 2 -> 3 순으로 비교를 한다.
# 4 > 2 이므로 2는 result의 자신의 자리(index로 판별)에 나(2)보다 큰 값을 적는다.
# 그리고 3과 비교. 4 > 3 이므로 3은 result의 자신의 자리에 3보다 큰 값을 적는다.
# 그리고 4를 stack에 넣는다.
# 마지막은 나랑 비교하는거라서 비교하지 않는다 (for문이 종료된다.)
