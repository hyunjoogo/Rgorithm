// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a,b){
  // 2^3 = 2^2 * 2
  // 2^2 = 2 * 2
  
  // 멈추는 조건
  // b가 1일 때 a를 리턴하고 멈춤
  
  // 재귀호출
  // b-1
  if (b===0) {
      return 1
  }
  if (b === 1) {
      return a
  }
  return power(a, b-1) * a

}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(n){
  //중단점
  // 1일 때 멈춤
  
  // 재귀호출
  // n-1
  
  if (n === 0) return 1
  if (n === 1) return 1
  return factorial(n-1) * n
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  // 종료조건
  // arr.legnth =0
  
  // 재귀함수
  // arr의 숫자를 하나씩 빼서 곱하기
  
  if (arr.length === 0 ) return 1
  return arr.pop() * productOfArray(arr)
}