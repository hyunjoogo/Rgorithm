import sys
si = sys.stdin.readline
n = int(si())
stack = []
result = []

# 스택 구현
def call_stack(order):
  if order[0] == 'push':
    stack.append(order[1])
  elif order[0] == 'pop':
    if stack:
      result.append(stack[-1])
      del stack[-1]
    else:
      result.append(-1)
  elif order[0] == 'size':
    result.append(len(stack))
  elif order[0] == 'empty':
    if stack:
      result.append(0)
    else:
      result.append(1)
  elif order[0] == 'top':
    if stack:
      result.append(stack[-1])
    else:
      result.append(-1)
  else:
    print('알맞은 연산자가 아닙니다.')
    
# 입력 받는 인자가 optional 하게 있기 때문에 배열을 통해서 입력받도록 함
for _ in range(n):
  order = list(si().split())
  call_stack(order)

# 정답 출력
for x in result:
  print(x)