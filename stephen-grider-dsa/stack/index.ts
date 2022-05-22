export class Stack<T> {
  private data: T[] = [];

  public push(arg: T): Stack<T> {
    this.data.push(arg);
    return this;
  }

  public pop(): T | undefined {
    return this.data.pop();
  }

  public peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
}
