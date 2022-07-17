class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root
    while(true) {
      if (value === current.value) return undefined;
      if(value < current.value) {
        if (current.left === null ) {
          current.left = newNode;
          return this;
        }
        current = current.left // left에 있는 노드로 다시 while문 시작
      } else if (value < current.right) {
        if (current.right === null ) {
          current.right = newNode;
          return this;
        }
        current = current.right // right에 있는 노드로 다시 while문 시작
      }
    }
  }
}

// 1. Create a new node.
// 2. Starting at the root
// 2.1 Check if there is a root, if not - the root now becomes the new node!
// 2.2 If there is a root,
// check if the value of the new node is greater than or less than the value of root
// 2.2.1 If it is greater
// Check to see if there is a node to the right
// - If there is, move to that node and repeat these steps
// - If there is not, and that node as the right property
// 2.2.2 If it is less
// Check to see if there is a node to the left
// - If there is, move to that node and repeat these steps
// - If there is not, and that node as the left property



const tree = new BinarySearchTree();


