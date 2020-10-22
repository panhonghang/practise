// import java.util.*;

// class Solution {
//     public List<Integer> partitionLabels(String S) {
//         int pre = 0,
//             next = 0,
//             temp = 0;
            
//         char[] chars = S.toCharArray();
//         List<Integer> resArr = new ArrayList<>();

//         for(int i = 0; i < S.length(); i++) {
//             temp = S.lastIndexOf(chars[i]);
//             if(temp >= next) next = temp;

//             if(i == next) {
//                 resArr.add(next - pre + 1);
//                 pre = i + 1;
//             }
//         }
        
//         return resArr;
//     }
// }


class Solution {
    public class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public ListNode rervseListNode(ListNode node) {
        ListNode pre= null,
            next = node,
            temp = null;
        
        while(next != null) {
            temp = next.next;
            next.next = pre;

            pre = next;
            next = temp;
        }

        return pre;
    }
    
    public boolean isPalindrome(ListNode head) {
        if(head == null) return true;

        ListNode pre= head,
                 next= head.next;

        while(next != null && next.next != null) {
            pre = pre.next;
            next = next.next.next;
        }
        
        next = pre.next;
        pre.next = null;
        pre = head;
        next = rervseListNode(next);

        while(pre != null && next != null) {
            if(pre.val != next.val) return false;
            pre = pre.next;
            next = next.next;
        }

        return true;
    }
}