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

var threeSumClosest = function(nums, target) {
    if(nums.length<3)
        return ;
    nums.sort((a,b)=>a-b);
    var res=nums[0]+nums[1]+nums[nums.length-1];
    for(var middle=1;middle<nums.length-1;middle++){
        var start=0,
            end=nums.length-1;
        while(start<middle&&end>middle){
            var result=nums[start]+nums[end]+nums[middle];
            if(Math.abs(target-result)<Math.abs(target-res))
                res=result;
            if(result===target){
                return result;
            }
            if(result<target){
                start+=1;
            }
            if(result>target){
                end-=1;
            }
        }
    }
    return res;
};