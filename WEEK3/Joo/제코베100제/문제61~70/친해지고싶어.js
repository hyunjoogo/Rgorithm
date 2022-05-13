const word = "복잡한 세상 편하게 살자";

let result = "";
for (let i of word.split(" ")) {
  result += i[0];
}

console.log(result);
