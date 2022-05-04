import sys
si = sys.stdin.readline
n = int(si())
result = 1

for i in range(1, n + 1):
  result = result * i

print(result)

# https://www.acmicpc.net/problem/10872
# 단순한 배열을 이용한 문제였다.
# PASS