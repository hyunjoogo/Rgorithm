function solution(participant, completion) {
  var answer = "";
  let sortedParticipant = participant.sort();
  let sortedCompletion = completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (sortedParticipant[i] === sortedCompletion[i]) {
      continue;
    } else {
      answer += sortedParticipant[i];
      return answer;
    }
  }

  return answer;
}

// 주어진 선수가 10만개이므로 각각을 이중 반복문 돌경우 시간 복잡도가 너무 복잡해졌다.
// 각 배열을 정렬해서 반복문을 한번으로 동시에 두 배열을 비교하는 방법으로 시도했더니 해결했다.
