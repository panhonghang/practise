/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 141. 环形链表
 */
// var hasCycle = function(head) {
//     while(head!==null){
//         if(head.val=='flag'){
//             return true;
//         } else {
//             head.val = 'flag';
//             head = head.next;
//         }
//     }
//     return false;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 26.删除排序数组中的重复项
 */
// var removeDuplicates = function(nums) {
//     let length = nums.length;
//     let res = 1;
    
//     for(let i = 1; i < length; i++){
//         if(nums[i]!=nums[i-1]){
//            nums[res++] = nums[i];
//         }
//     }

//     return res;
// }; 

/**
 * @param {string[]} strs
 * @return {string}
 * 最长公共前缀
 */
// var longestCommonPrefix = function(strs) {
//     if(strs.length < 1) return '';

//     let res = [];
//     let len = strs[0].length;

//     for(let i = 0; i < len; i++){
//         let fn = (key)=>{
//             return key[i] == strs[0][i];
//         }
//         if(strs.every(fn)){
//             res.push(strs[0][i]);
//         } else {
//             break;
//         }
//     }
    
//     return res.join('');
// };

// console.log(longestCommonPrefix(["ower","ow","light"]))

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     let p = m-- + n-- - 1;
//        while (m >= 0 && n >= 0) {
//            nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
//        }
       
//        while (n >= 0) {
//            nums1[p--] = nums2[n--];
//        }
// };

/**
 * @param {string} s
 * @return {string}
 * 最长回文字符
 */
// var longestPalindrome = function(s) {

//     if (!s || !s.trim()) return '';
//     if (s.length === 1) return s;
//     if (s.length === 2) return s[0] === s[1] ? s[0] + s[1] : s[1];
//     let result = '';

//     /**
//     *扩散坐标
//     */
//     var calPalindromeIndex = function(left,right,s){
//         let len = s.length;
//         while(left>=0&&right<len&&s[left] == s[right]){
//             left--;
//             right++;
//         }
//         return {left:left+1,right:right}
//     }


//     for(let i = 0,len = s.length;i<len;i++){
//         let even = '';
//         let odd = '';
//         if(s[i] == s[i+1]){
//             //经过当前位与下一位判断已构成回文，扩散位直接从下一位开始，可以提速
//             let evenIndex = calPalindromeIndex(i-1,i+2,s);
//             even = s.slice(evenIndex.left,evenIndex.right);
//         }

//         let oddIndex = calPalindromeIndex(i-1,i+1,s);
//         odd = s.slice(oddIndex.left,oddIndex.right);
        
//         let re = odd.length>even.length?odd:even;
//         result = result.length>re.length?result:re;
//     }
//     return result;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 * 存在重复元素
 */
// var containsDuplicate = function(nums) {
//     let arr = [...new Set(nums)];
//     return nums.join('') === arr.join('');
// };

/**
 * @param {number} x
 * @return {number}
 * 反转数字
 * 坑点：反转后的数字范围也是在 [-2147483648,2147483647]
 */

// var reverse = function(x) {
//     if(x < -2147483648 || x > 2147483647) return 0;

//     let res = 0;
//     if(x > 0){
//         res = `${x}`.split('').reverse().join('');
//         return res > 2147483647 ? 0:res;
//     } else if( x < 0){
//         res = -`${-x}`.split('').reverse().join('')
//         return res < -2147483648? 0:res;
//     } else {
//         return 0
//     }
// };

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     let arr = [];
//     let temp = '';
//     for(let i = 0; i < s.length; i++){
//         if((temp=='{'&&s[i]=='}')||(temp=='['&&s[i]==']')||(temp=='('&&s[i]==')')){
//             arr.pop();
//             temp = arr[arr.length-1];
//         } else {
//             arr.push(s[i]);
//             temp = s[i];
//         }
//     }
//     return arr.length == 0;
// };

// isValid("()")


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * O(log n) 级别。33. 搜索旋转排序数组
 */
// var search = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;
//     let mid;

//     // while(low < high){
//     //     mid = Math.floor((low + high)/2);    
//     //     // 异或写得优雅
//     //     if((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid])){
//     //         low = mid + 1;
//     //     } else {
//     //         high = mid;
//     //     }
//     // }
    
//     // return low == high && nums[low] == target ? low : -1;

