// // /**
// //  * @param {string} s
// //  * @return {number}
// //  * 647. 回文子串
// //  */
// // // var countSubstrings = function(s) {
// // //     let len = s.length,
// // //         res = 0;
// // //     if(len == 0) return 0;
// // //     for(let i = 0; i < len; i++){
// // //         for(let j = i + 1; j <= len; j++){
// // //            if(s.substring(i,j) == s.substring(i,j).split('').reverse().join('')) res++
// // //         }
// // //     }

// // //     return res;
// // // };

// // /**
// //  * @param {number[]} A
// //  * @return {number[]}
// //  * 977. 有序数组的平方
// //  */
// // // var sortedSquares = function(A) {
// // //     return A.map(key=>key*key).sort((a,b)=>a-b);
// // // };
// // // 双指针 效率没有快排高
// // // var sortedSquares = function(A) {
// // //    let result = [],
// // //         lastnumber = 0,
// // //         i = 0, 
// // //         j = A.length -1,
// // //         leftnumber = Math.pow(A[i], 2),
// // //         rightnumber = Math.pow(A[j], 2);

// // //     while(i <= j) {
// // //       if (leftnumber > rightnumber) {
// // //          result.unshift(leftnumber);
// // //          i++;
// // //          leftnumber = Math.pow(A[i], 2);
// // //       }else{
// // //         result.unshift(rightnumber);
// // //         j--;
// // //         rightnumber = Math.pow(A[j], 2);
// // //       }
// // //     }
    
// // //     return result;
// // // };

// // /**
// //  * @param {number[]} nums
// //  * @param {number} target
// //  * @return {number[][]}
// //  * 18. 四数之和
// //  */
// // // var fourSum = function(nums, target) {
// // //     let outleft,
// // //         outright,
// // //         m,
// // //         n,
// // //         len = nums.length -1,
// // //         resArr = [];
    
// // //     nums = nums.sort((a,b)=>a-b);

// // //     for(let i = 0; i <= len - 3; i++){
        
// // //         if(nums[i] == nums[i-1]) continue;
// // //         outleft = nums[i];

// // //         for(let j = len; j >= i + 2; j--){
// // //             if(nums[j] == nums[j+1]) continue;
// // //             outright = nums[j];
// // //             n = j - 1;
// // //             m = i + 1;

// // //             while(m < n){
// // //                 let temp = nums[m] + nums[n] + outleft + outright;
// // //                 if(temp == target){
// // //                     resArr.push([outleft,nums[m], nums[n], outright]);
// // //                     m++;
// // //                     n--;
// // //                     while(m < n&&nums[m-1] == nums[m]) {m++};
// // //                     while(m < n&&nums[n+1] == nums[n]) {n--};
// // //                 } else if(temp < target) {
// // //                     m++;
// // //                 } else {
// // //                     n--;
// // //                 }
// // //             }
// // //         }
// // //     }

// // //     return resArr;
// // // };

// // // fourSum([-3,-1,0,2,4,5],2)

// // /**
// //  * @param {string} word1
// //  * @param {string} word2
// //  * @return {number}
// //  * 72. 编辑距离
// //  */
// // // var minDistance = function(word1, word2) {
// // //     let len1 = word1.length,
// // //         len2 = word2.length,
// // //         dp = new Array(len1 + 1).fill(0).map(()=>new Array(len2 + 1).fill(0));
// // //     for(let i = 0; i <= len1; i++) dp[i][0] = i;
// // //     for(let i = 0; i <= len2; i++) dp[0][i] = i;
// // //     for(let i = 1; i <= len1; i++){
// // //         for(let j = 1; j <= len2; j++){
// // //             dp[i][j] = (word1[i-1] !== word2[j-1])?Math.min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1]) + 1:dp[i-1][j-1];
// // //         }
// // //     }
// // //     return dp[len1][len2]
// // // };

// // // // 更优解法
// // // var minDistance = function (word1, word2) {
// // // 	let m = word1.length
// // // 	let n = word2.length
// // // 	let dp = []
// // // 	for (let i = 0; i <= m; i++) {
// // // 		dp.push([])
// // // 		for (let j = 0; j <= n; j++) {
// // // 			if (i * j) {
// // // 				dp[i][j] = word1[i - 1] === word2[j - 1]
// // // 					? dp[i - 1][j - 1]
// // // 					: 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
// // // 			} else {
// // // 				dp[i][j] = i + j
// // // 			}
// // // 		}
// // // 	}
// // // 	return dp[m][n]
// // // };



// // /**
// //  * @param {number} n
// //  * @return {string[][]}
// //  * 八皇后问题 对角线约束法
// //  */
// // // var solveNQueens = function (n) {
// // //     const result = [];
// // //     const dfs = ( subResult = [], row = 0) => {
// // //         if (row === n) {
// // //             result.push(subResult.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
// // //             return;
// // //         }
// // //         for (let col = 0; col < n; col++) {
// // //             if (!subResult.some((j, k) => j === col || j - col === row - k || j - col === k - row)) {
// // //                 subResult.push(col);
// // //                 dfs( subResult, row + 1);
// // //                 subResult.pop();
// // //             }
// // //         }
// // //     }
// // //     dfs();
// // //     return result;
// // // };


// // /**
// //  * @param {number} n
// //  * @return {string[][]}
// //  * 八皇后问题 回溯法
// //  */
// // // var solveNQueens = function(n) {
// // //     let result = new Array(n);
// // //     let results = [];
// // //     let dfs = (row,column) => {
// // //         let leftColumn =  column-1;
// // //         let rightColumn = column+1;
// // //         for(let i = row - 1;i >= 0;i--){
// // //             if(result[i] == column){
// // //                 return false;
// // //             }
// // //             if(leftColumn >= 0 && result[i] == leftColumn){
// // //                 return false;
// // //             }
// // //             if(rightColumn < n && result[i] == rightColumn){
// // //                 return false;
// // //             }
// // //             leftColumn--;
// // //             rightColumn++;
// // //         }
// // //         return true;
// // //     }
// // //     let Nqueens = (row) => {
// // //         if(row == n){
// // //             results.push(result.map(c=>'.'.repeat(c)+'Q'+'.'.repeat(n-1-c)));
// // //             return;
// // //         }
// // //         for(let j = 0;j < n;j++){
// // //             if(dfs(row,j)){
// // //                 result[row] = j;
// // //                 Nqueens(row+1)
// // //             }
// // //         }
// // //     }
// // //     Nqueens(0);
// // //     return results;
// // // };


// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // /* 模拟面试题目*/
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // /**
// //  * @param {number} n
// //  * @return {boolean}
// //  * 快乐数
// //  */
// // //不快乐数最后都会为4
// // // var isHappy = function(n) {
// // //     while (n != 1 && n != 4) {
// // //         n = (n + '').split('').reduce((sum, dist) => sum + dist ** 2, 0);
// // //     }
// // //     return n == 1;
// // // };

// // // 使用set效率最高
// // // var isHappy = function(n) {
// // //     let set = new Set();
// // //     while (n !== 1) {
// // //       n = (n + '').split('').reduce((sum, dist) => sum + dist ** 2, 0);
// // //       if (set.has(n)) {
// // //         return false;
// // //       } else {
// // //         set.add(n);
// // //       }
// // //     }
// // //     return true;
// // //   };

// //   /**
// //  * @param {number} a
// //  * @param {number} b
// //  * @return {number}
// //  *   两整数之和
// //  */
// // // var getSum = function(a, b) {
// // //     while (b !== 0) {
// // //         let temp = a ^ b;
// // //         b = (a & b) << 1;
// // //         a = temp;
// // //     }
// // //     return a;
// // // };

// // /**
// //  * @param {number} n
// //  * @return {string[]}
// //  * Fizz Buzz
// //  */
// // // var fizzBuzz = function(n) {
// // //     let arr = [];
   
// // //     for(let i = 1; i <= n; i++){
// // //         if(i < 3) temp = ''+i;
// // //         if(i%3==0){
// // //             if(i%5==0) temp = 'FizzBuzz';
// // //             temp = 'Fizz'
// // //         }

// // //         if(i%5==0) temp = 'Buzz';
// // //         arr.push(temp);
// // //     }
// // // }
    
// // //     return arr;
// // // };

// // /**
// //  * @param {number[]} gas
// //  * @param {number[]} cost
// //  * @return {number}
// //  */

// // /*
// //     我们首先要知道能走完整个环的前提是gas的总量要大于cost的总量，这样才会有起点的存在。
// //     假设开始设置起点start = 0, 并从这里出发，如果当前的gas值大于cost值，就可以继续前进。
// //     此时到下一个站点，剩余的gas加上当前的gas再减去cost，看是否大于0，若大于0，则继续前进。
// //     当到达某一站点时，若这个值小于0了，则说明从起点到这个点中间的任何一个点都不能作为起点，
// //     则把起点设为下一个点，继续遍历。当遍历完整个环时，当前保存的起点即为所求。
// //  */
// // // var canCompleteCircuit = function(gas, cost) {
// // //     let sum = 0,
// // //         start = 0;
    
// // //     if(gas.reduce((i,j) => i+j,0) < cost.reduce((i,j) => i+j,0)) return -1;

// // //     for(let i = 0; i < gas.length; i++){
// // //         sum += gas[j] - cost[j];
// // //         if (sum < 0) {
// // //             start = i + 1;
// // //             sum = 0;
// // //         }
// // //     }

// // //     return start;
// // // };

// // /**
// //  * @param {number} capacity
// //  */
// // // var LRUCache = function(capacity) {
// // //     this.cache = new Map();
// // //     this.capacity = capacity;
// // // };

