# https://leetcode.com/problems/number-of-islands/


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        num_islands = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    num_islands += 1
                    self.dfs(grid, i, j)
                    # 재귀함수를 다 돌았다는 이야기는 섬을 다 돌았다는 이야기
                    # 재귀함수가 돌면서 '1'을 '0'으로 만들 것이다.
                    
        return num_islands
                    
                    
    def dfs(self, grid, r, c):
        # 방문한 자리를 0으로 만든다.
        grid[r][c] = '0'
        # 현재 좌표에서 좌, 우, 하, 상 으로 움직였을 때 조건을 통과하면 다시 재귀함수를 돌린다.
        for dr, dc in [(-1, 0), (1, 0), (0,-1), (0, 1)]:
            nr = r +dr # 이동한 열
            nc = c +dc # 이동한 번째
            # 조건
            # 1. 이동한 ?열이 0보다 크거나 같고 총 열보다는 작아야한다.
            # 2. 이동한 ?번째가 0보다 크거나 같고 총 번째보다는 작아야 한다.
            # 3. 이동한 열,번째의 좌표가 '1'이어야 한다. 즉 물이 아니어야 한다.
            if 0 <= nr < len(grid) and 0 <=nc <len(grid[0]) and grid[nr][nc] == "1":
                self.dfs(grid, nr, nc)



'''
1. 손도 못 댔다.
문제자체도 이해를 못했고, 왜 DFS로 접근해야하며, 알 수가 없다...
어렵네....
그래도 코드가 조금은 이해가 가서 다행이다.
뭐 하다보면 기계적으로 풀겠지?

2. 조금 유추는 해보자.
각 좌표들을 돌면서 '1'을 만났을 때 카운트를 업하고 재귀함수를 돌린다.
- 재귀함수
- 종료조건 : 움직인 좌표의 좌우상하가 '0' 이거나 범위를 벗어났을 때 호출하지 않는다.
- 재귀조건 : 움직인 좌표의 좌우상하가 '1' 이면서 범위내에서 호출한다.
- 내부작동 : 입력된 좌표를 '0'으로 바꾼다.
재귀함수가 종료가 되면 섬을 다 돌아다닌 것이고 그 섬은 '0'으로 되어 있기때문에 다시 돌 일이 없다.
'''