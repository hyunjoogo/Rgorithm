def solution(n, arr1, arr2):
    answer = []
    binArr1 = [bin(i)[2:].zfill(n) for i in arr1]
    binArr2 = [bin(i)[2:].zfill(n) for i in arr2]
    for i in range(n):
        doubleMap = ""
        for j in range(n):
            if binArr1[i][j] == '0' and binArr2[i][j] == '0' :
                doubleMap += ' '
            else: 
                doubleMap += '#'
        answer.append(doubleMap)
    return answer

# 1. arr의 받은 정수를 2진수 문자로 변환
# 1-1. 앞이 0일경우를 대비할 것
# 2. 지도1, 지도2의 같은 인덱스의 같은 자리의 문자를 비교하여 하나의 값으로 리턴
# 2-1. 각 지도list의 같은 인덱스의 같은 인덱스 문자를 비교
# 2-2. 값 비교 후 바로 공백 또는 # 리턴

# Good Code
# zip, i | j
def solution(n, arr1, arr2):
    answer = []
    for i, j in zip(arr1, arr2):
        answer.append(bin(i|j)[2:].zfill(n).replace('1','#').replace('0',' '))
    return answer