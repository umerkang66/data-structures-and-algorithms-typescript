class QueueNode<T> {
  public next: QueueNode<T> | null = null;
  constructor(public value: T) {}
}

export class Queue<T> {
  private first: QueueNode<T> | null = null;
  private last: QueueNode<T> | null = null;
  public length: number = 0;

  public enqueue(data: T): Queue<T> {
    const newNode = new QueueNode<T>(data);

    if (!this.first && !this.last) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }

    if (this.last) {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }

    return this;
  }

  public dequeue(): T | null {
    if (!this.first) return null;
    const firstItem = this.first.value;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;

    return firstItem;
  }

  public peek(): T | null {
    if (!this.first) return null;
    return this.first.value;
  }
}
