# 덱(deque)를 이용한 방법 
# - 속도가 96ms
from collections import deque
N, K = map(int, input().split())

deq = deque(i for i in range(1, N+1))

result = []

for _ in range(N):
    deq.rotate(-K+1)
    result.append(str(deq.popleft()))
print("<", ", ".join(result), ">", sep='')

# 남아있는 list의 숫자가 K보다 작으면?
N,K = map(int,input().split())
arr = [i for i in range(1,N+1)] 

answer = []   # 제거된 사람들을 넣을 배열
num = 0  # 제거될 사람의 인덱스 번호

for t in range(N):
    num += K-1  
    # 한바퀴를 돌고 그다음으로 돌아올때를 대비해 값을 나머지로 바꿈  
    if num >= len(arr):   
        num = num%len(arr)
    answer.append(str(arr.pop(num)))
print("<",", ".join(answer)[:],">", sep='')

# https://www.acmicpc.net/problem/1158