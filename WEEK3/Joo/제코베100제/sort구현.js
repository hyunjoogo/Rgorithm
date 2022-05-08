const list = "176 155 165 166 169 99".split(" ");

let result = "YES";
for (let i = 0; i < list.length - 1; i++) {
  if (parseInt(list[i], 10) > parseInt(list[i + 1], 10)) {
    result = "NO";
    break;
  }
}
console.log(result);

const unsorted = list

console.log(unsorted.sort((a, b) => a - b).join(" "));
