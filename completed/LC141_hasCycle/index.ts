class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let leading: ListNode | null = head;
  let lagging: ListNode | null = head;

  while (leading && leading.next) {
    lagging = lagging!.next;
    leading = leading.next.next;

    if (lagging === leading) return true;
  }

  return false;
}

module.exports = hasCycle;
