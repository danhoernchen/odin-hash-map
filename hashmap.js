import { LinkedList } from "./list.js";

export class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.bucketArr = new Array(16);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= 16;
    }

    return hashCode;
  }

  calculateLoad() {
    this.bucketArr.filter(Object).length > this.capacity * this.loadFactor
      ? this.expandBuckets()
      : false;
  }

  expandBuckets() {
    this.bucketArr.length = this.bucketArr.length * 2;
    this.capacity = this.capacity * 2;
  }

  set(key, value) {
    this.calculateLoad();
    const hash = this.hash(key);
    const bucket = this.bucketArr[hash];
    if (!bucket) {
      this.bucketArr[hash] = new LinkedList();
      this.bucketArr[hash].append(key, value);
    } else if (bucket.key === key) {
      bucket.value = value;
    } else {
      bucket.append(key, value);
    }
  }

  get(key) {
    const hash = this.hash(key);
    return this.bucketArr[hash].findKey(key);
  }

  has(key) {
    const hash = this.hash(key);
    return this.bucketArr[hash].findKey(key) ? true : false;
  }

  remove(key) {
    const hash = this.hash(key);
    const index = this.bucketArr[hash].keyIndex(key);
    console.log(index);
    if (index >= 0) {
      this.bucketArr[hash].removeAt(index);
      console.log(this.bucketArr[hash].toString());
      return true;
    }
    return false;
  }

  length() {
    let result = 0;
    this.bucketArr.filter(Object).forEach((list) => (result += list.size));
    return result;
  }

  clear() {
    this.bucketArr = new Array(16);
  }

  keys() {
    const result = [];
    this.bucketArr.filter(Object).forEach((list) => {
      list.allKeys().forEach((key) => result.push(key));
    });
    return result;
  }

  values() {
    const result = [];
    this.bucketArr.filter(Object).forEach((list) => {
      list.allValues().forEach((value) => result.push(value));
    });
    return result;
  }

  entries() {
    const result = [];
    this.keys().forEach((key) => {
      result.push([key, this.get(key)]);
    });
    return result;
  }
}
