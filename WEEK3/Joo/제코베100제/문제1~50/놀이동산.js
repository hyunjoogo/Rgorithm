const limit = "50";
const friends = "5";

let totalWeight = 0;
let count = 0;

for (let i = 0; i < friends; i++) {
  const weight = 20;
  totalWeight += weight;
  if (totalWeight <= parseInt(limit, 10)) {
    count++;
  }
}

console.log(count);
