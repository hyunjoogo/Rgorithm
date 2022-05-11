const a = [1, 2, 3, 4];
const arrayB = ["a", "b", "c", "d"];
const result = [];
for (let i in a) {
  if (i % 2 === 0) {
    result.push([a[i], arrayB[i]]);
  } else {
    result.push([arrayB[i], a[i]]);
  }
}

console.log(result);
