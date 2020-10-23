import java.util.HashMap;
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


// class Solution {
//     public class ListNode {
//         int val;
//         ListNode next;
//         ListNode(int x) { val = x; }
//     }

//     public ListNode rervseListNode(ListNode node) {
//         ListNode pre= null,
//             next = node,
//             temp = null;
        
//         while(next != null) {
//             temp = next.next;
//             next.next = pre;

//             pre = next;
//             next = temp;
//         }

//         return pre;
//     }
    
//     public boolean isPalindrome(ListNode head) {
//         if(head == null) return true;

//         ListNode pre= head,
//                  next= head.next;

//         while(next != null && next.next != null) {
//             pre = pre.next;
//             next = next.next.next;
//         }
        
//         next = pre.next;
//         pre.next = null;
//         pre = head;
//         next = rervseListNode(next);

//         while(pre != null && next != null) {
//             if(pre.val != next.val) return false;
//             pre = pre.next;
//             next = next.next;
//         }

//         return true;
//     }
// }

class Solution {
    private int res = 0;
    String[] words;
    int[] score;

    public int maxScoreWords(String[] words, char[] letters, int[] score) {
        this.words = words;
        this.score = score;
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        
        for(int i = 0; i < letters.length; i++) {
            if(map.containsKey(letters[i])) {
                map.put(letters[i], map.get(letters[i]) + 1);
            } else {
                map.put(letters[i], 1);
            }
        };

        HashMap<Character, Integer> clone = (HashMap<Character, Integer>) map.clone();
        bfs(0, 0, clone);

        return res;
    }

    public void bfs(int index, int sum, HashMap<Character, Integer> map) {
        if(index >= words.length) {
            res = Math.max(sum, res);
            return;
        }

        bfs(index + 1, sum, (HashMap<Character, Integer>)map.clone());

        int temp = 0;

        for (char c : words[index].toCharArray()) {
            if(!map.containsKey(c) || map.get(c) == 0) return;
            
            map.put(c, map.get(c) - 1);
            temp += score[c - 'a'];
        }

        bfs(index + 1, sum + temp, (HashMap<Character, Integer>)map.clone());
    }
}