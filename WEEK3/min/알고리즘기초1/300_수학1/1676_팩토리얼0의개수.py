import sys
si = sys.stdin.readline
n = int(si())
result = 1

for i in range(1, n + 1):
  result = result * i

result = str(result)
cnt = 0
for i in range(len(result) - 1, -1, -1):
  if result[i] == '0':
    cnt += 1
  else:
    break
print(cnt)

# https://www.acmicpc.net/problem/1676
# 단순한 구현 문제였다.
# PASS