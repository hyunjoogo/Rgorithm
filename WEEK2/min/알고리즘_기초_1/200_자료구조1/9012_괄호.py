import sys
si = sys.stdin.readline
T = int(si())

# 줄 바꿔가면서 입력 받기
a = [list(si().strip()) for _ in range(T)]

# 입력 받은 ()를 통해 VPS를 알아내는 루프
for i in range(len(a)):
  cnt = 0
  for j in range(len(a[i])):
    if a[i][j] == '(':
      cnt += 1
    else:
      if cnt == 0:
        cnt -= 1
        break
      else:
        cnt -= 1
  if cnt == 0:
    print('YES')
  else:
    print('NO')

#https://www.acmicpc.net/problem/9012