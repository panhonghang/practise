// /**
//  * @param {string} s
//  * @return {number}
//  * 647. 回文子串
//  */
// // var countSubstrings = function(s) {
// //     let len = s.length,
// //         res = 0;
// //     if(len == 0) return 0;
// //     for(let i = 0; i < len; i++){
// //         for(let j = i + 1; j <= len; j++){
// //            if(s.substring(i,j) == s.substring(i,j).split('').reverse().join('')) res++
// //         }
// //     }

// //     return res;
// // };

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  * 977. 有序数组的平方
//  */
// // var sortedSquares = function(A) {
// //     return A.map(key=>key*key).sort((a,b)=>a-b);
// // };
// // 双指针 效率没有快排高
// // var sortedSquares = function(A) {
// //    let result = [],
// //         lastnumber = 0,
// //         i = 0, 
// //         j = A.length -1,
// //         leftnumber = Math.pow(A[i], 2),
// //         rightnumber = Math.pow(A[j], 2);

// //     while(i <= j) {
// //       if (leftnumber > rightnumber) {
// //          result.unshift(leftnumber);
// //          i++;
// //          leftnumber = Math.pow(A[i], 2);
// //       }else{
// //         result.unshift(rightnumber);
// //         j--;
// //         rightnumber = Math.pow(A[j], 2);
// //       }
// //     }
    
// //     return result;
// // };

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  * 18. 四数之和
//  */
// // var fourSum = function(nums, target) {
// //     let outleft,
// //         outright,
// //         m,
// //         n,
// //         len = nums.length -1,
// //         resArr = [];
    
// //     nums = nums.sort((a,b)=>a-b);

// //     for(let i = 0; i <= len - 3; i++){
        
// //         if(nums[i] == nums[i-1]) continue;
// //         outleft = nums[i];

// //         for(let j = len; j >= i + 2; j--){
// //             if(nums[j] == nums[j+1]) continue;
// //             outright = nums[j];
// //             n = j - 1;
// //             m = i + 1;

// //             while(m < n){
// //                 let temp = nums[m] + nums[n] + outleft + outright;
// //                 if(temp == target){
// //                     resArr.push([outleft,nums[m], nums[n], outright]);
// //                     m++;
// //                     n--;
// //                     while(m < n&&nums[m-1] == nums[m]) {m++};
// //                     while(m < n&&nums[n+1] == nums[n]) {n--};
// //                 } else if(temp < target) {
// //                     m++;
// //                 } else {
// //                     n--;
// //                 }
// //             }
// //         }
// //     }

// //     return resArr;
// // };

// // fourSum([-3,-1,0,2,4,5],2)

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {number}
//  * 72. 编辑距离
//  */
// // var minDistance = function(word1, word2) {
// //     let len1 = word1.length,
// //         len2 = word2.length,
// //         dp = new Array(len1 + 1).fill(0).map(()=>new Array(len2 + 1).fill(0));
// //     for(let i = 0; i <= len1; i++) dp[i][0] = i;
// //     for(let i = 0; i <= len2; i++) dp[0][i] = i;
// //     for(let i = 1; i <= len1; i++){
// //         for(let j = 1; j <= len2; j++){
// //             dp[i][j] = (word1[i-1] !== word2[j-1])?Math.min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1]) + 1:dp[i-1][j-1];
// //         }
// //     }
// //     return dp[len1][len2]
// // };

// // // 更优解法
// // var minDistance = function (word1, word2) {
// // 	let m = word1.length
// // 	let n = word2.length
// // 	let dp = []
// // 	for (let i = 0; i <= m; i++) {
// // 		dp.push([])
// // 		for (let j = 0; j <= n; j++) {
// // 			if (i * j) {
// // 				dp[i][j] = word1[i - 1] === word2[j - 1]
// // 					? dp[i - 1][j - 1]
// // 					: 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
// // 			} else {
// // 				dp[i][j] = i + j
// // 			}
// // 		}
// // 	}
// // 	return dp[m][n]
// // };



