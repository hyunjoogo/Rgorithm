function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answer = [];
  const correctCount = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (p1[i % 5] === answers[i]) {
      correctCount[0] += 1;
    }
    if (p2[i % 8] === answers[i]) {
      correctCount[1] += 1;
    }
    if (p3[i % 10] === answers[i]) {
      correctCount[2] += 1;
    }
  }

  const maxScore = Math.max(...correctCount);
  for (let i = 0; i < 3; i++) {
    if (correctCount[i] === maxScore) answer.push(i + 1);
  }

  return answer;
}


// 1. 각각 수포자들의 패턴 알기
// 각자의 패턴이 있다. 그 패턴대로 반복하므로 각자 배열을 만들어준다.
// 1번 -> 5주기, 2번-> 8주기, 3번 -> 10주기

// 2. 문제의 정답과 패턴 비교하기
// 1번 수포자의 패턴을 보자면 문제 8번은 12345 -> 123 일것이다.
// 8번의 정답을 유추할 수 있는 방법은 8을 5로 나눈 나머지 3인 3번째 패턴을 보면된다.
// !! 여기서 인덱스 이슈를 생각했는데 문제 인덱스도 0으로 시작, 수포자 패턴도 0으로 시작하므로 
// !! 문제가 없을 듯하다.
// 해당문제와 수포자의 패턴을 비교해서 맞으면 카운터배열에 +를 해준다.

// 3. 가장 높은 점수 맞은 사람 찾기
// 카운터배열의 1,2,3번 수포자가 순서대로 들어가 있다.
// sort() 후 map()을 돌면 1등만 나오는 것이 아니다.
// 커닝해보니까
// Math.max()로 카운터배열의 최고점을 찾고
// 카운터배열을 돌면서 카운터배열과 각 값이 같으면 정답배열에 넣어주면
// 그게 몇번 수포자인지 알 수 있다.

// 난 오브젝트까지 만들고 그랬는데 .....
// 같이 풀어보면 좋은 문제 
