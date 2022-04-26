import sys
si = sys.stdin.readline
a = str(si().strip())
result_str = ''
change_str = ''
isEmpty = True
last = 0

def reverse_str():
  global result_str, change_str
  for i in range(len(change_str) - 1, -1, -1):
    result_str += change_str[i]

while last < len(a): 
  if a[last] == '<':
    if isEmpty != True:
      reverse_str()
      isEmpty = True
      change_str = ''
    result_str += '<'
    last += 1
    while a[last] != '>':
      result_str += a[last]
      last += 1
    result_str += '>'
    last += 1
  elif a[last] == ' ':
    if isEmpty:
      result_str += ' '
      last += 1
    else:
      reverse_str()
      change_str = ''
      isEmpty = True
  else:
    change_str += a[last]
    isEmpty = False
    last += 1
    if last == len(a):
      reverse_str()
  
print(result_str)