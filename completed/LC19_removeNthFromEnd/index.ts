class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyHead = { next: head };
  let slow = dummyHead;
  let fast = dummyHead;

  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummyHead.next;
}

module.exports = removeNthFromEnd;
