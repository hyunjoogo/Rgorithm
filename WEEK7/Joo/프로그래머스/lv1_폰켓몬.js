function solution(nums) {

  const list = new Set([...nums])
  const total = nums.length;
  let answer = list.size >= total/2 ? total/2 : answer = list.size

  return answer;
}


// 처음에 중복처리를 해서 접근하는 방식이 안된다고 생각했다.
// 2,3번 테스트 케이스에서는 적용이 되었지만 
// 모두 다른 종류라면 안될 것 같았다.

// 이중for문을 생각했지만 선택하는 폰켓몬이 많아지면 n중for문이 되기 때문에 안되었다.

// 다시 고민하던 중
// 처음 생각했던 곳에서 if문으로 분기를 치면 될 듯했다.
// 중복이 사라지면 종류가 다른 폰켓몬만 남고 Set.size를 통해 크기도 알 수 있다. 
// 만약 n마리 중 n/2마리를 고르고 모두 종류가 다르다면
// Set으로 변경하면 result가 n이 나온다.
// 그래서 우리가 고를 수 있는 n/2마리보다 Set.size가 크면 최대 고를 수 있는 n/2마리가 정답
// 작으면 Set.size가 정답