// /**
//  * @param {number} n
//  * @return {string[][]}
//  * 八皇后问题 对角线约束法
//  */
// // var solveNQueens = function (n) {
// //     const result = [];
// //     const dfs = ( subResult = [], row = 0) => {
// //         if (row === n) {
// //             result.push(subResult.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
// //             return;
// //         }
// //         for (let col = 0; col < n; col++) {
// //             if (!subResult.some((j, k) => j === col || j - col === row - k || j - col === k - row)) {
// //                 subResult.push(col);
// //                 dfs( subResult, row + 1);
// //                 subResult.pop();
// //             }
// //         }
// //     }
// //     dfs();
// //     return result;
// // };


// /**
//  * @param {number} n
//  * @return {string[][]}
//  * 八皇后问题 回溯法
//  */
// // var solveNQueens = function(n) {
// //     let result = new Array(n);
// //     let results = [];
// //     let dfs = (row,column) => {
// //         let leftColumn =  column-1;
// //         let rightColumn = column+1;
// //         for(let i = row - 1;i >= 0;i--){
// //             if(result[i] == column){
// //                 return false;
// //             }
// //             if(leftColumn >= 0 && result[i] == leftColumn){
// //                 return false;
// //             }
// //             if(rightColumn < n && result[i] == rightColumn){
// //                 return false;
// //             }
// //             leftColumn--;
// //             rightColumn++;
// //         }
// //         return true;
// //     }
// //     let Nqueens = (row) => {
// //         if(row == n){
// //             results.push(result.map(c=>'.'.repeat(c)+'Q'+'.'.repeat(n-1-c)));
// //             return;
// //         }
// //         for(let j = 0;j < n;j++){
// //             if(dfs(row,j)){
// //                 result[row] = j;
// //                 Nqueens(row+1)
// //             }
// //         }
// //     }
// //     Nqueens(0);
// //     return results;
// // };


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /* 模拟面试题目*/
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /**
//  * @param {number} n
//  * @return {boolean}
//  * 快乐数
//  */
// //不快乐数最后都会为4
// // var isHappy = function(n) {
// //     while (n != 1 && n != 4) {
// //         n = (n + '').split('').reduce((sum, dist) => sum + dist ** 2, 0);
// //     }
// //     return n == 1;
// // };

// // 使用set效率最高
// // var isHappy = function(n) {
// //     let set = new Set();
// //     while (n !== 1) {
// //       n = (n + '').split('').reduce((sum, dist) => sum + dist ** 2, 0);
// //       if (set.has(n)) {
// //         return false;
// //       } else {
// //         set.add(n);
// //       }
// //     }
// //     return true;
// //   };

//   /**
//  * @param {number} a
//  * @param {number} b
//  * @return {number}
//  *   两整数之和
//  */
// // var getSum = function(a, b) {
// //     while (b !== 0) {
// //         let temp = a ^ b;
// //         b = (a & b) << 1;
// //         a = temp;
// //     }
// //     return a;
// // };

// /**
//  * @param {number} n
//  * @return {string[]}
//  * Fizz Buzz
//  */
// // var fizzBuzz = function(n) {
// //     let arr = [];
   
// //     for(let i = 1; i <= n; i++){
// //         if(i < 3) temp = ''+i;
// //         if(i%3==0){
// //             if(i%5==0) temp = 'FizzBuzz';
// //             temp = 'Fizz'
// //         }

// //         if(i%5==0) temp = 'Buzz';
// //         arr.push(temp);
// //     }
// // }
    
// //     return arr;
// // };

// /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */

// /*
//     我们首先要知道能走完整个环的前提是gas的总量要大于cost的总量，这样才会有起点的存在。
//     假设开始设置起点start = 0, 并从这里出发，如果当前的gas值大于cost值，就可以继续前进。
//     此时到下一个站点，剩余的gas加上当前的gas再减去cost，看是否大于0，若大于0，则继续前进。
//     当到达某一站点时，若这个值小于0了，则说明从起点到这个点中间的任何一个点都不能作为起点，
//     则把起点设为下一个点，继续遍历。当遍历完整个环时，当前保存的起点即为所求。
//  */
// // var canCompleteCircuit = function(gas, cost) {
// //     let sum = 0,
// //         start = 0;
    
// //     if(gas.reduce((i,j) => i+j,0) < cost.reduce((i,j) => i+j,0)) return -1;

