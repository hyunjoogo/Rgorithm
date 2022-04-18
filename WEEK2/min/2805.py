import sys
si = sys.stdin.readline
n, m = map(int, si().split())
n_list = list(map(int, si().split()))
a = []

left = 0
right = max(n_list)

def treeHeight(height):
  sum = 0
  for i in range(n):
    b = n_list[i] - height
    if b > 0:
      sum += b
  return sum

while left <= right:
  mid = (left + right) // 2
  h = treeHeight(mid)
  if h == m:
    a.append(mid)
    break
  elif h > m:
    left = mid + 1
    a.append(mid)
  else:
    right = mid - 1
print(max(a))