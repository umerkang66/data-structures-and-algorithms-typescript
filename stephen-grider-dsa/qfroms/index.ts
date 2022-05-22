import { Stack } from './stack';

export class QueueFromStack<T> {
  public stack = new Stack<T>();
  public queueStack = new Stack<T>();

  private populateQueueStack(): void {
    while (true) {
      const lastItem = this.stack.pop();
      if (lastItem) this.queueStack.push(lastItem);
      else break;
    }
  }

  private populateStack(): void {
    while (true) {
      const lastItem = this.queueStack.pop();
      if (lastItem) this.stack.push(lastItem);
      else break;
    }
  }

  public add(arg: T): QueueFromStack<T> {
    this.stack.push(arg);
    return this;
  }

  public remove(): T | undefined {
    // Create second stack, after using it immediately restore the first stack
    this.populateQueueStack();
    if (this.queueStack) {
      const removedItem = this.queueStack.pop();
      this.populateStack();
      return removedItem;
    }

    return undefined;
  }

  public peek(): T | undefined {
    // Create second stack, after using it immediately restore the first stack
    this.populateQueueStack();
    if (this.queueStack) {
      const peekedItem = this.queueStack.peek();
      this.populateStack();
      return peekedItem;
    }

    return undefined;
  }
}