// //     for(let i = 0; i < gas.length; i++){
// //         sum += gas[j] - cost[j];
// //         if (sum < 0) {
// //             start = i + 1;
// //             sum = 0;
// //         }
// //     }

// //     return start;
// // };

// /**
//  * @param {number} capacity
//  */
// // var LRUCache = function(capacity) {
// //     this.cache = new Map();
// //     this.capacity = capacity;
// // };

// /** 
//  * @param {number} key
//  * @return {number}
//  */

// // LRUCache.prototype.get = function(key) {
// //     let cache = this.cache;
// //     if (cache.has(key)) {
// //         let temp = cache.get(key)
// //         cache.delete(key);
// //         cache.set(key, temp);
// //         return temp;
// //     } else {
// //         return -1;
// //     }
// // };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */

// // LRUCache.prototype.put = function(key, value) {
// //     let cache = this.cache;
// //     if (cache.has(key)) {
// //         cache.delete(key);
// //     } else if (cache.size >= this.capacity) {
// //         cache.delete(cache.keys().next().value);
// //     }
// //     cache.set(key, value);
// // };

// /** 
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 1262. 可被三整除的最大和
//  */

// //  最优法
// // var maxSumDivThree = function(nums) {
// //     let dp = [0,0,0],
// //         sum = nums.reduce((a,b)=>a+b,0),
// //         len1 = nums.length;

// //     if(sum%3==0) return sum;

// //     for(let i = 0; i < len1; i++){
// //         let mod = nums[i] % 3;
// //         let a = dp[(3 + 0 - mod) % 3];
// //         let b = dp[(3 + 1 - mod) % 3];
// //         let c = dp[(3 + 2 - mod) % 3];
// //         if (a!=0 || mod == 0) dp[0] = Math.max(dp[0], a + nums[i]);
// //         if (b!=0 || mod == 1) dp[1] = Math.max(dp[1], b + nums[i]);
// //         if (c!=0 || mod == 2) dp[2] = Math.max(dp[2], c + nums[i]);
// //     }

// //     return dp[0];
// // };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 1262. 可被三整除的最大和
//  */

// //  暴力法
// // var maxSumDivThree = function(nums) {
// //     let dp = [[],[],[]],
// //          sum = nums.reduce((a,b)=>a+b,0),
// //          len1 = nums.length;
     
// //      nums = nums.sort((a,b)=>a-b);
 
// //      if(sum%3==0) return sum;
 
// //      for(let i = 0; i < len1; i++){
// //          if(nums[i]%3==0) dp[0].push(nums[i]);
// //          if(nums[i]%3==1) dp[1].push(nums[i]);
// //          if(nums[i]%3==2) dp[2].push(nums[i]);
// //      }
     
// //      if(sum%3==1) {
// //          if(dp[1].length >= 1){
// //              if(dp[2].length >=2) {
// //                 return sum - Math.min(dp[1][0],dp[2][0]+dp[2][1]);
// //              } else {
// //                 return sum - dp[1][0]
// //              }
// //          } else {
// //             return sum - (dp[2][0]+dp[2][1]);
// //          }
// //      }

// //      if(sum%3==2) {
// //         if(dp[2].length >= 1){
// //             if(dp[1].length >=2) {
// //                return sum - Math.min(dp[2][0],dp[1][0]+dp[1][1]);
// //             } else {
// //                return sum - dp[2][0]
// //             }
// //         } else {
// //            return sum - (dp[1][0]+dp[1][1]);
// //         }
// //      }
// //  };

//  /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  * 19. 删除链表的倒数第N个节点
//  */
// // var removeNthFromEnd = function(head, n) {
// //     let num = n,
// //         next = head,
// //         pre = head;
// //     if(!head.next) return null
// //     while(n>0){
// //         next = next.next;
// //         n--;
// //     }

// //     while(next){
// //         if(!pre.next.next) {
// //             pre.next = null;
// //             return head;
// //         }
// //         next = next.next;
// //         pre = pre.next;
// //         if(!pre.next.next) {
// //             pre.next = null;
// //             return head;
// //         }
// //     }
// //     pre.val = pre.next.val;
// //     pre.next = pre.next.next;
// //     return head;
// // };

