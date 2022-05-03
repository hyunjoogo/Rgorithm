# https://www.acmicpc.net/problem/1929

## Good Coder

def primeList(n):
    s = [True] * (n+1)

    for i in range(2, int((n) ** 0.5) + 1):
        if s[i]:
            for j in range(i+i, n+1, i):
                s[j] = False

    return [i for i in range(2,n+1) if s[i]]

a, b = map(int, input().split())
l = primeList(b)

for i in l:
    if i >= a:
        print(i)


# ME!
m, n = map(int, input().split())

for i in range(m, n+1):
    if i ==1 :
        continue
        # 꼭 모든 수를 봐야할까?
        # 해당 수의 제곱근까지만 보면 된다.
        # 약수는 대칭으로 이루어져있다.
        # 12 => 1 2 3 4 6 12 / 1-12 2-6 3-4
        # 25 => 1 5 25 / 1-25 5-5
        # 제곱근보다 같거나 작은수까지만 나누어보고 나누어 떨어지는게 있는지 판단
        # 그냥 외우는것보다 소수를 이렇게 구할수 있구나 정도로 생각하고 
        # 나중에 필요하면 찾아쓰는게 나을듯
        # 검색도 가능한 곳이 많으니까
    for j in range(2, int(i**0.5)+1):
        if i % j == 0:
            break
    # 1/2 제곱근을 루트라고 하는데
    # 안의 숫자가 소수의 제곱근이면 소수입니다. 예를 들어 (2^2)^1/2 이면 2
    # 어차피 인트로 둘렀으니 (range가 정수만 받음)
    # 대충 루트2가 1.414 , 루트 4가 2, 루트9가 3이런꼴
    # 자.... 외우지말고 찾아쓰자

    # i = 13 , j = 2 , range(2, 4) => 통과
    # i = 13 , j = 3 , range(2, 4) => 통과
    # i = 14 , j = 2 , range(2, 4) => 브레이크
    # i = 15 , j = 2 , range(2, 4) => 통과
    # i = 15 , j = 3 , range(2, 4) => 브레이크
    else:
        print(i)
