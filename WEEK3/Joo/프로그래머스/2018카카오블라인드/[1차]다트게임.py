# https://programmers.co.kr/learn/courses/30/lessons/17682

import re

def solution(dartResult):

    answer = 0
    p = re.compile('[0-9]+[SDT][*#]?')
    turnList = p.findall(dartResult)
    total = 0;
    prev_score = 0;
    
    
    for turn in turnList:
        r = re.compile('[0-9]+')
        a = int(r.match(turn).group())
        if turn[-1] == '*':
            # -2가 D, S, T에 따라서 계산 후 *2
            # total += 이전 결과값 + 위의값
            # 이미 이전 결과값은 total에 포함되어 있으므로 *2를 하지 않는다.
            now = 0
            value = int(turn[0])
            if turn[-2] == 'S':
                now = value
            elif turn[-2] == 'D':
                now = value*value
            else:
                now = value*value*value
            total += prev_score + now*2
            prev_score = now * 2
        elif turn[-1] == '#':
            # -2가 D, S, T에 따라서 계산 후 *-1
            now = 0
            value = int(turn[0])
            if turn[-2] == 'S':
                now = value
            elif turn[-2] == 'D':
                now = value*value
            else:
                now = value*value*value
            total += now * -1
            prev_score = now * -1

        else:
            now = 0
            # 정수 10에 대한 대비
            if len(turn) == 3 :
                value = int(turn[0]+turn[1])
            else:
                value = int(turn[0])         
            if turn[-1] == 'S':
                now = value
            elif turn[-1] == 'D':
                now = value*value
            else:
                now = value*value*value
            total += now
            prev_score = now

    
    return total

def solution2(dartResult):
    point = []
    answer = []
    # 입력값을 돌면서 10을 K로 변경 (1, 0으로 인식하는 것을 방직)
    dartResult = dartResult.replace('10', 'k')
    # 먼저 10을 깔고, dartResult를 돌면서 k를 발견하면 그대로 아니면 dartResult의 문자열값을 대입
    point = ['10' if i == 'k' else i for i in dartResult]
    # ['10', 'T', '*', ... ]

    i = -1
    sdt = ['S', 'D', 'T']
    # 돌면서 SDT일 때, *일 때, #일 때 , 숫자일 때, 
    for j in point:
        # SDT일 때
        if j in sdt:
            answer[i] = answer[i] ** (sdt.index(j) + 1)
        elif j == "*" :
            # 내 값의 *2
            answer[i] = answer[i] * 2
            # 이전 값의 *2
            # 내가 첫번째가 아니면
            if i != 0:
                answer[i-1] = answer[i-1] * 2
        elif j == "#" :
            # 내 값의 * -1
            answer[i] = answer[i] * (-1)
        # 숫자일 때
        else:
            answer.append(int(j))
            i += 1
    return sum(answer)
    point = []
    answer = []
    # 입력값을 돌면서 10을 K로 변경 (1, 0으로 인식하는 것을 방직)
    dartResult = dartResult.replace('10', k)
    # 먼저 10을 깔고, dartResult를 돌면서 k를 발견하면 그대로 아니면 dartResult의 문자열값을 대입
    point = ['10' if i == 'k' else i for i in dartResult]
    # ['10', 'T', '*', ... ]

    i = -1
    sdt = ['S', 'D', 'T']
    # 돌면서 SDT일 때, *일 때, #일 때 , 숫자일 때, 
    for j in point:
        # SDT일 때
        if j in sdt:
            answer[i] = answer[i] ** (sdt.index(j) + 1)
        elif j == "*" :
            # 내 값의 *2
            answer[i] = answer[i] * 2
            # 이전 값의 *2
            # 내가 첫번째가 아니면
            if i != 0:
                answer[i-1] = answer[i-1] * 2
        elif j == "#" :
            # 내 값의 * -1
            answer[i] = answer[i] * (-1)
        # 숫자일 때
        else:
            answer.append(int(point[j]))
            i += 1
    return sum(answer)
