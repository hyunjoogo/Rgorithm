// B => B
// C => BC
// B => CB => 있으니까 맨 앞에꺼 빼고 뒤로
// A => CBA => 없으니까 그대로 맨 뒤로 붙여
// E => BAE => C 아웃 , 꽉 찼고 없으니까 맨 앞에 빼고 뒤에 넣어
// B => AEB => 있으니까 맨 앞에꺼 빼고 뒤로
// C => EBC => 꽉 찼고 없으니까 맨 앞에 빼고 뒤에 넣어
// E => BCE => 있으니까 맨 앞에꺼 빼고 뒤로

// 길이가 되기 전
//    - 있으니까 shift & push
//    - 없으니까 push

// 길이가 된 후
//    - 있으니까 shift & push
//    - 없으니까 shift & push

const value = "ABCEDF";
const frame = 3;
const queue = [];
let time = 0;
for (let i of value) {
  if (queue.length < frame) {
    if (!queue.includes(i)) {
      console.log("miss");
      time += 6;

      queue.push(i);
    } else {
      console.log("hit");
      time += 1;
      queue.shift();
      queue.push(i);
    }
  } else {
    if (!queue.includes(i)) {
      console.log("miss");
      time += 6;
      queue.shift();
      queue.push(i);
    } else {
      console.log("hit");
      time += 1;
      queue.shift();
      queue.push(i);
    }
  }
  console.log(queue);
}
console.log(queue, time);
