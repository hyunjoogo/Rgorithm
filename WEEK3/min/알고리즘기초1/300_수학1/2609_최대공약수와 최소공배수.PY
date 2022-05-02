import sys
si = sys.stdin.readline
a, b = map(int, si().split())

s1 = a
s2 = b

while True:
  x = s1 % s2
  if x == 0:
    break
  else:
    s1 = s2
    s2 = x

print(s2)
print(s2 * (a // s2) * (b // s2))

# https://www.acmicpc.net/problem/2609
# 학교시험에 나왔었던 알고리즘 방법이였다. 
# PASS