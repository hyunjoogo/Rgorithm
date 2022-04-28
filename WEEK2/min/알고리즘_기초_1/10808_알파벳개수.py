import sys
si = sys.stdin.readline
s = si().strip()

result = [0] * 26

for x in s:
  a = ord(x) - 97
  result[a] += 1

print(*result, end=' ')