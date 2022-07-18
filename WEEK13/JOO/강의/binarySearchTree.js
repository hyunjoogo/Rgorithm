class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
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
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left; // left에 있는 노드로 다시 while문 시작
      } else if (value < current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right; // right에 있는 노드로 다시 while문 시작
      }
    }
  }

  find(value) {
    // Starting at the root
    // 1. Check if there is a root, if not - we're done searching!
    // 2. If there is a root, check if the value we are looking for.
    // 2.1 If we found it, we're done!
    // 2.2 If not, check to see if the value is greater than or less than the value of the root
    // 2.2.1 If it is greater
    // Check to see if there is a node to the right
    // - If there is, move to that node and repeat these steps
    // - If there is not, we're done searching.
    // 2.2.2 If it is less
    // Check to see if there is a node to the left
    // - If there is, move to that node and repeat these steps
    // - If there is not, we're done searching.
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.left) {
        current = current.left
      } else if (value < current.right) {
        current = current.right
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }
  contain(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.left) {
        current = current.left
      } else if (value < current.right) {
        current = current.right
      } else {
        found = true;
      }
    }
    return current;
  }
}


const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.find(10)