// // /** 
// //  * @param {number} key
// //  * @return {number}
// //  */

// // // LRUCache.prototype.get = function(key) {
// // //     let cache = this.cache;
// // //     if (cache.has(key)) {
// // //         let temp = cache.get(key)
// // //         cache.delete(key);
// // //         cache.set(key, temp);
// // //         return temp;
// // //     } else {
// // //         return -1;
// // //     }
// // // };

// // /** 
// //  * @param {number} key 
// //  * @param {number} value
// //  * @return {void}
// //  */

// // // LRUCache.prototype.put = function(key, value) {
// // //     let cache = this.cache;
// // //     if (cache.has(key)) {
// // //         cache.delete(key);
// // //     } else if (cache.size >= this.capacity) {
// // //         cache.delete(cache.keys().next().value);
// // //     }
// // //     cache.set(key, value);
// // // };

// // /** 
// //  * Your LRUCache object will be instantiated and called as such:
// //  * var obj = new LRUCache(capacity)
// //  * var param_1 = obj.get(key)
// //  * obj.put(key,value)
// //  */
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // /**
// //  * @param {number[]} nums
// //  * @return {number}
// //  * 1262. 可被三整除的最大和
// //  */

// // //  最优法
// // // var maxSumDivThree = function(nums) {
// // //     let dp = [0,0,0],
// // //         sum = nums.reduce((a,b)=>a+b,0),
// // //         len1 = nums.length;

// // //     if(sum%3==0) return sum;

// // //     for(let i = 0; i < len1; i++){
// // //         let mod = nums[i] % 3;
// // //         let a = dp[(3 + 0 - mod) % 3];
// // //         let b = dp[(3 + 1 - mod) % 3];
// // //         let c = dp[(3 + 2 - mod) % 3];
// // //         if (a!=0 || mod == 0) dp[0] = Math.max(dp[0], a + nums[i]);
// // //         if (b!=0 || mod == 1) dp[1] = Math.max(dp[1], b + nums[i]);
// // //         if (c!=0 || mod == 2) dp[2] = Math.max(dp[2], c + nums[i]);
// // //     }

// // //     return dp[0];
// // // };

// // /**
// //  * @param {number[]} nums
// //  * @return {number}
// //  * 1262. 可被三整除的最大和
// //  */

// // //  暴力法
// // // var maxSumDivThree = function(nums) {
// // //     let dp = [[],[],[]],
// // //          sum = nums.reduce((a,b)=>a+b,0),
// // //          len1 = nums.length;
     
// // //      nums = nums.sort((a,b)=>a-b);
 
// // //      if(sum%3==0) return sum;
 
// // //      for(let i = 0; i < len1; i++){
// // //          if(nums[i]%3==0) dp[0].push(nums[i]);
// // //          if(nums[i]%3==1) dp[1].push(nums[i]);
// // //          if(nums[i]%3==2) dp[2].push(nums[i]);
// // //      }
     
// // //      if(sum%3==1) {
// // //          if(dp[1].length >= 1){
// // //              if(dp[2].length >=2) {
// // //                 return sum - Math.min(dp[1][0],dp[2][0]+dp[2][1]);
// // //              } else {
// // //                 return sum - dp[1][0]
// // //              }
// // //          } else {
// // //             return sum - (dp[2][0]+dp[2][1]);
// // //          }
// // //      }

// // //      if(sum%3==2) {
// // //         if(dp[2].length >= 1){
// // //             if(dp[1].length >=2) {
// // //                return sum - Math.min(dp[2][0],dp[1][0]+dp[1][1]);
// // //             } else {
// // //                return sum - dp[2][0]
// // //             }
// // //         } else {
// // //            return sum - (dp[1][0]+dp[1][1]);
// // //         }
// // //      }
// // //  };

// //  /**
// //  * Definition for singly-linked list.
// //  * function ListNode(val) {
// //  *     this.val = val;
// //  *     this.next = null;
// //  * }
// //  */
// // /**
// //  * @param {ListNode} head
// //  * @param {number} n
// //  * @return {ListNode}
// //  * 19. 删除链表的倒数第N个节点
// //  */
// // // var removeNthFromEnd = function(head, n) {
// // //     let num = n,
// // //         next = head,
// // //         pre = head;
// // //     if(!head.next) return null
// // //     while(n>0){
// // //         next = next.next;
// // //         n--;
// // //     }

// // //     while(next){
// // //         if(!pre.next.next) {
// // //             pre.next = null;
// // //             return head;
// // //         }
// // //         next = next.next;
// // //         pre = pre.next;
// // //         if(!pre.next.next) {
// // //             pre.next = null;
// // //             return head;
// // //         }
// // //     }
// // //     pre.val = pre.next.val;
// // //     pre.next = pre.next.next;
// // //     return head;
// // // };

// // /**
// //  * @param {number} K
// //  * @param {number} N
// //  * @return {number}
// //  * 887. 鸡蛋掉落
// //  */
// // // var superEggDrop = function(K, N) {
// // //     let dp = new Array(K+1).fill(0).map(()=>new Array(N+1).fill(0));
// // //     if(K==1) return N;
// // //     if(N==1) return 1;

// // //     for(let i = 1; i <= N; i++) {
// // //         dp[0][i] = 0;
// // //         for(let j = 1; j <=K; j++) {
// // //             dp[j][i] = dp[j][i-1] + dp[j-1][i-1]+1;
// // //             if (dp[j][i] >= N) {
// // //                 return i;
// // //             }
// // //         }
// // //     }
// // // };

// // // superEggDrop(2,3);

// // // let xhr = new XMLHttpRequest();
// // // xhr.open('get','https://www.baidu.com/');

// // // xhr.onreadystatechange = ()=>{
// // //     console.log('ss')
// // //     if(xhr.readyState===4){
// // //         console.log('ss')
// // //         if(xhr.status>=200&& xhr.status < 300){
// // //             console.log('aaa',xhr.responseText)
// // //         }
// // //     }
// // // }
// // // // 超时时间单位为毫秒
// // // xhr.timeout = 100000

// // // // 当请求超时时，会触发 ontimeout 方法
// // // xhr.ontimeout = () => console.log('请求超时')

// // // xhr.send()


// // // 实现观察者模式
// // /* Pubsub */
// // // function Pubsub(){
// // //     //存放事件和对应的处理方法
// // //    this.handles = {};
// // // }

// // // Pubsub.prototype = {
// // //     //传入事件类型type和事件处理handle
// // //     on: function (type, handle) {
// // //         if(!this.handles[type]){
// // //             this.handles[type] = [];
// // //         }
// // //         this.handles[type].push(handle);
// // //     },

// // //     emit: function () {
// // //         //通过传入参数获取事件类型
// // //        var type = Array.prototype.shift.call(arguments);
// // //         if(!this.handles[type]){
// // //             return false;
// // //         }
// // //         for (var i = 0; i < this.handles[type].length; i++) {
// // //             var handle = this.handles[type][i];
// // //             //执行事件
// // //            handle.apply(this, arguments);
// // //         }
// // //     },
// // //     off: function (type, handle) {
// // //         handles = this.handles[type];
// // //         if(handles){
// // //             if(!handle){
// // //                 handles.length = 0;//清空数组
// // //            } else {
// // //                 for (var i = 0; i < handles.length; i++) {
// // //                     var _handle = handles[i];
// // //                     if(_handle === handle){
// // //                         handles.splice(i,1);
// // //                     }
// // //                 }
// // //             }
// // //         }
// // //     }
// // // }

// // /**
// //  * @param {number} buckets
// //  * @param {number} minutesToDie
// //  * @param {number} minutesToTest
// //  * @return {number}
// //  * 458. 可怜的小猪
// //  */
// // // var poorPigs = function(buckets, minutesToDie, minutesToTest) {
// // //     if(buckets==1) return 0;
// // //     let times = Math.floor(minutesToTest/minutesToDie) + 1,
// // //         temp = 1,
// // //         number = 0;
// // //     while(temp <= buckets){
// // //         number++;
// // //         temp = temp*times;
// // //     }
// // //     return number;
// // // };

// // // poorPigs(1000,15,60);

// // /**
// //  * @param {number[][]} board
// //  * @return {void} Do not return anything, modify board in-place instead.
// //  */

// // // var gameOfLife = function(board) {
// // //   if(board.length==0) return [];

// // //   let width = board.length,
// // //       height = board[0].length,
// // //       count = 0,
// // //       resArr = JSON.parse(JSON.stringify(board));

// // //   for(let i = 0; i < width; i++){
// // //     for(let j = 0; j < height; j++){
// // //       // 计数重置
// // //       count = 0;
// // //       // 上、下、左、右、上左、上右、下左、下右
// // //       if(j>0)  count += resArr[i][j-1]       
// // //       if(j + 1 < height) count += resArr[i][j+1]
// // //       if(i>0)  count += resArr[i-1][j]
// // //       if(i+1 < width)  count += resArr[i+1][j]
// // //       if(i>0&&j>0)  count += resArr[i-1][j-1]
// // //       if(i+1<width&&j>0)  count += resArr[i+1][j-1]
// // //       if(i>0&j+1<height)  count += resArr[i-1][j+1]
// // //       if(i+1<width&&j+1<height)  count += resArr[i+1][j+1]

// // //       //live
// // //       if(resArr[i][j] == 1){
// // //         if(count > 3 || count < 2) board[i][j] = 0;
// // //       } else {
// // //         // dead
// // //         if(count == 3) board[i][j] = 1;
// // //       }
// // //     }
// // //   }
// // // };

// // // console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))

