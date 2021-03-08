import java.lang.reflect.Array;
import java.util.*;
// class Solution {
//     public List<Integer> partitionLabels(String S) {
//         int pre = 0,
//             next = 0,
//             temp = 0;
import java.util.stream.Stream;
            
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

// class Solution {
//     public class ListNode {
//         int val;
//         ListNode next;
//         ListNode(int x) { val = x; }
//     }
    
//     public ListNode insertionSortList(ListNode head) {
//         if(head == null || head.next == null) return head;
//         ListNode dummyHead = new ListNode(-1);
//         dummyHead.next = head;
//         ListNode prev = head;
//         ListNode node = head.next;
//         while(node != null){
//             if(prev.val > node.val){
//                 ListNode temp = dummyHead;
//                 while(temp.next.val < node.val){
//                     temp = temp.next;
//                 }
//                 prev.next = node.next;
//                 node.next = temp.next;
//                 temp.next = node;
//                 node = prev.next;
//             }else{
//                 prev = prev.next;
//                 node = node.next;
//             }
//         }
//         return dummyHead.next;
//     }
// }

// class Solution {
//     public int findMinArrowShots(int[][] points) {
//         if(points.length == 0) return 0;
//         int res = 1;
//         float end = 0;

//         Arrays.sort(points, (a, b)-> a[1] > b[1] ? 1 : -1);

//         end = points[0][1];
//         for(int i = 0, len = points.length; i < len; i++) {
//             if(end < points[i][0]) {
//                 res++;
//                 end = points[i][1];
//             } else {
//                 end = Math.min(end, points[i][1]);
//             }
//         }

//         return res;
//     }
// }

// class Solution {
//     public String sortString(String s) {
//         int[] hash = new int[26];
//         for (int i = 0; i < s.length(); i++) hash[s.charAt(i) - 'a']++;

//         StringBuffer res = new StringBuffer();

//         while (res.length() < s.length()) {
//             for (int i = 0; i < 26; i++) {
//                 if (hash[i] > 0) {
//                     res.append((char) (i + 'a'));
//                     hash[i]--;
//                 }
//             }
//             for (int i = 25; i >= 0; i--) {
//                 if (hash[i] > 0) {
//                     res.append((char) (i + 'a'));
//                     hash[i]--;
//                 }
//             }
//         }
//         return res.toString();
//     }
// }

// class Solution {
//     public int maximumGap(int[] nums) {
//         if (nums.length < 2) return 0;
//         int len = nums.length;

//         int max = -1, min = Integer.MAX_VALUE;
//         for (int i  = 0; i < len; i++) {
//             max = Math.max(nums[i], max);
//             min = Math.min(nums[i], min);
//         }

//         if (max - min == 0) return 0;
//         int[] bucketMin = new int[len - 1];
//         int[] bucketMax = new int[len - 1];
//         Arrays.fill(bucketMax, -1);
//         Arrays.fill(bucketMin, Integer.MAX_VALUE);

//         int interval = (int)Math.ceil((double)(max - min) / (len - 1));
//         for (int i = 0; i < len; i++) {
//             int index = (nums[i] - min) / interval;
//             if (nums[i] == min || nums[i] == max) continue;

//             bucketMax[index] = Math.max(bucketMax[index], nums[i]);
//             bucketMin[index] = Math.min(bucketMin[index], nums[i]);
//         }

//         int maxGap = 0;
//         int preMax = min;
//         for (int i = 0; i < len - 1; i++) {
//             if (bucketMax[i] == -1) continue;
//             maxGap = Math.max(bucketMin[i] - preMax, maxGap);
//             preMax = bucketMax[i];
//         }
//         maxGap = Math.max(maxGap, max - preMax);
//         return maxGap;
//     }
// }

// class Solution {
//     public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {
//         Map<Integer, Integer> map = new HashMap<>();
//         for (int a : A) {
//             for (int b : B) {
//                 map.put(a + b, map.getOrDefault(a + b, 0) + 1);
//             }
//         }

//         int res = 0;
//         for (int c : C) {
//             for (int d : D) {
//                 if (map.containsKey(0 - c - d)) {
//                     res += map.get(0 - c - d);
//                 }
//             }
//         }
//         return res;
//     }
// }

// class Solution {
//     // 一个递增排列的数组，用于二分查找
//     private ArrayList<Long> array;

