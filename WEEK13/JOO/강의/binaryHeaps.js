// 값을 저장하는 배열에 맨 뒤에 push를 한 다음
// 버블업


class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
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

  extractMax() {
    //Swap the first value in the values property with the last one
    // Pop from the values property, so you can return the value at the end;
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    return max;

    this.sinkDown();

  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length
    const element = this.values[idx];


    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild > element) {
          swap = leftChildIndex
        }
      }
      if (rightChildIndex < length ) {
        rightChild = this.values[rightChildIndex]
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }
}

const h = new MaxBinaryHeap();
h.extractMax();

// [41, 39, 33, 18, 27, 12, 55]
//   0   1   2   3   4   5   6
// [ 12, 39
//            41
//      39            33
// 18     27       12     55

// 부모노드 찾을 때는 floor((인덱스 -1) / 2)

