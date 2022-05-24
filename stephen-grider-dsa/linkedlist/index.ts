export class Node<T> {
  public data: T | null = null;
  public next: Node<T> | null = null;

  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList<T> {
  public head: Node<T> | null = null;

  public insertFirst(data: T): LinkedList<T> {
    // assign the current head to next of newNode
    this.head = new Node<T>(data, this.head);
    return this;
  }

  public size(): number {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }

    return counter;
  }

  public getFirst(): Node<T> | null {
    return this.head;
  }

  public getLast(): Node<T> | null {
    let tail: Node<T> | null = null;
    let currentNode = this.head;
    while (currentNode) {
      tail = currentNode;
      currentNode = currentNode.next;
    }

    return tail;
  }

  public clear(): LinkedList<T> {
    this.head = null;
    return this;
  }

  public removeFirst(): LinkedList<T> {
    if (!this.head) return this;
    const firstElement = this.head;
    this.head = this.head.next;

    return this;
  }

  public insertLast(data: T): LinkedList<T> {
    const newNode = new Node<T>(data);
    const lastElement = this.getLast();

    // if list is empty
    if (!lastElement) {
      this.head = newNode;
      return this;
    }

    lastElement.next = newNode;
    return this;
  }

  public removeLast(): LinkedList<T> {
    // if there is not a single element
    if (!this.head) return this;

    // if there is only one element
    if (this.head && !this.head.next) {
      this.head = null;
      return this;
    }

    // if there are more than one element
    let previous: Node<T> = this.head;
    let current: Node<T> | null = previous.next;

    while (current && current.next) {
      previous = current;
      current = current.next;
    }

    // here current will be the last element
    previous.next = null;
    return this;
  }

  public getAt(index: number): Node<T> | null {
    if (!this.head) return null;
    let counter = 0;
    let node: Node<T> | null = this.head;

    while (counter !== index) {
      if (node) node = node.next;
      else return null;

      counter++;
    }

    return node;
  }

  public removeAt(index: number): LinkedList<T> {
    if (!this.head) return this;

    if (index === 0) {
      this.head = this.head.next;
      return this;
    }

    const previousNode = this.getAt(index - 1);
    if (!previousNode) return this;

    // this is previous to the node that should be deleted
    const nodeToBeDel = previousNode.next;
    if (!nodeToBeDel) return this;
    previousNode.next = nodeToBeDel.next;

    return this;
  }

  public insertAt(data: T, index: number): LinkedList<T> {
    const newNode = new Node<T>(data);
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    if (index === 0) {
      const nextNode = this.head;
      this.head = newNode;
      newNode.next = nextNode;

      return this;
    }

    const previousNode = this.getAt(index - 1);
    const currentNode = previousNode?.next || null;

    if (currentNode) {
      if (previousNode) previousNode.next = newNode;
      newNode.next = currentNode;
    } else {
      const currentNode = this.getLast();
      if (currentNode) currentNode.next = newNode;
    }

    return this;
  }

  public forEach(callbackFn: (node: Node<T>) => void) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data) callbackFn(currentNode);
      currentNode = currentNode.next;
    }
  }

  public *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
