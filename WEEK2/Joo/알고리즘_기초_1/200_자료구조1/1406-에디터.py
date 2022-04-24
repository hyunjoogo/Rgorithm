# 커서를 놔두는 것을 어떻게 생각할 것인가?

# 초기 편집기에 입력되어 있는 문자열은 리스트로
# 정수는 for문을 도는 range
# 명령어는 리스트로 받아서 첫번째 리스트가 
# 무엇인지에 따라서 나누기 if elif문으로 나누기

# 커서에 대한 생각
  # 1. 리스트에 한 값으로 생각하기?
  # [a,b,c,d]의 마지막에 특정문자로 들어가기?

  # 2. 가상의 위치?
  # 이건 리스트인 0번째 인덱스에 놔둘 수가 없다.

## 1번 해법으로 구현하려고 했지만 
## L, D 같은 커서를 옮기는 행동을 할 때 막힘

## 찾은 코드
## https://seongonion.tistory.com/53
import sys

st1 = list(sys.stdin.readline().rstrip())
st2 = []

for _ in range(int(sys.stdin.readline())):
	command = list(sys.stdin.readline().split())
    if command[0] == 'L':
      if st1:
        	st2.append(st1.pop())
	  elif command[0] == 'D':
      if st2:
        	st1.append(st2.pop())
	  elif command[0] == 'B':
    	if st1:
        	st1.pop()
	  else:
    	st1.append(command[1])
        
st1.extend(reversed(st2))
print(''.join(st1))

# 커서 뒤에 (오른쪽에 있는) 글자를 다른 리스트로 옮김으로써
# 커서 이동하는 것을 구현 (st1이 커서 앞, st2는 커서 뒤)
# 입력커맨드는 커서 앞에 넣는 것이므로 st1에 추가
# 왼쪽 이동은 st1.pop()을 하여 나온 요소를 st2(커서뒤)에 추가
# 오른쪽 이동은 st2.pop()을 하여 나온 요소를 st1(커서앞)에 추가
# 삭제는 st1.pop()를 하여 삭제
# 커맨드가 완료가 되면 st2(커서뒤)를 거꾸로 st1과 함쳐줌
# ex) 123| => 12|3 =>> st1 [1,2] / st2 [3]
# 		12|3 => 1|23 =>> st1 [1] / st2 [3, 2]
# 		1|23 => |123 =>> st1 [] / st2 [3, 2, 1]
# 그래서 st1이 비어있다면 커서가 맨앞이다. 
# 그래서 커서가 맨 앞, 또는 맨 뒤이면 무시됨을 구현할 수 있음
# 


## 팁
## input = __import__('sys').stdin.readline
## 단순 인풋받기
## n = input()
## list를 받을때는 줄바꿈기호 \n이 입력된다. 그래서 rstrip()를 붙이자
## list = list(input().rstrip())

## 사용된 문법
## - list.append(X)
##		- array 맨 끝에 X를 추가
## - reversed(List)
##		- List의 순서를 뒤바꾸어 준다.
## - ListA.extend(ListB)
## 		- ListA 뒤에 ListB를 추가해준다.