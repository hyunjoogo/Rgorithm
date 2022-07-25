import sys

str = sys.stdin.readline().rstrip().upper()
hist = {}
for c in str:
    if c in hist.keys():
        hist[c] += 1
    else:
        hist[c] = 1
big = 0
for key in hist.keys():
    big = max(big, hist[key])
cnt = 0
for key in hist.keys():
    if hist[key] == big:
        cnt += 1
        result = key
if cnt != 1:
    print("?")
else:
    print(result)
