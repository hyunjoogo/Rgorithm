function makeOneClassScore() {
  let class_score = [];
  for (let i = 0; i < 30; i++) {
    let student_score = [];
    for (let i = 0; i < 5; i++) {
      student_score.push(Math.floor(Math.random() * 100) + 1);
    }
    class_score.push(student_score);
  }
  return class_score;
}
const one = makeOneClassScore();
console.log(one);

let s_sum = 0;
let s_average = 0;
let c_average = [];
for (let s of one) {
  s_sum = s.reduce((a, b) => a + b);
  s_average = s_sum / 5;
  c_average.push(s_average);
}
console.log(c_average);
function makeAllClassScore() {
  // makeOneClassScore를 total_score에 넣는 걸 하면 되네
  let total_score = [];
  for (let i = 0; i < 7; i++) {
    total_score.push(makeOneClassScore());
  }
  return total_score;
}
// console.log(makeAllClassScore());
