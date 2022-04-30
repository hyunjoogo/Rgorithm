import sys
si = sys.stdin.readline
s = si().strip()

stack = []
line = 0
result = 0
isEmpty = False

for x in s:
  if x == '(':
    stack.append(0)
    line += 1
    isEmpty = True
  elif x ==')':
    if isEmpty:
      stack.pop()
      line -= 1
      if stack:
        result += line 
      isEmpty = False
    else:
      line -= 1
      result += 1
      stack.pop()

print(result)