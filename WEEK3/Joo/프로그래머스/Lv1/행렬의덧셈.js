function solution(arr1, arr2) {
  var answer = [[]];
  for (let i = 0; i < arr1.length; i++){
    arr_sum = []
    for (let j=0; j < arr1[i].length; j++) {
      arr_sum.push(arr1[i][j] + arr2[i][j])
    }
    answer.push(arr_sum)
  }



  return answer;
}
solution([[1],[2]],	[[3],[4]])
// solution([[1,2],[2,3]],	[[3,4],[5,6]])