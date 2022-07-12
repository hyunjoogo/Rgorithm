class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // 주어진 값을 받아들인 후 그것을 이용해 새로운 노드를 생성하는 것..?
    // 기존에 추가한 노드가 없다면?
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    // 기존에 노드가 없다면?
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // 리스트의 마지막을 리턴하고 빈 리스트면 undefined
    // - head값이 null이거나 length가 0이면 비어있는 것
    if (this.length === 0) {
      return undefined;
    }
    // tail에 갈때까지 이전 노드가 어떤 것인지를 추적하고 있다가
    // 끝에서 두번째 노드의 next를 null
    // tail을 끝에서 두번째 노드로 업데이트

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head; // 현재 헤드
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    // 엣지케이스 : 인덱스 범위가 초과일때?
    // - 인덱스가 음수이거나 혹은 리스트의 길이보다 같거나 클 경우 동작 안됨
    // - null 또는 undefined 반환
    if (index >= this.length || index < 0) return null;

    let counter = 0;
    let current = this.head;
    while (index !== counter) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    // 해당 노드가 없으면 false, 있으면 값 업데이트 후 true
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
}

const list = new SinglyLinkedLists();
list.push('hello');
list.push('there');
list.push('!');
console.log(list.set(2, 'nice'));


console.log(list);
