// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a, b) {
  // 2^3 = 2^2 * 2
  // 2^2 = 2 * 2

  // 멈추는 조건
  // b가 1일 때 a를 리턴하고 멈춤

  // 재귀호출
  // b-1
  if (b === 0) {
    return 1;
  }
  if (b === 1) {
    return a;
  }
  return power(a, b - 1) * a;
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(n) {
  //중단점
  // 1일 때 멈춤

  // 재귀호출
  // n-1

  if (n === 0) return 1;
  if (n === 1) return 1;
  return factorial(n - 1) * n;
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  // 종료조건
  // arr.legnth =0

  // 재귀함수
  // arr의 숫자를 하나씩 빼서 곱하기

  if (arr.length === 0) return 1;
  return arr.pop() * productOfArray(arr);
}

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

reverse("awesome");

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
console.log(isPalindrome("tacocat"));

// 문자열을 한 글자씩 배열로 만든다.

// 종료조건
// 배열의 길이가 0?

// 처음과 끝의 글자가 같으면 배열에서 처음과 끝을 잘라낸다.
// 다르면 false를 리턴

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd));

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]]));

function capitalizeFirst(array) {
  let newArr = []

  if (array.length === 1) {
    let str = "";
    for (let i = 0; i < array[0].length; i++) {
      if (i === 0) {
        str += array[0][i].toUpperCase();
      } else {
        str += array[0][i].toLowerCase();
      }
    }
    return newArr.push(str)
  }

}

console.log(capitalizeFirst(["car", "taco", "banana"]));
