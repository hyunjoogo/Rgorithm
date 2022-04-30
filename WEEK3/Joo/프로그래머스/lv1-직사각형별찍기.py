# https://programmers.co.kr/learn/courses/30/lessons/12969

a, b = map(int, input().strip().split(' '))
answer = ('*' * a + '\n') * b
print(answer)