import sys
si = sys.stdin.readline
m, n = map(int, si().split())

for i in range(m, n+1):
  if i == 1:
    continue
  for j in range(2, int(i ** 0.5) + 1):
    if i % j == 0:
      break
  else: 
    print(i)

# https://www.acmicpc.net/problem/1929
# 시간 초과가 많이 나왔다. 에라토스테네스의 체의 방식으로 풀었더니 시간 초과가 나서 다른 방식으로 풀었다.
# FAIL

