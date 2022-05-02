def solution(phone_number):
    answer = "*"*(len(phone_number)-4) + phone_number[-4:]


    # length = len(phone_number)
    # for i in range(length):
    #     if length - 5 < i and i < length:
    #         answer += phone_number[i]
    #     else:
    #         answer += '*'
  
    
    return answer