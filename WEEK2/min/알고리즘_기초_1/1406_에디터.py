import sys
si = sys.stdin.readline
n = si().strip()
m = int(si())
cursor = len(n)


def edit_input(order):
  global cursor
  global n
  if order[0] == 'L':
    if cursor != 0:
      cursor -= 1
  elif order[0] == 'D':
    if cursor != len(n):
      cursor += 1
  elif order[0] == 'B':
    if cursor != 0:
      n = n.replace(n[cursor - 1], "")
      cursor -= 1
  elif order[0] == 'P':
    if cursor == 0:
      n = order[1] + n
      cursor += 1
    elif cursor == len(n):
      n = n + order[1]
      cursor += 1
    else:
      index = n.find(n[cursor - 1])
      print(index)
      n = n[:index + 1] + order[1] + n[index + 1:]
      cursor += 1
  else:
    print('올바른 명령어가 아닙니다.')

for _ in range(m):
  order = list(si().split())
  edit_input(order)


print(n)