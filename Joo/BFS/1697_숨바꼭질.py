from collections import deque

n, k = map(int, input().split())
max = 10 ** 5
depth = [0] * (max + 1)


def bfs():
  q = deque()
  q.append(n)
  while q:
    curr = q.popleft()
    if curr == k:
      print(depth[curr])
      break

    for i in (curr-1, curr+1, curr * 2):
      if  0 <= i <= max and not depth[i]: # not depth[i]도 가능
        # curr가 4일 때 depth[curr]은 1이므로 depth[3]은 2가 된다.
        # 이동경로 5 - 4 - 3 은 2번 움직였다는 것을 알 수 있다.
        depth[i] = depth[curr] + 1 
        q.append(i)
bfs()

#             5
#     n-1           n+1   n*2
# 1:   4             6     10   
#   n-1 n+1 n*2   n-1 n+1 n*2   n-1 n+1 n*2
# 2: 3   5    8     5    7   12    9   11  20
# ...
# 이런 식으로 찾아가는 방식
# 몇번이동했는지 기록 => 큐에 넣고
'''
0. 필요한 변수
- depthList : 몇번 이동했는지 기록하는 리스트
(방문리스트는 true, false를 이용했다면 이 리스트는 0은 방문안함, 
숫자는 이 위치까지 오는데 몇번 이동했는지 나타내는 것)
- 
1. 수빈이의 위치 n을 큐에 넣고
2. 반복문 실행
2.1 큐에서 처음 요소가 이동 방법(3가지)으로 이동한 위치를 구한다.
- 처음 5라면 5-1, 5+1, 5*2로 이동하게 된다.
2.2 이동한 위치가 문제에서 나온 0<= 이동한위치 <= 10^5 사이이면서 (and)
    depth[이동한위치]의 값이 0이라면 (방문하지 않았다면)
2.3 기존 위치의 이동횟수에 +1를 해준다.
2.4 이동한 위치를 큐에 넣는다.
'''