// // /**
// //  * @param {string} str
// //  * @return {string}
// //  * 709. 转换成小写字母
// //  */
// // // var toLowerCase = function(str) {
// // //   return str.toLocaleLowerCase();
// // // };

// // /**
// //  * Definition for singly-linked list.
// //  * function ListNode(val) {
// //  *     this.val = val;
// //  *     this.next = null;
// //  * }
// //  */
// // /**
// //  * @param {ListNode} head
// //  * @return {ListNode}
// //  * 24. 两两交换链表中的节点
// //  */
// // // var swapPairs = function(head) {
// // //   let pre = new ListNode(0);
   
// // //   pre.next = head;

// // //   let temp = pre;

// // //   while(temp.next != null && temp.next.next != null) {
       
// // //       let start = temp.next,
// // //           end = temp.next.next;

// // //       temp.next = end;
// // //       start.next = end.next;
       
// // //       end.next = start;
// // //       temp = start;
// // //   }
// // //   return pre.next;
// // // };

// // /**
// //  * @param {number[]} nums
// //  * @param {number} val
// //  * @return {number}
// //  * 27. 移除元素
// //  */
// // // var removeElement = function(nums, val) {
// // //   let i = 0;

// // //   for(let num of nums){
// // //     if(num!==val){
// // //       nums[i] = num;
// // //       i++
// // //     }
// // //   }

// // //   return i;
// // // };


// // /**
// //  * @param  {any[]} arr
// //  * @return {any[]} 
// //  * @description 数组扁平化
// //  */

// // // var flat = function(arr){
// // //   let resArr = [];

// // //   let fn = function(Arr){
// // //     if(Array.isArray(Arr)){
// // //       Arr.forEach(key=>fn(key))
// // //     } else {
// // //       resArr.push(Arr);
// // //     }
// // //   }

// // //   fn(arr);
// // //   return resArr;
// // // }

// // // console.log(flat([1,[2,3,[2]]]))
// // /**
// //  * 实现new操作
// //  */
// // let newfn = function(){
// //     let resObj = {},
// //         arg = [...arguments],
// //         fn = arg.shift();
// //     resObj._proto_ = fn.prototype;
// //     fn.apply(resObj,arg);
// //     return resObj;
// // }

// // function Student(name, age){
// //   this.name = name;
// //   this.age = age;
// // }

// // // let task1 = new Student('aa',11);
// // let task1 = newfn(Student,'aa',11);

// // console.log(task1)

// // /**
// //  * @param {string} haystack
// //  * @param {string} needle
// //  * @return {number}
// //  */
// // var strStr = function(haystack, needle) {
// //   if(needle.length==0) return 0;
// //   return haystack.search(needle)
// // };

// // var strStr = function (haystack, needle) {
// //   if (needle === "") return 0
// //   for (var i = 0; i < haystack.length; i++) {
// //       if (haystack[i] === needle[0]) {
// //           if (haystack.substring(i, i + needle.length) === needle) return i;
// //       }
// //   }
// //   return -1
// // };

// // /**
// //  * @param {string} s
// //  * @return {boolean}
// //  * 125. 验证回文串
// //  */
// // var isPalindrome = function(s) {
// //   s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
// //   return s == s.split('').reverse().join('');
// // };
// // // 双指针法
// // var isPalindrome = function(s) {
// //   s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
// //   let left = 0, right = s.length-1;
// //   while(left < right){
// //       if(s[left]!==s[right]) return false;
// //       left++;
// //       right--;
// //   }
// //   return true;
// // };

// // /* 节流函数 */

// // let throttle = function(fn,timer){
// //   let flag = true;
// //   return function(){
// //       if(!flag) return;
// //       flag = false;
// //       settimeout(()=>{
// //           fn();
// //           flag = true;
// //       },timer)
// //   }
// // }

// // /* 防抖函数 */

// // let debounce = function (fn, delay) {
// //   var flag; // 维护一个 flag
// //   return function () {
// //       if (flag) {
// //           clearTimeout(flag);
// //       }
// //       flag = setTimeout(function () {
// //           fn();
// //       }, delay);
// //   };
// // }
// // /**
// //  * @param  {} con
// //  * 实现apply函数
// //  */
// // Function.prototype.apply1 = function(context){
// //     context.fn = this;
// //     let list = [...arguments];
// //     list.shift();
// //     let result = context.fn(...list[0]);
// //     delete context.fn;
// //     return result;
// // }

// // /**
// //  * @param  {} context
// //  *  实现bind 
// //  */
// // Function.prototype.bind1 = function(context){
// //   // this指向调用的函数
// //   let fn = this;
  
// //   let arg = [...arguments];
// //   // 去掉第一个元素
// //   arg.shift();

// //   return function(){
// //     // 利用apply来实现的
// //       return fn.apply(context,arg)
// //   }
// // }

// // /* 测试 */
// // let a = function(name){
// //   console.log(this.value);
// //   console.log(name);
// // }

// // let b = {
// //   value: 1,
// // }

// // let c = {
// //   value: 3
// // }

// // let a2 = a.bind1(b,'aa')();


// // /* JavaScript实现常见排序算法 */

// // /* 
// //   稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；
// //   不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；
// //   内排序：所有排序操作都在内存中完成；
// //   外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；
// //   时间复杂度: 一个算法执行所耗费的时间。
// //   空间复杂度: 运行完一个程序所需内存的大小。
// //   链接：https://user-gold-cdn.xitu.io/2016/11/29/4abde1748817d7f35f2bf8b6a058aa40?imageView2/0/w/1280/h/960/format/webp/ignore-error/1
// //  */

// // // 冒泡排序
// // function bubbleSort(arr) {
// //   let len = arr.length;
// //   for(let i=0; i<len; i++) {
// //       for(let j=0; j<len - 1 - i; j++) {
// //           if(arr[j] > arr[j+1]) {
// //               [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
// //           }
// //       }
// //   }
// //   return arr;
// // }

// // // 选择排序

// // function selectionSort(arr) {
// //   var len = arr.length;
// //   var minIndex;
// //   for (var i = 0; i < len - 1; i++) {
// //       minIndex = i;
// //       for (var j = i + 1; j < len; j++) {
// //           if (arr[j] < arr[minIndex]) {     //寻找最小的数
// //               minIndex = j;                 //将最小数的索引保存
// //           }
// //       }
// //       [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
// //   }
// //   return arr;
// // }
// // var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// // console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// // /* 插入排序 */
// // function insertionSort(arr) {
// //   for (let i = 1, len = arr.length; i < len; i++) {
// //     const temp = arr[i];
// //     let preIndex = i - 1;

// //     while (arr[preIndex] > temp) {
// //       arr[preIndex + 1] = arr[preIndex];
// //       preIndex -= 1;
// //     }
// //     arr[preIndex + 1] = temp;
// //   }

// //   return arr;
// // }

// // /* 快速排序 */

// // var quickSort = function(arr) {
// //   　　if (arr.length <= 1) { return arr }

// //   　　var pivotIndex = Math.floor(arr.length / 2);
// //   　　    pivot = arr.splice(pivotIndex, 1)[0],
// //   　　    left = [],
// //   　　    right = [];

// //   　　for (let i = 0; i < arr.length; i++){
// //   　　　　if (arr[i] < pivot) {
// //   　　　　　　left.push(arr[i]);
// //   　　　　} else {
// //   　　　　　　right.push(arr[i]);
// //   　　　　}
// //   　　}

// //   　　return quickSort(left).concat([pivot], quickSort(right));
// //   };



// // var array = [ {"id": 20102034, "name": "报表集团", "pid": 0}, {"id": 20102035, "name": "北京分公司", "pid": 20102034}, {"id": 20102038, "name": "海淀分店", "pid": 20102035}, {"id": 20102039, "name": "朝阳分店", "pid": 20102035}, {"id": 20102065, "name": "青岛分店", "pid": 20102036}, {"id": 20102036, "name": "山东分公司", "pid": 20102034}, {"id": 20102066, "name": "烟台分店", "pid": 20102036} ];

// // let treefn = function(arr){
// //   let len = arr.length,
// //     resObj = {},
// //     tempObj ;

// //     resObj.children=[{}];

// //     temp = resObj.children[0]

// //     for(let i = 0; i < len; i++){
// //       if(i!==0) temp = temp.children[0];
      
// //       temp.id = arr[i].id;
// //       temp.pid = arr[i].pid;
// //       temp.name = arr[i].name;
// //       temp.children = [{}]
// //     }
// //     console.log(resObj)
// //     return resObj;
// // }

// // treefn(array)

// /* 并归排序 */

// function merge(left,right){
//     var tmp=[];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             tmp.push(left.shift());
//         }else{
//             tmp.push(right.shift());
//         }
//     }
//     return tmp.concat(left,right)
// }

// function mergeSort(arr){
//     if(arr.length==1) return arr;
//     var mid=Math.floor(a.length/2),
//         left=arr.slice(0,mid);
//         right=arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right))
// }

// /* 希尔排序 */
// function shellSort(arr) {
//     var len = arr.length,
//         temp,
//         gap = 1;
//     console.time('希尔排序耗时:');
//     while(gap < len/5) {          //动态定义间隔序列
//         gap =gap*5+1;
//     }
//     for (gap; gap > 0; gap = Math.floor(gap/5)) {
//         for (var i = gap; i < len; i++) {
//             temp = arr[i];
//             for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
//                 arr[j+gap] = arr[j];
//             }
//             arr[j+gap] = temp;
//         }
//     }
//     console.timeEnd('希尔排序耗时:');
//     return arr;
// }

// /* 堆排序 */

