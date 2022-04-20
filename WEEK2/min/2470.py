import sys
si = sys.stdin.readline
n = int(si())
a = sorted(list(map(int, si().split())))

def determination(left, right, x):
  result = n
  while left <= right:
    mid = (left + right) // 2
    if a[mid] >= x:
      result = mid
      right = mid - 1
    else:
      left = mid + 1
  return result

n1, n2 = 0, 0
best = sys.maxsize

for i in range(n - 1):
  candidate = determination(i + 1, n - 1, -a[i])
  if i < candidate - 1 and abs(a[i] + a[candidate - 1]) < best:
    best = abs(a[i] + a[candidate - 1])
    n1 = a[i]
    n2 = a[candidate - 1]

  if candidate < n and abs(a[i] + a[candidate]) < best:
    best = abs(a[i] + a[candidate])
    n1 = a[i]
    n2 = a[candidate]

print(n1, n2)