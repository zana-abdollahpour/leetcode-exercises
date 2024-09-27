class MyHashMap {
  constructor(private collection: Record<string, number> = {}) {}

  put(key: number, value: number): void {
    this.collection[key] = value;
  }

  get(key: number): number {
    return this.collection[key] ?? -1;
  }

  remove(key: number): void {
    delete this.collection[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
