class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 값을 가지는 새로운 노드를 만들고
  // 헤드가 널인지 길이가 0인지 확인 (빈 리스트면 헤드, 테일 설정해야함)
  // - 이러면 next, prev를 연결할 필요없음

  // 현재 테일을 찾아서 테일의 next를 생성한 노드로
  // 생성한 노드의 prev를 예전 테일로 설정
  // 전체의 테일을 생성한 노드로 설정

  // 길이를 1추가
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }


  pop() {
    if (!this.head) return undefined;
    // Store the current tail in a variable to return later
    let poppedNode = this.tail;
    // If the length is one
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the tail to be the previous Node
      this.tail = poppedNode.prev;
      // Set the newTail's next to null
      this.tail.next = null;
      // Set the oldTail's prev to null
      poppedNode.prev = null;
    }
    // Decrement the length
    this.length--;
    // Return the value removed
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    // Store the current head property in variable
    let oldHead = this.head;
    // If the length is one
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the head to be the next of the old head
      this.head = this.head.next;

      // Set the head's prev property to null
      this.head.prev = null;
      // Set the old head's next to null
      oldHead.next = null;
      // Decrement the length
      this.length--;
    }
    return oldHead
  }
  unshift(value) {
    // Create a new node with the value passed to the function
    const newNode = new Node(value);
    // If the length is 0
    if (!this.head) {
      // Set the head and the tail to be the newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set the previous on the head of the list to be the new node
      this.head.prev = newNode;
      // Set the next on the new node to be the head property.
      newNode.next = this.head;
      // Update the head to list to be the new node
      this.head = newNode;
    }
    // Increment the length.
    this.length++;
    // Return the list.
    return this;
  }
  get(index) {
    // If the index is less than 0 or greater or equal to the length, return null.
    if (index < 0 || index >= this.length) return null;
    // If the index is less than or equal to half the length of the list,
    if (this.length / 2 >= index) {
      // Loop through the list starting from the head and loop towards the middle.
      let count = 0;
      let currentNode = this.head;
      while(count !== index) {
        currentNode = currentNode.next
        count++;
      }
      // Return the node once it is found
      return currentNode;
    }
    // If the index is greater than half the length of the list,
    else {
      // Loop through the list staring from the tail and loop towards the middle.
      let count = this.length - 1;
      let currentNode = this.tail;
      while(count !== index) {
        currentNode = currentNode.prev
        count--;
      }
      // Retrun the node once it is found.
      return currentNode;
    }
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.value = value;
      return true;
    }
    return false
  }

  insert(index, value) {
    // If the index is less than 0 or greater or equal to the length, return null.
    if (index < 0 || index > this.length) return false;
    if (index === 0 ) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    let beforeNode = this.get(index -1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0 ) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;

    beforeNode.next = afterNode, afterNode.prev = beforeNode;
    removeNode.next = null, removeNode.prev = null;
    this.length--;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(100);
list.push(101);
list.push(102);
list.push(103);
list.push(104);
list.remove(1);



