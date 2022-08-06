'''
        할아버지
      /   \    \
    아버지 형제1 형제 2
    /
  나
나-아버지-할아버지 : 2촌
나 아버지 형제 

'''


'''
      1
  2     3
7 8 9

    4
  5  6

'''

n = int(input()) # 전체 사람의 수
a, b = map(int, input().split()) # 촌수를 계산해야하는 두 사람
m = int(input()) # 부모 자식들간의 관계의 개수? : 간선갯수

graph = [[] for _ in range(n+1)]
visited = [False] * (n +1)
result = []
for _ in range(m):
  i, j = map(int, input().split())
  graph[i].append(j)
  graph[j].append(i)

def dfs(v, num):
  num += 1
  visited[v] = True

  if v == b :
    result.append(num)
  
  for i in graph[v]:
    if not visited[i]:
      dfs(i, num)

dfs(a, 0)
print(result)
if len(result) == 0 :
  print(-1)
else : 
  print(result[0]-1)