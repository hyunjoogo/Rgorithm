import sys
si = sys.stdin.readline
n, m = map(int, si().split())

def fiveCount(num):
  cnt = 0
  while num != 0:
    num = num // 5
    cnt += num
  return cnt

def twoCount(num):
  cnt = 0
  while num != 0:
    num = num // 2
    cnt += num
  return cnt

if m == 0:
  print(0)
else:
  print(min((fiveCount(n) - fiveCount(m) - fiveCount(n - m)), (twoCount(n) - twoCount(m) - twoCount(n - m))))

# https://www.acmicpc.net/problem/2004
# 그냥 방법으로 하면 시간 초과나서 정답을 봤던 문제
# FAIL