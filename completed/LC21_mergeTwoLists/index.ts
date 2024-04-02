class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummyHead = { next: null };

  let tail = dummyHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      tail = tail.next;
      list1 = list1.next;
    } else {
      tail.next = list2;
      tail = tail.next;
      list2 = list2.next;
    }
  }

  tail.next = list1 || list2;

  return dummyHead.next;
}

module.exports = mergeTwoLists;
