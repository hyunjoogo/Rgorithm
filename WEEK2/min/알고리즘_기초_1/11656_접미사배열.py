import sys
si = sys.stdin.readline

str = si().strip()
result = [str]

for _ in range(len(str) - 1):
  str = str[1:]
  result.append(str)

result.sort()

for x in result:
  print(x)