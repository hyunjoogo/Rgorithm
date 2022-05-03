import sys
si = sys.stdin.readline
n = int(si())
n_list = list(map(int, si().split()))
cnt = 0
isNum = True


for i in range(n):
  a = n_list[i]
  if a == 1:
    continue
  elif a == 2:
    cnt += 1
  else:
    for j in range(2, a):
      if a % j == 0:
        isNum = False
        break
    if isNum:
      cnt += 1
    isNum = True

print(cnt)

# https://www.acmicpc.net/problem/1978
# 완전 탐색처럼 확실하지만 리소스 측면에서 시간복잡도가 제일 안좋은 방법으로 풀었다.
# PASS