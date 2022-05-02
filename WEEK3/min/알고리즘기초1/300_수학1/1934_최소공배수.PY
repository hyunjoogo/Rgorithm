import sys
si = sys.stdin.readline
T = int(si())

def make_min(s1, s2):
  while True:
    x = s1 % s2
    if x == 0:
      break
    else:
      s1 = s2
      s2 = x
  return s2

for _ in range(T):
  a, b = map(int, si().split())
  min = make_min(b, a)
  print(min * (a // min) * (b // min))

# https://www.acmicpc.net/problem/1934
# 똑같은 알고리즘으로 풀었고 반복해서 최소 공배수를 구해야 하기 때문에 따로 함수를 정의했다.
# PASS