// // 交换两个节点
// function swap(A, i, j) {
//     let temp = A[i];
//     A[i] = A[j];
//     A[j] = temp; 
//   }
//   //顶堆
//   function shiftDown(A, i, length) {
//     let temp = A[i]; // 当前父节点
//   // j<length 的目的是对结点 i 以下的结点全部做顺序调整
//     for(let j = 2*i+1; j<length; j = 2*j+1) {
//       temp = A[i];  // 将 A[i] 取出，整个过程相当于找到 A[i] 应处于的位置
//       if(j+1 < length && A[j] < A[j+1]) { 
//         j++;   // 找到两个孩子中较大的一个，再与父节点比较
//       }
//       if(temp < A[j]) {
//         swap(A, i, j) // 如果父节点小于子节点:交换；否则跳出
//         i = j;  // 交换后，temp 的下标变为 j
//       } else {
//         break;
//       }
//     }
//   }
  
//   // 堆排序
//   function heapSort(A) {
//     // 初始化大顶堆，从第一个非叶子结点开始
//     for(let i = Math.floor(A.length/2-1); i>=0; i--) {
//       shiftDown(A, i, A.length);
//     }
//     // 排序，每一次for循环找出一个当前最大值，数组长度减一
//     for(let i = Math.floor(A.length-1); i>0; i--) {
//       swap(A, 0, i); // 根节点与最后一个节点交换
//       shiftDown(A, 0, i); 
//     }
//   }
  
//   let Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
//   heapSort(Arr);
//   alert(Arr);

//   /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  * 242. 有效的字母异位词
//  */
// var isAnagram = function(s, t) {
//     if(s.length!==t.length) return false;
//     let len = s.length,
//         arr = s.split('');
//     for(let i = 0; i < len; i++){
//       if(!arr.includes(t[i])) return false;
//       arr.splice(arr.indexOf(t[i]),1);
//     }
//     return true;
// };

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  * 75. 颜色分类
//  */

// var sortColors = function(nums) {
//   let len  = nums.length,
//       temp = 0;
  
//   for(let i = 0; i < len; i++){
//       temp = nums[i];
//       if(temp==0){
//         nums.splice(i,1);
//         nums.unshift(temp);
//       } else if(temp==2){
//         let j = len;
//         while(j>i&&nums[j]!==1){
//             j--
//         }
//         [nums[i],nums[j]] = [nums[j],nums[i]]
//       }
//   }
//   return nums
// };

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  * 宝石与石头
//  */
// var numJewelsInStones = function(J, S) {
//   let res = 0,
//       len = S.length;
//   for(let i = 0; i < len; i++){
//       let re = new RegExp(S[i]);
//       if(re.test(J)) res++;
//   }
//   return res
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 80. 删除排序数组中的重复项 II
//  */
// var removeDuplicates = function(nums) {
//   let pre,middle,next;
//       for(let i = 0; i < nums.length - 2; i++){
//           pre = nums[i];
//           middle = nums[i+1];
//           next = nums[i+2];
//           if(pre==middle&&middle==next){
//               nums.splice(i+2,1);
//               i--
//           }
//       }
//   return nums.length;
// };


// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  * 94. 二叉树的中序遍历
//  */
// var inorderTraversal = function(root) {
//     let arr = [];

//     let fn = function(node){
//       if(node){
//         fn(node.left);
//         arr.push(node.val);
//         fn(node.right)
//       }
//     }

//     fn(root);

//     return arr
// };


// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} x
//  * @return {ListNode}
//  * 86. 分隔链表
//  */

// //  未保存初始位置
// var partition = function(head, x) {
//     let pre = next = head;
//     while(next){
//       if(next.val < x){
//         pre.val = next.val;
//         pre = pre.next;
//       }
//       next = next.next;
//     }

//     return head;
// };

// // 改进
// var partition = function(head, x) {

//   let node = head,
//       less = lessHead = new ListNode(0), 
//       more = moreHead = new ListNode(0);

//   while(node){
//     if(node.val < x){
//       less.next = new ListNode(node.val);
//       less = less.next;
//     } else {
//       more.next = new ListNode(node.val);
//       more = more.next
//     }
//     node = node.next
//   }

//   lessHead = lessHead.next;
//   moreHead = moreHead.next;
//   if(!lessHead) return moreHead
//   less.next = moreHead;

//   return lessHead;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  * 25. K 个一组翻转链表
//  */
// var reverseKGroup = function(head, k) {
//   let temp1 = [],
//       temp2 = [],
//       res = resHead = new ListNode(0);

//     while(head){
//       temp1.push(head.val)
//       head = head.next;
//     }

//     while(temp1.length >= k){
//       temp2 = [...temp2,...temp1.splice(0,k).reverse()]
//     }
//     temp2 = [...temp2,...temp1];
    
//     temp2.forEach(key=>{
//         res.next = new ListNode(key);
//         res = res.next;
//     })

//     resHead = resHead.next;

//     return resHead
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 164. 最大间距
//  */
// var maximumGap = function(nums) {
//   let len = nums.length,
//       res = 0;

//   if(len < 2) return 0;

//   nums.sort((a,b)=>a-b);
//   for(let i = 0; i < len - 1; i++){
//       res = nums[i+1] - nums[i]>res?(nums[i+1] - nums[i]):res;
//   }
//   return res;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 287. 寻找重复数
//  * 参考环形链表的解题方式
//  */
// var findDuplicate = function(nums) {
//   let pre = next = 0;
//       next = nums[nums[next]];

//   while(nums[pre]!=nums[next]){
//       pre = nums[pre];
//       next = nums[nums[next]];
//   }
  
//   pre = 0;
//   while(pre!=next){
//     pre = nums[pre];
//     next = nums[next]; 
//   }

//   return pre;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  * 234. 回文链表
//  */
// var isPalindrome = function(head) {
//   let slow = fast = head,
//       i = 0,
//       arr = [];
//       arr.unshift(slow.val);
//       while(fast&fast.next){
//           slow = slow.next;
//           fast = fast.next?fast.next.next:fast.next;
//           arr.unshift(slow.val);
//       }
//       console.log(arr,slow)
//       while(slow){
//           if(slow.val != arr[i]) return false
//           slow = slow.next;
//           i++;
//       }

//       return true
// };

// function sum(a,b=0){
//   if(arguments.length>1) return a+b;

//   return (a)=>a+b;
// }

// console.log(sum(1,1))
// console.log(sum(1));


// const list = [1, 2, 3];
// const square = num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num * num);
//         }, 1000);
//     });
// }

// function test() {
//     list.forEach(async x => {
//         const res = await square(x);
//         console.log(res);
//     });
// }

// test()

/**
 * @param {string} s
 * @return {string}
 */
// var reverseVowels = function(s) {
//     let pre = 0,
//         next = s.length-1,
//         arr  = ['a','e','i','o','u',"A","E","I","O","U"];
//     s = s.split('');
//     while(next>=pre){
//         if(arr.includes(s[pre])&&arr.includes(s[next])){
//            [s[pre],s[next]] = [s[next],s[pre]]
//             pre++;
//             next--
//         }
//         if(!arr.includes(s[pre])) pre++;
//         if(!arr.includes(s[next])) next--;
//     }        
//     return s.join('');
// };
// reverseVowels('holle')

// /**
//  * @description 925. 长按键入
//  * @param {string} name
//  * @param {string} typed
//  * @return {boolean}
//  */
// var isLongPressedName = function(name, typed) {
//     let i = 0, j = 0, N = name.length, T = typed.length;
//     if(N>T||(i==0&j==0&name[i]!==typed[j])) return false;
//     while(i<N-1){
//         if(name[i+1]==typed[j]){
//             i++; j++;
//         } else {
//             if(name[i]==typed[j]){
//                 j++
//             } else {
//                 return false
//             }
//         }
//     }
//     return true;
// };

// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//     this.cache = new Map();
//     this.capacity = capacity;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */

// LRUCache.prototype.get = function(key) {
//     if (!this.cache.has(key)) return -1;
//     // 改变原来的顺序将命中的移动到最后
//     let temp = cache.get(key)
//     cache.delete(key);
//     cache.set(key, temp);
//     return temp;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */

// LRUCache.prototype.put = function(key, value) {
//     let cache = this.cache;
//     // 删除已经存在的然后重新赋值
//     if (cache.has(key)) {
//         cache.delete(key);
//     } else if (cache.size >= this.capacity) {
//         cache.delete(cache.keys().next().value);
//     }
//     cache.set(key, value);
// };

// /**
//  * @param {number} n
//  * @return {number}
//  * @description 剑指offer 64题
//  */
// var sumNums = function(n) {
//     return n&&(n + sumNums(n-1));
// };

// /**
//  * @param {string} s
//  * @param {number} n
//  * @return {string}
//  * @description 剑指offer 58题
//  */
// var reverseLeftWords = function(s, n) {
//     s = s.substr(n) + s.substr(0,n)
//     return s
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  * @description 剑指offer 55题
//  */
// var maxDepth = function(root) {
//     let res = 0;
//     let dfs = function(node,n){
//         res = res>n?res:n;
//         if(!node) return
//         dfs(node.right,n+1);
//         dfs(node.left,n+1);
//     }
//     dfs(root,res)
//     return res
// };

// /**
//  * @param {number} n
//  * @return {number[]}
//  * @description 剑指offer 18题
//  */
// var printNumbers = function(n) {
//     let arr = [],
//         num = '';
//     for(let j = 0; j < n; j++){
//         num = num + '9'
//     }
//     for(let i = 1; i <= +num; i++){
//         arr.push(i)
//     }
//     return arr
// };

