# 테스트 케이스는 통과하였지만 제출하니 에러가 남
# LRU(Least Recently Used)에 대해 검색하다가
# 해설이 아닌 구현코드이길래 검색해서 씀

def solution(cacheSize, cities):
    answer = 0
    cities = [i.lower() for i in cities]
    cache = []
    for city in cities:
        if city in cache:
            cache.remove(city)
            cache.insert(-1, city)
            answer += 1
        else:
            answer += 5
            if cacheSize == 0:
                pass
            elif len(cache) >= cacheSize:
                cache.pop(0)
            cache.append(city)
    return answer

# Good Code

# 1. 캐시사이즈만큼의 크기의 데크를 생성 = cache
# 2. cities를 돌면서 
# 2.1 그 값을 소문자로 변경 (대소문자를 안 가리므로)
# 3. cache에 있으면 그 값을 삭제하고 다시 넣는다.
# 3.1 cache hit이므로 answer +1
# 4. cache에 없으면 값을 넣는다.
# 4.1 cache miss이므로 answer +5

from collections import deque

def solution(cacheSize, cities):
    answer = 0
    list = [""] * cacheSize
    cache = deque(list, maxlen=cacheSize)
    for i in cities:
        i = i.lower()
        if i in cache:
            cache.remove(i)
            cache.append(i)
            answer += 1
        else:
            cache.append(i)
            answer += 5

    return answer

# LRU는 가장 오랫동안 참조되지 않은 페이지를 교체하는 기법
# 문제에서 캐시크기는 리스트의 크기를 지정하는 것
# 캐시크기가 3이라면 4번째부터는 맨 앞에 있는 것이 사라지고
# 새로운 값은 뒤에 넣어지는 구조
# 만약 리스트 안에 값이 있다면 그 값이 빠지고
# 새로운 값은 뒤에 넣어진다.
# 예) [1,2,3]에 4를 넣으면 [2,3,4]이 된다.

# 여기서 리스트 크기를 지정하기 위해
# deque를 사용한다.

# 데크안에 값이 있다면 그 값을 빼고 새로 넣어주면 된다.
# 데크안에 값이 없으면 값을 넣어준다.
# 데크의 크기를 지정하였으므로 앞에 값이 알아서 사라진다.
# 리스트는 크기 지정이 안되는듯