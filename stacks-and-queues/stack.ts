export class StackArray<T> {
  private data: T[] = [];
  public length: number = 0;

  public push(data: T): StackArray<T> {
    this.data.push(data);
    this.length++;
    return this;
  }

  public pop(): T | null {
    const removedItem = this.data.pop();
    if (removedItem) {
      this.length--;
      return removedItem;
    }
    return null;
  }

  public peek(): T | null {
    return this.data[this.data.length - 1] || null;
  }
}

// Stack from linked list
class StackLinkedListNode<T> {
  public next: StackLinkedListNode<T> | null = null;
  constructor(public value: T) {}
}

export class StackLinkedList<T> {
  private bottom: StackLinkedListNode<T> | null = null;
  private top: StackLinkedListNode<T> | null = null;
  public length: number = 0;

  public push(data: T): StackLinkedList<T> {
    const newNode = new StackLinkedListNode<T>(data);

    if (!this.bottom && !this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }

    let currentNode = this.bottom;
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    if (currentNode) {
      currentNode.next = newNode;
      this.top = newNode;
      this.length++;
    }
    return this;
  }

  public pop(): StackLinkedListNode<T> | null {
    if (!this.bottom) return null;
    const lastItem = this.top;

    let currentNode = this.bottom;
    while (currentNode && currentNode.next && currentNode.next.next) {
      currentNode = currentNode.next;
    }

    // if there is only one element
    if (currentNode && !currentNode.next) {
      this.bottom = null;
      this.top = null;
      this.length--;
      return currentNode;
    }
    // if there are more than one elements
    if (currentNode && currentNode.next) {
      currentNode.next = null;
    }

    this.top = currentNode;
    this.length--;
    return lastItem;
  }

  public peek(): StackLinkedListNode<T> | null {
    return this.top;
  }
}