// /**
//  * @param {string} s
//  * @return {string}
//  * @description 剑指offer 05题
//  */
// var replaceSpace = function(s) {
//     let arr = s.split('');
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]==' ') arr[i] = '%20'
//     }
//     return arr.join('')
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  * @description 剑指offer 27题
//  */
// var mirrorTree = function(root) {
//     if (!root) return null;
//     [root.left, root.right] = [root.right,root.left]
    
//     mirrorTree(root.left);
//     mirrorTree(root.right);

//     return root;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  * @description 剑指offer 22题
//  */
// var getKthFromEnd = function(head, k) {
//     let pre = head,
//         next = head;
//     while(k>0){
//         next = next.next;
//         k--
//     }
//     while(next){
//         pre = pre.next;
//         next = next.next;
//     }
//     return pre
// };
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {number[]}
//  * @description 剑指offer 06题
//  */
// var reversePrint = function(head) {
//     let arr = [];
//     //js里面unshift方法效率低下
//     while(head){
//         arr.push(head.val)
//         head = head.next;
//     }
//     return arr.reverse()
// };

// /**
//  * @param {number} n - a positive integer
//  * @return {number}
//  * @description 剑指offer 15题
//  */
// var hammingWeight = function(n) {
//     let s = n.toString(2),
//         res = 0;
//     for(let i = 0; i < s.length; i++){
//         if(s[i]=='1') res++
//     }
//     return res;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @description 剑指offer 56题
//  */
// var singleNumber = function(nums) {
//     let pre = 0,
//         next = 2;
//     nums.sort((a,b)=>a-b);
//     while(nums[pre]==nums[next]){
//         pre = pre + 3;
//         next = next + 3;
//     }
//     return nums[pre]
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  * @description 剑指offer 25题
//  */
// var mergeTwoLists = function(l1, l2) {
//     let head , temp;
//     head = temp = new ListNode(0);

//     while(l1&&l2){
//         if(l1.val>l2.val){
//             temp.next = new ListNode(l2.val);
//             l2 = l2.next;
//         } else {
//             temp.next = new ListNode(l1.val);
//             l1 = l1.next;
//         }
//         temp = temp.next;
//     }
//     temp.next = l1?l1:l2;
    
//     return head.next;
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  * @description 剑指offer 54题
//  */
// var kthLargest = function(root, k) {
//     let num = 0,
//         res;

//     let fn = function(node){
//         if(!node) return
//         fn(node.right);
//         if(++num==k){
//             res = node.val;
//             return
//         };
//         fn(node.left);
//     }
//     fn(root);
//     return res;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  * @description 剑指offer 24题 迭代实现
//  */
// var reverseList = function(head) {
//     let pre = null, cur = head, next;
//     while(cur){
//         next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  * @description BFS 
//  */
// var levelOrder = function(root) {
//     if (!root) return [];
//     let result = [], 
//         // 缓存层节点
//         tmp = [root];
  
//     while (tmp.length) {
//       // 缓存子节点
//       let childtmp = [],
//       // 缓存层节点的值
//           level = []; 
  
//       for (let i = 0, len = tmp.length; i < len; i++) { 
//         level.push(tmp[i].val); 
//         // 添加左右子节点到缓存数组当中
//         tmp[i].left&&childtmp.push(tmp[i].left);
//         tmp[i].right&&childtmp.push(tmp[i].right);
//       }

//       tmp = childtmp;
//       result.push(level);
//     }
//     return result;
//   };

//   var CQueue = function() {
//     this.arr = [];
// };

// /** 
//  * @param {number} value
//  * @return {void}
//  */
// CQueue.prototype.appendTail = function(value) {
//     this.arr.push(value)
// };

// /**
//  * @return {number}
//  */
// CQueue.prototype.deleteHead = function() {
//     return this.arr.length?this.arr.shift():-1;
// };

// /** 
//  * Your CQueue object will be instantiated and called as such:
//  * var obj = new CQueue()
//  * obj.appendTail(value)
//  * var param_2 = obj.deleteHead()
//  */

//  /**
//  * @param {number[][]} grid
//  * @return {number}
//  * @description 剑指offer 47题 
//  */
// var maxValue = function(grid) {
//     // let row = grid.length
//     // let col = grid[0].length
//     // let dp = [...new Array(row+1)].map(() => Array(col+1).fill(0))
//     // for(let i=1;i<=row;i++) {
//     //     for(let j=1;j<=col;j++) {
//     //         dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i-1][j-1]
//     //     }
//     // }
//     // return dp[row][col]

//     // for (let i = 0,iLen = grid.length; i < iLen; i++) {
//     //     for (let j = 0,jLen = grid[0].length; j < jLen; j++) {
//     //         let left = grid[i][j-1]===undefined ? 0: grid[i][j-1]
//     //         let up = grid[i-1]===undefined?0:grid[i-1][j]
//     //         grid[i][j] = Math.max(left+grid[i][j],up+grid[i][j])
//     //     }
//     // }
//     // return grid[grid.length-1][grid[0].length-1]
//     let up;

//     for (let i = 0,iLen = grid.length; i < iLen; i++) {
//         for (let j = 0,jLen = grid[0].length; j < jLen; j++) {
//             up = grid[i-1]===undefined?0:grid[i-1][j]
//             grid[i][j] = Math.max((grid[i][j-1]||0)+grid[i][j],up+grid[i][j])
//         }
//     }
//     return grid[grid.length-1][grid[0].length-1]
// };

// /**
//  * // Definition for a Node.
//  * function Node(val, next, random) {
//  *    this.val = val;
//  *    this.next = next;
//  *    this.random = random;
//  * };
//  */
// /**
//  * @param {Node} head
//  * @return {Node}
//  * @description 剑指offer 34题 
//  */
// var copyRandomList = function(head) {
//     const mapping = new Map();
//     let copy = function(node) {
//       if (!node) return node; // 空结点
//       if (mapping.has(node)) return mapping.get(node); // 取缓存
  
//       const res = new Node();
//       mapping.set(node, res); // 先放缓存
//       res.val = node.val;
//       res.next = copy(node.next); // 结点，要递归
//       res.random = copy(node.random); // 结点，要递归
//       return res;
//     }
  
//     return copy(head);
//   };

//   /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {number[]} preorder
//  * @param {number[]} inorder
//  * @return {TreeNode}
//  * @description 剑指offer 07题 
//  */
// var buildTree = function(preorder, inorder) {
//     if (preorder.length ==0 || inorder.length == 0) return null;

//     let res = new TreeNode(preorder[0]);

//     let index = inorder.findIndex((i)=>i==preorder[0])
    
//     res.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
//     res.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
//     return res;
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @description 剑指offer 03题 
//  */
// var findRepeatNumber = function(nums) {
//     //使用set 效率比 map高
//     let map = new Set();

//     for(let i = 0; i < nums.length; i++){
//         if(map.has(nums[i])) return nums[i];
//         map.add(nums[i])
//     }
//     return -1
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  * 面试题68 - I. 二叉搜索树的最近公共祖先
//  */
// var lowestCommonAncestor = function(root, p, q) {
//     if(root.val < p.val&& root.val < q.val ){
//        return lowestCommonAncestor(root.right, p, q)
//     } else if(root.val > p.val&& root.val > q.val ){
//        return lowestCommonAncestor(root.left, p, q)
//     } else if((root.val > p.val&& root.val < q.val)||(root.val < p.val&& root.val > q.val )){
//         return root
//     } else {
//         return root.val==q.val?q:p
//     }
// };

// /**
//  * @param {number} n
//  * @return {number}
//  * 面试题10- I. 斐波那契数列
//  */
// var fib = function(n) {
//     if(n < 2) return n;
//     let cur1 = 0, cur2 = 1;
//     for(let i = 2; i <= n; i++){
//         let temp = cur1 + cur2;
//         cur1 = cur2;
//         cur2 = temp%1000000007;
//     }
//     return cur2;
// };

// /**
//  * @param {number} n
//  * @return {number}
//  * 面试题49. 丑数
//  */
// var nthUglyNumber = function(n) {
//     let res = [1],
//         p2 = 0,p3 = 0,p5 = 0;

//     for(let i = 1; i <= n; i++){
//         res.push(Math.min(res[p2]*2,Math.min(res[p3]*3,res[p5]*5)));
//         if (res[i] == res[p2] * 2) p2++;
//         if (res[i] == res[p3] * 3) p3++;
//         if (res[i] == res[p5] * 5) p5++;
//     }

//     return res[n-1]
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} val
//  * @description 面试题18. 删除链表的节点
//  * @return {ListNode}
//  */
// var deleteNode = function(head, val) {
//     if(head.val==val) return head.next;
//     let temp = head;
//     while(temp.next){
//         if(temp.next.val==val){
//             temp.next = temp.next.next;
//             return head
//         }
//         temp = temp.next
//     }
// };

// /**
//  * @param {number[]} prices
//  * @return {number}
//  * @description 面试题63
//  */
// var maxProfit = function(prices) {
//     if (prices.length<2) return 0;

// 	let max = 0,
//         last = 0;

// 	for (let i = 1; i < prices.length; i++){
// 		last = last + prices[i] - prices[i-1];
// 		last = last > 0 ? last:0;
// 		max = max > last ? max:last;
// 	}
// 	return max;
// };

// var maxProfit = function(prices) {
//     let res = 0
//     let min = Infinity
//     for(let i=0;i<prices.length;i++) {
//         min = Math.min(min,prices[i])
//         res = Math.max(res, prices[i] - min)
//     }
//     return res
// };

