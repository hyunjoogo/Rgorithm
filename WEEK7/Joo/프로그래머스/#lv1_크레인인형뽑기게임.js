function solution(board, moves) {
  var answer = 0;
  let stack = [];

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        if (stack[stack.length - 1] === board[i][move - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  }

  return answer;
}
// i는 줄, j는 번째
// board[i][move-1]

// j번째 인형을 뽑는 것까지는 쉽게 하였다.
// 하지만 stack에 넣고 어떻게 뺄 것인가...?
// 먼저 1,4,2,3,3,2,1 이런식으로 있다고 하면
// 33을 없애고 22를 없애는 방식을 생각했는데 알고 보니 쌓을때 연속되는게 있으면 사라진다는 것이었다.

// 그렇다면 stack에 있는 숫자와 옮겨갈 숫자가 같으면 양쪽에서 빼기만 하면 된다.
// 그럼 자연적으로 33없애고 22가 없애는 것과 똑같다.
