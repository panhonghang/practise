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
var longestCommonPrefix = function(strs) {
    if(strs.length < 1) return '';

    let res = [];
    let len = strs[0].length;

    for(let i = 0; i < len; i++){
        let fn = (key)=>{
            return key[i] == strs[0][i];
        }
        if(strs.every(fn)){
            res.push(strs[0][i]);
        } else {
            break;
        }
    }
    
    return res.join('');
};

console.log(longestCommonPrefix(["ower","ow","light"]))