//BCBAEBCE
// 먼저 들어온 것이 먼저 나간다
const value = "ABCDABEA";
const frame = 3;
const queue = [];
let time = 0;
for (let i of value) {
  if (queue.length < frame) {
    if (!queue.includes(i)) {
      time += 6;
      queue.push(i);
    } else {
      time += 1;
    }
  } else {
    if (!queue.includes(i)) {
      time += 6;
      queue.shift();
      queue.push(i);
    } else {
      time += 1;
    }
  }
  console.log(queue);
}

// 길이가 3 보다 작으면 넣어
//    - 큐 안에 값이 있으면 넣지마
//    -

console.log(queue, time);

// B => B miss
// C => BC miss
// B => BC hit
// A => BCA miss
// E => CAE miss => B out, CAE
// B => AEB miss => C out, AEB
// C => EBC miss => A out, EBC
// E => EBC hit

// 1. 이 문제를 보고 어떻게 이 솔루션을 떠올렸지?
// 선입선출이라고 해서 큐를 먼저 생각함
// 선입선출이니까 뒤에 값을 넣을 때 맨앞 값을 뺌
// 큐의 크기가 프레임(메모리 크기)보다 작을 때는 넣는다 miss
//    - 다만, 큐 안에 값이 있으면 넣지않고 hit
// 큐의 크기가 프레임보다 같을 때는
//    - 큐 안에 값이 있으면 hit
//    - 큐 안에 값이 없으면 선입선출로 맨 앞에 값을 빼고 지금 값을 뒤로 넣는다. miss

// 2. 이것보다 더 좋은 방법은 없을까?
// 딱히 생각이 안남!

for (let i of value) {
  if (queue.includes(i)) {
    time += 1;
  } else {
    if (queue.length < frame) {
      queue.push(i);
    } else {
      queue.shift();
      queue.push(i);
    }
    time += 6;
  }
}
