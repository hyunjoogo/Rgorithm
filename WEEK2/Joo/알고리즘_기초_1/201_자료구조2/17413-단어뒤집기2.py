# https://www.acmicpc.net/problem/17413

s = input()+' '
q = []
ans = []
for i in range(len(s)):
    if s[i] == '>':
        ans.append(''.join(q)+'>')
        q = []
    elif s[i] == '<':
        ans.append(''.join(q[::-1]))
        q = ['<']
    elif s[i] == ' ':
        if len(q) and q[0] == '<':q.append(s[i])
        else:
            if i != len(s)-1:ans.append(''.join(q[::-1])+' ')
            else:ans.append(''.join(q[::-1]))
            q=[]
    else:
        q.append(s[i])
print(''.join(ans))