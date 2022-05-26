export class LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null;
  constructor(public value: T) {}
}

export class LinkedList<T> {
  public head: LinkedListNode<T> | null = null;
  public tail: LinkedListNode<T> | null = this.head;
  public length: number = 0;

  public printList(): T[] {
    const array: T[] = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  private traverseToIndex(index: number): LinkedListNode<T> | null {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index && currentNode) {
      currentNode = currentNode.next;
      counter++;
    }

    if (counter < index) {
      return null;
    }

    return currentNode;
  }

  public append(data: T, ...others: T[]): LinkedList<T> {
    const newNode = new LinkedListNode<T>(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head && this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    if (others.length) {
      others.forEach(dataValue => {
        const newNode = new LinkedListNode<T>(dataValue);
        if (this.head && this.tail) this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
      });
    }

    return this;
  }

  public prepend(data: T, ...others: T[]): LinkedList<T> {
    const newNode = new LinkedListNode<T>(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (others.length) {
      others.forEach(dataValue => {
        const newNode = new LinkedListNode<T>(dataValue);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
      });
    }

    return this;
  }

  public insert(index: number, data: T): LinkedList<T> {
    const newNode = new LinkedListNode<T>(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }

    const previousNode = this.traverseToIndex(index - 1);

    if (previousNode) {
      const nextNode = previousNode.next;
      previousNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
      return this;
    }

    // add to the end of list, this will automatically increase the length
    this.append(data);
    return this;
  }

  public remove(index: number): LinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      const removedItem = this.head;
      if (this.head) this.head = this.head.next;
      this.length--;
      return removedItem;
    }

    const previousNode = this.traverseToIndex(index - 1);

    if (previousNode && previousNode.next) {
      const removedItem = previousNode.next;

      const nextNode = previousNode.next.next;
      previousNode.next = nextNode;
      this.length--;

      return removedItem;
    }

    // if index is very high, remove from the end of linked list
    const secondLastNode = this.traverseToIndex(this.length - 1 - 1);

    if (secondLastNode) {
      const removedItem = secondLastNode.next;

      secondLastNode.next = null;
      this.length--;

      return removedItem;
    }

    return null;
  }
}
