import sys
si = sys.stdin.readline
n = int(si())
result = []
x = 2

if n == 1:
  print('')
else:
  while x <= n:
    if n % x == 0:
      n = n // x
      result.append(x)
    else:
      x += 1

  for a in result:
    print(a)

# https://www.acmicpc.net/problem/11653
# 쉽게 풀었다.
# PASS