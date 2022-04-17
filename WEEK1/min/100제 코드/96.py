import sys

si = sys.stdin.readline
input_list = []

for _ in range(19):
  input_list.append(list(map(int, si().split())))
  
n = int(si())

for _ in range(n):
  x, y = map(int, si().split())
  a = input_list[x - 1][y - 1]
  for i in range(19):
    if input_list[i][y - 1] == 1:
      input_list[i][y - 1] = 0
    else:
      input_list[i][y - 1] = 1
    if input_list[x - 1][i] == 1:
      input_list[x - 1][i] = 0
    else:
      input_list[x - 1][i] = 1
  input_list[x - 1][y - 1] = a
      
for i in range(19):
    for j in range(19):
        print(input_list[i][j], end=' ')
    print()
