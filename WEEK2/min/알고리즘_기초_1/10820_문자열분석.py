import sys
si = sys.stdin.readline

while True:
  a, b, c, d = 0, 0, 0, 0
  l = list(si().rstrip('\n'))
  if not l:
    break
  else:
    for x in l:
      if ord(x) >= 65 and ord(x) <= 90:
        b += 1
      elif ord(x) >= 97 and ord(x) <= 122:
        a += 1
      elif ord(x) == 32:
        d += 1
      elif int(x) >= 0 and int(x) <= 9:
        c += 1
  print(a, b, c, d)  