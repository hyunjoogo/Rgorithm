import sys
si = sys.stdin.readline
n = int(si())
n_list = list(map(int, si().split()))
n_times = []

for i in range(n):
  n_times.append(n_list.count(n_list[i]))

answer = [-1] * n
stack = []
stack.append(0)

for i in range(n):
  while stack and n_times[n_list[stack[-1]]] < n_times[n_list[i]]:
    answer[stack.pop()] = n_list[i]
  stack.append(i)
  
print(*answer)

# 시간초과남 답은 나오지만 다른 방법 생각해봐야할듯