//     // 将value添加进有序数组array中
//     private void add(long value) {
//         int low = 0, high = array.size(), mid;
//         long v;
//         while (low < high) {
//             mid = (low + high)>>1;
//             v = array.get(mid);
//             if(v > value) {
//                 high = mid;
//             } else if(v == value) {
//                 low = mid;
//                 break;
//             } else {
//                 low = mid + 1;
//             }
//         }
//         array.add(low, value);
//     }

//     // 从有序数组array中找到比value小的元素个数
//     private int getLt(int value) {
//         int low =0, high = array.size(), mid;
//         long v;
//         while (low < high) {
//             mid = (low + high)>>1;
//             v = array.get(mid);
//             if(v < value) {
//                 low = mid + 1;
//             } else if(v >= value){
//                 high = mid;
//             }
//         }
//         return low;
//     }

//     public int reversePairs(int[] nums) {
//         int n = nums.length;
//         if(n <= 1)return 0;

//         int ans = 0;
//         array = new ArrayList<>();
//         // 一开始，将最后一个元素的2倍加入array
//         array.add(((long)nums[n-1])<<1);

//         for (int i = n-2; i >= 0; i--) {
//             // 找到当前array中比nums[i]小的元素个数
//             ans += getLt(nums[i]);
//             // 将nums[i]的2倍添加进array
//             add(((long)nums[i])<<1);
//         }
//         return ans;
//     }
// }

// class Solution {
//     public int largestPerimeter(int[] A) {
//         Arrays.sort(A);

//         for (int i = A.length - 1; i > 0; i--) {
//             if(A[i] < A[i-1] + A[i-2]) return A[i] + A[i-1] + A[i-2];
//         }
//         return 0;
//     }
// }

// class Solution {
//     public String reorganizeString(String S) {
//         char[] alphabetArr = S.toCharArray();
//         int[] alphabetCount = new int[26];
//         int length = S.length();
//         for (int i = 0; i < length; i++) {
//             alphabetCount[alphabetArr[i] - 'a']++;
//         }
//         int max = 0, alphabet = 0, threshold = (length + 1) >> 1;
//         for (int i = 0; i < alphabetCount.length; i++) {
//             if (alphabetCount[i] > max) {
//                 max = alphabetCount[i];
//                 alphabet = i;
//                 if (max > threshold)
//                     return "";
//             }
//         }
//         char[] res = new char[length];
//         int index = 0;
//         while (alphabetCount[alphabet]-- > 0) {
//             res[index] = (char) (alphabet + 'a');
//             index += 2;
//         }
//         for (int i = 0; i < alphabetCount.length; i++) {
//             while (alphabetCount[i]-- > 0) {
//                 if (index >= res.length) {
//                     index = 1;
//                 }
//                 res[index] = (char) (i + 'a');
//                 index += 2;
//             }
//         }
//         return new String(res);
//     }
// }

// class Solution {
//     public int[] maxNumber(int[] nums1, int[] nums2, int k) {
//         int[] res = new int[0];
//         // 从 nums1 中选出长 i 的子序列
//         for (int i = 0; i <= k && i <= nums1.length; i++) {
//             // 从 nums2 中选出长 k - i 的子序列
//             if (k - i >= 0 && k - i <= nums2.length) {
//                 // 合并
//                 int[] tmp = merge(subMaxNumber(nums1, i), subMaxNumber(nums2, k - i));
//                 // 取最大值
//                 if (compare(tmp, 0, res, 0)) {
//                     res = tmp;
//                 }
//             }
//         }
//         return res;
//     }

//     // 类似于单调递减栈
//     public int[] subMaxNumber(int[] nums, int len) {
//         int[] subNums = new int[len];
//         int cur = 0, rem = nums.length - len; // rem 表示还可以删去多少字符
//         for (int i = 0; i < nums.length; i++) {
//             while (cur > 0 && subNums[cur - 1] < nums[i] && rem > 0) {
//                 cur--;
//                 rem--;
//             }
//             if (cur < len) {
//                 subNums[cur++] = nums[i];
//             } else {
//                 rem--; // 避免超过边界而少删字符
//             }
//         }
//         return subNums;
//     }

//     public int[] merge(int[] nums1, int[] nums2) {
//         int[] res = new int[nums1.length + nums2.length];
//         int cur = 0, p1 = 0, p2 = 0;
//         while (cur < nums1.length + nums2.length) {
//             if (compare(nums1, p1, nums2, p2)) { // 不能只比较当前值，如果当前值相等还需要比较后续哪个大
//                 res[cur++] = nums1[p1++];
//             } else {
//                 res[cur++] = nums2[p2++];
//             }
//         }
//         return res;
//     }