// /**
//  * @param {number} K
//  * @param {number} N
//  * @return {number}
//  * 887. 鸡蛋掉落
//  */
// // var superEggDrop = function(K, N) {
// //     let dp = new Array(K+1).fill(0).map(()=>new Array(N+1).fill(0));
// //     if(K==1) return N;
// //     if(N==1) return 1;

// //     for(let i = 1; i <= N; i++) {
// //         dp[0][i] = 0;
// //         for(let j = 1; j <=K; j++) {
// //             dp[j][i] = dp[j][i-1] + dp[j-1][i-1]+1;
// //             if (dp[j][i] >= N) {
// //                 return i;
// //             }
// //         }
// //     }
// // };

// // superEggDrop(2,3);

// // let xhr = new XMLHttpRequest();
// // xhr.open('get','https://www.baidu.com/');

// // xhr.onreadystatechange = ()=>{
// //     console.log('ss')
// //     if(xhr.readyState===4){
// //         console.log('ss')
// //         if(xhr.status>=200&& xhr.status < 300){
// //             console.log('aaa',xhr.responseText)
// //         }
// //     }
// // }
// // // 超时时间单位为毫秒
// // xhr.timeout = 100000

// // // 当请求超时时，会触发 ontimeout 方法
// // xhr.ontimeout = () => console.log('请求超时')

// // xhr.send()


// // 实现观察者模式
// /* Pubsub */
// // function Pubsub(){
// //     //存放事件和对应的处理方法
// //    this.handles = {};
// // }

// // Pubsub.prototype = {
// //     //传入事件类型type和事件处理handle
// //     on: function (type, handle) {
// //         if(!this.handles[type]){
// //             this.handles[type] = [];
// //         }
// //         this.handles[type].push(handle);
// //     },

// //     emit: function () {
// //         //通过传入参数获取事件类型
// //        var type = Array.prototype.shift.call(arguments);
// //         if(!this.handles[type]){
// //             return false;
// //         }
// //         for (var i = 0; i < this.handles[type].length; i++) {
// //             var handle = this.handles[type][i];
// //             //执行事件
// //            handle.apply(this, arguments);
// //         }
// //     },
// //     off: function (type, handle) {
// //         handles = this.handles[type];
// //         if(handles){
// //             if(!handle){
// //                 handles.length = 0;//清空数组
// //            } else {
// //                 for (var i = 0; i < handles.length; i++) {
// //                     var _handle = handles[i];
// //                     if(_handle === handle){
// //                         handles.splice(i,1);
// //                     }
// //                 }
// //             }
// //         }
// //     }
// // }

// /**
//  * @param {number} buckets
//  * @param {number} minutesToDie
//  * @param {number} minutesToTest
//  * @return {number}
//  * 458. 可怜的小猪
//  */
// // var poorPigs = function(buckets, minutesToDie, minutesToTest) {
// //     if(buckets==1) return 0;
// //     let times = Math.floor(minutesToTest/minutesToDie) + 1,
// //         temp = 1,
// //         number = 0;
// //     while(temp <= buckets){
// //         number++;
// //         temp = temp*times;
// //     }
// //     return number;
// // };

// // poorPigs(1000,15,60);

// /**
//  * @param {number[][]} board
//  * @return {void} Do not return anything, modify board in-place instead.
//  */

// // var gameOfLife = function(board) {
// //   if(board.length==0) return [];

// //   let width = board.length,
// //       height = board[0].length,
// //       count = 0,
// //       resArr = JSON.parse(JSON.stringify(board));

// //   for(let i = 0; i < width; i++){
// //     for(let j = 0; j < height; j++){
// //       // 计数重置
// //       count = 0;
// //       // 上、下、左、右、上左、上右、下左、下右
// //       if(j>0)  count += resArr[i][j-1]       
// //       if(j + 1 < height) count += resArr[i][j+1]
// //       if(i>0)  count += resArr[i-1][j]
// //       if(i+1 < width)  count += resArr[i+1][j]
// //       if(i>0&&j>0)  count += resArr[i-1][j-1]
// //       if(i+1<width&&j>0)  count += resArr[i+1][j-1]
// //       if(i>0&j+1<height)  count += resArr[i-1][j+1]
// //       if(i+1<width&&j+1<height)  count += resArr[i+1][j+1]

