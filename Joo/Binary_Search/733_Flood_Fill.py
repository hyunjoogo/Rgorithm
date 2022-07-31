class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        # 해당 픽셀이 color색이 아니면 해당 픽셀과 상하좌우 픽셀을 color로 변경시키는 것
        # 올바른 색상을 가진 픽셀이라면 색상을 바꾸는 재귀함수를 만들고
        # 그리고 나서 주변의 픽셀을 재귀함수에 넣어라
        if image[sr][sc] != color:
            targetColor = image[sr][sc]
            self.recu(image, sr, sc, color, targetColor) 
        return image
            
    def recu(self, image, sr, sc, color, targetColor):
        # 방문한 좌표를 색상을 바꾼다.
        image[sr][sc] = color
        # 상하좌우 리스트로 좌표를 수정하고 
        # 조건에 맞으면 재귀함수를 돌린다.
        for dr, dc in [(-1,0), (1,0), (0,-1),(0,1)]:
             # 이동한 좌표
            nr = sr + dr
            nc = sc + dc
            # 조건
            # nr은 0보다 크거나 같으며 image의 열의 길이보다는 작아야한다.
            # nc는 0보다 크거나 같으며 image의 번째의 길이보다는 작야야한다.
            # 이동한 좌표의 처음좌표의 값과 같아야한다.
            if 0 <= nr < len(image) and 0 <= nc < len(image[0]) and image[nr][nc] == targetColor:
                self.recu(image, nr, nc, color, targetColor)

'''
1. 우와 풀었다. 200번 Number of Islands의 재귀함수를 모방해서 만들었는데 되었다.
재귀함수의 구성은 다음과 같다.
- 이동해서 대상을 바꾸고
- 상하좌우를 for문으로 돌려서 조건에 맞으면 재귀함수를 이동한 좌표로 재귀함수를 다시 돌린다.
그러면 이동했을 때 할 수 있는 것을 다 하는 것이다.
2. 실수했던 것
- 재귀함수 내에 nc = sc + dc 인데 sr + dc라고 했다. 오타난것이지.
3. 계속 풀다보니 이렇게 맞추는 것도 나오다니 기분 좋쿤
'''