// 값을 저장하는 배열에 맨 뒤에 push를 한 다음
// 버블업


class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[idx] = parent;
      idx = parentIndex;
    }
  }
}

// [41, 39, 33, 18, 27, 12, 55]
//   0   1   2   3   4   5   6

//            41
//      39            33
// 18     27       12     55

// 부모노드 찾을 때는 floor((인덱스 -1) / 2)