//     while(low<high){
//         mid = Math.floor((low+high)/2);
//         if(nums[mid]<nums[low]||(nums[low]<=target&&target<=nums[mid])){
//             high = mid;
//         } else {
//             low = mid + 1;
//         }
//     }

//     return low == high && nums[low] == target ? low : -1;
// };

// console.log(search([4,5,6,7,0,1,2],9))

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 62. 不同路径
 */
// var uniquePaths = function(m, n) {
//     // let res = 0;

//     // let fn = function(x,y){
//     //     if(x==m||y==n) res++;

//     //     if(x<m&&y<n) {
//     //         fn(++x,y);
//     //         fn(x,++y);
//     //     }
//     // }
//     // fn(1,1);
//     // console.log(res)
//     // return res;

//     let memo = [];
//     memo.length = m;
//     memo.fill(1);

//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             memo[j] += memo[j - 1];
//         }
//     }

//     console.log(memo[n-1]);
// };

// uniquePaths(7,3);

/**
 * initialize your data structure here.
 */
// var MinStack = function() {
//     this.arr = [];
//     this.arr2 = [];
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//     this.arr.push(x);
//     arr2 = [...this.arr].sort((a,b)=>a-b);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     let temp = this.arr.pop();
//     if(temp == this.arr2[0]){
//         this.arr2.shift();
//     }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.arr[Array.length-1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.arr2[0];
// };

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(x)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */

/**
 * @param( {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function(nums, target) {

//     if(nums.length < 3) return 0;
//     nums.sort((a,b)=>a-b);
//     if(nums[0] >= target) return nums[0]+nums[1]+nums[2];
//     if(nums[nums.length-1] <= target) return nums[nums.length-1] + nums[nums.length-2] + nums[nums.length-3];
    
//     let res = 0,
//         temp = 0;

//     for(let i = 1; i < nums.length - 1; i++){
//         let start = 0,
//             end = nums.length -1,
//         while(start<i&&end>i){
//             temp = nums[start] + nums[i] + nums[end];
//             if(temp==target) return temp;
//             if(temp<target) start+=1;
//             if(temp>target) end-=1;
//             if(Math.abs(target-temp) < Math.abs(target-res)) res = temp;
//         }
//     }

//     return res;
// };

// var threeSumClosest = function(nums, target) {
//     if(nums.length<3)
//         return ;
//     nums.sort((a,b)=>a-b);
//     var res=nums[0]+nums[1]+nums[nums.length-1];
//     for(var middle=1;middle<nums.length-1;middle++){
//         var start=0,
//             end=nums.length-1;
//         while(start<middle&&end>middle){
//             var result=nums[start]+nums[end]+nums[middle];
//             if(Math.abs(target-result)<Math.abs(target-res))
//                 res=result;
//             if(result===target){
//                 return result;
//             }
//             if(result<target){
//                 start+=1;
//             }
//             if(result>target){
//                 end-=1;
//             }
//         }
//     }
//     return res;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 160. 相交链表
 */

//  双指针法，最好
// var getIntersectionNode = function(headA, headB) {
//     if(headA == null|| headB == null) return null;
//     let A = headA;
//     let B = headB;

//     while(headA!=headB){
//         headB = headB==null?A:headB.next;
//         headA = headA==null?B:headA.next;
//     }

//     return headA;
// };

/**
 * @param {number[]} height
 * @return {number}
 * 11. 盛最多水的容器
 */
// 一般方法
// var maxArea = function(height) {
//     let length = height.length;
//     let max = 0;
//     let temp;
//     for(let i = 0; i < length; i++){
//         for(let j = i + 1; j < length; j++){
//             temp = Math.min(height[i],height[j])*(j-i);
//             if(max < temp) max = temp;
//         }
//     }
//     return max;
// };

// 双指针法 效率高
// var maxArea = function(height){
//     let max = 0,
//         start = 0,
//         end = height.length - 1,
//         temp = 0;
//     while(start<end){
//         temp = Math.min(height[start],height[end])*(end-start);
//         if(max<temp) max = temp;
//         if(height[start]<height[end]){
//             ++start;
//         } else {
//             --end;
//         }
//     }
//     return max;
// }

/**
 * @param {number[]} prices
 * @return {number}
 * 122. 买卖股票的最佳时机 II
 */
// var maxProfit = function(prices) {
//     let res = 0,
//         temp = 0;
//     for(let i = 0; i < prices.length - 1; i++){
//         if(prices[i] < prices[i+1]) temp = prices[i+1] - prices[i];
//         res += temp;
//         temp = 0;
//     }
//     return res;
// };