// /**
//  * @param {number} target
//  * @return {number[][]}
//  * @description 面试题57 - II. 和为s的连续正数序列
//  */
// var findContinuousSequence = function(target) {
//     let res = [],
//         temp = [],
//         j = 0;
//     for(let i = 1; i < target; i++){
//         j = i+1;
    
//         while(((i+j)*(j-i+1))/2<target){
//             j++
//         }
        
//         if(((i+j)*(j-i+1))/2==target){
//             temp = [];
//             for(let k = i; k <= j; k++){
//                 temp.push(k)
//             }
//             res.push(temp);
//         }
//     }

//     return res;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @description 面试题39. 数组中出现次数超过一半的数字
//  */
// var majorityElement = function(nums) {
//     // 排序找中位数的方法，效率太低
//     // nums.sort((a,b)=>a-b);
//     // return nums[parseInt(nums.length/2)]

// // 使用 Map 效率提升
//     let map = new Map();
//     nums.forEach(key=>{
//         map.set(key,map.get(key)+1||1)
//     });
//     return [...map].filter(([key,val])=>val > parseInt(nums.length/2))[0][0]
// };


// let fn = (N,num)=>{
//     let flag = (start,end,key)=>{
//         for(let i = start; i <= end; i++){
//             if(num[i]>key) return false
//         }
//         return true
//     }
    
//     let flag1 = (start,end,key)=>{
//         for(let i = start; i >= end; i--){
//             if(num[i]>key) return false
//         }
//         return true
//     }

//     let arr = new Array(N);
//         arr.fill(1)
//     for(let i = 0; i < N; i++){
        
//         for(let j = i+1; j < N; j++){
//             if(flag(i+1,j,num[j])) arr[i]++
//         }

//         for(let k = i-1; k >= 0; k--){
//             if(flag1(i-1,k,num[k])) arr[i]++
//         }
//     }
//     return arr.join(' ')
// }

// fn(6,[5,3,8,3,2,5])

// 重复生成字符串
// let Str = (s)=>{
//     let start = s[0],
//         res = ''
//     s = s.slice(2)
//     for(let i = 0; i < start; i++){
//         res=res+s
//     }
//     return res
// }

// let fn = (str)=>{
//     let left = [],
//         right = 0;
// // 记录 [ 的位置
//     for(let i = 0; i < str.length; i++){
//         if(str[i]=='[') left.push(i);
//     }
//     // 反转
//     left.reverse();
//     for(let j = 0; j < left.length; j++){
//         // 每次都重新查找 right
//         right = 0;
//         // 查找right值
//         while(str[right]!==']'){
//             right++;
//             if(str[right]==']') break
//         }
//         // 拼接
//         str = str.slice(0,left[j]) + Str(str.slice(left[j]+1,right)) + str.slice(right+1);
//     }

//     return str
// }

// fn('HG[3|B[2|CA]]F')

// //HGBCACABCACABCACAF

// /**
//  * 已有函数：生成一个二叉树
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} t1
//  * @param {TreeNode} t2
//  * @return {TreeNode}
//  */
// var mergeTrees = function(t1, t2) {
//     // 填入代码
//     let resNode = null;

//     if (t1==null && t2==null) return null
//     if (!t1) return t2;
//     if (!t2) return t1;

//     resNode = new TreeNode(t1.val + t2.val);
//     resNode.left = mergeTrees(t1.left, t2.left);
//     resNode.right = mergeTrees(t1.right, t2.right);

//     return resNode;
// };

// 2.	子串问题
// 给定两个字符串s1和s2，如果s2包含s1的任一排列，则返回true。
// 换句话说，第一个字符串的排列之一，是第二个字符串的子串。
// 例1：
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: True
// 说明: s2包含s1的一个排列("ba")

// 例2：
// Input: s1= "ab", s2 = "eidboaoo"
// Output: False
// 注：
// 1）输入的字符串只包含小写字母。
// 2）两个字符串的长度在[1, 10,000]范围内。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function(s1, s2) {
//     // 填入代码
//     let temp = s2.split('');
//     for(let i = 0; i < s1.length; i++){
//         if(!temp.includes(s1[i])) return false;
//     }
//     return true
// };

// var oddEvenList = function(head) {
//     // 填入代码
//     let arr1 = [],
//         arr2 = [],
//         flag = 1,
//         temp = head;
//     // 取出节点，并且分类
//     while(temp){
//         if(flag%2===1){
//             arr1.push(temp.val)
//         } else {
//             arr2.push(temp.val)
//         }
//         flag++;
//         temp = temp.next;
//     }
//     // 重新赋值
//     temp = head;
//     flag = 1;
//     while(temp){
//         if(flag%2===1){
//            temp.val = arr1.shift()
//         } else {
//            temp.val = arr2.shift()
//         }
//         flag++;
//         temp = temp.next;
//     }
//     return head;
// };


// console.log(checkInclusion("abc","eidboaoo")) 

// var genUrl = function(requireTree) {
//     // 填入代码
//     let str = ''
    
//     /**
//      * 描述
//      * @date 2020-02-27
//      * @description 实现层次遍历，并且返回一个数组
//      * @param {any} arr
//      * @returns {any}
//      */
//     let fn = function(arr){
//         if (arr.length == 0) return [];
//         // 层次遍历
//         let res = [], 
//             // 维护一个栈来储存每层的数值
//             queue = [];

//         queue.push(arr);

//         while(queue.length!==0){
//             var level = [];

//             for (var i = 0; i < queue.length; i ++) {
//                 var item = queue.shift();
//                 // 遍历属性
//                 for (var j = 0; j < item.length; j ++) {
//                     level.push(item[j]['name']);
//                     // 添加子元素到queue当中
//                     if(item[j]["require"]) queue.push(item[j]["require"]);
//                 }
//             }

//             // 加入数组当中
//             res.push(...level);
//         }
//         // 数组去重
//         res = [...new Set(res)]
//         // 返回遍历后的数组，要求是从底到顶遍历
//         return res.reverse();
//     }

//     let temp = fn(requireTree["require"]);
//     str = 'http://res.wx.qq.com/' + temp.join(',') + ','+requireTree['name']
//     console.log(str)
//     return str
// };

// let requireTree = { 
// 	"name":"page.js",
// 	"require":[
// 		{
// 			"name":"A.js",
// 			"require":[
// 				{
// 					"name":"C.js",
// 					"require":[
// 						{
// 							"name":"F.js"
// 						}
// 					]
// 				}
// 			]
// 		},
// 		{
// 			"name":"B.js",
// 			"require":[
// 				{
// 					"name":"D.js",
// 					"require":[
// 						{
// 							"name":"F.js"
// 						}
// 					]
// 				},
// 				{
// 					"name":"E.js",
// 					"require":[]
// 				}
// 			]
// 		},
// 	]
// }


// genUrl(requireTree)


// function permution(str) {
// 	let res = [],
// 		temp = [],
// 		arr = str.split('');
		
// 	let fn = function(curArr,strArr){
// 		if(curArr.length==strArr.length){
// 			// 注意这里需要生成一个新数组
// 			res.push([...curArr]);
// 			return 
// 		}
		
// 		strArr.forEach((k,i)=>{
// 			if(!curArr.includes(k)){
// 				curArr.push(k);
// 				fn(curArr,strArr);
// 				curArr.pop()
// 			}
// 		})
// 	}

// 	fn(temp,arr);
// 	console.log(res)
// 	return res	
// }

// permution('asd')


// let fn = function(n){
// 	if(n<5){
// 		console.log(1);
// 		return
// 	}
// 	// 能生的
// 	let arr1 = [1],
// 	// 不能生的
// 		arr2 = [];
// 	for(let i = 5; i <= n; i++){
// 		for(let j = 0; j < arr1.length; j++){
// 			arr2.push(1);
// 		}
// 		if(i%4==0){
// 			arr1.push(1);
// 			arr2.shift()
// 		}
// 	}
// 	console.log(arr1.length+arr2.length);
// }

// fn(9)

// let myNew = function(){
// 	let obj = {};
// 	let fn = [...arguments].shift();
// 	console.log(fn)
// 	obj._proto_ = fn.prototype;
// 	fn.call(obj,...arguments);
// 	return obj;
// }

// function a(aa){
// 	this.a = aa
// }

// // a();

// let b = new a(11);
// let c = myNew(a,10);

// console.log(c)

// Function.prototype.myCall = function (obj = window) {
// 	obj.fn = this
// 	const args = [...arguments].splice(1)
// 	const result = obj.fn(...args)
// 	delete obj.fn
// 	return result
//   }
  
//   Function.prototype.myApply = function (obj = window) {
// 	obj.fn = this
// 	const args = arguments[1]
// 	let result = args ?
// 	  obj.fn(...args) :
// 	  obj.fn()
// 	delete obj.fn
// 	return result
//   }
  
