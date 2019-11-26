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

// 更优解法
var minDistance = function (word1, word2) {
	let m = word1.length
	let n = word2.length
	let dp = []
	for (let i = 0; i <= m; i++) {
		dp.push([])
		for (let j = 0; j <= n; j++) {
			if (i * j) {
				dp[i][j] = word1[i - 1] === word2[j - 1]
					? dp[i - 1][j - 1]
					: 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
			} else {
				dp[i][j] = i + j
			}
		}
	}
	return dp[m][n]
};



/**
 * @param {number} n
 * @return {string[][]}
 * 八皇后问题 对角线约束法
 */
var solveNQueens = function (n) {
    const result = [];
    const dfs = ( subResult = [], row = 0) => {
        if (row === n) {
            result.push(subResult.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!subResult.some((j, k) => j === col || j - col === row - k || j - col === k - row)) {
                subResult.push(col);
                dfs( subResult, row + 1);
                subResult.pop();
            }
        }
    }
    dfs();
    return result;
};


/**
 * @param {number} n
 * @return {string[][]}
 * 八皇后问题 回溯法
 */
var solveNQueens = function(n) {
    let result = new Array(n);
    let results = [];
    let dfs = (row,column) => {
        let leftColumn =  column-1;
        let rightColumn = column+1;
        for(let i = row - 1;i >= 0;i--){
            if(result[i] == column){
                return false;
            }
            if(leftColumn >= 0 && result[i] == leftColumn){
                return false;
            }
            if(rightColumn < n && result[i] == rightColumn){
                return false;
            }
            leftColumn--;
            rightColumn++;
        }
        return true;
    }
    let Nqueens = (row) => {
        if(row == n){
            results.push(result.map(c=>'.'.repeat(c)+'Q'+'.'.repeat(n-1-c)));
            return;
        }
        for(let j = 0;j < n;j++){
            if(dfs(row,j)){
                result[row] = j;
                Nqueens(row+1)
            }
        }
    }
    Nqueens(0);
    return results;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 模拟面试题目*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {number} n
 * @return {boolean}
 * 快乐数
 */
//不快乐数最后都会为4
var isHappy = function(n) {
    while (n != 1 && n != 4) {
        n = (n + '').split('').reduce((sum, dist) => sum + dist ** 2, 0);
    }
    return n == 1;
};

// 使用set效率最高
var isHappy = function(n) {
    let set = new Set();
    while (n !== 1) {
      n = (n + '').split('').reduce((sum, dist) => sum + dist ** 2, 0);
      if (set.has(n)) {
        return false;
      } else {
        set.add(n);
      }
    }
    return true;
  };

 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////