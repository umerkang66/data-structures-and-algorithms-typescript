export class CustomHashTable {
  private size: number;
  public data: Array<Array<any>>;

  constructor(numBuckets: number) {
    this.size = numBuckets;
    this.data = new Array(numBuckets);
  }

  /**
   * @returns {number} Size of the hash table
   */
  public getSize(): number {
    return this.size;
  }

  /**
   * Create hash for key provided where the value should be stored in hash table.
   * @param {string} key Key for hash table value to be hashed
   * @returns {number} Hash value for key
   */
  public _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  /**
   * Sets the key value pair in hash table, at the calculated hash.
   * @param {string} key Key of keyValuePair to set
   * @param {any} value Value of keyValuePair to set
   */
  public set(key: string, value: any): void {
    const address = this._hash(key);

    // In the main array, if at this address (index), no element previous element exist, create new array, and in that array, add the key value pairs (in array form)
    if (!this.data[address]) {
      this.data[address] = [];
    }
    // If the address is same, just add in the same sub array
    this.data[address].push([key, value]);
  }

  /**
   * Retrieve the value from hash table for provided key and returns it.
   * @param {string} key Key of value to get
   * @returns {any | undefined} Value, if not found, undefined
   */
  public get(key: string): any | undefined {
    const address = this._hash(key);
    const currentBucket: any[] | undefined = this.data[address];

    // If value is not set, no new array inside the main array is created
    if (currentBucket) {
      for (const item of currentBucket) {
        if (item[0] === key) return item[1];
      }
    }

    return undefined;
  }

  /**
   * @returns {Array<string>} All the keys in hash table
   */
  public keys(): string[] {
    const hashKeys: string[] = [];

    this.data.forEach((bucket: any[] | undefined) => {
      if (bucket) hashKeys.push(bucket[0][0]);
    });

    return hashKeys;
  }

  /**
   * @returns {Array<any>} All value in hash table
   */
  public values(): any[] {
    const hashValues: string[] = [];

    this.data.forEach((bucket: any[] | undefined) => {
      if (bucket) hashValues.push(bucket[0][1]);
    });

    return hashValues;
  }
}
