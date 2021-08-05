/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head

    let mid = getMid(head)

    const left = sortList(head)
    const right = sortList(mid)

    return merge(left, right)
};

function getMid(head) {
    let prev = null
    let slow = head
    let fast = head

    while (fast && fast.next){
        prev = prev ? prev.next : head
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null
    return slow
}

function merge(head1, head2) {
    const tempHead = new ListNode();
    let curr = tempHead;

    while (head1 && head2){
        if(head1.val < head2.val){
            curr.next = head1
            head1 = head1.next
        } else {
            curr.next = head2
            head2 = head2.next
        }
        curr = curr.next
    }
    curr.next = head1 || head2
    return tempHead.next
}
//TEST
