import sys
import math

si = sys.stdin.readline
n, m = map(int, si().split())
a = []

for _ in range(m):
  x = int(si())
  a.append(x)

left = 1
right = max(a)

result = sys.maxsize

while left <= right:
  l = 0
  mid = (left + right) // 2

  for i in range(m):
    l += math.ceil(a[i] / mid)

  if l <= n:
    right = mid - 1
    result = min(result, mid)
  else:
    left = mid + 1

print(result)


# 1. 최대나최소값을 구해라 그리고 경우의 수가 1억이상이 주어진다. >> 이진탐색으로 답을 구해야겠다.
# 2. 최소와 최대는 질투심이 최소가 되는 1이 최소값이고 입력받은 배열에서 질투심이 최대일 경우가 최대값이다.
# 3. 중간값을 구해서 해당 중간값이 문제의 조건대로 각 학생이 갖는지 판단한다.
# 4. 판단할 때 나눗셈을 이용해서 해당 몫을 반올림해서 인원수대로 가져갔는지를 판단한다.
# 5. 해당 mid 값이 조건을 만족하면 mid값을 최대값에서 -1해서 더 낮은 답이가능한지 판단한다.
# 6. 해당 mid 값이 조건을 만족하지 못하면 조금 더 큰 mid 값을 넣어서 판단한다.
# 7. 정답에 mid값을 넣어서 이전 mid값과 비교해서 작은 값을 계속 재할당한다.