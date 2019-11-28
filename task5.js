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

  /**
 * @param {number} a
 * @param {number} b
 * @return {number}
 *   两整数之和
 */
var getSum = function(a, b) {
    while (b !== 0) {
        let temp = a ^ b;
        b = (a & b) << 1;
        a = temp;
    }
    return a;
};

/**
 * @param {number} n
 * @return {string[]}
 * Fizz Buzz
 */
var fizzBuzz = function(n) {
    let arr = [];
   
    for(let i = 1; i <= n; i++){
        if(i < 3) temp = ''+i;
        if(i%3==0){
            if(i%5==0) temp = 'FizzBuzz';
            temp = 'Fizz'
        }

        if(i%5==0) temp = 'Buzz';
        arr.push(temp);
    }
}
    
    return arr;
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/*
    我们首先要知道能走完整个环的前提是gas的总量要大于cost的总量，这样才会有起点的存在。
    假设开始设置起点start = 0, 并从这里出发，如果当前的gas值大于cost值，就可以继续前进。
    此时到下一个站点，剩余的gas加上当前的gas再减去cost，看是否大于0，若大于0，则继续前进。
    当到达某一站点时，若这个值小于0了，则说明从起点到这个点中间的任何一个点都不能作为起点，
    则把起点设为下一个点，继续遍历。当遍历完整个环时，当前保存的起点即为所求。
 */
var canCompleteCircuit = function(gas, cost) {
    let sum = 0,
        start = 0;
    
    if(gas.reduce((i,j) => i+j,0) < cost.reduce((i,j) => i+j,0)) return -1;

    for(let i = 0; i < gas.length; i++){
        sum += gas[j] - cost[j];
        if (sum < 0) {
            start = i + 1;
            sum = 0;
        }
    }

    return start;
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.get = function(key) {
    let cache = this.cache;
    if (cache.has(key)) {
        let temp = cache.get(key)
        cache.delete(key);
        cache.set(key, temp);
        return temp;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {
    let cache = this.cache;
    if (cache.has(key)) {
        cache.delete(key);
    } else if (cache.size >= this.capacity) {
        cache.delete(cache.keys().next().value);
    }
    cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 * 1262. 可被三整除的最大和
 */

//  最优法
var maxSumDivThree = function(nums) {
    let dp = [0,0,0],
        sum = nums.reduce((a,b)=>a+b,0),
        len1 = nums.length;

    if(sum%3==0) return sum;

    for(let i = 0; i < len1; i++){
        let mod = nums[i] % 3;
        let a = dp[(3 + 0 - mod) % 3];
        let b = dp[(3 + 1 - mod) % 3];
        let c = dp[(3 + 2 - mod) % 3];
        if (a!=0 || mod == 0) dp[0] = Math.max(dp[0], a + nums[i]);
        if (b!=0 || mod == 1) dp[1] = Math.max(dp[1], b + nums[i]);
        if (c!=0 || mod == 2) dp[2] = Math.max(dp[2], c + nums[i]);
    }

    return dp[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 * 1262. 可被三整除的最大和
 */

//  暴力法
var maxSumDivThree = function(nums) {
    let dp = [[],[],[]],
         sum = nums.reduce((a,b)=>a+b,0),
         len1 = nums.length;
     
     nums = nums.sort((a,b)=>a-b);
 
     if(sum%3==0) return sum;
 
     for(let i = 0; i < len1; i++){
         if(nums[i]%3==0) dp[0].push(nums[i]);
         if(nums[i]%3==1) dp[1].push(nums[i]);
         if(nums[i]%3==2) dp[2].push(nums[i]);
     }
     
     if(sum%3==1) {
         if(dp[1].length >= 1){
             if(dp[2].length >=2) {
                return sum - Math.min(dp[1][0],dp[2][0]+dp[2][1]);
             } else {
                return sum - dp[1][0]
             }
         } else {
            return sum - (dp[2][0]+dp[2][1]);
         }
     }

     if(sum%3==2) {
        if(dp[2].length >= 1){
            if(dp[1].length >=2) {
               return sum - Math.min(dp[2][0],dp[1][0]+dp[1][1]);
            } else {
               return sum - dp[2][0]
            }
        } else {
           return sum - (dp[1][0]+dp[1][1]);
        }
     }
 };

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 19. 删除链表的倒数第N个节点
 */
var removeNthFromEnd = function(head, n) {
    let num = n,
        next = head,
        pre = head;
    if(!head.next) return null
    while(n>0){
        next = next.next;
        n--;
    }

    while(next){
        if(!pre.next.next) {
            pre.next = null;
            return head;
        }
        next = next.next;
        pre = pre.next;
        if(!pre.next.next) {
            pre.next = null;
            return head;
        }
    }
    pre.val = pre.next.val;
    pre.next = pre.next.next;
    return head;
};