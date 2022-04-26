# https://www.acmicpc.net/problem/1935

# ABC*+DE/- => A + (B*C) - (D/E)

n = int(input())
postfix = input()
num_lst = [0]*n	# 피연산자값을 저장하기 위한 num_lst 생성

for i in range(n):
    num_lst[i] = int(input()) # 피연산자값 받기
# 피연산자(A~E)의 값이 리스트에 순서대로 저장된다

stack = []

for i in postfix:
    if i.isalpha(): #알파벳이면 true
        stack.append(num_lst[ord(i)-ord('A')])
        # 같은 피연산자가 들어왔을 때 그 값을 찾기 위한 것
        # 아스키코드로 전환하면 A=65, B=66 순으로 늘어난다.
        # 그래서 i가 무슨 알파벳인지에 따라서 피연산자 리스트에서 해당 인덱스의 값을 가지고 오는 것
        # (알파벳순으로 저장이 되고, 순서대로 입력해준다고 함)
    else:
        str2 = stack.pop() 
        str1 = stack.pop()
        if i == "+":
            stack.append(str1 + str2)
        elif i == "*":
            stack.append(str1 * str2)
        elif i == "/":
            stack.append(str1 / str2)
        else:
            stack.append(str1 - str2)
print('%.2f' %stack[0])