// //       //live
// //       if(resArr[i][j] == 1){
// //         if(count > 3 || count < 2) board[i][j] = 0;
// //       } else {
// //         // dead
// //         if(count == 3) board[i][j] = 1;
// //       }
// //     }
// //   }
// // };

// // console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))

// /**
//  * @param {string} str
//  * @return {string}
//  * 709. 转换成小写字母
//  */
// // var toLowerCase = function(str) {
// //   return str.toLocaleLowerCase();
// // };

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
//  * 24. 两两交换链表中的节点
//  */
// // var swapPairs = function(head) {
// //   let pre = new ListNode(0);
   
// //   pre.next = head;

// //   let temp = pre;

// //   while(temp.next != null && temp.next.next != null) {
       
// //       let start = temp.next,
// //           end = temp.next.next;

// //       temp.next = end;
// //       start.next = end.next;
       
// //       end.next = start;
// //       temp = start;
// //   }
// //   return pre.next;
// // };

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  * 27. 移除元素
//  */
// // var removeElement = function(nums, val) {
// //   let i = 0;

// //   for(let num of nums){
// //     if(num!==val){
// //       nums[i] = num;
// //       i++
// //     }
// //   }

// //   return i;
// // };


// /**
//  * @param  {any[]} arr
//  * @return {any[]} 
//  * @description 数组扁平化
//  */

// // var flat = function(arr){
// //   let resArr = [];

// //   let fn = function(Arr){
// //     if(Array.isArray(Arr)){
// //       Arr.forEach(key=>fn(key))
// //     } else {
// //       resArr.push(Arr);
// //     }
// //   }

// //   fn(arr);
// //   return resArr;
// // }

// // console.log(flat([1,[2,3,[2]]]))
// /**
//  * 实现new操作
//  */
// let newfn = function(){
//     let resObj = {},
//         arg = [...arguments],
//         fn = arg.shift();
//     resObj._proto_ = fn.prototype;
//     fn.apply(resObj,arg);
//     return resObj;
// }

// function Student(name, age){
//   this.name = name;
//   this.age = age;
// }

// // let task1 = new Student('aa',11);
// let task1 = newfn(Student,'aa',11);

