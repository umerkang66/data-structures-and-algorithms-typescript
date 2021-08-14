class QueueWithStacks<T> {
  in: T[] = [];
  out: T[] = [];

  enqueue(val: T) {
    this.in.push(val);
  }

  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        const removedVal = this.in.pop();
        if (removedVal) this.out.push(removedVal);
      }
    }

    return this.out.pop();
  }

  peek() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        const removedVal = this.in.pop();
        if (removedVal) this.out.push(removedVal);
      }
    }

    return this.out[this.out.length - 1];
  }

  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}
