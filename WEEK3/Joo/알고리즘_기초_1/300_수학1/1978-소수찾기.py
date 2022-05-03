# https://www.acmicpc.net/problem/1978


n = int(input())
list = list(map(int, input().split()))
result = 0

# 소수인지 아닌지 판별하는 함수
def isPrime(x):
    if x == 1:
        return False
    for i in range(2, int(x**0.5) + 1):
        if x % i == 0:
            return False
    return True

for i in list:
    if isPrime(i):
        result += 1
print(result)