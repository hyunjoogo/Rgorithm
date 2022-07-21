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

