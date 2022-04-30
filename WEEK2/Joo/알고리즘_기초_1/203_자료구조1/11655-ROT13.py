# https://www.acmicpc.net/problem/11655

word = input()
result = ""
for i in word:
    if i.islower():
        i = ord(i) + 13
        if i > 122:
            i -= 26
        result += chr(i)
    elif i.isupper():
        i = ord(i) + 13
        if i > 90:
            i -= 26
        result += chr(i)
    else: 
        result += i
print(result)