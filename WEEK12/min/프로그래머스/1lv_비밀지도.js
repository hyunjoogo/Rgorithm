function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    let arr1Length = arr1[i].toString(2).length;
    let arr2Length = arr2[i].toString(2).length;
    let arr1Bi =
      arr1Length === n
        ? arr1[i].toString(2)
        : "0".repeat(n - arr1Length < 0 ? 0 : n - arr1Length) +
          arr1[i].toString(2);
    let arr2Bi =
      arr2Length === n
        ? arr2[i].toString(2)
        : "0".repeat(n - arr2Length < 0 ? 0 : n - arr2Length) +
          arr2[i].toString(2);
    for (let j = 0; j < n; j++) {
      if (arr1Bi[j] === "1" || arr2Bi[j] === "1") {
        arr.push("#");
      } else {
        arr.push(" ");
      }
    }
    answer.push(arr.join(""));

    console.log(answer);
  }
  return answer;
}
