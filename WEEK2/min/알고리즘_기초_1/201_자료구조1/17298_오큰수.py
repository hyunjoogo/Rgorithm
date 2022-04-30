import sys
si = sys.stdin.readline
n = int(si())
n_list = list(map(int, si().split()))

answer = [-1] * n
stack = []

stack.append(0)
for i in range(1, n):
  while stack and n_list[stack[-1]] < n_list[i]:
    answer[stack.pop()] = n_list[i]
  stack.append(i)

print(*answer)

#https://www.acmicpc.net/problem/17298