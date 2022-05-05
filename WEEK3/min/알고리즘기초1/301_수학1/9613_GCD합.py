import sys
si = sys.stdin.readline
t = int(si())

def gcd(num1, num2):
  x = 1
  while x != 0:
    x = num1 % num2
    if x == 0:
      return num2
    else:
      num1 = num2
      num2 = x
  
for _ in range(t):
  result = 0
  n_list = list(map(int, si().split()))
  for i in range(1, len(n_list)):
    if i == len(n_list) - 1:
      break
    for j in range(i + 1, len(n_list)):
      result += gcd(n_list[i], n_list[j])
  print(result)


# https://www.acmicpc.net/problem/9613
# 생각할게 조금 있긴했는데 제출하자마자 맞았던 문제
# PASS