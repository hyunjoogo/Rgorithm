import sys
si = sys.stdin.readline
n_list = []

while True:
  n = int(si())
  if n == 0:
    break
  n_list.append(n)

def isNum(num):
  for i in range(2, int(a ** 0.5) + 1):
    if num % i == 0:
      return False
  return True    
    

for i in range(len(n_list)):
  a = n_list[i]
  if a < 9:
    b = a - 3
    if isNum(b):
      print(str(a) + ' = ' + str(3) + ' + ' + str(b))
  else:
    for j in range(3, int(a ** 0.5) + 1):
      b = a - j
      if isNum(b):
        print(str(a) + ' = ' + str(j) + ' + ' + str(b))
    
# https://www.acmicpc.net/problem/6588
# 소수 찾는 부분까지 하면 시간 초과가 발생한다. 하지만 따로 해결방법이 에라토스테네스의 체밖에 해결방법이 없어서 일단 시간초과난 코드만 적어놨다.

# FAIL