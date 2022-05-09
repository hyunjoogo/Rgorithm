const word = "))(())".split(""); // ()())

function mathBrackets(arr) {
  let count = 0;

  if (arr[0] === ")") {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      count++;
    } else {
      count--;
    }
  }

  if (count !== 0) {
    return false;
  }

  let braket = [];

  for (let i in arr) {
    if (i === "(") {
      braket.push(i);
    }
    if (i === ")") {
      if (braket.length === 0) {
        return false;
      }
      braket.pop();
    }
    return true;
  }
}

console.log(mathBrackets(word) ? "YES" : "NO");