/**
 * @param {number[]} prices
 * @return {number}
 * 121. 买卖股票的最佳时机
 */
// var maxProfit = function(prices) {
//     let res = 0,
//         temp = 0;
//     for(let i = 0; i < prices.length; i++){
//         for(let j = i; j < prices.length; j++){
//             if(prices[i]<prices[j]) temp = prices[j] - prices[i];
//             res = Math.max(res,temp);
//         }
//     }
//     return res;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 53. 最大子序和
 */
// var maxSubArray = function(nums) {
//     let res = [];
//     let temp;
//     if(nums.length==1) nums[0];
//     for(let i = 0; i < nums.length; i++){
//         temp = nums[i];
//         res.push(temp);
//         for(let j = i + 1; j < nums.length; j++){
//             temp += nums[j];
//             res.push(temp);
//         }
//     }
//     res.sort((a,b)=>b-a);
//     return res[0];
// };

// var maxSubArray = function(nums) {
//     let ans = nums[0];
//     let sum = 0;
//     for(const num of nums) {
//         if(sum > 0) {
//             sum += num;
//         } else {
//             sum = num;
//         }
//         ans = Math.max(ans, sum);
//     }
//     return ans;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//     if (root == null || root == p || root == q) {
//         return root;
//     }
    
//     let left = lowestCommonAncestor(root.left, p, q);
//     let right = lowestCommonAncestor(root.right, p, q);

//     if (left != null && right != null) {
//         return root;
//     } else if (left != null) {
//         return left;
//     } else if (right != null) {
//         return right;
//     }
//     return null;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 124. 二叉树中的最大路径和
 * 没看懂
 */
// var maxPathSum = function(root) {
//     if(root==null)return 0;

//     var result=root.val;

//     function sum(node){
//         if(node==null) return 0;

//         var left=sum(node.left),
//             right=sum(node.right);

//         result=Math.max(result,node.val+(left>0?left:0)+(right>0?right:0));

//         return node.val+Math.max((left>0?left:0),(right>0?right:0));
//     }

//     sum(root);
//     return result;
// };

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 43. 字符串相乘
 * 思路从后面开始添加
 */
// var multiply = function(num1, num2) {
//     let arr  = [];
//         arr.length = num1.length+num2.length;
//         arr.fill(0);
//     let index = arr.length - 1;

//     if(num1==''||num1=='0'||num2==''||num2=='0') return '0';

//     for(let i = num1.length -1; i >= 0; i--){
//         for(let j = num2.length -1; j >= 0;j--){
//             multiplyFn(num1[i],num2[j],arr,index);
//             index--;
//         }
//         index = arr.length - num1.length + i - 1;
//     }
//     if(arr[0] == 0) {
//         while(arr[0] == 0){
//             arr.shift()
//         }
//     };
//     return arr.join('');
// };

// /**
//  * @description: 处理乘法
//  * @param {string} s1 
//  * @param {string} s2 
//  * @param {number[]} TheArr
//  * @return: 
//  */
// var multiplyFn = function(s1,s2,TheArr,TheIndex){
//     let geIndex = parseInt(s1)*parseInt(s2)%10;
//     let siIndex = parseInt(parseInt(s1)*parseInt(s2)/10);
//     let num = TheArr[TheIndex];
//     TheArr[TheIndex] = (num+geIndex) % 10;
//     if((num+geIndex) > 9){
//         TheArr[TheIndex - 1] = TheArr[TheIndex - 1] + siIndex + parseInt((num+geIndex)/10);
//     } else {
//         TheArr[TheIndex - 1] = TheArr[TheIndex - 1] + siIndex;
//     }
// }
// console.log(multiply("89","999"));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//     if(head==null) return null;
//     if(!head.next) return null;
//     if(!head.next.next) return null;

//     let CircleLength = 1;
//         preNode = head, 
//         nextNode = head.next.next;
        
//     while(preNode!=nextNode){
//         preNode = preNode.next;
//         if(nextNode.next == null) return null;
//         if(nextNode.next.next == null) return null;
//         nextNode = nextNode.next.next;
//         if(nextNode == null) return null;
//     }   

//     preNode = preNode.next;

//     while(preNode!=nextNode){
//         CircleLength++;
//         preNode = preNode.next;
//     }  
    
//     preNode = nextNode = head;
    