//     public boolean compare(int[] nums1, int p1, int[] nums2, int p2) {
//         if (p2 >= nums2.length) return true;
//         if (p1 >= nums1.length) return false;
//         if (nums1[p1] > nums2[p2]) return true;
//         if (nums1[p1] < nums2[p2]) return false;
//         return compare(nums1, p1 + 1, nums2, p2 + 1);
//     }
// }

// class Solution {
//     public boolean isPossible(int[] nums) {
//         Map<Integer, PriorityQueue<Integer>> map = new HashMap<Integer, PriorityQueue<Integer>>();
//         for (int x : nums) {
//             if (!map.containsKey(x)) {
//                 map.put(x, new PriorityQueue<Integer>());
//             }
//             if (map.containsKey(x - 1)) {
//                 int prevLength = map.get(x - 1).poll();
//                 if (map.get(x - 1).isEmpty()) {
//                     map.remove(x - 1);
//                 }
//                 map.get(x).offer(prevLength + 1);
//             } else {
//                 map.get(x).offer(1);
//             }
//         }
//         Set<Map.Entry<Integer, PriorityQueue<Integer>>> entrySet = map.entrySet();
//         for (Map.Entry<Integer, PriorityQueue<Integer>> entry : entrySet) {
//             PriorityQueue<Integer> queue = entry.getValue();
//             if (queue.peek() < 3) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// class Solution {
//     public int leastInterval(char[] tasks, int n) {
//         Map<Character, Integer> map = new HashMap<>();
//         int MaxElement = 0;       

//         for (char item : tasks) {
//             int temp =  map.getOrDefault(item, 0) + 1;
//             map.put(item, temp);
//             MaxElement = Math.max(temp, MaxElement);
//         };

//         int MaxCount = 0;
//         Set<Map.Entry<Character, Integer>> entrySet = map.entrySet();

//         for (Map.Entry<Character, Integer> entry : entrySet) {
//             int value = entry.getValue();
//             if (value == MaxElement) {
//                 MaxCount++;
//             }
//         }

//         return Math.max(tasks.length, MaxCount + (MaxElement - 1) * (n + 1));
//     }
// }

// class Solution {
//     public String reorganizeString(String S) {
//         char[] strs = S.toCharArray();
//         Map<Character, Integer> map = new HashMap<>();
//         int odd = -1;
//         int even = -2;
        
//         for(char item : strs) {
//             map.put(item, map.getOrDefault(item, 0) + 1);
//         }

//         for (Map.Entry<Character, Integer> entry : map.entrySet()) {
//             if(entry.getValue()*2 > S.length() + 1) return "";
//             // 判断最长的元素value值是否超过一半
//             int len = entry.getValue()*2,
//                 value = entry.getValue();

//             while (value > 0) {
//                 // 奇偶间隔赋值给数组
//                 strs[(len <= S.length() && odd < S.length() - 2) ? (odd += 2) : (even += 2)] = entry.getKey();
//                 value--;
//             }
//         } 
//         return new String(strs);
//     }
// }

// class Solution {
// 	public boolean wordPattern(String pattern, String s) {
// 			Map<String, String> mapStoPattern = new HashMap<>();
// 			Map<String, String> mapPatterntoS = new HashMap<>();
// 			String[] strs = s.split(" ");
// 			String[] patterns = pattern.split("");

// 			if(patterns.length != strs.length) return false;

// 			for (int i = 0, len = strs.length; i < len; i++) {
// 					if (mapStoPattern.containsKey(patterns[i]) || 
// 							mapPatterntoS.containsKey(strs[i])
// 							) {
// 							if( !mapStoPattern.containsKey(patterns[i]) ||
// 									!mapPatterntoS.containsKey(strs[i]) || 
// 									!mapStoPattern.get(patterns[i]).equals(strs[i]) || 
// 									!mapPatterntoS.get(strs[i]).equals(patterns[i])
// 								) return false;
// 					} else {
// 							mapStoPattern.put(patterns[i], strs[i]);
// 							mapPatterntoS.put(strs[i], patterns[i]);
// 					}
// 			}

// 			return true;
// 	}
// }


