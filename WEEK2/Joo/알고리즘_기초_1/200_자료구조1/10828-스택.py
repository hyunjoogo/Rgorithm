import sys
input = sys.stdin.readline
N = int(input())

stack = []

for _ in range(N):
    word = input().split()
    order = word[0]
    if order == 'push':
        stack.append(word[1])
    elif order == 'pop':
        if stack == []:
            print(-1)
        else :
            print(stack.pop())
    elif order == 'size':
        print(len(stack))
    elif order == 'empty':
        if stack == []:
            print(1)
        else :
            print(0)
    else :
        if stack == []:
            print(-1)
        else :
            print(stack[-1])

# https://www.acmicpc.net/problem/10828