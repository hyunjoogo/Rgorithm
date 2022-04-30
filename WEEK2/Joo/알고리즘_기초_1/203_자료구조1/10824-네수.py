# https://www.acmicpc.net/problem/10824

a, b, c, d = map(str, input().split())

prev = a + b
next = c + d

print(int(prev) + int(next))