// console.log(task1)

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function(haystack, needle) {
//   if(needle.length==0) return 0;
//   return haystack.search(needle)
// };

// var strStr = function (haystack, needle) {
//   if (needle === "") return 0
//   for (var i = 0; i < haystack.length; i++) {
//       if (haystack[i] === needle[0]) {
//           if (haystack.substring(i, i + needle.length) === needle) return i;
//       }
//   }
//   return -1
// };

// /**
//  * @param {string} s
//  * @return {boolean}
//  * 125. 验证回文串
//  */
// var isPalindrome = function(s) {
//   s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
//   return s == s.split('').reverse().join('');
// };
// // 双指针法
// var isPalindrome = function(s) {
//   s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
//   let left = 0, right = s.length-1;
//   while(left < right){
//       if(s[left]!==s[right]) return false;
//       left++;
//       right--;
//   }
//   return true;
// };

// /* 节流函数 */

// let throttle = function(fn,timer){
//   let flag = true;
//   return function(){
//       if(!flag) return;
//       flag = false;
//       settimeout(()=>{
//           fn();
//           flag = true;
//       },timer)
//   }
// }

// /* 防抖函数 */

// let debounce = function (fn, delay) {
//   var flag; // 维护一个 flag
//   return function () {
//       if (flag) {
//           clearTimeout(flag);
//       }
//       flag = setTimeout(function () {
//           fn();
//       }, delay);
//   };
// }
// /**
//  * @param  {} con
//  * 实现apply函数
//  */
// Function.prototype.apply1 = function(context){
//     context.fn = this;
//     let list = [...arguments];
//     list.shift();
//     let result = context.fn(...list[0]);
//     delete context.fn;
//     return result;
// }

// /**
//  * @param  {} context
//  *  实现bind 
//  */
// Function.prototype.bind1 = function(context){
//   // this指向调用的函数
//   let fn = this;
  
//   let arg = [...arguments];
//   // 去掉第一个元素
//   arg.shift();

//   return function(){
//     // 利用apply来实现的
//       return fn.apply(context,arg)
//   }
// }

// /* 测试 */
// let a = function(name){
//   console.log(this.value);
//   console.log(name);
// }

// let b = {
//   value: 1,
// }

// let c = {
//   value: 3
// }

// let a2 = a.bind1(b,'aa')();


// /* JavaScript实现常见排序算法 */

// /* 
//   稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；
//   不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；
//   内排序：所有排序操作都在内存中完成；
//   外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；
//   时间复杂度: 一个算法执行所耗费的时间。
//   空间复杂度: 运行完一个程序所需内存的大小。
//   链接：https://user-gold-cdn.xitu.io/2016/11/29/4abde1748817d7f35f2bf8b6a058aa40?imageView2/0/w/1280/h/960/format/webp/ignore-error/1
//  */

// // 冒泡排序
// function bubbleSort(arr) {
//   let len = arr.length;
//   for(let i=0; i<len; i++) {
//       for(let j=0; j<len - 1 - i; j++) {
//           if(arr[j] > arr[j+1]) {
//               [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
//           }
//       }
//   }
//   return arr;
// }

// // 选择排序

// function selectionSort(arr) {
//   var len = arr.length;
//   var minIndex;
//   for (var i = 0; i < len - 1; i++) {
//       minIndex = i;
//       for (var j = i + 1; j < len; j++) {
//           if (arr[j] < arr[minIndex]) {     //寻找最小的数
//               minIndex = j;                 //将最小数的索引保存
//           }
//       }
//       [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//   }
//   return arr;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// /* 插入排序 */
// function insertionSort(arr) {
//   for (let i = 1, len = arr.length; i < len; i++) {
//     const temp = arr[i];
//     let preIndex = i - 1;

//     while (arr[preIndex] > temp) {
//       arr[preIndex + 1] = arr[preIndex];
//       preIndex -= 1;
//     }
//     arr[preIndex + 1] = temp;
//   }

//   return arr;
// }

// /* 快速排序 */

// var quickSort = function(arr) {
//   　　if (arr.length <= 1) { return arr }

//   　　var pivotIndex = Math.floor(arr.length / 2);
//   　　    pivot = arr.splice(pivotIndex, 1)[0],
//   　　    left = [],
//   　　    right = [];

//   　　for (let i = 0; i < arr.length; i++){
//   　　　　if (arr[i] < pivot) {
//   　　　　　　left.push(arr[i]);
//   　　　　} else {
//   　　　　　　right.push(arr[i]);
//   　　　　}
//   　　}

//   　　return quickSort(left).concat([pivot], quickSort(right));
//   };



// var array = [ {"id": 20102034, "name": "报表集团", "pid": 0}, {"id": 20102035, "name": "北京分公司", "pid": 20102034}, {"id": 20102038, "name": "海淀分店", "pid": 20102035}, {"id": 20102039, "name": "朝阳分店", "pid": 20102035}, {"id": 20102065, "name": "青岛分店", "pid": 20102036}, {"id": 20102036, "name": "山东分公司", "pid": 20102034}, {"id": 20102066, "name": "烟台分店", "pid": 20102036} ];

// let treefn = function(arr){
//   let len = arr.length,
//     resObj = {},
//     tempObj ;

//     resObj.children=[{}];

//     temp = resObj.children[0]

//     for(let i = 0; i < len; i++){
//       if(i!==0) temp = temp.children[0];
      
//       temp.id = arr[i].id;
//       temp.pid = arr[i].pid;
//       temp.name = arr[i].name;
//       temp.children = [{}]
//     }
//     console.log(resObj)
//     return resObj;
// }

// treefn(array)

/* 并归排序 */

function merge(left,right){
    var tmp=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            tmp.push(left.shift());
        }else{
            tmp.push(right.shift());
        }
    }
    return tmp.concat(left,right)
}

function mergeSort(arr){
    if(arr.length==1) return arr;
    var mid=Math.floor(a.length/2),
        left=arr.slice(0,mid);
        right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
}

