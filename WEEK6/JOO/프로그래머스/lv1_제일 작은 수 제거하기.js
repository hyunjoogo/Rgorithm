// -------------- My Code ------------

function solution(arr) {
  if (arr.length === 1) {
      return [-1]
  }
  // 기존 배열을 건드리므로 스프레드로 새로운 배열을 만듬
  // sort()는 새로운 배열을 리턴
  const minNum = [...arr].sort((a,b) => a-b).shift();
  return arr.filter(v=>v !== minNum);
}


// Good Code
function solution1(arr) {
  if (arr.length === 1) {
      return [-1]
  }
  // const minNum = [...arr].sort((a,b) => a-b).shift();
  // 기존 배열을 건드리지 않는다.
  const minNum = Math.min.apply(null, arr)

  return arr.filter(v=>v !== minNum);
}