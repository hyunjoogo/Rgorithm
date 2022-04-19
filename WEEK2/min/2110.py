import sys
si = sys.stdin.readline

n, c = map(int, si().split())
a = []

for _ in range(n):
  t = int(si().rstrip())
  a.append(t)
a.sort()

# 해당 mid가 최대 거리로 적당한지 판단
def determination(mid):
  cnt = 1
  last = a[0]
  for i in range(1, n):
    if mid > a[i] - last:
      continue
    last = a[i]
    cnt += 1
  return cnt >= c
  
result = 0

left = 1
right = a[-1] - a[0]

while (left <= right):
  mid = (left + right) // 2
  if determination(mid):
    result = mid
    left = mid + 1
  else:
    right = mid - 1

print(result)
  