a = int(input())
b = int(input())
c = int(input())

t = a * b * c
hist = [0] * 10
while t !=0 :
    hist[t % 10] += 1
    t //= 10
for item in hist:
    print(item)
