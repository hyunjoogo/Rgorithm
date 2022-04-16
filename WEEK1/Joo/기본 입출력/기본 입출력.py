# 데이터의 개수 입력
n = int(input())
# 각 데이터를 공백을 기준으로 구분하여 입력
data = list(map(int, input().split()))

data.sort(reverse=True)
print(data)

# 입력받는 데이터의 갯수가 정해져있다면
a, b, c = map(int, input().split())
print(a, b, c)

# 단, 데이터의 갯수와 변수의 갯수가 다르면 오류가 난다.
