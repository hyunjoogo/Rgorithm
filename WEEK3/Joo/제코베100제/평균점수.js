const scores = "20 30 40".split(" ");

let sum = 0;

for (let i = 0; i < scores.length; i++) {
  sum = sum + parseInt(scores[i], 10);
}

console.log(Math.floor(sum / scores.length));