//     while(CircleLength){
//         nextNode = nextNode.next;
//         CircleLength--;
//     }
    
//     while(preNode!=nextNode){
//         preNode = preNode.next;
//         nextNode = nextNode.next;
//     }  
//     return preNode;
// };

// var detectCycle = function(head) {
//     if(head==null||!head.next||!head.next.next) return null;

//     let CircleLength = 1;
//         preNode = head, 
//         nextNode = head.next.next;
        
//     while(preNode!=nextNode){
//         if(nextNode == null||nextNode.next == null) return null;
//         preNode = preNode.next;
//         nextNode = nextNode.next.next;
//     }   
//     preNode = head;

//     while(preNode!=nextNode){
//         preNode = preNode.next;
//         nextNode = nextNode.next;
//     }
//     return preNode;
// };
// var detectCycle = function(head) {
//     if(head==null||!head.next||!head.next.next) return null;

//     let preNode = head, 
//         nextNode = head.next.next;
        
//     while(1){
//         if(nextNode == null||nextNode.next == null) return null;
//         preNode = preNode.next;
//         nextNode = nextNode.next.next;
//         if(preNode==nextNode){
//              preNode = head;
//              while(1){
//                 preNode = preNode.next;
//                 nextNode = nextNode.next;
//                 if(preNode==nextNode) return preNode;
//             }
//         }
//     }   
// };

// var LRUCache = class {

//     constructor(capacity) {
//         this.cache = new Map();
//         this.capacity = capacity;
//     }

//     /**
//      * @param {number} key
//      * @return {number}
//      */
//     get(key) {
//         let cache = this.cache;
//         if (cache.has(key)) {
//             let temp = cache.get(key)
//             cache.delete(key);
//             cache.set(key, temp);
//             return temp;
//         } else {
//             return -1;
//         }
//     };

//     /**
//      * @param {number} key
//      * @param {number} value
//      * @return {void}
//      */
//     put(key, value) {
//         let cache = this.cache;
//         if (cache.has(key)) {
//             cache.delete(key);
//         } else if (cache.size >= this.capacity) {
//             cache.delete(cache.keys().next().value);
//         }
//         cache.set(key, value);
//     };
// };

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 不同路径 II
 */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     let width = obstacleGrid.length;
//     let height = obstacleGrid[0].length;

//     let dp = [[]];

//     for(let i = 0; i < width; i++){
//         dp[i] = new Array(height).fill(0);
//     }

//     dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;

//     for(let i = 1; i < width; i++){
//         if(obstacleGrid[i][0]!=1){
//             dp[i][0] = dp[i-1][0];
//         }
//     }

//     for(let i = 0; i < height; i++){
//         if(obstacleGrid[0][i]!=1){
//             dp[0][i] = dp[0][i-1];
//         }
//     }

//     for(let i = 1; i < width; i++){
//         for(let j = 1; j < height; j++){
//             if(obstacleGrid[i][j]!=1){
//                 dp[i][j] = dp[i][j-1] + dp[i-1][j];
//             };
//         }
//     }

//     return dp[width-1][height-1];
// };

// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     // 行
//     var n = obstacleGrid.length;
//     // 列
//     var m = obstacleGrid[0].length;
//     // 初始化
//     var dp = new Array(n);
//     for(var i = 0;i<n;i++){
//         dp[i] = new Array(m).fill(0);
//     }
//     dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;
//     // 如果起点就是障碍物
//     if(dp[0][0] == 0){
//         return 0 ;
//     }
//     // 第一行
//     for(var j = 1;j < m;j++){
//         if(obstacleGrid[0][j] != 1){
//             dp[0][j] = dp[0][j-1];
//         }
//     }
//     // 第一列
//     for(var r = 1;r < n;r++){
//         if(obstacleGrid[r][0] != 1){
//             dp[r][0] = dp[r-1][0];
//         }
//     }
//     // 动态递推
//     for(var i = 1;i < n;i++){
//         for(var r = 1;r < m;r++){
//             if(obstacleGrid[i][r] != 1){
//                 dp[i][r] = dp[i-1][r] +dp[i][r-1];
//             }
//         }
//     }
//     return dp[n-1][m-1];
// };

// /**
//  * @param {number} n
//  * @return {number}
//  * 70.爬楼梯
//  */
// var climbStairs = function(n) {
//     let arr  = [];
//     arr[0] = 1;
//     arr[1] = 1;

