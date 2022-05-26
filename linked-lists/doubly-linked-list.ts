export class DoublyLinkedListNode<T> {
  public next: DoublyLinkedListNode<T> | null = null;
  public previous: DoublyLinkedListNode<T> | null = null;

  constructor(public value: T) {}
}

export class DoublyLinkedList<T> {
  public head: DoublyLinkedListNode<T> | null = null;
  public tail: DoublyLinkedListNode<T> | null = this.head;
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

  private traverseToIndex(index: number): DoublyLinkedListNode<T> | null {
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

  public append(data: T, ...others: T[]): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedListNode<T>(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head && this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }

    this.length++;

    if (others.length) {
      others.forEach(dataValue => {
        const newNode = new DoublyLinkedListNode<T>(dataValue);
        if (this.head && this.tail) {
          this.tail.next = newNode;
          newNode.previous = this.tail;
          this.tail = newNode;
          this.length++;
        }
      });
    }

    return this;
  }

  public prepend(data: T, ...others: T[]): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedListNode<T>(data);
    newNode.next = this.head;
    if (this.head) this.head.previous = newNode;
    this.head = newNode;
    if (!this.tail) this.tail = this.head;

    this.length++;

    if (others.length) {
      others.forEach(dataValue => {
        const newNode = new DoublyLinkedListNode<T>(dataValue);
        newNode.next = this.head;
        if (this.head) this.head.previous = newNode;
        this.head = newNode;
        this.length++;
      });
    }

    return this;
  }

  public insert(index: number, data: T): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedListNode<T>(data);

    if (index === 0) {
      return this.prepend(data);
    }

    const previousNode = this.traverseToIndex(index - 1);

    if (previousNode) {
      const nextNode = previousNode.next;

      previousNode.next = newNode;
      newNode.previous = previousNode;

      newNode.next = nextNode;
      if (nextNode) nextNode.previous = newNode;

      this.length++;
      return this;
    }

    // add to the end of list, this will automatically increase the length
    this.append(data);
    return this;
  }

  public remove(index: number): DoublyLinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      const removedItem = this.head;

      if (this.head) {
        this.head = this.head.next;
        if (this.head) this.head.previous = null;
        this.length--;
      }

      if (!this.head) this.tail = null;
      return removedItem;
    }

    const previousNode = this.traverseToIndex(index - 1);

    if (previousNode && previousNode.next) {
      const removedItem = previousNode.next;
      const nextNode = previousNode.next.next;

      previousNode.next = nextNode;
      if (nextNode) nextNode.previous = previousNode;

      if (!nextNode) this.tail = previousNode;

      this.length--;
      return removedItem;
    }

    // if index is very high, remove from the end of linked list
    const secondLastNode = this.traverseToIndex(this.length - 1 - 1);

    if (secondLastNode) {
      const removedItem = secondLastNode.next;

      secondLastNode.next = null;
      this.tail = secondLastNode;
      this.length--;

      return removedItem;
    }

    return null;
  }
}
