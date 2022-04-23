n = int(input())
count = 0
stack = []
result = []
no_message = True


for i in range(n):
    input_data = int(input())
    while count < input_data:
        count += 1
        stack.append(count)
        result.append('+')
    if stack[-1] == input_data:
        stack.pop()
        result.append('-')
    else:
        no_message = False
        break
if no_message: print("\n".join(result))
else: print('NO')

# https://www.acmicpc.net/problem/1874