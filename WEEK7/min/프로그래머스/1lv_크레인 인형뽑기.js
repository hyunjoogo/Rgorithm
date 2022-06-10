function solution(board, moves) {
  let answer = 0;
  let resultAry = [];

  for (let i = 0; i < moves.length; i++) {
    let target = moves[i];
    for (let j = 0; j < board.length; j++) {
      if (board[j][target - 1] === 0) {
        continue;
      } else {
        resultAry.push(board[j][target - 1]);
        board[j][target - 1] = 0;
        break;
      }
    }
    if (resultAry.length > 1) {
      if (resultAry[resultAry.length - 1] === resultAry[resultAry.length - 2]) {
        resultAry.pop();
        resultAry.pop();
        answer += 2;
      }
    }
  }

  return answer;
}

// 이중 배열을 이용해서 풀었다.
