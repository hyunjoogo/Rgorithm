import sys
si = sys.stdin.readline
h, w = map(int, si().split())
n = int(si())

input_list = [[0 for _ in range(w)] for _ in range(h)]

for _ in range(n):
  l, d, x, y = map(int, si().split())
  for i in range(l):
    if d == 0:
      input_list[x - 1][y - 1 + i] = 1
    else:
      input_list[x - 1 + i][y - 1] = 1
for i in range(h):
  for j in range(w):
    print(input_list[i][j], end=' ')
  print()