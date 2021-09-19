class QueueFromStacks<T> {
  in: T[] = [];
  out: T[] = [];

  enqueue(val: T): QueueFromStacks<T> {
    this.in.push(val);
    return this;
  }

  dequeue(): T | undefined {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        const removedVal = this.in.pop();
        if (removedVal) this.out.push(removedVal);
      }
    }

    return this.out.pop();
  }

  peek(): T {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        const removedVal = this.in.pop();
        if (removedVal) this.out.push(removedVal);
      }
    }

    return this.out[this.out.length - 1];
  }

  empty(): boolean {
    return this.in.length === 0 && this.out.length === 0;
  }
}
