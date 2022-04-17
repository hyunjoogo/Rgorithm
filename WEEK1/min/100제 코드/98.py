import sys
si = sys.stdin.readline
n_list = []

for _ in range(10):
  n_list.append(list(map(int, si().split())))

x = 1
y = 1
n_list[x][y] = 9

while True:
  if n_list[x][y] == 2:
    break
  else:
    if n_list[x][y+1] == 1:
      if n_list[x+1][y] == 1:
        break
      else:
        x += 1
        if n_list[x][y] == 2:
          n_list[x][y] = 9
          
          break
        else:
          n_list[x][y] = 9
    else:
      y += 1
      if n_list[x][y] == 2:
        n_list[x][y] = 9
        
        break
      else:
        n_list[x][y] = 9
  
for i in range(10):
  for j in range(10):
    print(n_list[i][j], end=' ')
  print()