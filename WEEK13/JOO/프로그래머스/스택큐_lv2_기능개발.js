function solution(progresses, speeds) {
  const answer = [];
  while(progresses[0] < 100) {
    for(let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i]
    }
    if (progresses[0] >= 100) {
      let list = [...progresses]
      for (let i = 0; i < progresses.length; i++) {
        if (progresses[i] >= 100) {
          list.shift()
        } else {
          break;
        }
      }
      answer.push(progresses.length-list.length);
      progresses = [...list]
      if (progresses.length === 0) {
        break;
      }
    }
  }



  return answer;
}



function solution(progresses, speeds) {
  var answer = [];
  // progress마다 완료하는데 걸리는 날짜를 구한다.
  const remainDays = progresses.map((prog, index)=> Math.ceil((100-prog)/speeds[index]))
  console.log(remainDays)
  // 100이 되는데 걸리는 날짜
  // 0번째부터 완성이 되어야 하니까 0번째 완료날짜가 되었을 때를 설정한다.
  let maxDay = remainDays[0]
  // 해당 날짜에 완성된 것을 더하기 해주기 위한 쿠션
  answer.push(0)
  for(let i=0; i<remainDays.length; i++){
    // 작으면 이미 완성이 되어 있는 것
    // 같으면 이번에 완성된 것
    // 크면 아직 완성이 안된 것
    if(remainDays[i] <= maxDay){
      // answer.length-1 현재 answer의 마지막 인덱스를 가르킨다.

      answer[answer.length-1] += 1
    }else{
      // 완성이 아직 안된 것을 만나면
      // answer에 다음 배포 수를 하나 더 추가한다.
      // 1을 푸시하는 이유는 한번 비교한 작업이므로 maxDay를 바꾸는 것은 작업이 완료되었다는 것으로 간주한다.
      answer.push(1)
      maxDay = remainDays[i]
      // 다음 작업이 이미 완료가 된 작업이면 if문을 타면서 +1이 된다.
      // 다음 작업이 완료가 안된 작업 (maxDay보다 크면) 1을 푸시하였으므로
      // 이 작업은 배포때 1개의 기능이 배포한 것으로 된다.
    }
  }
  return answer;
}
