# 못 푼 문제

def solution(n, t, m, timetable):
    timetable = sorted([int(i[:2])* 60 + int(i[3:]) for i in timetable])

    콘의출근시간 = 540
    셔틀버스시간 = 540

    for i in range(n):
        for j in range(m):
            # 대기자가 있을 경우
            if timetable and timetable[0] <= 셔틀버스시간:
                콘의출근시간 = timetable.pop(0) - 1
            # 대기자가 없는 경우
            else:
                콘의출근시간 = 셔틀버스시간
        셔틀버스시간 += t
    return f'{str(콘의출근시간//60).zfill(2)}:{str(콘의출근시간%60).zfill(2)}'