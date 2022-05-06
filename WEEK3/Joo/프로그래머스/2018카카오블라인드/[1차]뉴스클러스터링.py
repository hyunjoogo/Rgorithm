import re
import math


# 내 코드
# 문제 접근방식은 비슷하네!
def solution(str1, str2):
    answer = 0
    str1Array = []
    str2Array = []

    for i in range(len(str1)-1):
        str1 = str1.lower()
        if re.compile('[a-z][a-z]').fullmatch(str1[i:i+2]) == None:
            continue
        str1Array.append(str1[i:i+2])
    for i in range(len(str2)-1):
        str2 = str2.lower()
        if re.compile('[a-z][a-z]').fullmatch(str2[i:i+2]) == None:
            continue
        str2Array.append(str2[i:i+2])
    
    union = []
    copyStr1Array = str1Array.copy() 
    union = str1Array.copy() 
    
    for i in str2Array:
        if i not in copyStr1Array:
            union.append(i)
        else:
            copyStr1Array.remove(i)
    
    inter = []
    for i in str2Array:
        if i in str1Array:
            str1Array.remove(i)
            inter.append(i)
    result = 0
    if len(union) == 0 and len(inter) == 0:
        result = 1 * 65536
    else:
         result = (len(inter) / len(union)) * 65536
        
    
    
    return math.trunc(result)


testcase = [
    ('FRANCE', 'french'),
     ('handshake', 'shake hands'),
    ('aa1+aa2', 'AAAA12'),
    ('E=M*C^2', 'e=m*c^2')
]

for str1, str2 in testcase:
    print(solution(str1, str2))