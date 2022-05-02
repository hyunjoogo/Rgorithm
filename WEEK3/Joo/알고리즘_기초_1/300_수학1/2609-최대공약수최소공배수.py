# https://www.acmicpc.net/problem/2609

a, b = map(int, input().split())

tmp = []
for i in range(1, min(a,b) + 1):
    if a % i == 0 and b % i == 0:
        tmp.append(i)

print(max(tmp))
print(max(tmp) * (a // max(tmp)) * (b // max(tmp)))