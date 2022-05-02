# https://www.acmicpc.net/problem/11656

S = input()
list = []

for i in range(len(S)):
    list.append(S[i:])

for j in sorted(list):
    print(j)