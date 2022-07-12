
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
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode
    }
    this.length++;
    return this
  }

}

const list = new DoublyLinkedList();
list.push(100)
list.push(101)
console.log(list);


