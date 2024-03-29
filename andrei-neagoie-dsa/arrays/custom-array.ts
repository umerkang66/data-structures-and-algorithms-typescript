export class CustomArray<T> {
  public length: number = 0;
  public data: { [key: number]: T } = {};

  /**
   * Get element at provided index.
   * @param {number} index Get element at provided index
   * @returns {T} Item at provided index
   */
  public get(index: number): T {
    if (index >= this.length) {
      throw new Error('Index out of bounds');
    }

    return this.data[index];
  }

  /**
   * Add elements in array.
   * @param {T} item Item to add in array
   * @param {Array<T>} otherItems Other items to add in array using rest operator
   * @returns {CustomArray<T>} CustomArray
   */
  public push(item: T, ...otherItems: T[]): CustomArray<T> {
    this.data[this.length] = item;
    this.length++;

    if (otherItems.length) {
      otherItems.forEach(item => {
        this.data[this.length] = item;
        this.length++;
      });
    }

    return this;
  }

  /**
   * Removes the last element from an array and returns it.
   * @returns {T | undefined} Last element in array
   */
  public pop(): T | undefined {
    if (!this.length) {
      return undefined;
    }

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  /**
   * Removes the element at provided index from an array and returns it.
   * @returns {T} Element at index in array
   */
  public delete(index: number): T {
    if (index >= this.length) {
      throw new Error('Index out of bounds');
    }

    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  /**
   * Shift the array from the index provided to the end of array
   * @param {number} index Index from where the shifting should begins
   */
  public shiftItems(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // technically this would be an empty space in memory
    delete this.data[this.length - 1];
    this.length--;
  }
}
