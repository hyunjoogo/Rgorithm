import sys
si = sys.stdin.readline
n, s = map(int, si().split())
n_list = list(map(int, si().split()))
find_list = []

# 새로운 배열 초기화
for i in range(n):
  d = abs(n_list[i] - s)
  find_list.append(d)


def gcd(num1, num2):
  x = 1
  while x != 0:
    x = num1 % num2
    num1 = num2
    num2 = x
  return num1

result = find_list[0]
for i in range(1, n):
  result = gcd(result, find_list[i])

print(result)

# https://www.acmicpc.net/problem/17087
# 단순히 거리의 차로 구하면 틀리는 문제 이유는 모르겠다. 최소공배수로 풀면 풀린다.
# FAIL