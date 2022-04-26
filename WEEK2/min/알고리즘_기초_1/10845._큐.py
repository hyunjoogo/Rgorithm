import sys
si = sys.stdin.readline
n = int(si())
queue = []

def edit_queue(order):
  if order[0] == 'push':
    queue.append(order[1])
  elif order[0] == 'pop':
    if len(queue) == 0:
      print(-1)
    else:
      print(queue.pop(0))
  elif order[0] == 'size':
    print(len(queue))
  elif order[0] == 'empty':
    if len(queue) == 0:
      print(1)
    else:
      print(0)
  elif order[0] == 'front':
    if len(queue) == 0:
      print(-1)
    else:
      print(queue[0])
  elif order[0] == 'back':
    if len(queue) == 0:
      print(-1)
    else:
      print(queue[-1])
  else:
    print("알맞은 명령어가 아닙니다.")
  
for _ in range(n):
  order = list(si().split())
  edit_queue(order)