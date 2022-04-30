import sys
si = sys.stdin.readline
T = int(si())

for _ in range(T):
  a = list(si().split())

  for i in range(len(a)):
    for j in range(len(a[i]) - 1, -1, -1):
      print(a[i][j], end='')
    print(' ', end='')

#https://www.acmicpc.net/problem/9093