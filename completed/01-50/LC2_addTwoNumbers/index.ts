class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(list1: ListNode | null, list2: ListNode | null) {
  if (list1 === null && list2 === null) return null;
  else if (list1 === null) return list2;
  else if (list2 === null) return list1;

  let sum = list1.val + list2.val;
  // sum < 10
  if (sum < 10)
    return new ListNode(
      sum,
      addTwoNumbers(
        list1?.next ? list1.next : null,
        list2?.next ? list2.next : null
      )
    );
  // sum >= 10
  else {
    if (list1.next && list2.next) {
      // list1.next && list2.next exist
      list1.next.val += 1;
      return new ListNode(sum - 10, addTwoNumbers(list1.next, list2.next));
    } else if (list1.next) {
      // list2.next not exist
      list2.next = new ListNode(1);
      return new ListNode(sum - 10, addTwoNumbers(list1.next, list2.next));
    } else if (list2.next) {
      // list1.next not exist
      list1.next = new ListNode(1);
      return new ListNode(sum - 10, addTwoNumbers(list1.next, list2.next));
    } else {
      // list1.next && list2.next not exist
      return new ListNode(sum - 10, new ListNode(1));
    }
  }
}