// class TwoWayMap {
// 	private Map<String, String> mapStoPattern = new HashMap<>();
// 	private Map<String, String> mapPatterntoS = new HashMap<>();

// 	public boolean isEqual(String a, String b) {
//         if(!mapStoPattern.containsKey(a) ||
//             !mapPatterntoS.containsKey(b) || 
//             !mapStoPattern.get(a).equals(b) || 
//             !mapPatterntoS.get(b).equals(a)
//             ) return false;
// 		return true;
// 	}
	
// 	public void put(String a, String b) {
//         mapStoPattern.put(a, b);
//         mapPatterntoS.put(b, a);
// 	}

//     public boolean containsKey(String a) {
//         return mapPatterntoS.containsKey(a) || mapStoPattern.containsKey(a);
//     }

//     public void list() {
//         for(Map.Entry<String, String> entry : mapPatterntoS.entrySet()) {
//             System.out.println(entry);
//         }
//     }
// }

// class Solution {
//     public List<Integer> findNumOfValidWords(String[] words, String[] puzzles) {
//         Map<Integer, Integer> map = new HashMap<>();
//         ArrayList<Integer> ans = new ArrayList<>(puzzles.length);
//         for (String word : words) {
//             map.merge(getMask(word), 1, Integer::sum);
//         }
//         for (String puzzle : puzzles) {
//             char key = puzzle.charAt(0);
//             int num = getMask(puzzle), can = 0;
//             for (int i = num; i > 0; i = (i - 1) & num) {
//                 if (((1 << (key - 'a')) & i) != 0) can += map.getOrDefault(i, 0);
//             }
//             ans.add(can);
//         }
//         return ans;
//     }

//     // 计算指定字符串的掩码。
//     private int getMask(String string) {
//         int mask = 0;
//         for (char ch : string.toCharArray()) {
//             mask |= 1 << (ch - 'a');
//         }
//         return mask;
//     }
// }

// class Solution {
//     public int longestSubstring(String s, int k) {
//         if (s.length() < k) return 0;
//         Map<Character, Integer> map = new HashMap<>();
//         for (char c : s.toCharArray()) map.put(c, map.getOrDefault(c, 0) + 1);
        
//         for (Character c : map.keySet()) {
//             if(map.get(c) < k){  
//                 int res = 0;
//                 for (String s1 : s.split(String.valueOf(c))) {
//                     res = Math.max(res,longestSubstring(s1,k));
//                 }
//                 return res;
//             }
//         }

//         return s.length(); 
//     }
// }

// class Solution {
// 		public List<List<String>> partition(String s) {
// 				List<List<String>> res = new ArrayList<List<String>>();
// 				List<String> list = new ArrayList<String>();
// 				dfs(s, 0, list, res);
// 				return res;
// 		}
		
// 		public void dfs(String s, int pos, List<String> list, List<List<String>> res){
// 				if (pos == s.length()) {
// 						res.add(new ArrayList<String>(list));
// 						return;
// 				}
// 				for (int i = pos; i < s.length(); i++) {
// 						if (isPalindrome(s, pos, i)){
// 								list.add(s.substring(pos, i+1));
// 								dfs(s, i+1, list, res);
// 								list.remove(list.size() - 1);
// 						}
// 				}
// 		}

// 		public boolean isPalindrome (String s, int start, int end) {
// 				for (int i = start, j = end; i < j; i++, j--) {
// 						if (s.charAt(i) != s.charAt(j)) {
// 								return false;
// 						}
// 				}
// 				return true;
// 		}
// }
class Solution {
    public int minCut(String s) {
		int len = s.length();
        boolean[][] isPalindromic = new boolean[len][len];
        for (int i = len - 1; i >= 0; i--) {
            for (int j = i; j < len; j++) {
                if (s.charAt(i) == s.charAt(j) && (j - i <= 1 || isPalindromic[i+1][j-1])) {
                    isPalindromic[i][j] = true;
                }
            }
        }
        // 初始化
        int[] dp = new int[len];
        for (int i = 0; i < len; i++) dp[i] = i;

        for (int i = 1; i < len; i++) {
            if (isPalindromic[0][i]) {
                dp[i] = 0;
                continue;
            }
            for (int j = 0; j < i; j++) {
                if (isPalindromic[j + 1][i]) {
                    dp[i] = Math.min(dp[i], dp[j] + 1);
                }
            }
        }
        return dp[len - 1];
    }
}