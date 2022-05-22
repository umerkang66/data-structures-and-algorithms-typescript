export class Queue<T> {
  private data: T[] = [];

  public add(arg: T): Queue<T> {
    this.data.push(arg);
    return this;
  }

  public remove(): T | undefined {
    return this.data.shift();
  }

  public peek(): T | undefined {
    return this.data[0];
  }
}
