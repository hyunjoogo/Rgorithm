# https://www.acmicpc.net/problem/9012

for _ in range(int(input())):
    PS = input()
    stack =[]
    for j in PS:
        if j == '(':
            stack.append(j)
        elif j == ')':
            if not stack or stack[-1] != "(":
                stack.append(")")
                break
            stack.pop()
    print("YES" if not stack else "NO")