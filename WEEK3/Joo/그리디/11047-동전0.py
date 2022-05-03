# https://www.acmicpc.net/problem/11047

# 잔돈 거슬러주기랑 비슷한 느낌

a, n = map(int, input().split())
array = []
for _ in range(a):
    array.append(int(input()))
array.sort(reverse=True)
count = 0

# 단위가 큰 동전부터 돌면서
# coin으로 나눈 몫이 0보다 크면 count를 올려주고
# 나머지값을 n으로 변경
for coin in array:
    if n // coin > 0:
        count += n // coin
        n %= coin
print(count)