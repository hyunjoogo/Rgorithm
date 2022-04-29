import sys
si = sys.stdin.readline
s = si()

change_str = ''

for x in s:
  if ord(x) >= 65 and ord(x) <= 90:
    if ord(x) <= 77:
      b = ord(x) + 13
      change_str += chr(b)
    else:
      b = (13 - (90 - ord(x))) + 64
      change_str += chr(b)
  elif ord(x) >= 97 and ord(x) <= 122:
    if ord(x) <= 109:
      b = ord(x) + 13
      change_str += chr(b)
    else:
      b = (13 - (122 - ord(x))) + 96
      change_str += chr(b)
  else:
    change_str += x

print(change_str)