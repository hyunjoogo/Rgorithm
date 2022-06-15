function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let sliceAry = array.slice(commands[i][0] - 1, commands[i][1]);
    sliceAry.sort(function (a, b) {
      return a - b;
    });
    answer.push(sliceAry[commands[i][2] - 1]);
  }
  return answer;
}
