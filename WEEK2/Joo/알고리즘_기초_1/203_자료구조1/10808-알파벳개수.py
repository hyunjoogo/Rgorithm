# https://www.acmicpc.net/problem/10808

word = input()

alphaNum = [0] * (ord("z") - ord("a") + 1)

for i in word:
    alphaNum[ord(i) - ord("a")] += 1

for i in alphaNum:
    print(i, end =" ")

# print(' '.join(map(str, alphaNum)))