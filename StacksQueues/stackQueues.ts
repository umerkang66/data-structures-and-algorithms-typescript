class StackArr<T> {
  array: T[] = [];

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value: T, ...otherValues: T[]) {
    this.array.push(value);

    if (otherValues.length) {
      otherValues.forEach(value => {
        this.array.push(value);
      });
    }

    return this;
  }

  pop() {
    return this.array.pop();
  }

  isEmpty() {
    return this.array.length < 0;
  }
}

const myStackArr = new StackArr();

///////////////////////////////////
///////////////////////////////////
class QueueNode<T> {
  next: QueueNode<T> | null = null;
  constructor(public value: T) {}
}

class Queue<T> {
  first: QueueNode<T> | null = null;
  last: QueueNode<T> | null = null;
  length: number = 0;

  peek(): QueueNode<T> | null {
    return this.first;
  }

  printList(): T[] {
    const arr = [];
    let currentNode = this.first;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  enqueue(value: T, ...otherValues: T[]): Queue<T> {
    const newNode = new QueueNode(value);

    if (this.length === 0) {
      this.last = newNode;
      this.first = this.last;
    }

    if (this.length > 0) {
      if (this.last) this.last.next = newNode;
      this.last = newNode;
    }

    if (otherValues.length > 0) {
      otherValues.forEach(value => {
        const newNode = new QueueNode(value);
        if (this.last) this.last.next = newNode;
        this.last = newNode;
        this.length++;
      });
    }

    this.length++;
    return this;
  }

  dequeue(): T | null {
    if (!this.length) return null;

    // if (this.first === this.last) {
    if (this.length === 1) {
      this.last = null;
      this.first = this.last;
      this.length--;
      return null;
    }

    const holdingPointer = this.first;
    let nextHoldingPointer: QueueNode<T> | null = null;
    if (holdingPointer) nextHoldingPointer = holdingPointer.next;

    this.first = nextHoldingPointer;

    this.length--;
    if (holdingPointer) return holdingPointer.value;
    return null;
  }

  isEmpty() {
    return this.length < 0;
  }
}

const myQueue = new Queue<number>();