//     for(let i = 2; i <= n; i++){
//         arr[i] = arr[i-1] + arr[i-2];
//     }

//     return arr[n];
// };

// climbStairs(4)

/**
 * @param {number[]} nums
 * @return {number}
 * 198. 打家劫舍
 */
// var rob = function(nums) {
//     let len = nums.length,
//         dp = [];
//     if(len == 0) return 0;
//     dp[0] = 0; 
//     dp[1] = nums[0];

//     for(let i = 2; i <= len; i++){
//         dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1]);
//     }

//     return dp[len];
// };

// /**
//  * Definition for a binary tree node.
//  * 337. 打家劫舍 III
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var rob = function(root) {
//     let dp = [];

//     let fn = function(node,max){
//         if(node) dp;
//     }
// };


/**
 * @param {number[]} nums
 */
// var NumArray = function(nums) {
//     this.Arr = [0];
//     let temp;
//     nums.forEach((key)=>{
//         temp += key;
//         this.Arr.push(temp);
//     })
// };

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(i, j) {
//     console.log(this.Arr)
//     return this.Arr[j+1] - this.Arr[i]
// };

// /** 
//  * Your NumArray object will be instantiated and called as such:
//  * var obj = new NumArray(nums)
//  * var param_1 = obj.sumRange(i,j)
//  */


/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// var findTargetSumWays = function(nums, S) {
//     let len = nums.length - 1;
//     let res = 0;
//     let te = 0;

//     let dpfunc = function(temp,n){
//         if(n==len&&(temp+nums[n]==S||temp-nums[n]==S)) res++;
//         if(n>=len) return;
//         temp = nums[n];
//         n++;
//         dpfunc(temp+nums[n],n);
//         dpfunc(temp-nums[n],n)
//     }

//     dpfunc(0,0);
//     console.log(res)
//     return res;
// };

// findTargetSumWays([1, 1,1,1,1], 3)

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// var findTargetSumWays = function(nums, S) {
//     let sum = 0;
//     for (let num of nums) {
//         sum += num;
//     }
//     if (sum < S || (sum + S) % 2 === 1) return 0;
//     let target = (sum + S) / 2;
//     let dp = new Array(target+1).fill(0);
//     dp[0] = 1;
//     for (let num of nums) {
//         for (let i = target; i >= num; i--) {
//             dp[i] += dp[i - num];
//         }
//     }
//     return dp[target];
// };

/**
 * @param {number} N
 * @return {boolean}
 * 1025. 除数博弈
 */
var divisorGame = function(N) {
    if(N==1) return false;
    if(N==2) return true;
    return N%2 === 0;
};

/**
 * @param {number[]} piles
 * @return {boolean}
 * 877. 石子游戏
 */
var stoneGame = function(piles) {
    return true;
};

/**
 * @param {number} n
 * @return {number}
 * 96. 不同的二叉搜索树
 */

//  状态方程 当n>3的时候 dp[n] = 2*(dp[0] +。。。。。+ dp[n-1])

var numTrees = function(n) {
//     if(n<=1) return 1;
//     if(n==2) return 2;

//     let dp = new Array(n+1);
//         dp.fill(0);
//     dp[0] = 1;
//     dp[1] = 1;
//     dp[2] = 2;
//     dp[3] = 5;

//     for(let i = 4; i <= n; i++){
//         for(let j = 0; j < i; j++){
//             dp[i] += dp[j]*dp[i-j-1]
//         }
//     }
//     return dp[n]
// };

// numTrees(10);

/**
 * @param {number[][]} grid
 * @return {number}
 * 64. 最小路径和
 */
var minPathSum = function(grid) {
    if(grid.length == 0) return 0;
    let Clen = grid.length,
        dp = new Array(Clen + 1),
        Rlen = grid[0].length;
        
    for(let i = 0; i < Clen; i++){
        for(let j = 0; j < Rlen; j++){
            if( i != 0 && j!= 0){
                grid[i][j] = Math.min(grid[i][j-1],grid[i-1][j])+grid[i][j];
            }else if(i == 0 && j!=0){
                grid[i][j] = grid[i][j-1]+grid[i][j];
            }else if(i != 0 && j==0){
                grid[i][j] = grid[i-1][j]+grid[i][j];
            }else if(i == 0 && j==0){
                grid[i][j] = grid[i][j];
            }
        }
    }

    return grid[Clen-1][Rlen-1]
};