import sys
si = sys.stdin.readline
n = int(si())
a = sorted(list(map(int, si().split())))
m = int(si())

if sum(a) <= m:
  print(max(a))
else:
  left = 1
  right = a[-1]
  
  result = 0
  while left <= right:
    sum = 0
    mid = (left + right) // 2
    for i in range(n):
      if mid > a[i]:
        sum += a[i]
      else:
        sum += mid
    if sum <= m:
      left = mid + 1
      result = max(result, mid)
    else:
      right = mid - 1
  print(result)