/* 希尔排序 */
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    console.time('希尔排序耗时:');
    while(gap < len/5) {          //动态定义间隔序列
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/5)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    console.timeEnd('希尔排序耗时:');
    return arr;
}

/* 堆排序 */

// 交换两个节点
function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp; 
  }
  //顶堆
  function shiftDown(A, i, length) {
    let temp = A[i]; // 当前父节点
  // j<length 的目的是对结点 i 以下的结点全部做顺序调整
    for(let j = 2*i+1; j<length; j = 2*j+1) {
      temp = A[i];  // 将 A[i] 取出，整个过程相当于找到 A[i] 应处于的位置
      if(j+1 < length && A[j] < A[j+1]) { 
        j++;   // 找到两个孩子中较大的一个，再与父节点比较
      }
      if(temp < A[j]) {
        swap(A, i, j) // 如果父节点小于子节点:交换；否则跳出
        i = j;  // 交换后，temp 的下标变为 j
      } else {
        break;
      }
    }
  }
  
  // 堆排序
  function heapSort(A) {
    // 初始化大顶堆，从第一个非叶子结点开始
    for(let i = Math.floor(A.length/2-1); i>=0; i--) {
      shiftDown(A, i, A.length);
    }
    // 排序，每一次for循环找出一个当前最大值，数组长度减一
    for(let i = Math.floor(A.length-1); i>0; i--) {
      swap(A, 0, i); // 根节点与最后一个节点交换
      shiftDown(A, 0, i); 
    }
  }
  
  let Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
  heapSort(Arr);
  alert(Arr);

  /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 242. 有效的字母异位词
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let len = s.length,
        arr = s.split('');
    for(let i = 0; i < len; i++){
      if(!arr.includes(t[i])) return false;
      arr.splice(arr.indexOf(t[i]),1);
    }
    return true;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 75. 颜色分类
 */

var sortColors = function(nums) {
  let len  = nums.length,
      temp = 0;
  
  for(let i = 0; i < len; i++){
      temp = nums[i];
      if(temp==0){
        nums.splice(i,1);
        nums.unshift(temp);
      } else if(temp==2){
        let j = len;
        while(j>i&&nums[j]!==1){
            j--
        }
        [nums[i],nums[j]] = [nums[j],nums[i]]
      }
  }
  return nums
};

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 * 宝石与石头
 */
var numJewelsInStones = function(J, S) {
  let res = 0,
      len = S.length;
  for(let i = 0; i < len; i++){
      let re = new RegExp(S[i]);
      if(re.test(J)) res++;
  }
  return res
};

/**
 * @param {number[]} nums
 * @return {number}
 * 80. 删除排序数组中的重复项 II
 */
var removeDuplicates = function(nums) {
  let pre,middle,next;
      for(let i = 0; i < nums.length - 2; i++){
          pre = nums[i];
          middle = nums[i+1];
          next = nums[i+2];
          if(pre==middle&&middle==next){
              nums.splice(i+2,1);
              i--
          }
      }
  return nums.length;
};


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
 * 94. 二叉树的中序遍历
 */
var inorderTraversal = function(root) {
    let arr = [];

    let fn = function(node){
      if(node){
        fn(node.left);
        arr.push(node.val);
        fn(node.right)
      }
    }

    fn(root);

    return arr
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
 * @param {number} x
 * @return {ListNode}
 * 86. 分隔链表
 */

//  未保存初始位置
var partition = function(head, x) {
    let pre = next = head;
    while(next){
      if(next.val < x){
        pre.val = next.val;
        pre = pre.next;
      }
      next = next.next;
    }

    return head;
};
// 改进
var partition = function(head, x) {

  let node = head,
      less = lessHead = new ListNode(0), 
      more = moreHead = new ListNode(0);

  while(node){
    if(node.val < x){
      less.next = new ListNode(node.val);
      less = less.next;
    } else {
      more.next = new ListNode(node.val);
      more = more.next
    }
    node = node.next
  }

  lessHead = lessHead.next;
  moreHead = moreHead.next;
  if(!lessHead) return moreHead
  less.next = moreHead;

  return lessHead;
};