import java.util.*;
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

// class Solution {
//     private int res = 0;
//     String[] words;
//     int[] score;

//     public int maxScoreWords(String[] words, char[] letters, int[] score) {
//         this.words = words;
//         this.score = score;
//         HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        
//         for(int i = 0; i < letters.length; i++) {
//             if(map.containsKey(letters[i])) {
//                 map.put(letters[i], map.get(letters[i]) + 1);
//             } else {
//                 map.put(letters[i], 1);
//             }
//         };

//         HashMap<Character, Integer> clone = (HashMap<Character, Integer>) map.clone();
//         bfs(0, 0, clone);

//         return res;
//     }

//     public void bfs(int index, int sum, HashMap<Character, Integer> map) {
//         if(index >= words.length) {
//             res = Math.max(sum, res);
//             return;
//         }

//         bfs(index + 1, sum, (HashMap<Character, Integer>)map.clone());

//         int temp = 0;

//         for (char c : words[index].toCharArray()) {
//             if(!map.containsKey(c) || map.get(c) == 0) return;
            
//             map.put(c, map.get(c) - 1);
//             temp += score[c - 'a'];
//         }

//         bfs(index + 1, sum + temp, (HashMap<Character, Integer>)map.clone());
//     }
// }

// class Solution {
//     public int minFallingPathSum(int[][] arr) {
//         int[] dp = arr[0];
//         int[] temp = dp.clone();
//         int min = 0;
        
//         for(int i = 1; i < arr.length; i++) {
//             temp = dp.clone();
//             Arrays.sort(temp);
//             for(int j = 0; j < dp.length; j++) {
//                 min = temp[0];
//                 if(dp[j] == temp[0]) min = temp[1];
//                 dp[j] = min + arr[i][j];
//             }        
//         }

//         Arrays.sort(dp);

//         return dp[0];
//     }
// }

// class Solution {
//     public int videoStitching(int[][] clips, int T) {
//         if (T == 0) {
//             return 0;
//         }

//         int[] arr = new int[T]; // 已知时长T <= 100，所以可以用数组排序
//         for (int[] clip : clips) {
//             if (clip[0] < clip[1] && clip[0] < T && arr[clip[0]] < clip[1]) {
//                 arr[clip[0]] = clip[1]; 
//             }
//         }

//         int count = 0; // 个数
//         int preEnd = -1; // 之前所有片段组end的最大值
//         int maxEnd = 0; // 当前所有片段组end的最大值

//         for (int start = 0; start < arr.length; start++) {
//             if (start > maxEnd) { // 片段不连续，非法
//                 return -1;
//             }

//             int end = arr[start];
//             if (end == 0) {
//                 continue;
//             }

//             if (end > maxEnd) { // 当前片段end超过之前所有的片段end
//                 if (start > preEnd) { // true：代表当前片段为新增片段。false：代表当前片段可以替换前一个片段
//                     preEnd = maxEnd;
//                     count++;
//                 }

//                 if (end >= T) { // 当前片段end大于时长T时，返回个数
//                     return count;
//                 }

//                 maxEnd = end;
//             }
//         }

//         return -1;
//     }
// }

// class Solution {
//     public int longestMountain(int[] A) {
//         int height = 0;

//         for(int i = 1; i < A.length - 1; i++) {
//             while(A[i] < A[i+1]) {
//                 i++;
//                 if(i + 1 == A.length) break;
//             }
//             int pre = i,
//                 next = i;
//             //i to pre
//             while(pre > 0 && A[pre] > A[pre - 1]) pre--;
//             //i to next
//             while(next < A.length - 1 && A[next] > A[next+1]) next++;

//             if(pre != i && next != i) height = Math.max(height, next - pre + 1);

//             i = next;
//         }

//         return height < 3 ? 0 : height;
//     }
// }

// public class TreeNode {
//     int val;
//     TreeNode left;
//     TreeNode right;
//     TreeNode() {}
//     TreeNode(int val) { this.val = val; }
//     TreeNode(int val, TreeNode left, TreeNode right) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }
// class Solution {
//     public List<Integer> preorderTraversal(TreeNode root) {
//         List<Integer> res = new ArrayList<Integer>();
//         preorder(root, res);
//         return res;
//     }

//     public void preorder(TreeNode node, List<Integer> res) {
//         if(node == null) return;
//         res.add(node.val);
//         preorder(node.left, res);
//         preorder(node.right, res);
//     }
// }

