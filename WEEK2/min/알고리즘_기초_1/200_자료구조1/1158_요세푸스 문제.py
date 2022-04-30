import sys
si = sys.stdin.readline
n, k = map(int, si().split())

a = [i for i in range(1, n + 1)]
result = []

index = 0

for _ in range(n):
  index += k - 1
  if index >= len(a):
    index = index % len(a)
  result.append(str(a.pop(index)))

print("<", ", ".join(result)[:], ">", sep='')

#https://www.acmicpc.net/problem/1158