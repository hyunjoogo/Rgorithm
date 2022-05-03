# https://www.acmicpc.net/problem/1934

# 최대공약수
# 두 수 이상의 여러 수의 공약수 중 최대인 것
# 나눈 나머지가 0인 값이 약수 
# 두 수의 약수 중에 공통으로 된 약수 중에 제일 큰 값

# 최소공배수
# 배수 : 어떤 수에 정수를 곱한 값 (a * n) n은 1부터 증가
# 공배수 : 두 수의 같은 배수들
# 최소공배수 : 두 수의 같은 배수들 중 가장 작은 값
# 두 수의 곱을 최대공약수로 나눈 몫


n = int(input())
for i in range(n):
    a, b = map(int, input().split())

    tmp = []
    for i in range(1, min(a,b) + 1):
        if a % i ==0 and b % i == 0:
            tmp.append(i)
    print((a * b) // max(tmp))