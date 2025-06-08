export class Node {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.next = nextNode;
  }

  changeValue(value) {
    this.value = value;
  }

  changeNext(next) {
    this.next = next;
  }

  getNext() {
    return this.next;
  }
}
