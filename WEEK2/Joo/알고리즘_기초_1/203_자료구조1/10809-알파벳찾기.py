# https://www.acmicpc.net/problem/10809

word = list(input())

alphaNum = [-1] * (ord("z") - ord("a") + 1)

for i in range(len(word)):
    if not alphaNum[ord(word[i]) - ord("a")] == -1:
        continue
    alphaNum[ord(word[i]) - ord("a")] = i

print(' '.join(map(str, alphaNum)))