// // 比特计数
// /**
//  * @param {number} num
//  * @return {number[]}
//  */
// var countBits = function(num) {
//     let numberArr = [];
//     // 转二进制
//     /**
//      * @description: 
//      * @param {number} 
//      * @return: number
//      */
//     var bites = function(arg){
//         let result = arg;
//         let resultCount = 0;
//         result = arg.toString(2).split('');
        
//         for(let i = 0; i < result.length; i++){
//             if(result[i]=='1') resultCount++;
//         }

//         return resultCount;
//     }
//     //循环
//     for(let i = 0; i <= num; i++){
//         numberArr[i] = bites(i);
//     }
//     return numberArr;
// };


// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// //螺旋矩阵
// var generateMatrix = function(n) {
//     let resArr = [];
//     for(let i = 0; i < n; i++){
//         resArr[i] = [];
//     }

//     let c = 1, j = 0;
//     while (c <= n * n) {
//         for (let i = j; i < n - j; i++){
//                 resArr[j][i] = c++;
//             }
//         for (let i = j + 1; i < n - j; i++){
//                 resArr[i][n - j - 1] = c++;
//             }
//         for (let i = n - j - 2; i >= j; i--){
//                 resArr[n - j - 1][i] = c++;
//             }
//         for (let i = n -j - 2; i > j; i--){
//                 resArr[i][j] = c++;
//             }
//         j++;
//     }

//     return resArr;
// };

// console.log(generateMatrix(4))

// 求子集 问题
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     let resArr = [[]];
//     for(let i=0;i<nums.length;i++){
//         let len = resArr.length;
//         for(let j=0;j<len;j++){
//             resArr.push([...resArr[j],nums[i]])
//         }
//     }
//     /* 
//     task1 resArr = [] [1]
//     task2 resArr = [] [1]  [2] [1,2]
//     task3 resArr = [] [1]  [2] [1,2]  [3] [2,3] [1,2,3]
//      */
//     return resArr;
// };

// console.log(subsets([1,2,3]))

/**
 * @param {number} n
 * @return {number}
 * 动态规划问题
 */
// var climbStairs = function(n) {
//     if(n===0||n===1) return 1;
//     if(n===2) return 2;
//     let res = [1,2];

//     for(let i = 2; i<n; i++){
//         res[i] = res[i-1]+res[i-2];
//     }

//     return res[n-1];
// };

// console.log(climbStairs(0))

/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function(n) {
//     if(n===0) return 0;
//     if(n===1||n===2) return 1;
//     let res = [0,1,1];
    
//     for(let i = 3; i <= n;i++){
//         res[i] = res[i-2] + res[i-1] + res[i-3];
//     }

//     return res[n];
// }

// console.log(tribonacci(6))

/**
 * @description: 求数组所有元素的组合
 * @param {type} {array} nums
 * @return: array
 */

 var all = function(nums){
     let resArr = [];
     let midllArr = [];
     /**
      * @description: 
      * @param {type} {array} arr
      * @return: 
      */
    let fn = function(arr){
        if(arr.length===0) return midllArr;
        let len = arr.length;
        for(let i = 0; i < len; i++){
            midllArr.push(arr[i]);
            let narr = [...arr.slice(0,i)];
            narr.concat(arr.slice(i))
            fn(narr);
        }
    }
    fn(nums);
    resArr.push(fn(nums));
    console.log(fn(nums))
    //  nums.forEach((key)=>{
    //      if(!arr.includes(key)){
    //          arr.push(num)
    //      } else {

    //      }
    //  })
     return resArr
 }

 console.log(all([1,2,3]))