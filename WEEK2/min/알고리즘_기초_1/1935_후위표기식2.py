import sys
si = sys.stdin.readline
n = int(si())
str = si().strip()
value = [int(si()) for _ in range(n)]

stack = []

for x in str:
  if x >= 'A' and x <= 'Z':
    stack.append(value[ord(x) - ord('A')])
  else:
    num2 = stack.pop()
    num1 = stack.pop()

    if x == '+':
      stack.append(num1 + num2)
    elif x == '*':
      stack.append(num1 * num2)
    elif x == '-':
      stack.append(num1 - num2)
    elif x == '/':
      stack.append(num1 / num2)

print(format(stack[-1], '.2f'))