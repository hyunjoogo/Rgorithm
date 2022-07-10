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
    /*
    *     let current = this.head;
    while(current.next !== this.tail) {
      console.log(current)
      current = current.next
    }
    console.log('끝에서 두번째 노드',current)
    let temp = current.next;
    console.log(temp);
    current.next = null
    this.tail = current
    // 이거의 next는 리턴해주고
    // 이거의 next = null
    // 그리고 this.head의 tail을 지금 current로
    this.length--;
    console.log(this);
    return temp
    *
    * */
  }

}

const list = new SinglyLinkedLists();
list.push('hello');
list.push('there');
list.push('!');
list.pop();
list.pop();
list.pop();
console.log(list);
