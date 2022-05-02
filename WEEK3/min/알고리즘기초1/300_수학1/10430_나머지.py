import sys
si = sys.stdin.readline
a, b, c = map(int, si().split())

print((a + b) % c)
print(((a % c) + (b % c)) % c)
print((a * b) % c)
print(((a % c) * (b % c)) % c)

# https://www.acmicpc.net/problem/10430
# 그대로 수식에 넣어서 넣는 문제였다 쉬웠다.
# PASS