import { StackArray } from '../stack';

export class QueueFromStack<T> {
  private firstStack = new StackArray<T>();
  private secondStack = new StackArray<T>();
  public length: number = 0;

  public enqueue(data: T): QueueFromStack<T> {
    this.firstStack.push(data);
    this.length++;
    return this;
  }

  public dequeue(): T | null {
    if (!this.firstStack.peek()) {
      return null;
    }

    while (this.firstStack.peek()) {
      const poppedItem = this.firstStack.pop();
      if (poppedItem) this.secondStack.push(poppedItem);

      console.log('1');
    }

    const firstItem = this.secondStack.pop();
    this.length--;

    while (this.secondStack.peek()) {
      const poppedItem = this.secondStack.pop();
      if (poppedItem) this.firstStack.push(poppedItem);
    }

    return firstItem;
  }

  public peek(): T | null {
    while (this.firstStack.peek()) {
      const poppedItem = this.firstStack.pop();
      if (poppedItem) this.secondStack.push(poppedItem);
    }

    const firstItem = this.secondStack.peek();

    while (this.secondStack.peek()) {
      const poppedItem = this.secondStack.pop();
      if (poppedItem) this.firstStack.push(poppedItem);
    }

    return firstItem;
  }
}
