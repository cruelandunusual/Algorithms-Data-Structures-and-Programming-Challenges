/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

namespace LinkedList_maths
{
    public class LinkedListAddition
    {

        public LinkedListAddition()
        {
        }
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            Console.WriteLine(l1.val + " " + l2.val);
            return new ListNode(3, l2);
        }
    }



    public class ListNode
    {
        public int val;
        public ListNode next;
        public ListNode(int val = 0, ListNode next = null)
        {
            this.val = val;
            this.next = next;
        }
    }

}