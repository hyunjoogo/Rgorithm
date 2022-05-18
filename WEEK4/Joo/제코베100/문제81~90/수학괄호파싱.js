function braketCounter(str) {
  let braket = [];
  const m = {
    ")": "(",
    "}": "{",
  };

  for (let i in str) {
    if (str[i] === "(" || str[i] === "{") {
      braket.push(str[i]);
    }
    if (str[i] === ")" || str[i] === "}") {
      if (braket.length === 0) {
        return false;
      } else {
        let t = m[str[i]];
        if (t != braket.pop()) {
          return false;
        }
      }
    }
  }

  return braket.length === 0;
}

const value = "(5 + 7){ * (3 * 5)";

const str = value.split(" ").join("");

console.log(braketCounter(str));

// 1. 이 문제를 보고 어떻게 이 솔루션을 떠올렸지?
// 이전에 나왔던 브라켓 문제를 생각했다.
// 거기에 추가적으로 { , }도 포함해서 생각했다.
// 브라켓종류에 따라서 다르게 push, pop 하는 것을 생각했는데
// 풀이에서는 (17번째줄)
// ) 일 때 팝한것이 ( 이 아니면 false
// } 일 때 팝한것이 { 이 아니면 false 로 나눈 것이 아니라
// object를 하나 생성해서 값을 대입시키는 것이 인상적이었다. (3번째줄 m)