//   Function.prototype.myBind = function (obj = window) {
// 	const that = this
// 	const args = [...arguments].splice(1)
// 	return function () {
// 	  return that.apply(obj, [...args, ...arguments])
// 	}
//   }

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var levelOrder = function(root) {
//     let temp = [],
//         res = [];
//     let fn = function(node){
//         if(node==null) return;
//         res.push(node.val);
//         node.left&&temp.push(node.left);
//         node.right&&temp.push(node.right);
//         while(temp.length>0){
//             fn(temp.shift())
//         }
//     }
//     fn(root);

//     return res;
// };

/**
 * @param {string} S
 * @return {string[]}
 */
// var letterCasePermutation = function(S) {
//     let res = [],
//         temp = S.split('');
//     let fn = function(s,arr){
//         if(s.length==S.length){
//             res.push(s);
//             return;
//         }
//         for(let i = 0; i < arr.length; i++){
// 			let t = arr.shift();
// 			// 防止恶意输入
//             fn(`${s}`+`${t}`,arr);
//             arr.push(t)
//         }
//     }
// 	fn('',temp);
//     return res;
// };

// letterCasePermutation("a1b2")

// var obj = {
// // 如果Symbol.toPrimitive()方法，优先调用再返回
// // 调用valueOf()，如果转换为原始类型，则返回
// // 调用toString()，如果转换为原始类型，则返回
// // 如果都没有返回原始类型，会报错
//     value: 3,
//     valueOf() {
//       this.value = this.value+1;
//       return this.value;
//     },
//     toString() {
//       this.value = this.value+2;
//       return this.value;
//     },
//     [Symbol.toPrimitive](){
//       this.value = this.value+3;
//       return this.value;
//     }
//   }
//   console.log(obj==6,obj==9); // 输出true true

// 寄生继承
//function createObj (o) {
//    var clone = object.create(o);
//    return clone;
//}

// 组合继承
// function Child (name, age) {
//    Parent.call(this);
//}
//Child.prototype = new Parent();

// 原型链继承
// function Child () {}

// Child.prototype = new Parent();
// 原型式继承
// function createObj(o) {
//     function F(){}
//     F.prototype = o;
//     return new F();
// }
// Child = creatObj(Parent)
// 寄生组合继承
//function object(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }
// function prototype(child, parent) {
//     var prototype = object(parent.prototype);
//     prototype.constructor = child;
//     child.prototype = prototype;
// }
// 当我们使用的时候：
// prototype(Child, Parent);
// 构造函数继承
// function Child () {
//     Parent.call(this);
// }


// 快排
// let arr = [2,2,4,1,5,7,2,7,9,2,5,8,4,7];

// let quickSort = function(arr){
//     if(arr.length<2) return arr
//     let middle = Math.floor(arr.length/2);
    
//     let fn = function(index,start,end){
//         let newI = index,
//             newS = start,
//             newE = end;
//         if(end-start==1) return

//         while(start<end){
//             if(arr[start]>arr[index]){
//                 [arr[start],arr[index]]=[arr[index],arr[start]];
//             } else{
//                 start++
//             }
//             if(arr[end]<arr[index]){
//                 [arr[end],arr[index]]=[arr[index],arr[end]];
//             } else{
//                 end--
//             }
//         }

//         fn(Math.floor((newI+newS)/2),newS,newI);
//         fn(Math.floor((newI+newE)/2),newI,newE);
//     }

//     fn(middle,0,arr.length-1);

//     return arr
// }

// console.log(quickSort(arr));

// let bigNumberAdd = function(num1,num2){
//     let res = '',
//         s1 = '',
//         s2 = '',
//         temp = 0;
//     if(num1==0) return num2;
//     if(num2==0) return num1;
//     num1 = num1+'';
//     num2 = num2+'';

//     s1 = num1.length-1;
//     s2 = num2.length-1;

//     while(s1>=0||s2>=0){
//         let a1 = parseInt(num1[s1])||0,
//             a2 = parseInt(num2[s2])||0;

//         res = res+(temp+a1+a2)%10;
//         temp = Math.floor((a1+a2)/10)
//         s1--;
//         s2--;
//     }
//     res = +(res+"").split('').reverse().join('')
//     return res;
// }

// console.log(bigNumberAdd(1234,109))


// const deepCopy = function(obj){
//     let newObj = {};
//     if(obj.__proto__.constructor !=="Object") return
//     for(let k in obj){
//         if(obj.hasOwnProperty(k)){
//             newObj[k] = obj[k];
//         }
//     }
//     console.log(newObj)
//     return newObj;
// }

// let a = {
//     a:1,
//     b:2
// }
// console.log(a.__proto__.constructor.prototype.s  = 0)

// deepCopy(a)


// const newFlat = function(arr){
//     let resArr = [];
    
//     let fn = function(ARR){
//         ARR.forEach((k)=>{
//             if(Array.isArray(k)){
//                 fn(k);
//             } else{
//                 resArr.push(k)
//             }

//         });
//     }
//     fn(arr)

//     console.log(resArr);
//     return resArr
// }


// newFlat([1,2,3,4,[3,4,5,[6,6,7]]])

// const throttle = function(fn,time){
//     let timer = null;
    
//     return function(){
//         if(timer) return;
//         timer = true;
//         let fn1 = ()=>{
//             fn();
//             timer = false;
//         }
//         setTimeout(fn1,time);
//     }
// }
// let a = function(){
//     console.log(1)
// }

// setInterval(throttle(a,5000),0)

// const debounce = function(fn,time){
//     let timer = null;
//     return function(){
//         if(timer){
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(fn,time);
//     }
// }

// const a = function(){
//     console.log(1)
// }
// setInterval(debounce(a,500),1000)


// function debounce(fn, wait) {
//     var timer = null;
//     return function () {
//         var context = this
//         var args = arguments
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(function () {
//             fn.apply(context, args)
//         }, wait)
//     }
//   }
  
//   var fn = function () {
//     console.log('boom')
//   }
  
//   setInterval(debounce(fn,500),1000) 
  
// const myNew = function(){
//     let obj = {};
//     let [constructor,...arg] = [...agruments];
//     obj.__proto__ = constructor.prototype;
//     let res = constructor.apply(obj,agr);
//     if(typeof res == 'object'&&res){
//         return res
//     }
//     return obj;
// }

// Function.prototype.myCall = function(){
//     let fn = this;
//     let [context,...arg] = [...arguments];
//     context.fn = fn;
//     let res = context.fn(...arg);
//     delete context.fn;
//     return res;
// }

// Function.prototype.myApply = function(){
//     let fn = this;
//     let [context,arr] = [...arguments];
//     context.fn = fn;
//     let res = null;
//     if(!arr){
//        res  = context.fn()
//     } else{
//         res  = context.fn(...arr)
//     }
//     delete context.fn;
//     return res;
// }

// function curry(fn,...arg){
//     if(fn.length>arg.length){
//         return (...newAgr)=>curry(fn,...arg,...newAgr);
//     } else{
//         return fn(...arg)
//     }
// }
// let add = function(a,b,c,d){
//     return a+b+c+d;
// }

// let a = curry(add)

// console.log(a(1)(2,4)(3))


// const JSONP = function(res){
//     let script = document.createElement('script');
//     var url = req.url + '?callback=' + req.callback.name;
//     script.src = url;
//     document.getElementsByTagName('head')[0].appendChild(script); 
// }

// function hello(res){
//     alert('hello ' + res.data);
// }
// jsonp({
//     url : '',
//     callback : hello 
// });

// const ajax = function(){

// }

// function ajax() {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('get', 'http://localhost:8080/readNum');
    //     xhr.send();
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4) {
    //             console.log('success', xhr.responseText);
    //         } else {
    //             console.log('error', xhr.responseText);
    //         }
    //     }
// }

// // 继承方式
// function parent() {
    
// }

// function child() {
    
// }
// // 原型链继承
// child.prototype = new parent();

// // 构造函数继承
// function child(){
//     parent.call(this);
// }
// // 组合继承

// function child(){
//     parent.call(this);
// }

// child.prototype = new parent()
// // 原型式继承

// child = Object.create(parent);

// // Object.create()原理

// const object = function(fn){
//     let F = function(){}
//     F.prototype = fn;
//     return new F;
// }

// // 寄生式继承

// const Fn = function(fn){
//     let clone = Object.create(fn);
//     return clone;
// }

// child = Fn(parent);

// // 寄生组合式

// function prototype(child, parent) {
//     var prototype = Object.create(parent.prototype);
//     prototype.constructor = child;
//     child.prototype = prototype;
// }

// const quicksort = function(arr){
//     const fn = function(start,end){
//         if(end-start==1) return
//         let mid = Math.floor((start+end)/2);
//         let newS = start, newE = end;
//         while(start<end){
//             if(arr[start]>arr[mid]){
//                 [arr[start],arr[mid]] = [arr[mid],arr[start]]
//             }
//             start++
//             if(arr[end]<arr[mid]){
//                 [arr[end],arr[mid]] = [arr[mid],arr[end]];
//             }
//             end--
//         }
//         fn(newS,mid);
//         fn(mid,newE);
//     }

//     fn(0,arr.length-1)
//     return arr
// }

// console.log(quicksort([1,4,2,6,7,3,8,3,10]))


// 并归排序

// const mergeSort = function(arr){
//     if(arr.length<2) return arr;
//     let mid = Math.floor(arr.length/2),
//         left = arr.splice(0,mid),
//         right = arr;
//     const merge = function(L,R){
//         let res = [];
//         while(L.length&&R.length){
//             if(L[0]>R[0]){
//                 res.push(R.shift())
//             } else{
//                 res.push(L.shift())
//             }
//         }
//         while(L.length){
//             res.push(L.shift())
//         }
//         while(R.length){
//             res.push(R.shift())
//         }
//         return res;
//     }

//     return merge(mergeSort(left),mergeSort(right))
// }

// console.log(mergeSort([1,4,2,6,7,3,8,3,10]))


// const curry = function(fn,...agr){
//     if(agr.length<fn.length){
//         return (...newA)=>curry(fn,...agr,...newA)
//     } else{
//         return fn(...agr)
//     }
// }

// let fn = function(x,y,z){
//     return x+y+z;
// }
// let a = curry(fn)
// console.log(a(1)(2,3))

// var re = /\w+\s/g;
// var str = "fee fi fo fum";
// var myArray = str.match(re);
// console.log(myArray);

//line=readline()
//print(line)

// function func1(cb){ 
//     setTimeout(function(){
//       console.log(1);
//       cb();
//     }, 400)   
//   }  
  
//   function func2(cb){
//     setTimeout(function(){
//       console.log(2)
//       cb();
//     }, 300)
//   }
  
//   function func3(cb){
   
//     setTimeout(function(){
//       console.log(3)
//       cb();
//     }, 10)   
//   }

//   async await 实现
// function queue(list, count){

//     if(list.length<1) return
    
//     const cb = async function(){
//         await queue(list,count)
//     }

//     let arr = [];
//     for(let i = 0; i < count; i++) {
//         if(!list.length) break;
//         arr.push(list.shift())
//      }
//     for(let i = 0; i < arr.length; i++) {
//         arr[i](cb)
//     }
//   }
  
// promise实现
// function queue(list, count){
//   let arr = [];
//   for(let i = 0; i < count; i++) {
//     if(!list.length) break;
//       arr.push(list.shift())
//     }
//   for(let i = 0; i < arr.length; i++) {
//     new Promise((resolve,reject)=>{
//         arr[i](resolve)
//     }).then(res=>queue(list,count))
//   }
// }

// function queue(list, count){
//   let arr = [];
//   let cb = function(){
//     queue(list,count)
//   };
//   for(let i = 0; i < count; i++) {
//     if(!list.length) break;
//       arr.push(list.shift())
//     }
//   for(let i = 0; i < arr.length; i++) {
//     arr[i](cb)
//   }
// }

// queue([func1, func2, func3], 2)

  // 输出 2, 1, 3

  //二进制加减
// const fn = function(s1,s2){
//     let pre = s1.length -1,
//         next = s2.length-1,
//         temp = 0,
//         res = '';
//     while(pre>=0||next>=0){
//         let c = s1[pre]||0,
//             d = s2[next]||0;

//           c = +c;
//           d = +d;

//           res = ((temp + c + d)%2).toString()+res;
//           temp = Math.floor((temp + c + d)/2);
          
//           if(pre>=0) pre--;
//           if(next>=0) next--;
//     }
//     if(temp) res = (temp).toString()+res;
//     console.log(res);
//     return res;
// }

// fn('010','110')





//从一个整数数组中，找出连续递增的最长序列。

// function findCont(arr){

//       let Offset = 0, /*序列的开始位置*/
//           Count = 1;/*序列长度*/
//      let templen = 1,
//          tempstart = 0;

//       for(let i = 0; i < arr.length-1;i++){
//           if(arr[i]+1==arr[i+1]){
//             templen++
//           }else{
//             if(Count<templen){
//                 Count = templen;
//                 Offset = tempstart;
//             }
//             templen = 1,
//             tempstart = i+1;
//           }
//       }
//       if(Count<templen){
//         Count = templen;
//         Offset = tempstart;
//       }
//       return {offset : Offset, count: Count};
// }
// console.log(findCont([1,2,3,1,2,3,4]))
// 在二叉排序树{value:Number, left:Object, right:Object}
//上面找出第3大的节点。注意：不能把二叉树全量存储到另外的存储空间，
//比如存储到数组中，然后取出数组的第三个元素。

// function find(root){

//     let pre = root,
//         next = null,
//         num1 = 0,
//         num2 = 0;
//     const fn = function(node){
//         if(node.left) fn(node.left);
//         next = node;
//         num1++;
//         if(num1==3) fn(pre);
//         if(node.right) fn(node.right);
//     }

//     const fn1 = function(node){
//         if(node.left) fn(node.left);
//         pre = node;
//         num2++;
//         if(node.right) fn(node.right);
//     }
//     fn(root)
//     return pre;
// }

//设定如下的对应关系(A=1,B=2,C=3,...,Z=26,AA=27,AB=28,....AZ=, BA=, .....AAA=, ...)，
//编写一个转换函数，根据上面的规则把一个字符串: "WECHAT" 转换为数字

// function StrToInt(str){
//     let num = 0,
//         len = str.length;

//     for(let i = 0; i < len; i++){
//         num = num + (str[i].charCodeAt()-64)*Math.pow(26,len-i-1);
//     }
//     return num;
// }
// console.log(StrToInt('AA'))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// const findNSum = function (nums, target,n) {
//   const fn = function (nums, target, N, result, results) {
//     // 结束条件
//     if (nums.length<N || target < nums[0]*N || target > nums[nums.length-1]*N) return;

//     if (N === 2){
//       let left = 0,
//           right = nums.length - 1;
//       while (left < right) {
//           let s = nums[left] + nums[right];
//         if (s === target) {
//           //返回结果
//           results.push([...result,nums[left],nums[right]]);
//           //去重
//           while (left < right && nums[left] === nums[left+1]) left++;
//           while (left < right && nums[right] === nums[right-1]) right++;
//           // 继续找其他结果
//           left++;
//           right--;
//         } else if (s < target) {
//           left++;
//         } else {
//           right--;
//         }
//       }
//     } else {
//       for(let i = 0; i < nums.length - N + 1; i++) {
//         if (i === 0 || (i > 0 && nums[i-1] !== nums[i])){
//           // 先定其中一个值，再求值
//           fn(nums.slice(i + 1), target - nums[i], N-1, [...result,...[nums[i]]], results);
//         }
//       }
//     }
//   };
//   let results = [];
  
//   nums.sort((a,b)=>a-b);

//   fn(nums, target, n, [], results);

//   return results;
// };


// console.log(findNSum([-2, -1, -1, 1, 1, 2, 2], 0, 4));

// const fn = function(n,k,L,R){
//   let res = 0,
//       low = '',
//       high = '';
//    while(n){
//      n--;
//      low = low+`${L}`;
//      high = high+`${R}`;
//    }
//    if(k==1) {
//      console.log(high-low);
//      return
//    }
//    for(let i = low; i <= high; i++){
//       if(i%k==0) res++
//    }
//    return res
// }

// fn(9,1,1,3)

// const fn = function(x,k,arr){
//   let res = 0,
//       temp = 1,
//       tempI = 0,
//       resI = 0;
//   let Arr = arr.map((key)=>{
//     if((k|key)!==key){
//       return k|key;
//     } else{
//       return null
//     }
//   });

//   arr = [...arr,...Arr];
//   arr.sort((a,b)=>a-b);
  
//   for(let i = 0; i < arr.length-1; i++){
//     if(arr[i]==null) continue;

//     if(arr[i]==arr[i+1]){
//       temp++
//     } else{
//       if(temp>res){
//         res = temp;
//         resI = tempI;
//       }
//       tempI = i+1;
//       temp = 1;
//     }
//   }

//   if(temp>res){
//     res = temp;
//     resI = tempI;
//   }

//   return res
// }
// fn(5,2,[3,1,3,2,5])

// const fn = function(n,arr1,arr2){
//    let resArr = [],
//       res = 1;
//    for(let i = 0; i < n; i++){
//      resArr.push(0);
//    }

//    for(let i = 0; i < n; i++){
//     if(arr1[i]=='.') resArr[i]++
//     if(arr2[i]=='.') resArr[i]++
//    }

//    if(resArr.includes(0)){
//       print(-1)
//       return;
//    }
   
//    for(let i = 0; i < n; i++){
//       res = res*resArr[i]
//    }
//    print(res);
// }

// fn(5,['.','.','X','.','X'],['X','X','.','.','.'])

// function flatten(obj) {
//   /* 代码实现 */
//   let res = {};
//   for(let k in obj){
//     if(obj.hasOwnProperty(k)){
//       if((obj[k] instanceof Object)){
//         if(JSON.stringify(obj[k])!=='{}') res[k] = flatten(obj[k])
//       } else{
//         res[k] = obj[k]
//       }
//     }
//   }
//   return res;
// }

// console.log(flatten({a: 1,b:{c:{}, d: 2 }}))

// function isSorted(arr) {
//   /* 代码实现 */
//   let res = 0,
//       temp1 = [...arr],
//       temp2 = [...arr];
//       temp1.sort((a,b)=>a-b);
//       temp2.sort((a,b)=>b-a);
//       arr = arr.join('');
//       if(arr==temp1.join('')) return 1;

//       if(arr==temp2.join('')) return -1

//   return res;
// }

// console.log(isSorted([0, 1, 2, 2])); // 1
// console.log(isSorted([4, 3, 2])); // -1
// console.log(isSorted([4, 3, 5])); // 0

// const add = x => x + 1;
// const multiply = (x, y) => x * y;
// const multiplyAdd = composeFunctions(multiply, add);

// console.log(multiplyAdd)

// function composeFunctions(...fns) {
//   let len = fns.length -1;
//    if(len > 0){
//      let fn1 = fns.pop();
//       return fn1(composeFunctions(...fns),...arguments);
//    } else{
//      return (...agruments) => fns[0](...agruments)
//    }
// }

// const Str = (len,s)=>{
//     let res = '';

//     for(let i = 0; i < len; i++){
//         res=res+s
//     }
//     return res
// }

// let decodeString = (str)=>{
//     let left = [],
//         right = 0,
//         num = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i]=='[') left.push(i);
//     }

//     for(let j = 0; j < left.length; j++){
//         right = 0;
//         while(str[right]!==']'){
//             right++;
//             if(str[right]==']') break
//         }
//         str = str.slice(0,left[j]-1) + Str(str[left[j]-1],str.slice(left[j]+1,right)) + str.slice(right+1);
//     }
//     console.log(str)
//     return str
// }
// const s = '2[abc]3[cd]ef'; 

// decodeString(s)