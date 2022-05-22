// arguments enter from one end of the DS, and exits from the other end, first in first out (FIFO)
export class Queue<T> {
  // we are using array, but linked-list is better here
  private data: T[] = [];

  // enqueuing
  public add(arg: T): Queue<T> {
    this.data.push(arg);
    return this;
  }

  // dequeueing
  public remove(): T | undefined {
    return this.data.shift();
  }
}
