function solution(N, stages) {
  var answer = [];
  let total = 0
  for (let i = 1; i <= N; i++) {
      total = stages.length;
      stages = stages.filter(v => v !== i)
      answer.push({fail : (total - stages.length) / total, stageNo : i})
  }

  answer.sort((a, b) => b.fail - a.fail); 
  const result = answer.map(v => v.stageNo)
  return result;
}

// 1. stage를 통과하지 못한 사람은 다음 스테이지의 실패율 모수에 들어가지 않는다는 것이 포인트
// 2. 실패율를 다 구하고 나서 실패율을 오름차순으로 정렬하는 것도 포인트

// 1번의 실패율을 구한 놈을 찾아서 뺄것인가 고민했는데
// filter()를 이용하면 그 놈만 제외한 새로운 배열을 리턴한다.
// 거기서 기존배열 - 새로운배열을 하면 빠진 놈들의 수가 나온다는 것을 발견

// 스테이지의 번호와 실패율을 동시에 가지고 있어야 하므로
// 오브젝트로 넣는것을 생각했다.
// 그리고 sort()할 때 실패율을 오름차순으로 정렬하면 스테이지번호는 따라오게 된다.
// 마지막으로 map()으로 스테이지번호만 나오는 배열 리턴
