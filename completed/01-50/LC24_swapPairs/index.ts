class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null) {
  /*   if (!head?.next) return head;

  let firstNode = head;
  let secondNode = head.next;

  let remaining = swapPairs(secondNode.next);

  firstNode.next = remaining;
  secondNode.next = firstNode;

  return secondNode; */

  let dummy = new ListNode(0, head);
  let prev: ListNode | null = dummy;
  let current: ListNode | null = head;

  while (current !== null && current.next) {
    const second = current.next;
    const third = current?.next?.next ?? null;

    second.next = current;
    current.next = third;
    prev.next = second;

    prev = current;
    current = third;
  }

  return dummy.next;
}

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

console.log(list);
console.log(swapPairs(list)); // [2,1,4,3]
