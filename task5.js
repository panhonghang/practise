/**
 * @param {string} s
 * @return {number}
 * 647. 回文子串
 */
var countSubstrings = function(s) {
    let len = s.length,
        res = 0;
    if(len == 0) return 0;
    for(let i = 0; i < len; i++){
        for(let j = i + 1; j <= len; j++){
           if(s.substring(i,j) == s.substring(i,j).split('').reverse().join('')) res++
        }
    }

    return res;
};

/**
 * @param {number[]} A
 * @return {number[]}
 * 977. 有序数组的平方
 */
// var sortedSquares = function(A) {
//     return A.map(key=>key*key).sort((a,b)=>a-b);
// };
// 双指针 效率没有快排高
// var sortedSquares = function(A) {
//    let result = [],
//         lastnumber = 0,
//         i = 0, 
//         j = A.length -1,
//         leftnumber = Math.pow(A[i], 2),
//         rightnumber = Math.pow(A[j], 2);

//     while(i <= j) {
//       if (leftnumber > rightnumber) {
//          result.unshift(leftnumber);
//          i++;
//          leftnumber = Math.pow(A[i], 2);
//       }else{
//         result.unshift(rightnumber);
//         j--;
//         rightnumber = Math.pow(A[j], 2);
//       }
//     }
    
//     return result;
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 18. 四数之和
 */
// var fourSum = function(nums, target) {
//     let outleft,
//         outright,
//         m,
//         n,
//         len = nums.length -1,
//         resArr = [];
    
//     nums = nums.sort((a,b)=>a-b);

//     for(let i = 0; i <= len - 3; i++){
        
//         if(nums[i] == nums[i-1]) continue;
//         outleft = nums[i];

//         for(let j = len; j >= i + 2; j--){
//             if(nums[j] == nums[j+1]) continue;
//             outright = nums[j];
//             n = j - 1;
//             m = i + 1;

//             while(m < n){
//                 let temp = nums[m] + nums[n] + outleft + outright;
//                 if(temp == target){
//                     resArr.push([outleft,nums[m], nums[n], outright]);
//                     m++;
//                     n--;
//                     while(m < n&&nums[m-1] == nums[m]) {m++};
//                     while(m < n&&nums[n+1] == nums[n]) {n--};
//                 } else if(temp < target) {
//                     m++;
//                 } else {
//                     n--;
//                 }
//             }
//         }
//     }

//     return resArr;
// };

// fourSum([-3,-1,0,2,4,5],2)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 72. 编辑距离
 */
var minDistance = function(word1, word2) {
    let len1 = word1.length,
        len2 = word2.length,
        dp = new Array(len1 + 1).fill(0).map(()=>new Array(len2 + 1).fill(0));
    for(let i = 0; i <= len1; i++) dp[i][0] = i;
    for(let i = 0; i <= len2; i++) dp[0][i] = i;
    for(let i = 1; i <= len1; i++){
        for(let j = 1; j <= len2; j++){
            dp[i][j] = (word1[i-1] !== word2[j-1])?Math.min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1]) + 1:dp[i-1][j-1];
        }
    }
    return dp[len1][len2]
};