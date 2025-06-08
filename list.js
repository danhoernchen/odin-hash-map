import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  setHead(key, value) {
    this.head = new Node(key, value);
  }

  prepend(key, value) {
    if (this.head === null) {
      this.setHead(key, value);
      this.size++;
      return;
    }
    newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  append(key, value) {
    if (this.head === null) {
      this.setHead(key, value);
      this.size++;
      return;
    }
    const newNode = new Node(key, value);
    let currentNode = this.head;
    while (true) {
      if (currentNode.next === null) {
        currentNode.next = newNode;
        this.size++;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  getSize() {
    return size;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while (true) {
      if (currentNode.next === null) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insertAt(key, value, index) {
    let currentNode = this.head;
    if (index === 0) {
      this.prepend(key, value);
      return;
    }
    for (let i = 1; i < index; i++) {
      console.log(i, currentNode.value);
      currentNode = currentNode.next;
    }
    const newNode = new Node(key, value, currentNode.next);
    currentNode.next = newNode;
  }

  removeAt(index) {
    let currentNode = this.head;
    let previousNode = currentNode;
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
    }
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
  }

  pop() {
    let currentNode = this.head;
    let previousNode;
    while (true) {
      currentNode = currentNode.next;
      if (currentNode.next === null) {
        previousNode.next = null;
        this.size--;
        return;
      }
      previousNode = currentNode;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (true) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;
    }
  }

  find(value) {
    let i = 0;
    let currentNode = this.head;
    while (true) {
      if (currentNode.value === value) {
        return i;
      }
      if (currentNode.next === null) {
        return 0;
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  findKey(key) {
    let currentNode = this.head;
    while (true) {
      if (currentNode.key === key) {
        return currentNode.value;
      } else if (currentNode.next === null) {
        return null;
      }
      currentNode = currentNode.next;
    }
  }

  keyIndex(key) {
    let i = 0;
    let currentNode = this.head;
    console.log(currentNode);
    while (true) {
      if (currentNode.key === key) {
        return i;
      }
      if (currentNode.next === null) {
        return -1;
      }
      currentNode = currentNode.next;
      console.log(currentNode);
      i++;
    }
  }

  toString() {
    if (this.head === null) {
      return "empty";
    }
    let result = ``;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      result += `( ${currentNode.value} ) --> `;
      currentNode = currentNode.next;
    }
    result += `( ${currentNode.value} ) --> null`;
    return result;
  }

  allKeys() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.key);
      currentNode = currentNode.next;
    }
    return arr;
  }

  allValues() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}
