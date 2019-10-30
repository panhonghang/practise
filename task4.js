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
var removeDuplicates = function(nums) {
    let length = nums.length;
    let res = 1;
    
    for(let i = 1; i < length; i++){
        if(nums[i]!=nums[i-1]){
           nums[res++] = nums[i];
        }
    }

    return res;
}; 