from collections import deque

n, k = map(int, input().split())
max = 10 ** 5
depth = [0] * (max + 1)
move = [0] * (max + 1) # 이전 노드

def path(curr):
  arr = []
  temp = curr
  for _ in range(depth[curr]+ 1): # 이동횟수만큼 돌면서
    # 현재 위치 -> 
    # move[현재위치] (이전 위치 = temp)
    # move[이전위치] (현재위치의 이전위치의 이전위치)
    arr.append(temp)
    temp = move[temp]
  # 경로가 거꾸로 나오기 때문에 arr를 리버스시켜야한다.
  print(' '.join(map(str, arr[::-1])))

def bfs():
  q = deque()
  q.append(n)
  while q:
    curr = q.popleft()
    if curr == k:
      print(depth[curr])
      path(curr)
      break

    for i in (curr-1, curr+1, curr * 2):
      if  0 <= i <= max and not depth[i]: # not depth[i]도 가능
        depth[i] = depth[curr] + 1 
        q.append(i)
        move[i] = curr
bfs()

# 내가 알 수 있는 정보가 무엇일까?
# 