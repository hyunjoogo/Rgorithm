import sys 
si = sys.stdin.readline
n = int(si())

n_list = [int(si()) for _ in range(n)]

stack = [0]
result = []
last = 1
isFail = True

def pop_stack():
  stack.pop()
  result.append('-')

def push_stack(num):
  stack.append(num)
  result.append('+')

for i in range(n):
  target = n_list[i]
  while last <= target:
    push_stack(last)
    last += 1
  if stack[-1] == target:
    pop_stack()
  else:
    isFail = False

if isFail == False:
  print('NO')
else:
  for x in result:
    print(x)