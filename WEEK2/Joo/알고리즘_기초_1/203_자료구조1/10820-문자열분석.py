# https://www.acmicpc.net/problem/10820

while 1:
    try:
        s = input()
        res = [0] * 4
        for i in range(len(s)):
            if ord('a') <= ord(s[i]) <= ord('z'): res[0] += 1
            elif ord('A') <= ord(s[i]) <= ord('Z'): res[1] += 1
            elif ord('0') <= ord(s[i]) <= ord('9'): res[2] += 1
            else: res[3] += 1
        print(*res)
    except EOFError: break


# 나의 풀이식

import sys

while True:
    line = sys.stdin.readline().rstrip('\n')

    if not line:
        break

    # 소문자, 대문자, 숫자, 공백
    l, u, d, s = 0, 0, 0, 0
    for each in line:
        if each.islower():
            l += 1
        elif each.isupper():
            u += 1
        elif each.isdigit():
            d += 1
        elif each.isspace():
            s += 1

    print(l, u, d, s)