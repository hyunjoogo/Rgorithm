import sys
si = sys.stdin.readline
s = si().strip()

result = [-1] * 26
count = 0
for x in s:
  a = ord(x) - 97
  if result[a] == -1:
    result[a] = count
  count += 1

print(*result, end=' ')