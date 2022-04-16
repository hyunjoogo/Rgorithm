# 0부터 9까지의 수를 포함하는 리스트
array = [i for i in range(10)]
print(array)

# 0부터 19까지의 수 중에서 홀수만 포함하는 리스트
array = [ i for i in range(20) if i % 2 == 1]
print(array)

# 1부터 9까지의 수들의 제곱 값을 포함하는 리스트
array = [ i * i for i in range(1, 10)]
print(array)

# 일반적인 코드
array = []
for i in range(20):
  if i % 2 == 1:
    array.append(i)

print(array)

# N X M 크기의 2차원 리스트 초기화
n = 4
m = 3
array = [[0] * m for _ in range(n)]

print(array)

# 언더바는 언제?
# 코드1 : 1부터 9까지의 자연수를 더하기
summary = 0
for i in range(1, 10):
  summary += i
print(summary)

# 코드2 : "Hello World"를 5번 출력하기
for _ in range(5):
  print("Hello World")