// class Solution {
//     public boolean uniqueOccurrences(int[] arr) {
//         HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
//         for(int i = 0; i < arr.length; i++) {
//             if(map.containsKey(arr[i])) {
//                 map.put(arr[i], map.get(arr[i]) + 1);
//             } else {
//                 map.put(arr[i], 1);
//             }
//         }   
//         Set<Integer> times = new HashSet<Integer>();
//         for (Map.Entry<Integer, Integer> x : map.entrySet()) {
//             times.add(x.getValue());
//         }
//         return times.size() == map.size();
//     }
// }

// class Solution {
//     public int maxProfit(int[] prices) {
//         int res = 0;

//         for(int i = 0; i < prices.length - 1; i++) {
//             if(prices[i+1] - prices[i] > 0) res += prices[i+1] - prices[i];
//         }

//         return res;
//     }
// }

// class Solution {
//     public int[] sortArrayByParityII(int[] A) {
//         int j =1 ;
//         for (int i = 0; i < A.length; i+=2) {
//             if (A[i]%2==1){
//                 while (A[j]%2==1){
//                     j+=2;
//                 }
//                 /**
//                  * swap A[i] A[j]
//                  */
//                 int temp = A[i];
//                 A[i]=A[j];
//                 A[j]=temp;
//             }
            
//         }
//         return A;

//     }
// }

// class Solution {
//     public String removeKdigits(String num, int k) {
//         Stack<Character> stack = new Stack<>();
//         for (char ch : num.toCharArray()) {
//             while (!stack.isEmpty() && ch < stack.peek() && k > 0) {
//                 stack.pop();
//                 k--;
//             }
//             stack.push(ch);
//         }
        
//         while (k > 0 && !stack.isEmpty()) {
//             stack.pop();
//             k--;
//         }
        
//         StringBuilder ans = new StringBuilder();

//         boolean leadingZero = true;
//         for (char ch : stack) {
//             if (leadingZero && ch == '0') {
//                 continue;
//             }
//             leadingZero = false;
//             ans.append(ch);
//         }
//         return ans.length() == 0 ? "0" : ans.toString();
//     }
// }

// class Solution {
//     public int[][] reconstructQueue(int[][] people) {
//         Arrays.sort(people, (o1, o2) -> o1[0] == o2[0] ? o1[1] - o2[1] : o2[0] - o1[0]);

//         LinkedList<int[]> list = new LinkedList<>();
//         for (int[] i : people) {
//             list.add(i[1], i);
//         }

//         return list.toArray(new int[list.size()][2]);
//     }
// }

// class Solution {
//     public int canCompleteCircuit(int[] gas, int[] cost) {
//         int sum = 0,
//             start = 0;

//         if(sum(gas) < sum(cost)) return -1;

//         for(int i = 0; i < gas.length; i++){
//             sum += gas[i] - cost[i];
//             if (sum < 0) {
//                 start = i + 1;
//                 sum = 0;
//             }
//         }

//         return start;
//     }

//     public int sum(int[] arr) {
//         return Arrays.stream(arr).reduce(0, (acc, n) -> acc + n);
//     }
// }

// class Solution {
//     public void moveZeroes(int[] nums) {
//         int pre = 0,
//             next = 0;
//         while(next < nums.length) {
//             if(nums[pre] == 0) {
//                 while(nums[next] == 0) {
//                     next++;
//                     if(next >= nums.length) break;
//                 }
            
//                 if(next >= nums.length) break;                
                
//                 int temp = nums[pre];
//                 nums[pre] = nums[next];
//                 nums[next] = temp;
//             } 
            
//             pre++;
//             next++;
//         }
//     }
// }

class Solution {
    public ListNode insertionSortList(ListNode head) {
        if(head == null || head.next == null) return head;
        ListNode dummyHead = new ListNode(-1);
        dummyHead.next = head;
        ListNode prev = head;
        ListNode node = head.next;
        while(node != null){
            if(prev.val > node.val){
                ListNode temp = dummyHead;
                while(temp.next.val < node.val){
                    temp = temp.next;
                }
                prev.next = node.next;
                node.next = temp.next;
                temp.next = node;
                node = prev.next;
            }else{
                prev = prev.next;
                node = node.next;
            }
        }
        return dummyHead.next;
    }
}