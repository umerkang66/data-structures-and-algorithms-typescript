class Node<T> {
  public next: Node<T> | null;
  constructor(public value: T) {
    this.next = null;
  }
}

export class LinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public length = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public push(value: T): this {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }

    this.head.next = newNode;
    this.tail = newNode;
    return this;
  }
}
