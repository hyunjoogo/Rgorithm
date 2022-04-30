import sys
si = sys.stdin.readline
n = int(si())
deque = []

def edit_deque(order):
  if order[0] == 'push_front':
    deque.insert(0, order[1])
  elif order[0] == 'push_back':
    deque.append(order[1])
  elif order[0] == 'pop_front':
    if len(deque) == 0:
      print(-1)
    else:
      print(deque.pop(0))
  elif order[0] == 'pop_back':
    if len(deque) == 0:
      print(-1)
    else:
      print(deque.pop())
  elif order[0] == 'size':
    print(len(deque))
  elif order[0] == 'empty':
    if len(deque) == 0:
      print(1)
    else:
      print(0)
  elif order[0] == 'front':
    if len(deque) == 0:
      print(-1)
    else:
      print(deque[0])
  elif order[0] == 'back':
    if len(deque) == 0:
      print(-1)
    else:
      print(deque[len(deque) - 1])
  else:
    print('올바른 명령어가 아닙니다.')

for _ in range(n):
  order = list(si().split())
  edit_deque(order)

#https://www.acmicpc.net/problem/10866