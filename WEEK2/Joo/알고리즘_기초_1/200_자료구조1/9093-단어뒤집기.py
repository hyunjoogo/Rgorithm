# https://www.acmicpc.net/problem/9093

import sys

input = sys.stdin.readline

n = int(input())

for _ in range(n):
    sentence = input().rstrip().split()
    new_sentence = []
    for j in sentence : 
        new_sentence.append(j[::-1])
    print(' '.join(new_sentence))