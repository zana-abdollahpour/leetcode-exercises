// Array solution
/* class MyHashSet<T> {
  constructor(private collection: T[] = []) {}

  add(key: T): void {
    if (!this.contains(key)) this.collection.push(key);
  }

  remove(key: T): void {
    if (this.contains(key)) {
      const index = this.collection.indexOf(key);
      this.collection.splice(index, 1);
    }
  }

  contains(key: T): boolean {
    return this.collection.includes(key);
  }
} */

// Object solution
class MyHashSet {
  constructor(private collection: Record<string, true> = {}) {}

  add(key: string): void {
    if (!this.contains(key)) this.collection[key] = true;
  }

  remove(key: string): void {
    delete this.collection[key];
  }

  contains(key: string): boolean {
    return Boolean(this.collection[key]);
  }
}
