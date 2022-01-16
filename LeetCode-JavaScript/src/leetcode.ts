var shortestSubarray = function(A: number[], K:number):number {
    let len:number = Number.MAX_SAFE_INTEGER,
        sum:number = 0,
        pre:number = 0,
        next:number = 0;
    
    if(A[0] === K) return 1; 
  
    while(pre < A.length - 1) {
      if(A[pre] === K) return 1;
      next = pre;
      sum = 0;
  
      while(sum < K && next < A.length) {
        sum += A[next];
        if(sum <= 0) {
          pre = next;
          sum = 0;
        }
        if(sum < K) next++;
      }
      
      if( sum >= K ) {
          if(A[pre] > 0) len = Math.min(len, next - pre + 1);
          pre++
      } else {
          break;
      }
    }
  
    return len === Number.MAX_SAFE_INTEGER ? -1 : len;
};

class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
}

function postorderTraversal(root: TreeNode | null): number[] {
  if(!root) return [];
  
  let resArr:number[] = [];
  let queue = [ root ];

  while( queue.length ) {
      let node = queue.shift() || new TreeNode()
      if( node.left ) queue.unshift( node.left )
      if( node.right ) queue.unshift( node.right )
      resArr.unshift( node.val )
  }

  return resArr;
};

function insertIntoBST(root:TreeNode, val:number):TreeNode {
  if(!root) return new TreeNode(val);
  if(root.val > val && root.left) {
     root.left = insertIntoBST(root.left,val);
  } else {
      root.right = root.right && insertIntoBST(root.right,val);
  }
  return root;
};

function minimumOperations(leaves: string): number {
  var len:number = leaves.length;
  // 初始状态不可能为 2, 3，设置为 Infinity
  var dp:number[] = [leaves[0] === 'r' ? 0 : 1, Infinity, Infinity];

  for (var i = 1; i < len; i++) {
    var isRed = leaves[i] === 'r';
    dp = [
      dp[0] + (isRed ? 0 : 1),
      Math.min(dp[0], dp[1]) + (isRed ? 1 : 0),
      Math.min(dp[1], dp[2]) + (isRed ? 0 : 1),
    ];
  }

  return dp[2];
};

function numJewelsInStones(J: string, S: string): number {
  let res:number = 0,
      len:number = S.length;
  
  for(let i = 0; i < len; i++){
      let re = new RegExp(S[i]);
      if(re.test(J)) res++;
  }

  return res
};

function twoSum(nums: number[], target: number): number[] {
  let resArr:number[] = [];

  for(let i = 0; i < nums.length - 1; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          if(nums[i] + nums[j] === target) {
              resArr = [i, j];
              break;
          }
      }
  }

  return resArr;
};

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let temp:number = 0,
      pre:ListNode | null = l1,
      next:ListNode | null = l2,
      res:ListNode | null = new ListNode(),
      head:ListNode | null = res;

      if(pre === null && next === null) return null;
  
  while(pre || next) {
      res.val = ((pre && pre.val || 0) + (next && next.val || 0) + temp) % 10;
      temp = ((pre && pre.val || 0) + (next && next.val || 0) + temp) / 10;

      temp = Math.floor(temp);

      pre = pre && pre.next || null;
      next = next && next.next || null;

      if(pre === null && next === null) break;

      res.next = new ListNode();
      res = res.next;
  }

  if(temp !== 0) res.next = new ListNode(temp);
  
  return head
};

function fourSum(nums:number[], target:number):number[][] {
  
  nums.sort((a,b)=>a-b);

  let res:number[][] = [],
      left:number = 0,
      right:number = nums.length-1,
      sum:number = 0;

  for(let i = 0; i < nums.length-3; i++){
    while(nums[i]==nums[i-1]&&i!==0) i++;

    for(let j = i+1; j < nums.length-2; j++){
      while(nums[j]==nums[j-1]&&j!==i+1) j++;

      left = j+1;
      right = nums.length-1;
      
      while(left<right){
        sum = nums[i]+nums[j]+nums[left]+nums[right];
        if(sum==target){
          res.push([nums[i],nums[j],nums[left],nums[right]]);
          right--;
          left++;

          while(nums[right]==nums[right+1]) right--;
          while(nums[left]==nums[left-1]) left++;
        } else if(target<sum){
          right--;
        } else{
          left++;
        }
      }
    }
  }
  return res
};

const sumOfDistancesInTree = function(N:number, edges:number[][]):number[] {
  const graph:number[][] = new Array(N);
  for (let i = 0; i < graph.length; i++) graph[i] = [];

  for (const edge of edges) {
    const [from, to] = edge;
    graph[from].push(to);
    graph[to].push(from);
  }

  const distSum = new Array(N).fill(0);
  const nodeNum = new Array(N).fill(1);

  const postOrder = (root:number, parent:number) => {
    const neighbors = graph[root]; 
    for (const neighbor of neighbors) {
      if (neighbor == parent) continue;      
      postOrder(neighbor, root);
      nodeNum[root] += nodeNum[neighbor];
      distSum[root] += nodeNum[neighbor] + distSum[neighbor];
    }
  };

  const preOrder = (root:number, parent:number) => {
    const neighbors = graph[root];
    for (const neighbor of neighbors) {
      if (neighbor == parent) {
        continue;
      }
      distSum[neighbor] = distSum[root] - nodeNum[neighbor] + (N - nodeNum[neighbor]);
      preOrder(neighbor, root);
    }
  };

  postOrder(0, -1); 
  preOrder(0, -1);

  return distSum;
};

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void | number[] {
  let pre:number = 0,
      next:number = nums.length - 1;
  
  for(let i = 0; i <= next; i++) {
      if(nums[i] === 0) {
          [nums[i], nums[pre]] = [nums[pre], nums[i]];
          pre++;
      } else if(nums[i] === 2) {
          [nums[i], nums[next]] = [nums[next], nums[i]];
          next--;
          i--
      }
  }
  //测试使用
  return nums
};

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void | string[] {
  let pre:number = 0,
      next:number = s.length - 1;

  while(pre <= next) {
      [s[pre], s[next]] = [s[next], s[pre]];
      
      pre++;
      next--;
  }

  //测试使用
  return s
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
 * @return {boolean}
 */
function hasCycle (head:ListNode | null):boolean {
  if(!head) return false;

  let pre:ListNode | null= head,
      next:ListNode | null = head;

  while(next) {
      pre = pre && pre.next;
      next = next.next && next.next.next || null;
      
      if(next && next === pre) return true;
  }

  return false;
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  if(!head) return null;

  let pre:ListNode | null = head,
      next:ListNode | null = head;

  do {
      pre = pre && pre.next || null;
      next = next && next.next && next.next.next || null
  } while(next && pre !== next)

  if(next === null) return null;

  pre = head;

  while(true) {
      if(pre === next) return next;
      pre = pre && pre.next || null;
      next = next && next.next || null;
  }

};

function canPartition(nums: number[]): boolean {
  const n:number = nums.length;
  let sum:number = 0, 
      maxNum:number = 0;
  if (n < 2) return false;

  for (const num of nums) {
      sum += num;
      maxNum = maxNum > num ? maxNum : num;
  }

  if (sum & 1) return false;

  const target = Math.floor(sum / 2);

  if (maxNum > target) return false;

  const dp:boolean[][] = new Array(n).fill(false).map(v => new Array(target + 1).fill(false));

  for (let i = 0; i < n; i++) {
      dp[i][0] = true;
  }

  dp[0][nums[0]] = true;
  for (let i = 1; i < n; i++) {
      const num = nums[i];
      for (let j = 1; j <= target; j++) {
          if (j >= num) {
              dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
          } else {
              dp[i][j] = dp[i - 1][j];
          }
      }
  }
  return dp[n - 1][target];
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
  let arr:number[] = [],
      min:number = Number.MAX_SAFE_INTEGER;
  if(!root) return 0;

  const fn = function(node:TreeNode | null) {
      if(node) {
          node.left&&fn(node.left)
          arr.push(node.val)
          node.right&&fn(node.right)
      }
  }

  fn(root)

  for(let i = 0; i < arr.length - 1; i++) min = Math.min(arr[i+1] - arr[i], min)

  return min
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  let pre1: ListNode | null = null,
      pre: ListNode | null = null,
      next: ListNode | null = null;

  if(!(head&&head.next)) return head

  pre = head;
  next = head.next;
  head = head.next;

  while(pre && next) {
      if(pre1) pre1.next = next;
      pre.next = next.next;
      next.next = pre;
      
      pre1 = pre;
      pre = pre.next;
      next = pre && pre.next || null;
  }

  return head
};

function commonChars(A: string[]): string[] {
  let ans: string[] = [], 
      word: string = A[0], 
      slen: number = word.length;

  for(let s of word){
      if(A.every(m => m.includes(s))) {
          A = A.map(m => m.replace(s, ''))
          ans.push(s)
      }
  }
  
  return ans
};

interface Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
}

function connect(root: Node | null): Node | null {
  if(!root) return root;
  let arr:Node[][] = [],
      tempArr:Node[] = [root];

  while(tempArr.length > 0) {
      arr.push([...tempArr])

      let temp:Node[] = [];

      tempArr.forEach(item => {
          if(item.left) temp.push(item.left);
          if(item.right) temp.push(item.right);
      })

      tempArr = [...temp]
  }

  arr.forEach(item => {
      for(let i = 0; i < item.length; i++) item[i].next = item[i+1] || null 
  })
  
  return root
};

function sortedSquares(A: number[]): number[] {
  let res: number[] = new Array(A.length),
      pre: number = 0,
      next: number = A.length - 1,
      preValue: number = 0,
      nextValue: number = 0,
      index: number = A.length - 1;

  while(pre <= next) {
      preValue = Math.pow(A[pre], 2);
      nextValue = Math.pow(A[next], 2)

      if(preValue >= nextValue) {
          pre++;
          res[index] = preValue;
      } else {
          next--;
          res[index] = nextValue;
      }

      index--
  }

  return res;
};

function totalNQueens(n: number): number {
  let res: number = 0;

  const dfs = function(arr:number[], level: number): void {
      if(level === n) {
          res++;
          return
      }

      for(let i = 0; i < n; i++) {
          if(!arr.some((row, k) => row === i || Math.abs(row -  i) === Math.abs(k - level))) {
              dfs([...arr, i], level+1)
          }
      }
  }

  dfs([], 0)

  return res;
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let num: number = n,
      next: ListNode | null = head,
      pre: ListNode | null = head;
  
  if(!head || !(head && head.next)) return null;

  while(n>0){
      next = next && next.next || null;
      n--;
  }

  while(next){
      if(num==1 && !(pre && pre.next && pre.next.next)) {
          pre ? pre.next = null : null;
          return head;
      }
      next = next && next.next;
      pre = pre && pre.next;
  }

  if(pre && pre.next) pre.val =  pre.next.val;
  if(pre && pre.next) pre.next = pre.next.next;

  return head;
};

function backspaceCompare(S: string, T: string): boolean {
  const fn = function(S:string, arr: string[]) : string {
      for(let i = 0; i < S.length; i++) {
          if(S[i] === '#') {
              if(arr.length > 0) arr.pop()
          } else {
              arr.push(S[i])
          }
      }

      return arr.join('')
  }
  
  return fn(S, []) === fn(T, [])
};

/* 额外数组解决 */
function reorderList1(head: ListNode | null): null | ListNode {
  let node:ListNode | null = head,
      nodeArr:ListNode[] = [],
      pre:number = 1,
      next:number = 0,
      res:ListNode | null = head;

  if(!head) return null;

  while(node) {
      nodeArr.push(new ListNode(node.val));
      node = node.next;
  }
  
  next = nodeArr.length - 1;

  while(pre <= next){
      head.next = nodeArr[next] || null;
      head = head.next;
      next--;
      if(head) {
          head.next = nodeArr[pre] || head;
          head = head.next; 
          pre++;
      }
  }

  if(head) head.next = null;

  //方便测试

  return res
};
/* 双指针解决 */
function reorderList2(head: ListNode | null): null | ListNode{
  let pre:ListNode | null = head,
      next:ListNode | null = head && head.next,
      res: ListNode | null = head;

  if(!head) return null;

  while(next && next.next) {
      pre = pre && pre.next;
      next = next && next.next && next.next.next;
  }
  
  next = pre && pre.next;
  if(pre) pre.next = null;
  pre = head;

  const rervseListNode = function(node: ListNode | null): ListNode | null {
      let pre: ListNode | null = null,
          next: ListNode | null = node,
          temp: ListNode | null = null;
      
      while(next) {
          temp = next && next.next;
          next.next = pre;

          pre = next;
          next = temp;
      }

      return pre;
  }

  next = rervseListNode(next);
  pre = pre && pre.next;

  while(pre || next) {
      if(head) head.next = next;
      next = next && next.next;       
      head = head && head.next;

      if(head) head.next = pre;
      pre = pre && pre.next;
      head = head && head.next;
  }

   //方便测试

  return res
};

function solveNQueens(n: number): string[][] {
  let resArr:string[][] = [],
      temp: string[] = new Array(n).fill('.');

  const dfs = function(level: number, arr: number[]): void {
      if(level === n) {
              resArr.push(arr.map((i,j) => {
                  let arr:string[] = [...temp];
                  arr[i] = 'Q';
                  return arr.join('')
              })
          )
          return
      }

      for(let i = 0; i < n; i++) {
          if(!arr.some((k, j) => k === i || Math.abs(i - k) === Math.abs(level - j))) 
              dfs(level + 1, [...arr, i])
      }
  }

  dfs(0, []);

  return resArr;
};

function lengthOfLIS(nums: number[]): number {
  let len = nums.length,
      dp:number[] = new Array(len).fill(1);
  if(len <= 1) return len;

  for(let i = 1; i < len; i++){
      for(let j = 0; j < i; j++){
          if(nums[i] > nums[j]) dp[i] = Math.max(dp[j] + 1, dp[i])
      }
  }

  return Math.max(...dp);
};

function maxSatisfaction(satisfaction: number[]): number {
  satisfaction.sort((a,b) => b - a);

  let sum: number = 0,
      res: number = 0;
  // 逆序和+贪心
  for(let i = 0; i < satisfaction.length; i++) {
      sum += satisfaction[i];
      if (sum < 0) break;
      res += sum;
  }

  return res
};

function isLongPressedName(name: string, typed: string): boolean {
  let i:number = 0,
      j:number = 0;

  while(i < name.length || j < typed.length) {
      if(name[i] === typed[j]) {
          i++;
          j++;
      } else {
          if(name[i-1] === typed[j]){
              j++;
          } else {
              return false;
          }
      }
  }
  return true;
};

function uniquePathsIII(grid: number[][]): number {
  let res:number = 0,
      stepNum:number = 1,
      x:number = 0,
      y:number = 0;
  
  grid.forEach((arr, row) => arr.forEach((item, col) => {
          if(item === 1) {
              x = row;
              y = col;
          } 
          if(item === 0) stepNum++;
      })
  )

  const dfs = function(x:number, y:number, count:number, arr: number[][]): void {
      if(x === grid.length 
          || x === -1 
          || y === grid[0].length 
          || y === -1 
          || grid[x][y] === -1) return

      if(grid[x][y] === 2) {
          if(count === 0) res++
          return;
      }
      
      arr[x][y] = -1;

      dfs(x+1, y, count-1, arr);
      dfs(x-1, y, count-1, arr);
      dfs(x, y+1, count-1, arr);
      dfs(x, y-1, count-1, arr);
      
      arr[x][y] = 0;
  }

  dfs(x, y, stepNum, grid);

  return res;
};

function findTargetSumWays(nums: number[], S: number): number {
  let res:number = 0;

  const dfs = function(sum:number ,index:number):void {
      if(index === nums.length) {
          if(sum === S) res++;
          return;
      }
      dfs(sum+nums[index], index + 1);
      dfs(sum-nums[index], index + 1);
  }

  dfs(0, 0)

  return res;
};

function search(nums: number[], target: number): number {
  let mid:number = 0, 
      left:number = 0, 
      right:number = nums.length-1;

  while (left <= right) {
      mid = left + Math.floor((right - left) / 2);

      if(nums[mid] == target) return mid;

      if(target < nums[mid]) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  
  return -1;
};

function partitionLabels(S: string): number[] {
    let pre: number = 0,
        next: number = 0,
        temp: number = 0,
        resArr: number[] = [];

    for(let i = 0; i < S.length; i++) {
        temp = S.lastIndexOf(S[i])
        
        if(temp >= next) next = temp;

        if(i === next) {
            resArr.push(next - pre + 1);
            pre = i + 1;
        }
    }

    return resArr;
};

function isPalindrome(head: ListNode | null): boolean {
    let pre:ListNode | null = head,
        next:ListNode | null = head && head.next;

    if(!head) return true;

    while(next && next.next) {
        pre = pre && pre.next;
        next = next && next.next && next.next.next;
    }
    
    next = pre && pre.next;
    if(pre) pre.next = null;
    pre = head;

    const rervseListNode = function(node: ListNode | null): ListNode | null {
      let pre: ListNode | null = null,
          next: ListNode | null = node,
          temp: ListNode | null = null;
      
      while(next) {
          temp = next && next.next;
          next.next = pre;

          pre = next;
          next = temp;
      }

      return pre;
    }

    next = rervseListNode(next);

    while(next && pre) {
        if(pre.val != next.val) return false;
        pre = pre && pre.next;
        next = next && next.next;
    }

    return true
};

function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    let res:number = 0,
        map:Map<string, number> = new Map();
    
    letters.forEach(item => {
        if(map.has(item)) {
            map.set(item, (map.get(item) || 0) + 1)
        } else {
            map.set(item, 1)
        }
    })

    const bfs = function(index: number, sum: number, map: Map<string, number>) {
        if(index >= words.length) {
            res = Math.max(sum, res);
            return
        }

        bfs(index + 1, sum, new Map(map));

        let word = words[index];

        for(let i = 0; i < word.length; i++) {
            if(!map.has(word.charAt(i)) || map.get(word.charAt(i)) === 0) return;
            
            map.set(word.charAt(i), (map.get(word.charAt(i)) || 0) - 1);
            sum += score[word.charCodeAt(i) - 97];
        }

        bfs(index + 1, sum, new Map(map));
    }

    bfs(0, 0, new Map(map))

    return res;
};

function minFallingPathSum(arr: number[][]): number {
    let dp:number[] = [...arr[0]];
    
    for(let i = 1; i < arr.length; i++) {
        let temp:number[] = [...dp];
        for(let j = 0; j < dp.length; j++) {
            dp[j] = Math.min(...temp.slice(0,j), ...temp.slice(j+1)) + arr[i][j]
        }        
    }

    return Math.min(...dp);
};

function videoStitching(clips: number[][], T: number): number {
    clips.sort((a,b)=>a[0]-b[0]);

    let min:number = clips[0][0],
        max:number = clips[clips.length-1][1];

    if(min>0 || max<T) return -1;

    let end:number = 0,
        next:number = 0,
        num:number = 0;

    while(end < T && clips[next]){  
      let nextEnd = end;  
      while(clips[next] && clips[next][0]<=end){
          if(clips[next][1] > nextEnd){
              nextEnd = clips[next][1];
              if(nextEnd === T) return num+1;
          }
          next++;
      }
      num++;
      if(nextEnd === end) return -1;
      end = nextEnd;
    }
    return num;
};

function longestMountain(A: number[]): number {
    let height:number = 0;

    for(let i = 1; i < A.length - 1; i++) {
        while(A[i] < A[i+1]) {
            i++;
            if(i + 1 == A.length) break;
        }
        let pre:number = i,
            next:number = i;
        //i to pre
        while(pre > 0 && A[pre] > A[pre - 1]) pre--;
        //i to next
        while(next < A.length - 1 && A[next] > A[next+1]) next++;

        if(pre != i && next != i) height = Math.max(height, next - pre + 1);

        i = next;
    }

    return height < 3 ? 0 : height;
};

/**
 * @param {number[][]} board
 * @return {number}
 */
// var slidingPuzzle = function(board) {
//     let target = [[1,2,3],[4,5,0]].join(''),
//         min = Number.MAX_SAFE_INTEGER,
//         x = 0,
//         y = 0;

//     board.forEach((item, i) => {
//         item.forEach((key, j) => {
//             if(key == 0) {
//                 x = i;
//                 y = j;
//             }
//         })
//     })

//     const bfs = function(arr, num, x, y, map) {
//         let str = arr.join('');
//         if(x<0 || x>1 || y<0 || y>2) return;
//         if(str === target) {
//             min = Math.min(min, num);
//             return
//         }

//         if(map.has(str)) {
//             return;
//         } else {
//             map.set(str, 1);
//         }

//         if(x+1 === 1) {
//             [arr[x][y], arr[x+1][y]] = [arr[x+1][y], arr[x][y]];
//             bfs(arr.slice(), num+1, x+1, y, new Map(map));
//             [arr[x][y], arr[x+1][y]] = [arr[x+1][y], arr[x][y]];
//         } else {
//             [arr[x][y], arr[x-1][y]] = [arr[x-1][y], arr[x][y]];
//             bfs(arr.slice(), num+1, x-1, y, new Map(map));
//             [arr[x][y], arr[x-1][y]] = [arr[x-1][y], arr[x][y]];
//         }

//         if(y+1 < 3) {
//             [arr[x][y], arr[x][y+1]] = [arr[x][y+1], arr[x][y]];
//             bfs(arr.slice(), num+1, x, y+1, new Map(map));
//             [arr[x][y], arr[x][y+1]] = [arr[x][y+1], arr[x][y]];
//         }
//         if(y-1 > -1) {
//             [arr[x][y], arr[x][y-1]] = [arr[x][y-1], arr[x][y]];
//             bfs(arr.slice(), num+1, x, y-1, new Map(map));
//             [arr[x][y], arr[x][y-1]] = [arr[x][y-1], arr[x][y]];
//         };
//     }

//     bfs(board.slice(), 0, x, y, new Map())

//     return min === Number.MAX_SAFE_INTEGER ? -1 : min;
// };

function smallerNumbersThanCurrent(nums: number[]): number[] {
    const res=nums.slice();

    nums.sort((a,b)=>a-b);

    return res.map(item=>nums.indexOf(item));
};

interface CategoryItem {
    label: string,
    value: string,
    level: string,
    parentId: string
}

interface MapItem {
    label: string,
    value: string,
    children?: MapItem[]
}

const RestoreTreeStructure = (data: CategoryItem[]): MapItem[] => {
    const map: Map<string, MapItem[]> = new Map();

    data.forEach(item => {
        if (map.has(item.parentId)) {
            map.set(item.parentId, [...(map.get(item.parentId)||[]), { label: item.label, value: item.value }]);
        } else {
            map.set(item.parentId, [{ label: item.label, value: item.value }]);
        }
    });

    map.forEach(item => {
        item.map(obj => {
            if (map.has(obj.value))
                obj.children = map.get(obj.value);
        });
    });

    return map.get('-1') || [];
}

function preorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];

    const dfs =  (node: TreeNode | null): void => {
        if(node === null) return;
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return res;
};

function uniqueOccurrences(arr: number[]): boolean {
    const map: Map<number, number> = new Map();
        for(let i = 0; i < arr.length; i++) {
            if(map.has(arr[i])) {
                map.set(arr[i], (map.get(arr[i]) || 0) + 1);
            } else {
                map.set(arr[i], 1);
            }
        }   
    const times: Set<number> = new Set(map.values());
    
    return times.size === map.size;
};

function sumNumbers(root: TreeNode | null): number {
    if(!root) return 0;
    if(!(root.left || root.right)) return root.val;
    if(root.left){
       root.left.val = root.val*10+root.left.val
    }
    if(root.right){
       root.right.val = root.val*10+root.right.val
    }
    return sumNumbers(root.left) + sumNumbers(root.right)
};

function islandPerimeter(grid: number[][]): number {
    let result:number = 0
    for(let i = 0; i<grid.length; i++) {
        for(let j = 0; j<grid[i].length; j++) {
            if(grid[i][j] === 1) {
                result += 4;
                if(i-1>=0&&grid[i-1][j]===1) result -= 1;
                if(j-1>=0&&grid[i][j-1]===1) result -= 1;
                (i+1<grid.length&&grid[i+1][j]===1)&&(result -= 1);
                (j+1<grid[i].length&&grid[i][j+1]===1)&&(result -= 1); 
            }
        }
    }
    return result
};

// class RandomizedCollection {
//     d: Map<number, Set<number>>
//     v: number[]
//     constructor() {
//         this.d = new Map()
//         this.v = []
//     }

//     insert(val: number): boolean {
//         !this.d.has(val) && this.d.set(val, new Set())
//         this.d.get(val)?.add(this.v.length)
//         this.v.push(val)
//         return this.d.get(val)?.size === 1
//     }

//     remove(val: number): boolean {
//         if (!this.d.has(val)) {
//             return false
//         }
//         let i: number = this.d.get(val)?.keys().next().value
//         this.d.get(val)?.delete(i)
//         this.v[i] = this.v[this.v.length - 1]
//         this.v.pop()
//         this.d.get(this.v[i])?.delete(this.v.length)
//         i < this.v.length && this.d.get(this.v[i])?.add(i)
//         !this.d.get(val)?.size && this.d.delete(val)
//         return true
//     }

//     getRandom(): number {
//         return this.v[Math.floor(Math.random() * this.v.length)]
//     }
// }

function wordBreak(s: string, wordDict: string[]): string[] {
    const d = new Set(wordDict), 
          n = s.length,
          v: string[][][] = Array(n).concat([[[]]]);
    
    const dfs = (i: number) => {
            if (v[i]) return v[i];
            v[i] = []
            for (let j = i + 1; j <= n; ++j) {
                let w = s.slice(i, j)
                if(d.has(w)) {
                    for(const ws of dfs(j)) {
                        v[i].push([w].concat(ws))
                    }
                }
            }
            return v[i]
        }

    return dfs(0).map(ws => ws.join(' '))
};

function intersection(nums1: number[], nums2: number[]): number[] {
    let res:number[] = [],
        set1:Set<number> = new Set(nums1),
        set2:Set<number> = new Set(nums2);

    set1.forEach(item => {
        if(set2.has(item)) res.push(item)
    })

    return res;
};

function validMountainArray(A: number[]): boolean {
    const n = A.length;
    let i = 0,
        j = n - 1;

    while (i + 1 < n && A[i] < A[i + 1]) i++;
    while (j - 1 >= 0 && A[j - 1] > A[j]) j--;
    
    if (i != 0 && i == j && j != n - 1) return true;

    return false;
};

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const res:number[][] = [],
          len:number = intervals.length;
    
    let i:number = 0;

    while (i < len && intervals[i][1] < newInterval[0]) { 
        res.push(intervals[i]);
        i++;
    }

    while (i < len && intervals[i][0] <= newInterval[1]) { 
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]); 
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]); 
        i++;
    }

    res.push(newInterval);

    while (i < len) {   
        res.push(intervals[i]);
        i++;
    }
    
    return res;
};

// function ladderLength1(beginWord: string, endWord: string, wordList: string[]): number {
//     let len = wordList.length + 1,
//         res: number = len + 1,
//         map: Map<string, Array<string>> = new Map();
    
//     if(wordList.indexOf(endWord) === -1) return 0;
//     if(beginWord === endWord) return 1;

//     if(wordList.indexOf(beginWord) == -1) wordList.push(beginWord);

//     const fn = function(str1:string, str2:string) : boolean {
//         let res:number = 0,
//             i:number = 0;

//         while(i < str1.length) {
//             if(str1[i] != str2[i]) res++;
//             i++
//         }
//         return res === 1
//     }

//     for(let i = 0; i < wordList.length + 1; i++) {
//         for(let j = i + 1; j < wordList.length; j++) { 
//             if(fn(wordList[i], wordList[j])) {
//                 if(map.has(wordList[i])) {
//                     map.set(wordList[i], [...map.get(wordList[i])||[], wordList[j]])
//                 } else {
//                     map.set(wordList[i], [wordList[j]])
//                 }

//                 if(map.has(wordList[j])) {
//                     map.set(wordList[j], [...map.get(wordList[j])||[], wordList[i]])
//                 } else {
//                     map.set(wordList[j], [wordList[i]])
//                 }
//             }
//         }
//     }

//     const dfs = function(str: string, num:number) {
//         if(num === len) return;
//         if([...map.get(str) || []].indexOf(endWord) != -1) res = Math.min(num+1, res);
//         [...map.get(str) || []].forEach(item=>{
//             dfs(item, num+1)
//         })

//         return;
//     }

//     dfs(beginWord, 1)

//     return res === len + 1 ? 0 : res;
// };

const ladderLength = (beginWord:string, endWord:string, wordList:string[]) => {
    type Arr = [string, number];
    const wordSet:Set<string> = new Set(wordList);
    const queue: Array<Arr> = [];
    queue.push([beginWord, 1]);
  
    while (queue.length) {
      const [word, level] = queue.shift() || ['', 0];  // 当前出列的单词
      if (word == endWord) {
        return level;
      }

      for (let i = 0; i < word.length; i++) { // 遍历当前单词的所有字符
        for (let c = 97; c <= 122; c++) { // 对应26个字母
          const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1); // 形成新词
          if (wordSet.has(newWord)) { // 单词表里有这个新词
            queue.push([newWord, level + 1]); // 作为下一层的词入列
            wordSet.delete(newWord);  // 避免该词重复入列
          }
        }
      }
    }
    return 0; // bfs结束，始终没有遇到终点
  };

function sortByBits(arr: number[]): number[] {
    const count1 = function(num:number) : number {
        let res: number = 0,
            str: string = num.toString(2);

        for(let i = 0; i < str.length; i++) {
            if(str[i] === '1') res++;
        }

        return res;
    }

    arr.sort((a, b) => count1(a) - count1(b) || a-b)

    return arr;
};

function countRangeSum(nums: number[], lower: number, upper: number): number {
    if(nums.length === 0) return 0;

    let result:number = 0;

    for(let i = 0; i < nums.length;i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if(lower <= sum && upper >= sum) result++;
        }
    }

    return result; 
};

function maxProfit(prices: number[]): number {
    let res:number = 0;

    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i+1] - prices[i] > 0) res += prices[i+1] - prices[i];
    }

    return res;
};

function kClosest(points: number[][], K: number): number[][] {
    const list: number[][] = points.sort((a, b)=> (
      Math.sqrt( Math.pow(Math.abs(a[0] - 0), 2) + Math.pow(Math.abs(a[1] - 0), 2)) -  
      Math.sqrt( Math.pow(Math.abs(b[0] - 0), 2) + Math.pow(Math.abs(b[1] - 0), 2))
    ))
    return list.splice(0, K)
};
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let i:number = nums.length - 2; 
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) { 
        let j:number = nums.length - 1; 
        while (j >= 0 && nums[j] <= nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]]; 
    }

    let l:number = i + 1,
        r:number = nums.length - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
}
function findRotateSteps(ring: string, key: string): number {
    let prevDp = [], 
        curDp = [],
        temp = { sum: Infinity, index: 0 };

    for (let i = 0; i < key.length; i++) {
        prevDp = [...curDp];
        curDp = [];
        for (let j = 0; j < ring.length; j++) {
        if (key[i] === ring[j]) {
            if (i === 0) {
            curDp.push({ sum: Math.min(j, ring.length - j) + 1, index: j });
            continue;
            }
            temp = { sum: Infinity, index: j };
            prevDp.forEach(element => {
            temp.sum = Math.min(
                temp.sum,
                element.sum +
                Math.min(
                Math.abs(element.index - j),
                ring.length - Math.abs(element.index - j)
                ) +
                1
            );
        });
        curDp.push(temp);
      }
    }
  }
  curDp.sort((a,b)=>{
    return a.sum-b.sum
  })
  return curDp[0].sum;
}

function sortArrayByParityII(A: number[]): number[] {
    let i:number = 0;

    while(i < A.length) {
        if(!(i % 2 === A[i] % 2)) {
            let j:number = i;
            while(!(i % 2 === A[j] % 2)) {
                j++;
            }
            [A[i], A[j]] = [A[j], A[i]]
        }
        i++;
    }
    return A;
};

function oddEvenList(head: ListNode | null): ListNode | null {
    let pre: ListNode | null = head,
        next: ListNode | null = head && head.next,
        temp: ListNode | null = next;

    while(pre && next) {
        pre.next = next.next;
        next.next =  pre.next && pre.next.next;

        if(pre.next) pre = pre.next;
        next = next.next;
    }

    if(pre) pre.next = temp;

    return head;
};

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let newArr:number[] = [];

    let otherNum:number[] = arr1.filter(n => arr2.indexOf(n) === -1).sort((a,b) => a - b);

    arr2.forEach(n => {
        arr1.forEach(item => {
            if(item == n) newArr.push(item)
        })
    })

    newArr.push(...otherNum)
    return newArr
};

function removeKdigits(num: string, k: number): string {
    let n = num.length,
        stack: string[] = [];

    if (n <= k) return '0'

    for (let i = 0; i < n; i++) {
        while ( k && stack.length && num[i] < stack[stack.length - 1] ) {
            k--
            stack.pop()
        }
        if ( stack.length || num[i] !== '0' ) {
            stack.push(num[i])
        }
    }
    while(k--) stack.pop()
    
    return stack.join('') || '0'
};

function reconstructQueue(people: number[][]): number[][] {
    let a:number[][] = [];
    
    people.sort((a,b)=>a[0]==b[0] ? a[1]-b[1] : b[0]-a[0])
    
    for(let i of people) a.splice(i[1],0,i)

    return a;
};

function slidingPuzzle(board: number[][]): number {
    let start:string = board[0].concat(board[1]).join(''),
        queue:string[] = [start],
        visited:Set<string> = new Set(queue),
        step:number = 0;
    
    const target:string = '123450',
          neighborMap:number[][] = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]]

    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++){
            let curBoard:string | undefined = queue.shift()
            if (curBoard === target) return step
            
            let zeroIndex:number = curBoard && curBoard.indexOf('0') || 0;
            
            let neighbor = neighborMap[zeroIndex]
            neighbor.forEach(neighborPos => {
                let newBoard:string = swap(curBoard || '', zeroIndex, neighborPos)

                if (visited && !visited.has(newBoard)) {
                    queue.push(newBoard)
                    visited.add(newBoard)
                }
            })

        }
        step++
    }
    return -1
};

function swap (str:string, i:number, j:number): string {
  let str1:string[] = str.split('');
  [str1[i], str1[j]] = [str1[j], str1[i]]
  return str1.join('')
}

function allCellsDistOrder(R: number, C: number, r0: number, c0: number): number[][] {
    let res:number[][] = [],
        map:Map<number, number[][]> = new Map();
    
    for(let i = 0; i < R; i++) {
        for(let j = 0; j < C; j++) {
            let num = Math.abs(i-r0) + Math.abs(j-c0);
            if(map.has(num)) {
                map.set(num, [...(map.get(num)||[]),[i, j]])
            } else {
                map.set(num, [[i, j]])
            }
        }
    }

    for(let item of [...map.entries()].sort((a,b)=>a[0]-b[0])) {
        res.push(...item[1])
    }

    return res;
};

function canCompleteCircuit(gas: number[], cost: number[]): number {
    const sum = (arr: number[]) => arr.reduce((prev, current) => prev+current);

    const run = function(start:number): boolean {
        let sum:number = 0,
            len = gas.length;

        for(let i = 0; i < len; i++) {
            let index:number = i+start >= len ? i+start-len : i+start;
            
            sum += gas[index] - cost[index]
            if(sum < 0) return false
        }
        return true;
    }
    // gas小于cost的时候直接返回-1
    if(sum(gas) < sum(cost)) return -1;

    for(let i = 0, len = gas.length; i < len; i++) {
        if(gas[i] >= cost[i] && run(i)) return i;
    }

    return -1;
};

function moveZeroes(nums: number[]): void | number[] {
    let pre:number = 0,
        next:number = 0;
    while(next < nums.length) {
        if(nums[pre] == 0) {
            while(nums[next] == 0) {
                next++;
                if(next >= nums.length) break;
            }
        
            if(next >= nums.length) break;                
            
            let temp:number = nums[pre];
            nums[pre] = nums[next];
            nums[next] = temp;
        } 
        
        pre++;
        next++;
    }
    return nums;
};

function insertionSortList(head: ListNode | null): ListNode | null {
    let pre:ListNode | null = head,
        current:ListNode | null = head && head.next;

    while(current !== null) {
        let pre1:ListNode|null = null,
            current1:ListNode|null = head;
        
        while(current1 !== current && current1 !== null) {
            if(current1.val > current.val) {
                if(head == current1) head = current;
                if(pre1 !== null) pre1.next = current;
                if(pre !== null) pre.next = current.next;
                current.next = current1;
                break;
            } else {
                pre1 = current1;
                current1 = current1.next;
            }
        }

        if(pre && current !== pre.next) {
            current = pre.next;
        } else {
            pre = current;
            current = current.next;
        }
    }

    return head;
};

function sortList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let r:ListNode[] = [];
    while (head) {
        r.push(head)
        let tmp:ListNode | null = head.next
        head.next = null
        head = tmp
    }
    r.sort((a, b) => a.val - b.val).reduce((p, v) => p.next = v)
    return r[0]
};

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  return sortStringFn(s) === sortStringFn(t)
};

function sortStringFn(s: string) {
  return s.split('').sort().join('')
}

function findMinArrowShots(points: number[][]): number {
    if(points.length === 0) return 0;

    points.sort((a, b)=> a[0] - b[0]);
    
    let posEnd:number = points[0][1],
        res:number = 1;
    for (let point of points) {
        if (point[0] <= posEnd) {
            posEnd = Math.min(point[1], posEnd)
        } else {
            res ++;
            posEnd = point[1]
        }
    }
    return res;
};
const getDepth = (node:TreeNode | null) =>{
    let depth = 0;
    while(node){
        depth++;
        node = node.left;        
    }
    return depth;
}

function countNodes(root: TreeNode | null): number {
    if(!root){
        return 0;
    }
    const left = getDepth(root.left);
    const right = getDepth(root.right);
    if(left === right){
        return countNodes(root.right) + 2**left;
    }else{
        return countNodes(root.left) + 2**right;
    }
};

function sortString(s: string): string {
    const hash:number[] = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) hash[s.charCodeAt(i) - 97]++;

    const res:string[] = [];
    let rest:number = s.length;
    while (rest > 0) {
        for (let i = 0; i < 26; i++) {
            if (hash[i] > 0) {
                res.push(String.fromCharCode(i + 97));
                hash[i]--;
                rest--;
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (hash[i] > 0) {
                res.push(String.fromCharCode(i + 97));
                hash[i]--;
                rest--;
            }
        }
    }
    return res.join('');
};

function maximumGap(nums: number[]): number {
    const n = nums.length;
    if (n < 2) {
        return 0;
    }
    let exp = 1;
    const buf = new Array(n).fill(0);
    const maxVal = Math.max(...nums);

    while (maxVal >= exp) {
        const cnt = new Array(10).fill(0);
        for (let i = 0; i < n; i++) {
            let digit = Math.floor(nums[i] / exp) % 10;
            cnt[digit]++;
        }
        for (let i = 1; i < 10; i++) {
            cnt[i] += cnt[i - 1];
        }
        for (let i = n - 1; i >= 0; i--) {
            let digit = Math.floor(nums[i] / exp) % 10;
            buf[cnt[digit] - 1] = nums[i];
            cnt[digit]--;
        }
        nums.splice(0, n, ...buf);
        exp *= 10;
    }
    
    let ret = 0;
    for (let i = 1; i < n; i++) {
        ret = Math.max(ret, nums[i] - nums[i - 1]);
    }
    return ret;
};

function fourSumCount(A: number[], B: number[], C: number[], D: number[]): number {
    let map:Map<number, number> = new Map(),
        res:number = 0;
    
    A.forEach(a => B.forEach(b => {
        let sum:number = a + b;
        if (map.has(sum)) {
            map.set(sum, (map.get(sum)||0)+1);
        } else {
            map.set(sum, 1);
        }
    }))

    C.forEach(c => D.forEach(d => {
        let sum:number = - (c + d);
        if(map.has(sum)) res += map.get(sum) || 1;
    }))

    return res;
};

function largestPerimeter(A: number[]): number {
    A.sort((a, b)=> a > b ? 1 : -1);

    for (let i = A.length-1; i > 1; i--) {
        if (A[i] < A[i-1] + A[i-2]) {
            return A[i] + A[i-1] + A[i-2]
        }
    }
    return 0;
};

function searchRange(nums: number[], target: number): number[] {
    const binarySearch = function (nums:number[], target:number, flag: boolean):number {
        let left:number = 0, 
            right:number = nums.length - 1, 
            ans:number = nums.length;

        while (left <= right) {
            const mid:number = Math.floor((left + right) / 2);
            if (nums[mid] > target || (flag && nums[mid] >= target)) {
                right = mid - 1;
                ans = mid;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    }

    let ans:number[] = [-1, -1];
    
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;

    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx, rightIdx];
    } 

    return ans;
};

function countPrimes(n: number): number {
    let h:boolean[] = Array(n).fill(true), 
        r:number = 0;
        
    for(let i = 2; i * i < n; i++) {
        if(h[i]) {
            for(let j = i * i; j < n; j += i) h[j] = false;
        }
    }

    for(let i = n; i-- > 2;) {
        if(h[i]) r++;
    }

    return r;
};

function leastInterval(tasks: string[], n: number): number {
    let map:Map<string, number> = new Map(),
        MaxCount = 0,
        MaxElement = 0;

    tasks.forEach(item => map.set(item, (map.get(item) || 0) + 1))

    MaxElement = Math.max(...map.values());

    [...map.values()].forEach(item => {
        if(item === MaxElement) MaxCount++
    })

    return Math.max(tasks.length, MaxCount + (n+1) * (MaxElement - 1))
};

function generate(numRows: number): number[][] {
    if(numRows === 0) return [];
    let res:number[][] = [[1]];

    while(numRows > 1) {
        numRows--;
        let temp:number[] = res.pop() || [],
            arr:number[] = new Array(temp.length+1).fill(1);
        
        res.push([...temp]);
        
        for (let i = 0; i < temp.length - 1; i++) {
            arr[i+1] = temp[i]+temp[i+1];
        }

        res.push([...arr])
    }

    return res;
};

function matrixScore(A: number[][]): number {
    const m:number = A.length, 
          n:number = A[0].length;

    let ret:number = m * (1 << (n - 1));

    for (let j = 1; j < n; j++) {
        let nOnes = 0;
        for (let i = 0; i < m; i++) {
            if (A[i][0] === 1) {
                nOnes += A[i][j];
            } else {
                nOnes += (1 - A[i][j]); // 如果这一行进行了行反转，则该元素的实际取值为 1 - A[i][j]
            }
        }
        const k = Math.max(nOnes, m - nOnes);
        ret += k * (1 << (n - j - 1));
    }
    return ret;
};

function splitIntoFibonacci(S: string): number[] {
    const max:number = 2 ** 31 - 1;
    let res:number[] = [];
    let len:number = S.length;

    const dfs = (start:number, S:string, res:number[]) => {
            let size:number = res.length;
            if (start == len) return size > 2;

            let num:number = 0;

            for (let i = start; i < len; i ++) {
                num = 10 * num + Number(S.charAt(i));
                if(num >= max || num < 0 ) return false;    //是否超出范围
                if (size < 2 || num == res[size- 1] + res[size- 2]) {
                    res.push(num);
                    if (dfs(i + 1, S, res)) {
                        return true;
                    }
                    res.pop();
                }

                if (Number(S.charAt(i)) == 0 && i == start) return false;
                
            }

            return false;
    }

    return dfs(0, S, res) ? res : [];
};

function uniquePaths(m: number, n: number): number {
    let dp:number[][] = new Array(m).fill(1).map(v => new Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp[m-1][n-1];
};

function uniquePaths1(m:number, n:number): number {
    let memo:number[] = new Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            memo[j] += memo[j - 1];
        }
    }
    
    return memo[n-1];
}

function lemonadeChange(bills: number[]): boolean {
    let map:Map<number, number> = new Map();

    if(bills[0] === 5) {
        map.set(5, 1);
        map.set(10, 0);
    } else {
        return false;
    }

    for (let i = 1; i < bills.length; i++) {
        switch (bills[i]) {
            case 5:
                map.set(5, (map.get(5) || 0) + 1);
                break;
            case 10:
                map.set(5, (map.get(5) || 0) - 1);
                map.set(10, (map.get(10) || 0) + 1);
                break;
            case 20:
                if ((map.get(10) || 0) < 1) {
                    map.set(5, (map.get(5) || 0) - 3);
                } else {
                    map.set(5, (map.get(5) || 0) - 1);
                    map.set(10, (map.get(10) || 0) - 1);
                }
                break;
            default: 
                break;
        }

        if((map.get(10) || 0) < 0 || (map.get(5) || 0) < 0) return false;
    }

    return true;
};

function predictPartyVictory(senate: string): string {
    const n:number = senate.length;
    const radiant:number[] = [], 
          dire:number[] = [];

    for (const [i, ch] of Array.from(senate).entries()) {
        if (ch === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }

    while (radiant.length && dire.length) {
            if (radiant[0] < dire[0]) {
                radiant.push(radiant[0] + n);
            } else {
                dire.push(dire[0] + n);
            }
            radiant.shift();
            dire.shift();
        }
    return radiant.length > 0 ? "Radiant" : "Dire";
};

function wiggleMaxLength(nums: number[]): number {
    const n:number = nums.length;
    if (n < 2) return n;
    const up:number[] = new Array(n).fill(0);
    const down:number[] = new Array(n).fill(0);
    up[0] = down[0] = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1);
            down[i] = down[i - 1];
        } else if (nums[i] < nums[i - 1]) {
            up[i] = up[i - 1];
            down[i] = Math.max(up[i - 1] + 1, down[i - 1]);
        } else {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }
    return Math.max(up[n - 1], down[n - 1]);
};

function containsDuplicate(nums: number[]): boolean {
    const set:Set<number> = new Set();
    
    for (const x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }

    return false;
};

function reorganizeString(S: string): string {
    let strs:string[] = S.split(''),
        map:Map<string, number> = new Map(),
        odd:number = -1,
        even:number = -2;
    
    strs.forEach((item) => map.set(item, (map.get(item) || 0) + 1))

    for (let [key, value] of map) {
        if(value*2 > S.length + 1) return "";
        // 判断最长的元素value值是否超过一半
        let len:number = value*2;

        while (value > 0) {
            // 奇偶间隔赋值给数组
            strs[(len <= S.length && odd < S.length - 2) ? odd += 2 : even += 2] = key;
            value--;
        }
    } 

    return strs.join('');
};

function groupAnagrams(strs: string[]): string[][] {
    let res:string[][] = [],
        map:Map<string, number> = new Map(),//排序后的字符串，在res数组当中的位置
        index:number = -1; //在res数组当中的位置
    
    for (let item of strs) {
        let str = item.split('').sort((a,b)=> a > b ? 1 : -1).join('');
        
        if(!map.has(str)) {
            index++;
            map.set(str, index);
            res.push([])
        }
        
        res[map.get(str) || 0].push(item);
    }

    return res;
};

function monotoneIncreasingDigits(N: number): number {
    let strs:number[] = N.toString().split('').map(item => Number(item));

    for (let i = strs.length - 1; i > 0; i--) {
        if (strs[i] < strs[i-1]) {
            strs[i-1] -= 1;
            for (let j = i; j < strs.length; j++) {
                strs[j] = 9;
            }
        }
    }

    return Number(strs.join(''));
};

function wordPattern(pattern: string, s: string): boolean {
    let map:Map<string, string> = new Map(),
        strs:string[] = s.split(' '),
        patterns:string[] = pattern.split('');

    if(patterns.length !== strs.length || new Set(strs).size !== new Set(patterns).size) return false;

    for (let i = 0, len = strs.length; i < len; i++) {
        if (map.has(patterns[i])) {
            if(map.get(patterns[i]) != strs[i]) return false
        } else {
            map.set(patterns[i], strs[i]);
        }
    }

    return true;
};

function maxProfit1(prices: number[], fee: number): number {
    let dp:number[][] = new Array(prices.length).fill(new Array(2));

    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee); 
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[prices.length - 1][0];
};

function maxProfit2(prices: number[], fee: number): number {
    let cash:number = 0,
        hold:number = - prices[0];

    for (let i = 1, len = prices.length; i < len; i++) {
        cash = Math.max(cash, hold + prices[i] - fee); 
        hold = Math.max(hold, cash - prices[i]);
    }

    return cash;
};

function findTheDifference(s: string, t: string): string {
    let code: number = 0;

    for (let i = 0; i < t.length; i++) code ^= s.charCodeAt(i) ^ t.charCodeAt(i);
  
    return String.fromCharCode(code);
};

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n:number = matrix.length;
    
    for (let i = 0; i < Math.floor(n / 2); ++i) {
        for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }
};

function removeDuplicateLetters(s: string): string {
    let stack:string[] = []
    for (var i = 0; i < s.length; i++) {
        let char:string = s.charAt(i);
        if (stack.indexOf(char) > -1) continue
        // 使用indexOf(xx, i)取代 lastIndexOf(xx)减少遍历次数会更快
        while (stack.length > 0 && 
                stack[stack.length - 1] > char && 
                s.indexOf(stack[stack.length - 1], i) > i
              ) {
            stack.pop()
        }
        stack.push(char)
    }
    return stack.join('')
};

function minCostClimbingStairs(cost: number[]): number {
    const dp:number[] = new Array(cost.length + 1).fill(0);

    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
    }

    return dp[cost.length];
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    let res:number[][] = [];
    if (root === null) return [];

    const bfs = function(arr: TreeNode[], n:number): void | null {
        if(arr.length === 0) return null;
        let temp:TreeNode[] = [],
            tempValue:number[] = [];
        
        while (arr.length > 0) {
            let node:TreeNode = arr.shift()!;
            tempValue.push(node.val);
            if(node.left) temp.push(node.left);
            if(node.right) temp.push(node.right);
        }

        if (n % 2 === 1) tempValue.reverse();
        res.push([...tempValue]);
        bfs([...temp], n + 1);
    }

    bfs([root], 0);

    return res;
};

function firstUniqChar(s: string): number {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) return i;
    }
    return -1;
};

function candy(ratings: number[]): number {
    let left:number[] = new Array(ratings.length).fill(1);

    let right:number[] = new Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i-1])
            left[i] = left[i-1] + 1;
    }

    let count:number = left[ratings.length - 1];
    
    for (let j = ratings.length - 2; j >= 0; j-- ) {
        if(ratings[j] > ratings[j+1]) {
            right[j] = right[j+1] + 1;
        }
        count += Math.max(left[j], right[j])
    }
    return count;
};

function findContentChildren(g: number[], s: number[]): number {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);

    let res = 0,
        i = 0,
        j = 0;

    while (i < g.length && j < s.length){
        if(s[j] >= g[i]){
            res++;
            i++;
        }
        j++;
    }

    return res;
};

function maximalRectangle(matrix: string[][]): number {
    if (matrix.length === 0) return 0;
    let row:number = matrix.length, column:number = matrix[0].length;
    const maxWidthArr:number[][] = new Array(row);
    matrix.forEach((ele, index) => {
        maxWidthArr[index] = new Array(column)
        for (let j = 0; j < column; j++) {
            if (j === 0) {
                maxWidthArr[index][j] = ele[j] === "1" ? 1 : 0
            } else {
                maxWidthArr[index][j] = ele[j] === "1" ? maxWidthArr[index][j - 1] + 1 : 0
            }
        }
    })
    let maxArea:number = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            let minWidth:number = Number.MAX_SAFE_INTEGER, currentMaxArea = 0
            for (let k = i ; k >= 0; k--) {
                minWidth = Math.min(minWidth, maxWidthArr[k][j])
                currentMaxArea = Math.max(currentMaxArea, minWidth * (i - k + 1))
            }
            maxArea = Math.max(maxArea, currentMaxArea)
        }
    }

    return maxArea;
};

function isIsomorphic(s: string, t: string): boolean {
    let map:Map<string, string> = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            if (map.get(s.charAt(i)) !== t.charAt(i)) return false;
        } else {
            map.set(s.charAt(i), t.charAt(i))
        }
    }

    return true;
};

function maxProfitIV(k: number, prices: number[]): number {
    let n:number = prices.length;
    if (k > n / 2) {
        k = Math.floor(n/2);
    }
    let profit: {profit_in:number, profit_out:number}[] = new Array(k);
    //初始化买入卖出时的利润
    for (let j = 0; j <= k; j++){
        profit[j] = {
            profit_in: -prices[0],
            profit_out: 0
        };
    }
    for (let i = 0; i < n; i++){
        for (let j = 1; j <= k; j++){
            profit[j] = {
                profit_out: Math.max(profit[j].profit_out, profit[j].profit_in + prices[i]), 
                profit_in: Math.max(profit[j].profit_in, profit[j-1].profit_out - prices[i])
            }
        }
    }
    return profit[k].profit_out;
};

function minPatches(nums: number[], n: number): number {
    let patches: number = 0,
        x: number = 1,
        index: number = 0;
        
    const length: number = nums.length;

    while (x <= n) {
        if (index < length && nums[index] <= x) {
            x += nums[index];
            index++;
        } else {
            x *= 2;
            patches++;
        }
    }
    return patches;
};

function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => a-b);
    
    while (stones.length > 1) {
        let max:number = stones.pop()!,
            secondMax:number = stones.pop() || 0,
            temp:number = max - secondMax;
        if (temp === 0) continue;
        
        stones.push(temp);
        stones.sort((a, b) => a-b);        
    }

    return stones[0] || 0;
};

function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length <= 1) return 0;
    let count:number = 1,
        end:number = 0;

    intervals.sort((a, b) => a[1] - b[1]);

    end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (end > intervals[i][0]) continue;
        end =  intervals[i][1];
        count++;
    }

    return intervals.length - count;
};

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let len:number = flowerbed.length;

    for (let i = 0; i < len; i++) {
        // 提前终止
        if (n === 0) return true;

        let preIsZaro:boolean = flowerbed[i-1] ? flowerbed[i-1] === 0 : true;
        let nextIsZaro:boolean = flowerbed[i+1] ? flowerbed[i+1] === 0 : true;

        if (flowerbed[i] === 0 && preIsZaro && nextIsZaro) {
            n--;
            flowerbed[i] = 1;
        }
    }

    return  n === 0;
};

function maxSlidingWindow(nums: number[], k: number): number[] {
    if (!nums || !nums.length) return [];

    const res:number[] = [], 
          queue:number[] = [], 
          pop:() => number = () => queue[queue.length - 1];
    
    let first:number = 1 - k;

    for (let last = 0; last < nums.length; last++, first++) {
        while (queue.length && pop() < nums[last] ) queue.pop()
        queue.push(nums[last])
        if (first < 0) continue;
        res.push(queue[0])
        if (nums[first] === queue[0]) queue.shift();
    }

    return res;
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
    let node:ListNode | null = head,
        lessHead:ListNode | null = new ListNode(0), 
        less:ListNode | null = lessHead,
        moreHead:ListNode | null = new ListNode(0),
        more:ListNode | null = moreHead;

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

function fib(n: number): number {
    if (n === 0) return 0;

    let pre:number = 0,
        next:number = 1,
        res:number = pre + next;

    for (let i = 2; i <= n; i++) {
        res = pre + next;
        pre = next;
        next = res;
    }

    return res;
};

function largeGroupPositions(s: string): number[][] {
    let pre:number = 0,
        res:number[][] = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) !== s.charAt(i-1) || undefined) {
            if (i - pre > 2) res.push([pre, i - 1])
            pre = i;
        }
    }

    if (s.length - pre > 2) res.push([pre, s.length - 1])
    return res;
};

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let nvars = 0;
    const variables:Map<string, number> = new Map();

    for (let i = 0; i < equations.length; i++) {
        if (!variables.has(equations[i][0])) {
            variables.set(equations[i][0], nvars++);
        }
        if (!variables.has(equations[i][1])) {
            variables.set(equations[i][1], nvars++);
        }
    }

    // 对于每个点，存储其直接连接到的所有点及对应的权值
    const edges: number[][][] = new Array(nvars).fill(0);
    for (let i = 0; i < nvars; i++) {
        edges[i] = [];
    }
    for (let i = 0; i < equations.length; i++) {
        const va:number = variables.get(equations[i][0])!, 
              vb:number = variables.get(equations[i][1])!;
        edges[va].push([vb, values[i]]);
        edges[vb].push([va, 1.0 / values[i]]);
    }
    
    const ret:number[] = [];
    for (let i = 0; i < queries.length; i++) {
        const query:string[] = queries[i];
        let result:number = -1.0;
        if (variables.has(query[0]) && variables.has(query[1])) {
            const ia:number = variables.get(query[0])!, 
                  ib:number = variables.get(query[1])!;
            if (ia === ib) {
                result = 1.0;
            } else {
                const points:number[] = [];
                points.push(ia);
                const ratios = new Array(nvars).fill(-1.0);
                ratios[ia] = 1.0;

                while (points.length && ratios[ib] < 0) {
                    const x:number = points.pop()!;
                    for (const [y, val] of edges[x]) {
                        if (ratios[y] < 0) {
                            ratios[y] = ratios[x] * val;
                            points.push(y);
                        }
                    }
                }
                result = ratios[ib];
            }
        }
        ret[i] = result;
    }
    return ret;
};

function findCircleNum(isConnected: number[][]): number {
    let res:number = 0,
        arr:number[][] = isConnected.map(item => item.slice()),
        citySet:Set<number> = new Set<number>();
    
    const dfs = (i:number) => {
        if (citySet.has(i)) return;
        citySet.add(i);
        for (let j = 0; j < arr[i].length; j++) {
            if (citySet.has(j)) continue;
            if (arr[i][j] === 1) {
                dfs(j);
                citySet.add(j);
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (citySet.has(i)) continue;
        res++;
        dfs(i);
    }

    return res;
};

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate1(nums: number[], k: number): void {
    k %= nums.length;

    const reverse = (l:number, r:number, nums:number[]):void => {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            r--;
            l++;
        }
    }

    reverse(0, nums.length-1, nums);
    reverse(0, k-1, nums);
    reverse(k, nums.length-1, nums);
};
function maxProfitIII(prices: number[]): number {
    let profit_1_in = -prices[0], 
        profit_1_out = 0,
        profit_2_in = -prices[0], 
        profit_2_out = 0,
        n = prices.length;

    for (let i = 1; i < n; i++){
        profit_2_out = Math.max(profit_2_out, profit_2_in + prices[i]);
        profit_2_in = Math.max(profit_2_in, profit_1_out - prices[i]);
        profit_1_out = Math.max(profit_1_out, profit_1_in + prices[i]);
        profit_1_in = Math.max(profit_1_in, -prices[i]);
    }
    return profit_2_out;
};

function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums[0].toString()];

    let res:string[] = [],
        pre:number = 0,
        next:number = 1;
    
    while (next <= nums.length) {
        while (nums[next-1] + 1 === nums[next] && next < nums.length) next++;
        
        res.push(pre != next - 1 ? `${nums[pre]}->${nums[next-1]}` : `${nums[next-1]}`);

        pre = next;
        next++
    }

    return res;
};

class UnionFind {
  parent: number[]
  constructor(n: number) {
    this.parent = []
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(index: number) {
    if (this.parent[index] != index) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }

  merge(x: number, y: number) {
    this.parent[this.find(x)] = this.find(y);
  }
}

interface obj {
  [index: string]: string[]
}

function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const UF = new UnionFind(s.length)
  for (const [a, b] of pairs) {
    UF.merge(a, b)
  }
  const map = new Map()
  for (let i = 0; i < UF.parent.length; i++) {
    const root = UF.find(i)
    if (!map.has(root)) {
      map.set(root, [])
    }
    map.get(root).push(i)
  }
  const group: obj = {}
  for (const [k, v] of map.entries()) {
    const temp = []
    for (const item of v) {
      temp.push(s[item])
    }
    temp.sort()
    group[k] = temp
  }
  const res = []
  for (const [k, v] of map.entries()) {
    const chars = group[k]
    for (let i = 0; i < v.length; i++) {
      res[v[i]] = chars[i]
    }
  }
  return res.join('')
};

// const topSort = (deg: number[], graph: number[][], items: number[]) => {
//     const Q:number[] = [];
//     for (const item of items) {
//         if (deg[item] === 0) {
//             Q.push(item);
//         }
//     }
//     const res:number[] = [];
//     while (Q.length > 0) {
//         const u:number = Q.shift()!; 
//         res.push(u);
//         for (let i = 0; i < graph[u].length; ++i) {
//             const v = graph[u][i];
//             if (--deg[v] === 0) {
//                 Q.push(v);
//             }
//         }
//     }
//     return res.length == items.length ? res : [];
// }

const topSort = (deg: number[], graph:number[][], len:number):number[] => {
    const res:number[] = [],
          queue:number[] = deg.filter(item => item === 0);
    while (queue.length > 0) {
        let zeroDegIndex:number = queue.pop()!;
        res.push(zeroDegIndex);
        for (let i of graph[zeroDegIndex]) {
            deg[i]--;
            if (deg[i] === 0) queue.push(i);
        }
    }
    return res.length === len ? res : [];
}

/* 公司共有 n 个项目和  m 个小组，每个项目要不无人接手，要不就由 m 个小组之一负责。

group[i] 表示第 i 个项目所属的小组，如果这个项目目前无人接手，那么 group[i] 就等于 -1。（项目和小组都是从零开始编号的）小组可能存在没有接手任何项目的情况。

请你帮忙按要求安排这些项目的进度，并返回排序后的项目列表：

同一小组的项目，排序后在列表中彼此相邻。
项目之间存在一定的依赖关系，我们用一个列表 beforeItems 来表示，
其中 beforeItems[i] 表示在进行第 i 个项目前（位于第 i 个项目左侧）应该完成的所有项目。
如果存在多个解决方案，只需要返回其中任意一个即可。
如果没有合适的解决方案，就请返回一个 空列表 。 */

function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
    const groupItem:number[][] = new Array(n + m).fill(0).map(() => []);

    // 组间和组内依赖图
    const groupGraph:number[][] = new Array(n + m).fill(0).map(() => []);
    const itemGraph:number[][] = new Array(n).fill(0).map(() => []);

    // 组间和组内入度数组
    const groupDegree:number[] = new Array(n + m).fill(0);
    const itemDegree:number[] = new Array(n).fill(0);
    
    const id:number[] = new Array(n + m).fill(0).map((v, index) => index);

    let leftId:number = m;
    // 给未分配的 item 分配一个 groupId
    for (let i = 0; i < n; ++i) {
        if (group[i] === -1) {
            group[i] = leftId;
            leftId += 1;
        }
        // 形成一个映射，小组-->项目
        groupItem[group[i]].push(i);
    }
    // 依赖关系建图
    for (let i = 0; i < n; ++i) {
        const curGroupId:number = group[i];
        for (const item of beforeItems[i]) {
            const beforeGroupId = group[item];
            if (beforeGroupId === curGroupId) {
                // 组内依赖
                itemDegree[i] += 1;
                itemGraph[item].push(i);
            } else {
                // 组间依赖
                groupDegree[curGroupId] += 1;
                groupGraph[beforeGroupId].push(curGroupId);
            }
        }
    }

    // 组间拓扑关系排序
    const groupTopSort = topSort(groupDegree, groupGraph, n + m); 

    if (groupTopSort.length == 0) return [];
    const ans:number[] = [];
    // 组内拓扑关系排序
    for (const curGroupId of groupTopSort) {
        const size = groupItem[curGroupId].length;
        if (size == 0) continue;
        const res = topSort(itemDegree, itemGraph, size);

        if (res.length === 0) return [];

        for (const item of res) {
            ans.push(item);
        }
    }
    return ans;
};

function findRedundantConnection(edges: number[][]): number[] {
    const nodesCount:number = edges.length;
    const parent:number[] = new Array(nodesCount + 1).fill(0).map((_v, i) => i);

    for (let i = 0; i < nodesCount; i++) {
        const node1 = edges[i][0], 
              node2 = edges[i][1];

        if (find(parent, node1) != find(parent, node2)) {
            union(parent, node1, node2);
        } else {
            return edges[i];
        }
    }
    
    return [];
};

const union = (parent:number[], index1:number, index2:number):void => {
    parent[find(parent, index1)] = find(parent, index2);
}

const find = (parent:number[], index:number):number => {
    if (parent[index] !== index) parent[index] = find(parent, parent[index]);
    return parent[index];
}

function prefixesDivBy5(A: number[]): boolean[] {
    let res:boolean[] = [],
        sum:number = 0;
    for (let i = 0; i < A.length; i++) {
        sum = ((sum << 1) + A[i]) % 5;
        res.push(sum === 0)
    }

    return res;
};

function removeStones(stones: number[][]): number {
    class UnionFind {
        public n:number;
        private parents:Map<number, number>;
    
        public constructor(n:number) {
            this.n = 0;
            this.parents = new Map<number, number>();
        }
        
        public union(x:number, y:number) {
            const rootX:number = this.find(x), 
                  rootY:number = this.find(y)
            if (rootX !== rootY) {
                if (x !== rootX) this.n-- // 有主人不是自己，主人数 -1
                if (!this.parents.has(rootY)) { // 没遇到过的新主人
                    this.parents.set(rootY, rootY) // 标记遇到过了
                    this.n++ // 主人数 +1
                }
                this.parents.set(rootX, rootY)
            }
        }
    
        private find(x:number) {
            while(this.parents.has(x) && x !== this.parents.get(x)) x = this.parents.get(x)!;
            return x
        }
    }
    
    let n:number = stones.length, 
        u:UnionFind = new UnionFind(n), 
        i = -1;
        
    while (++i < n) u.union(stones[i][0], ~stones[i][1])
    return n - u.n
};

function hitBricks(grid: number[][], hits: number[][]): number[] {
        for (let hit of hits) {
            grid[hit[0]][hit[1]]--;
        }

        for (let i = 0; i < grid[0].length; i++) {
            dfs(0, i, grid);
        }

        let ans:number[] = new Array(hits.length).fill(0);

        for (let i = hits.length - 1; i >= 0; i--) {
            grid[hits[i][0]][hits[i][1]]++;
            if (grid[hits[i][0]][hits[i][1]] == 1 && isConnectProof(hits[i][0], hits[i][1], grid)) {
                ans[i] = dfs(hits[i][0], hits[i][1], grid) - 1;
            }
        }
        return ans;
}

const dfs = (x:number, y:number, grid:number[][]):number => {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] != 1) {
        return 0;
    }

    grid[x][y] = 2;
    return dfs(x - 1, y, grid) + dfs(x + 1, y, grid) + dfs(x, y - 1, grid) + dfs(x, y + 1, grid) + 1;
}

const isConnectProof = (x:number, y:number, grid:number[][]):boolean => {
    let dx:number[] = [0, 0, 1, -1];
    let dy:number[] = [1, -1, 0, 0];
    
    if (x == 0) return true;

    for (let i = 0; i < 4; i++) {
        let nx:number = x + dx[i];
        let ny:number = y + dy[i];
        if (nx < 0 || nx >= grid.length || ny < 0 || ny >= grid[0].length || grid[nx][ny] != 2) {
            continue;
        }
        return true;
    }
    return false;
}

function checkStraightLine(coordinates: number[][]): boolean {
    coordinates.sort((a, b) => a[1] -b[1]);
    let [x1, y1] = coordinates[0],
        [x2, y2] = coordinates[1],
        slope:string = ((y2-y1) / (x2-x1)).toFixed(10);
    [x1, y1] = coordinates[1];

    for (let i = 2; i < coordinates.length; i++) {
        [x2, y2] = coordinates[i];
        if (((y2-y1) / (x2-x1)).toFixed(10) !== slope) return false;
        [x1, y1] = coordinates[i];
    }

    return true;
};

function accountsMerge(accounts: string[][]): string[][] {
    const emailToIndex = new Map();
    const emailToName = new Map();
    let emailsCount = 0;
    for (const account of accounts) {
        const name = account[0];
        const size = account.length;
        for (let i = 1; i < size; i++) {
            const email = account[i];
            if (!emailToIndex.has(email)) {
                emailToIndex.set(email, emailsCount++);
                emailToName.set(email, name);
            }
        }
    }

    const uf = new UnionFind(emailsCount);
    for (const account of accounts) {
        const firstEmail = account[1];
        const firstIndex = emailToIndex.get(firstEmail);
        const size = account.length;
        for (let i = 2; i < size; i++) {
            const nextEmail = account[i];
            const nextIndex = emailToIndex.get(nextEmail);
            uf.merge(firstIndex, nextIndex);
        }
    }

    const indexToEmails = new Map();
    for (const email of emailToIndex.keys()) {
        const index = uf.find(emailToIndex.get(email));
        const account = indexToEmails.get(index) ? indexToEmails.get(index) : [];
        account.push(email);
        indexToEmails.set(index, account);
    }
    const merged = [];
    for (const emails of indexToEmails.values()) {
        emails.sort();
        const name = emailToName.get(emails[0]);
        const account = [];
        account.push(name);
        account.push(...emails);
        merged.push(account);
    }
    return merged;
};

type Connect = {
        point1: number,
        point2: number,
        dis: number
    }
function minCostConnectPoints(points: number[][]): number {
    let n = points.length;
    let unionFind = new UnionFind(n);
    let distance = Array<Connect>();
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let val = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            distance.push({ point1: i, point2: j, dis: val });
        }
    }

    distance.sort((x: Connect, y: Connect) => {
        return x.dis - y.dis;
    })

    let count = n - 1;
    let res = 0;
    for (let { point1: x, point2: y, dis } of distance) {
        let faX = unionFind.find(x), faY = unionFind.find(y);
        if (faX === faY) continue;

        unionFind.merge(x, y);
        res += dis;
        count -= 1;

        if (count <= 0) {
            break;
        }
    }

    return res;
};

function maximumProduct(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const n:number = nums.length;
    return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};

function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
    const m = edges.length;
    for (const [i, edge] of edges.entries()) {
        edge.push(i);
    }
    edges.sort((a, b) => a[2] - b[2]);

    // 计算 value
    const uf_std = new UnionFind3(n);
    let value = 0;
    for (let i = 0; i < m; i++) {
        if (uf_std.unite(edges[i][0], edges[i][1])) {
            value += edges[i][2];
        }
    }

    const ans:number[][] = [[], []];

    for (let i = 0; i < m; i++) {
        // 判断是否是关键边
        let uf = new UnionFind3(n);
        let v = 0;
        for (let j = 0; j < m; j++) {
            if (i !== j && uf.unite(edges[j][0], edges[j][1])) {
                v += edges[j][2];
            }
        }
        if (uf.setCount !== 1 || (uf.setCount === 1 && v > value)) {
            ans[0].push(edges[i][3]);
            continue;
        }

        // 判断是否是伪关键边
        uf = new UnionFind3(n);
        uf.unite(edges[i][0], edges[i][1]);
        v = edges[i][2];
        for (let j = 0; j < m; j++) {
            if (i !== j && uf.unite(edges[j][0], edges[j][1])) {
                v += edges[j][2];
            }
        }
        if (v === value) {
            ans[1].push(edges[i][3]);
        }
    }
    return ans;
};

class UnionFind3 {
    private parent:number[];
    private size:number[];
    public setCount:number;

    constructor (n:number) {
        this.parent = new Array(n).fill(0).map((element, index) => index);
        this.size = new Array(n).fill(1);
        // 当前连通分量数目
        this.setCount = n;
    }

    findset (x:number) {
        if (this.parent[x] === x) {
            return x;
        }
        this.parent[x] = this.findset(this.parent[x]);
        return this.parent[x];
    }

    unite (a:number, b:number) {
        let x = this.findset(a), y = this.findset(b);
        if (x === y) {
            return false;
        }
        if (this.size[x] < this.size[y]) {
            [x, y] = [y, x];
        }
        this.parent[y] = x;
        this.size[x] += this.size[y];
        this.setCount -= 1;
        return true;
    }

    connected (a:number, b:number) {
        const x = this.findset(a), y = this.findset(b);
        return x === y;
    }
}

function addToArrayForm(A: number[], K: number): number[] {
    return (BigInt(A.join("")) + BigInt(K)).toString().split("").map((k) => Number(k));
};

function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) {
        return -1;
    }
    const dfs = (u:number, used:boolean[], edges:Map<number, number[]>) => {
        used[u] = true;
        if (edges.get(u)) {
            for (const v of edges.get(u)!) {
                if (!used[v]) {
                    dfs(v, used, edges);
                }
            }
        }
    }

    const edges:Map<number, number[]> = new Map();
    for (const [x, y] of connections) {
        edges.get(x) ? edges.get(x)!.push(y) : edges.set(x, [y]);
        edges.get(y) ? edges.get(y)!.push(x) : edges.set(y, [x]);
    }

    const used:boolean[] = new Array(n).fill(false);

    let ans:number = 0;
    for (let i = 0; i < n; i++) {
        if (!used[i]) {
            dfs(i, used, edges);
            ans++;
        }
    }
    return ans - 1;
};

function findLengthOfLCIS(nums: number[]): number {
    if (nums.length === 0) return 0;
    let res:number = 0,
        num:number = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] < nums[i]) {
            num++;
        } else {
            res = Math.max(res, num);
            num = 1;
        }
    }
    res = Math.max(res, num);
    
    return res;
};

function regionsBySlashes(grid: string[]): number {
    let len = grid.length,
        res:number = 0,
        regions:number[][] = new Array(len*3).fill(0).map(k => new Array(len*3).fill(0));

    const dfs = (x:number, y:number, regions:number[][]) => {
        if(x >= 0 && x < len*3 && y >= 0 && y < len*3 && regions[x][y] == 0){
            regions[x][y] = 1;
            dfs(x+1, y, regions);
            dfs(x-1, y, regions);
            dfs(x, y+1, regions);
            dfs(x, y-1, regions);
        }
    }
   

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(grid[i].charAt(j) == '\\'){
                regions[i*3][j*3] = 1;
                regions[i*3+1][j*3+1] = 1;
                regions[i*3+2][j*3+2] = 1;
            }
            if(grid[i].charAt(j) == '/'){
                regions[i*3][j*3+2] = 1;
                regions[i*3+1][j*3+1] = 1;
                regions[i*3+2][j*3] = 1;
            }
        }
    }

    for(let i = 0; i < len*3; i++){
        for(let j = 0; j < len*3; j++){
            if(regions[i][j] == 0){
                dfs(i, j, regions);
                res++;
            }
        }
    }
    
    return res;
};

function numEquivDominoPairs(dominoes: number[][]): number {
    let map:Map<string, number> = new Map(),
        res:number = 0;
    
    for (let i = 0; i < dominoes.length; i++) {
        const [k, v] = dominoes[i];
        const kvStr:string = k.toString() + v.toString();
        const vkStr:string = v.toString() + k.toString();

        if (map.has(kvStr)) {
            res += map.get(kvStr)!;
            map.set(kvStr, map.get(kvStr)! + 1);
        } else if (map.has(vkStr) && kvStr !== vkStr) {
            res += map.get(vkStr)!;
            map.set(vkStr, map.get(vkStr)! + 1);
        } else {
            map.set(kvStr, 1);
        }
    }

    return res;
};

// 并查集模板
class UnionFind1579 {
    private parent:number[];
    private size:number[];
    public setCount:number;
    constructor (n:number) {
        this.parent = new Array(n).fill(0).map((element, index) => index);
        this.size = new Array(n).fill(1);
        // 当前连通分量数目
        this.setCount = n;
    }

    public findset (x:number):number {
        if (this.parent[x] === x) {
            return x;
        }
        this.parent[x] = this.findset(this.parent[x]);
        return this.parent[x];
    }

    public unite (a:number, b:number):boolean {
        let x = this.findset(a), y = this.findset(b);
        if (x === y) {
            return false;
        }
        if (this.size[x] < this.size[y]) {
            [x, y] = [y, x];
        }
        this.parent[y] = x;
        this.size[x] += this.size[y];
        this.setCount -= 1;
        return true;
    }

    public connected (a:number, b:number):boolean {
        const x = this.findset(a), y = this.findset(b);
        return x === y;
    }
}
function maxNumEdgesToRemove(n: number, edges: number[][]): number {
    const ufa:UnionFind1579 = new UnionFind1579(n), 
          ufb:UnionFind1579 = new UnionFind1579(n);
    let ans:number = 0;

    // 节点编号改为从 0 开始
    for (const edge of edges) {
        edge[1] -= 1;
        edge[2] -= 1;
    }
    // 公共边
    for (const [t, u, v] of edges) {
        if (t === 3) {
            if (!ufa.unite(u, v)) {
                ans += 1;
            } else {
                ufb.unite(u, v);
            }
        }
    }
    // 独占边
    for (const [t, u, v] of edges) {
        if (t === 1) {
            // Alice 独占边
            if (!ufa.unite(u, v)) {
                ans += 1;
            }
        } else if (t === 2) {
            // Bob 独占边
            if (!ufb.unite(u, v)) {
                ans += 1;
            }
        }
    }
    if (ufa.setCount !== 1 || ufb.setCount !== 1) {
        return -1;
    }
    return ans;
};

function pivotIndex(nums: number[]): number {
    let res:number = -1,
        LSum:number = 0,
        RSum:number = nums.reduce((pre, cur) => pre + cur, 0);  

    for (let i = 0; i < nums.length; i++) {
         if (2 * LSum + nums[i] === RSum) {
            return i;
        }
        LSum += nums[i];
    }

    return res;
};

function minimumEffortPath(heights: number[][]): number {
    let n = heights.length,
        m = heights[0].length,
        dp:number[][] = new Array(n).fill(0).map(k => new Array(m));

        for (let i=0; i<n; i++) {
            for (let j=0; j<m; j++) {
                dp[i][j] = Number.MAX_VALUE;
            }
        }
        dp[0][0] = 0;
        let isGo:boolean = true;

    while (isGo) {
        isGo = false;
        for (let i=0; i<n; i++) {
            for (let j=0; j<m; j++) {
                if (i - 1 >= 0) {
                    let x = Math.max(dp[i-1][j], Math.abs(heights[i][j] - heights[i-1][j]));
                    if (x < dp[i][j]) {
                        dp[i][j] = x;
                        isGo = true;
                    }
                }
                if (j - 1 >= 0) {
                    let x = Math.max(dp[i][j-1], Math.abs(heights[i][j] - heights[i][j-1]));
                    if (x < dp[i][j]) {
                        dp[i][j] = x;
                        isGo = true;
                    }
                }
            }
        }
        for (let i=n-1; i>=0; i--) {
            for (let j=m-1; j>=0; j--) {
                if (i + 1 < n) {
                    let x = Math.max(dp[i+1][j], Math.abs(heights[i][j] - heights[i+1][j]));
                    if (x < dp[i][j]) {
                        dp[i][j] = x;
                        isGo = true;
                    }
                }
                if (j + 1 < m) {
                    let x = Math.max(dp[i][j+1], Math.abs(heights[i][j] - heights[i][j+1]));
                    if (x < dp[i][j]) {
                        dp[i][j] = x;
                        isGo = true;
                    }
                }
            }
        }
    }
    return dp[n-1][m-1];
};

function swimInWater(grid: number[][]): number {
    const n = grid.length;
    let left = 0, right = n * n - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (check(grid, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

const check = (grid:number[][], threshold:number) => {
    if (grid[0][0] > threshold) {
        return false;
    }
    const n = grid.length;
    const visited = new Array(n).fill(0).map(() => new Array(n).fill(false));
    visited[0][0] = true;
    const queue = [[0, 0]];

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (queue.length) {
        const square = queue.shift()!;
        const i = square[0], j = square[1];

        for (const direction of directions) {
            const ni = i + direction[0], nj = j + direction[1];
            if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                if (!visited[ni][nj] && grid[ni][nj] <= threshold) {
                    queue.push([ni, nj]);
                    visited[ni][nj] = true;
                }
            }
        }
    }
    return visited[n - 1][n - 1];
};

function numSimilarGroups(strs: string[]): number {
    const n:number = strs.length;
    const m:number = strs[0].length;
    const f:number[] = new Array(n).fill(0).map((element, index) => index);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const fi = find(i), fj = find(j);
            if (fi === fj) {
                continue;
            }
            if (check(strs[i], strs[j], m)) {
                f[fi] = fj;
            }
        }
    }
    let ret = 0;
    for (let i = 0; i < n; i++) {
        if (f[i] === i) {
            ret++;
        }
    }
    return ret;

    function find(x:number):number {
        return f[x] === x ? x : (f[x] = find(f[x]));
    }

    function check(a:string, b:string, len:number):boolean {
        let num = 0;
        for (let i = 0; i < len; i++) {
            if (a[i] !== b[i]) {
                num++;
                if (num > 2) {
                    return false;
                }
            }
        }
        return true;
    }
};

function fairCandySwap(A: number[], B: number[]): number[] {
    let sumA:number = A.reduce((pre:number, cur:number) => pre + cur, 0),
        sumB:number = B.reduce((pre:number, cur:number) => pre + cur, 0),
        dis:number = Math.floor((sumB - sumA)/2),
        set:Set<number> = new Set(B);
    
    for (let i = 0; i < A.length; i++) {
        let num:number = Math.floor(dis + A[i]);
        if (set.has(num)) return [A[i], num];
    }
    return [];
};

function characterReplacement(s: string, k: number): number {
    let left:number = 0,
        right:number = 0,
        maxCount:number = 1,
        map:Map<string, number> = new Map<string, number>(),
        r:string = "",
        l:string = "";
    
    while (right < s.length) {
        r = s.charAt(right);
        map.set(r, (map.get(r) || 0) + 1);
        maxCount = Math.max(maxCount, map.get(r)!);
        if (right - left + 1 - maxCount > k) {
            l = s.charAt(left);
            left++;
            map.set(l, map.get(l)! - 1);
        }
        right++;
    }

    return right - left;
};

function medianSlidingWindow(nums: number[], k: number): number[] {
    let l:number = 0, 
        r:number = 0;
        
    const arr:number[] = [],
          isOdd:boolean = k % 2 === 1,
          ans:number[] = [];

    while (r < nums.length) {
        insert(arr, nums[r++]);
        if (arr.length === k) {
            const mid = k >> 1;
            if (isOdd) {
                ans.push(arr[mid]);
            } else {
                ans.push((arr[mid] + arr[mid - 1]) / 2);
            }
            remove(arr, nums[l++]);
        }
    }
    return ans;

    function insert(arr:number[], num:number) : void {
        const len:number = arr.length;
        if (len === 0) {
            arr.push(num);
        } else {
            if (arr[0] > num) {
                arr.unshift(num);
            } else if (arr[len - 1] <= num) {
                arr.push(num);
            } else {
                const index = search(arr, num);
                arr.splice(index, 0, num);
            }
        }
    }

    function search(arr:number[], num:number) : number {
        let l:number = 0,
            r:number = arr.length - 1;
        
        while (l <= r) {
            const mid:number = (l + r) >> 1;
            if (arr[mid] > num) {
                r = mid - 1
            } else if (arr[mid] < num) {
                l = mid + 1
            } else {
                return mid
            }
        }

        return l
    }

    function remove(arr:number[], num:number) : void {
        const index:number = arr.indexOf(num);
        arr.splice(index, 1);
    }
};

function findMaxAverage(nums: number[], k: number): number {
    let l:number = 0,
        r:number = nums.length - k + 1,
        sum:number = nums.slice(0, k).reduce((pre, cur) => pre + cur, 0),
        average:number = Number.MIN_SAFE_INTEGER;

    while (l < r) {
        average = Math.max(sum / k, average);
        sum = sum + nums[l + k] - nums[l];
        l++;
    }

    return average;
};

// function equalSubstring(s: string, t: string, maxCost: number): number {
//     let res:number = 0,
//         arr:number[] = [],
//         r:number = 0,
//         l:number = 0,
//         sum:number = 0;

//     for (let i = 0; i < s.length; i++) {
//         let sCode:number = s.charCodeAt(i),
//             tCode:number = t.charCodeAt(i);
//         arr.push(Math.abs(sCode - tCode));
//     }
    
//     while (r < s.length) {
//         sum += arr[r];
//         if (sum <= maxCost && r === s.length - 1) {
//             res = Math.max(res, r-l+1);
//             break;
//         }

//         if (sum > maxCost) {
//             res = Math.max(res, r-l);
//             sum -= arr[l];
//             l++;
//         }
//         r++;
//     }
//     return res;
// };

function equalSubstring(s: string, t: string, maxCost: number): number {
    let l:number = 0,
        res:number = 0,
        cost:number = 0;

        for (let i = 0; i < s.length; i++) {
            cost += Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
            
            while (cost > maxCost) {
                cost -= Math.abs(s.charCodeAt(l) - t.charCodeAt(l));
                l++;
            }
            res = Math.max(res, i-l+1);
        }
        return res;
};

function maxScore(cardPoints: number[], k: number): number {
    let maxValue:number = 0,
        l:number = 0,
        all:number = cardPoints.slice(0).reduce((pre, cur) => pre+cur, 0);
        
    while (k >= l) {
        let sum:number = all - cardPoints.slice(l, cardPoints.length-k+l).reduce((pre, cur) => pre+cur, 0);
        maxValue = Math.max(sum, maxValue);
        l++;
    }
    
    return maxValue;
};

function checkPossibility(nums: number[]): boolean {
    let count: number = 0;
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i - 1] > nums[i])  {
            if (nums[i - 2] > nums[i]) {
                nums[i] = nums[i - 1];
            } else {
                nums[i - 1] = nums[i];
            }
            count++;
        }

        if (count > 1) {
            return false;
        }
    }

    return true;
};

function maxTurbulenceSize(arr: number[]): number {
    let maxLen:number = 1,
        pre:number = 0,
        next:number = 0;
    // 0 ==, 1 >, -1 <
    const boolArr:number[] = arr.map((v, i, a)=>{
        return v > (a[i+1] || 0) ? 1 : v == (a[i+1] || 0) ? 0 : -1
    })

    boolArr.pop();
    if (boolArr.length === 1 && boolArr[0] !== 0) return 2;

    while (next < boolArr.length - 1) {
        if (boolArr[next+1] === 0) {
            if (boolArr[next] != 0) maxLen = Math.max(maxLen, next - pre + 2);
            pre = next + 2;
            next++;
        } else if (boolArr[next] != boolArr[next+1] && next + 1 == boolArr.length - 1) {
            maxLen = Math.max(maxLen, next - pre + 3);
        } else if (boolArr[next] === boolArr[next+1]) {
            maxLen = Math.max(maxLen, next - pre + 2);
            pre = next + 1;
        }
        next++;
    }
    
    return maxLen;
};

// function maxTurbulenceSize(arr: number[]): number {
//     let len: number = arr.length
//     if (len <= 1) return len
  
//     // 定义两个 dp 数组 up, down
//     const up: number[] = new Array(len).fill(1)
//     const down: number[] = new Array(len).fill(1)
  
//     let ans: number = 1
//     for (let i: number = 1; i < len; i++) {
//       // 上升
//       if (arr[i - 1] < arr[i]) {
//         down[i] = up[i - 1] + 1
//       }
//       // 下降
//       else if (arr[i - 1] > arr[i]) {
//         up[i] = down[i - 1] + 1
//       }
//       // 平地 跳过
//       else continue
  
//       ans = Math.max(ans, Math.max(up[i], down[i]))
//     }
  
//     return ans
// }

function subarraysWithKDistinct(A: number[], K: number): number {
    let count:number = 0,
        pre:number = 0,
        next:number = 0,
        map:Map<number, number> = new Map<number, number>();

    while (next < A.length) {
        map.set(A[next], (map.get(A[next]) || 0) + 1);
        // 滑动窗口满足K
        while (map.size === K) {
            // 保存当前右指针值
            let right:number = next;
            // 走到最右端
            while (map.size === K) {
                count++;
                next++;
                //map 不存在该值
                if(!map.has(A[next])) break;
            }
            // 删除当前pre
            map.set(A[pre], map.get(A[pre])! - 1);
            if (map.has(A[pre]) && map.get(A[pre]) === 0) map.delete(A[pre]);
            pre++;
            // 回退
            next = right;
        }
        next++;
    }
    return count;
};

// function checkInclusion(s1: string, s2: string): boolean {
//     if (s1.length > s2.length) return false;
//     let pre:number = 0,
//         len:number = s1.length,
//         map:Map<string, number> = new Map<string, number>();
//     // 添加s1内字符进入map
//     while (pre < len) {
//         map.set(s1.charAt(pre), (map.get(s1.charAt(pre)) || 0) + 1);
//         pre++;
//     }

//     pre = 0;
//     // 遍历s2
//     while (pre <= s2.length - len) {
//         let map1:Map<string, number> = new Map<string, number>(map),
//             i:number = pre;
//         // 匹配
//         while (i < pre + len) {
//             if (!map1.has(s2.charAt(i))) break;
//             map1.set(s2.charAt(i), map1.get(s2.charAt(i))! - 1);
//             if (map1.get(s2.charAt(i)) === 0) map1.delete(s2.charAt(i))
//             i++;
//         }
//         // 成功匹配
//         if (i === pre + len && map1.size === 0) return true;
//         pre++;
//     }

//     return false;
// };

function checkInclusion(s1: string, s2: string): boolean {
    let arr = Array(26).fill(0),
        aCode = 'a'.charCodeAt(0),
        m = s1.length,
        n = s2.length;

    for (let i = 0; i < m; i++) {
        arr[s1.charCodeAt(i) - aCode]++;
    }
    
    for (let i = 0; i < n; i++) {
        if (i < m) {
            arr[s2.charCodeAt(i) - aCode]--;
            if (i == m - 1) {
                if (arr.every(e => !e)) return true;
            }
        } else {
            arr[s2.charCodeAt(i - m) - aCode]++;
            arr[s2.charCodeAt(i) - aCode]--;
            if (arr.every(e => !e)) return true;
        }
    }
    return false;
};

class KthLargest {
    private k:number;
    private heap:MinHeap;
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = new MinHeap();
        for (const x of nums) {
            this.add(x);
        }
    }

    public add(val: number): number | null {
        this.heap.offer(val);
        if (this.heap.size() > this.k) {
            this.heap.poll();
        }
        return this.heap.peek();
    }
}

interface comparator {
    (a: number, b: number):number
};

class MinHeap {
    private data:number[];
    private comparator: comparator;
    
    constructor(data:number[] = []) {
        this.data = data;
        this.comparator = (a, b) => a - b;
        this.heapify();
    }

    private heapify():void {
        if (this.size() < 2) return;
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }

    public peek():number | null {
        if (this.size() === 0) return null;
        return this.data[0];
    }

    public offer(value:number):void {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }

    public poll():null | number {
        if (this.size() === 0) {
            return null;
        }
        const result:number = this.data[0];
        const last:number = this.data.pop()!;
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }

    private bubbleUp(index:number):void {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private bubbleDown(index:number):void {
        const lastIndex:number = this.size() - 1;
        while (true) {
            const leftIndex:number = index * 2 + 1;
            const rightIndex:number = index * 2 + 2;
            let findIndex = index;
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    private swap(index1:number, index2:number):void {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    public size():number {
        return this.data.length;
    }
}

// function getRow(rowIndex: number): number[] {
//     const row = [1];
//     for (let i = 1; i <= rowIndex; i++) {
//         const length = row.length;
//         for (let j=length; j >=0; j--) {
//             row[j] = (row[j] ?? 0) + (row[j - 1] ?? 0);
//         }
//     }
//     return row;
// };

function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];
    let rowArr:number[] = [1, 1];

    while (rowIndex > 1) {
        let tempArr:number[] = [1];
        for (let i = 0; i < rowArr.length - 1; i++) {
            tempArr.push(rowArr[i] + rowArr[i+1])
        }
        rowArr = tempArr.concat([1])
        rowIndex--
    }

    return rowArr;
};

function findDisappearedNumbers(nums: number[]): number[] {
    const n:number = nums.length;
    for (const num of nums) {
        const x = (num - 1) % n;
        nums[x] += n;
    }
    const ret:number[] = [];
    for (const [i, num] of nums.entries()) {
        if (num <= n) {
            ret.push(i + 1);
        }
    }
    return ret;
};

function minSwapsCouples(row: number[]): number {
    const n:number = row.length;
    const tot:number = n / 2;
    const f:number[] = new Array(tot).fill(0).map((element, index) => index);
    
    for (let i = 0; i < n; i += 2) {
        const l:number = Math.floor(row[i] / 2);
        const r:number = Math.floor(row[i + 1] / 2);
        add(f, l, r);
    }
    const map:Map<number, number> = new Map();
    for (let i = 0; i < tot; i++) {
        const fx = getf(f, i);
        if (map.has(fx)) {
            map.set(fx, map.get(fx)! + 1);
        } else {
            map.set(fx, 1)
        }
    }
    
    let ret:number = 0;
    for (const [f, sz] of map.entries()) {
        ret += sz - 1;
    }
    return ret;
};  

const getf = (f:number[], x:number):number => {
    if (f[x] === x) {
        return x;
    }
    const newf:number = getf(f, f[x]);
    f[x] = newf;
    return newf;
}

const add = (f:number[], x:number, y:number):void => {
    const fx:number = getf(f, x);
    const fy:number = getf(f, y);
    f[fx] = fy;
};

function findMaxConsecutiveOnes(nums: number[]): number {
    let max:number = 0,
        pre:number = 0,
        next:number = 0;
    
    while (nums[next] !== 1 && next < nums.length) next++;
    pre = next;

    while (next < nums.length) {
        if (nums[next] === 1) {
            next++
        } else {
            max = Math.max(max, next - pre);
            while (nums[next] !== 1 && next < nums.length) next++;
            pre = next;
        }
        if (next === nums.length && nums[next-1] === 1) max = Math.max(max, next - pre);
    }

    return max;
    // return Math.max(...nums.join("").split("0").map(s => s.length));
};

function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let ans:number = 0;
    for (let i = 0; i < nums.length; i += 2) {
        ans += nums[i];
    }
    return ans;
};

function matrixReshape(nums: number[][], r: number, c: number): number[][] {
    // 不满足的话，直接返回
    const nr = nums.length;
    const nc = nums[0].length;
    if(nr * nc !== r * c) return nums;
    const res:number[][] = new Array(r).fill(0).map(v => new Array(c).fill(0));
    let r1:number = 0, 
        c1:number = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[0].length; j++) {
            if (c1 >= c) {
                r1++;
                c1 = 0;
            }
            res[r1][c1] = nums[i][j];
            c1++;
        }
    }

    return res;
};

function minKBitFlips(A: number[], K: number): number {
    let res:number = 0;
    // 对列的长度代表翻转的次数，队列的元素代表从哪一个位置开始翻转
    const que:number[] = new Array<number>();
    for (let i = 0; i < A.length; i++) {
        // 判断是否超出 K 长度
        if (i > (que[0] || 0) + K - 1) que.shift();
        //1.本来是1，翻转奇数次变为0，所以需要再次翻转，放入队列。本来是0，翻转偶数次还是0，所以需要再次翻转，放入队列
        if (que.length % 2 === A[i]) {
            // 后面剩余的元素不到 K 个的时候，还需要翻转则不能成功
            if (i + K > A.length) return -1;
            que.push(i);
            res += 1;
        }
    }
    return res;
};

function longestOnes(A: number[], K: number): number {
    const zeroArr:number[] = [];
    let pre:number = 0,
        res:number = 0;
    A.forEach((v, i) => {if (v === 0) zeroArr.push(i)})
    // 判断是否能全变为1
    if (pre + K >= zeroArr.length) return A.length
    // 开始时候从第一位开始计算
    res = zeroArr[K];

    while (pre < zeroArr.length - K) {
        // 最长能连起来的1的长度 = 第 K+1 个0的前面一个1的位置
        let len:number = (zeroArr[pre + K + 1] || A.length) - 1 - zeroArr[pre]
        res = Math.max(res, len)
        pre++;
    }
    return res;
};

function findShortestSubArray(nums: number[]): number {
    const map:Map<number, number> = new Map<number, number>(),
          maxCountNumArr:number[] = [];
    let maxCount:number = 0,
        maxCountNum:number = 0,
        minLen:number = nums.length;
    
    nums.forEach((v) => {
        map.set(v, (map.get(v) || 0) + 1);
        if (maxCount < map.get(v)!) {
            maxCount = map.get(v)!;
            maxCountNum = v;
        }
    })

    map.forEach((v, k) => {
        if (v === maxCount) maxCountNumArr.push(k)
    })

    for (let num of maxCountNumArr) {
        let pre:number = 0,
            next:number = nums.length - 1;
        while (num != nums[pre]) pre++;
        while (num != nums[next]) next--;
        minLen = Math.min(next - pre + 1, minLen)
    }

    return minLen;
};

// function findShortestSubArray(nums: number[]): number {
//     const mapNumToStart:Map<number, number> = new Map<number, number>(),
//           mapNumToDegree:Map<number, number> = new Map<number, number>();
//     let maxCount:number = 0,
//         minLen:number = 0;
    
//     nums.forEach((v, i) => {
//         if (mapNumToStart.has(v)) {
//             const degree:number = mapNumToDegree.get(nums[i])! + 1;
//             mapNumToDegree.set(nums[i], degree);
//             if (degree > maxCount) {
//                 maxCount = degree;
//                 minLen = i - mapNumToStart.get(nums[i]) + 1;
//             } else if (degree === maxCount) {
//                 minLen = Math.min(minLen, i - mapNumToStart.get(nums[i]) + 1);
//             }
//         } else {
//             mapNumToStart.set(v, i);
//             mapNumToDegree.set(v, 1);
//             minLen = Math.max(1, minLen);
//         }
//     })

//     return minLen;
// };

function longestSubarray(nums: number[], limit: number): number {
    // maxQ为单调递减队列，头部为最大值；minQ为单调递增队列，头部为最小值。
    let maxQ: number[] = [], minQ: number[] = [], start = 0, ans = 0;
    for (let end = 0; end < nums.length; end++) {
        // 新元素入队时，保持maxQ单调递减
        while (maxQ.length > 0 && nums[end] > maxQ[maxQ.length - 1]) {
            maxQ.pop();
        }
        maxQ.push(nums[end]);
        // 新元素入队时，保持minQ单调递增
        while (minQ.length > 0 && nums[end] < minQ[minQ.length - 1]) {
            minQ.pop();
        }
        minQ.push(nums[end]);
        // 比较队列的头部元素，大于limit时窗口需要右移
        while (maxQ[0] - minQ[0] > limit) {
            // 如果当前队列的头部元素被移出窗口，则出队
            if (maxQ[0] === nums[start]) maxQ.shift();
            if (minQ[0] === nums[start]) minQ.shift();
            start++;
        }
        // 窗口移动之后，更新窗口的长度
        ans = Math.max(ans, end - start + 1);
    }
    return ans;
};

function isToeplitzMatrix(matrix: number[][]): boolean {
    for (let i = 1; i < matrix.length; i++) {
        let c:number[] = matrix[i - 1]
        for (let j = 1; j < matrix[i].length; j++) {
            let x:number = j - 1
            if (x >= 0 && x < c.length) {
                if (c[x] !== matrix[i][j]) {
                return false
                }
            }
        }
    }
    return true;
};

function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
    let ret:number = 0, 
        extra:number = 0, 
        tmp:number = 0,
        l:number = 0, 
        r:number = 0;;
    const n = customers.length;

    while(r < n) {
        ret += (1 - grumpy[r]) * customers[r];
        
        tmp += grumpy[r] * customers[r++];
        extra = Math.max(extra, tmp);
        if(r - l == X) tmp -= grumpy[l] * customers[l++];
    }
    return ret + extra;
};

function flipAndInvertImage(A: number[][]): number[][] {
    let row:number = A[0].length;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < row / 2; j++) {
            [A[i][j], A[i][row - 1 - j]] = [1^A[i][row - 1 - j], 1^A[i][j]];
        }
    }
    return A;
};

function transpose(A: number[][]): number[][] {
    return Array.from({length: A[0].length}, (_, k) => A.map(row => row[k]));
};

function longestSubstring(s: string, k: number): number {
    if (s.length < k) return 0;
    const map:Map<string, number> = new Map<string, number>();
    
    for (let c of s) map.set(c, (map.get(c) || 0) + 1);
    
    for (let c of map.keys()) {
        if(map.get(c)! < k){  
            let res:number = 0;
            for (let s1 of s.split(c)) {
                res = Math.max(res,longestSubstring(s1,k));
            }
            return res;
        }
    }

    return s.length;
};

function isMonotonic(A: number[]): boolean {
    function isSorted(arr: number[]): boolean {
        return arr.slice(1).every((item, i) => arr[i] <= item)
    }
    return isSorted(A) || isSorted(A.reverse());
};

class NumArray {
    private dp: number[]
    private constructor(nums: number[]) {
        this.dp = [0];
        for(let i = 0, len = nums.length; i < len; i++) {
            this.dp.push(this.dp[i] + nums[i]);
        }
    }

    public sumRange(i: number, j: number): number {
        return this.dp[j + 1] - this.dp[i];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

class NumMatrix {
    private matrix:number[][];
    constructor(matrix: number[][]) {
        this.matrix = matrix;
    }

    public sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum:number = 0;
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.matrix[i][j]
            }
        }
        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
function countBits(num: number): number[] {
    const bits:number[] = new Array(num + 1);
    bits[0] = 0;
    for (let i = 1; i <= num; ++i) {
        bits[i] = bits[i & (i - 1)] + 1;
    }

    return bits;
};

function maxEnvelopes(envelopes: number[][]): number {
    if (envelopes.length === 0) return 0;
    envelopes.sort((a: number[], b: number[]) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])

    const heights:number[] = envelopes.map(envelope => envelope[1]),
          len = envelopes.length,
          dp:number[] = new Array(len).fill(1);

    for(let i = 1; i < len; i++){
        for(let j = 0; j < i; j++){
            if(heights[i] > heights[j]) dp[i] = Math.max(dp[j] + 1, dp[i])
        }
    }

    return Math.max(...dp);
};
class MyQueue {
    private arr:number[];

    constructor() {
        this.arr = [];
    }

    public push(x: number): void {
        this.arr.push(x);
    }

    public pop(): number | undefined {
        return this.arr.shift();
    }

    public peek(): number {
        return this.arr[0]
    }

    public empty(): boolean {
        return this.arr.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

function nextGreaterElements(nums: number[]): number[] {
    const n:number = nums.length,
          ret:number[] = new Array(n).fill(-1),
          stk:number[] = [];
    for (let i = 0; i < n * 2 - 1; i++) {
        while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
            ret[stk[stk.length - 1]] = nums[i % n];
            stk.pop();
        }
        stk.push(i % n);
    }
    return ret;
};

function partitionII(s: string): string[][] {
    const res:string[][] = [],
          codeArr:number[] = s.split('').map((_v, i) => s.charCodeAt(i));

    const isPalindrome = (start:number, end:number): boolean => {
        for (let i = start, j = end; i < j; i++, j--) {
            if (codeArr[i] != codeArr[j]) {
                return false;
            }
        }
        return true;
    }

    const fn = (arr:string[], i:number) => {
        if (i === s.length) return res.push([...arr]);
        let num:number = 0,
            str:string = "";

        for (let j = i; j < s.length; j++) {
            str += s.charAt(j);
            if (isPalindrome(i, j)) {
                arr.push(str);
                fn([...arr], j + 1);
                arr.pop();
            }
        }
    }
    
    fn([], 0);

    return res;
}

function minCut(s: string): number {
    const len:number = s.length,
          dp:number[] = new Array(len).fill(0).map((_v, i) => i),
          isPalindromic:boolean[][] = new Array(len).fill(0).map(v => new Array(len));
    
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (s.charAt(i) == s.charAt(j) && (j - i <= 1 || isPalindromic[i+1][j-1])) {
                isPalindromic[i][j] = true;
            }
        }
    }

    for (let i = 1; i < len; i++) {
        if (isPalindromic[0][i]) {
            dp[i] = 0;
            continue;
        }
        for (let j = 0; j < i; j++) {
            if (isPalindromic[j + 1][i]) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[len-1]
};

function removeDuplicates(S: string): string {
    const arr:string[] = [S.charAt(0)];
    let i:number = 1;

    while (i < S.length) {
        let str:string = arr.pop()!;
        if (str !== S.charAt(i)) arr.push(str, S.charAt(i));
        i++;
    }

    return arr.join("");
};

function calculate(s: string): number {
    let res:number = 0,
        op:string = "+";

    for (let i = 0; i < s.length; i++) {
        let item:string = s.charAt(i);
        if (item === "+" || item === "-") {
            op = item;            
        } else if (item === "(") {
            let j:number = i,
                num:number = 1;
            while (num !== 0) {
                j++;
                if (s.charAt(j) === ")") num--;
                if (s.charAt(j) === "(") num++;
            }
            let sum:number = calculate(s.substring(i + 1, j));
            res += op === "-" ? -sum : sum;
            i = j;
        } else if (item === " ") {
            continue;
        } else {
            while (RegExp(/[0-9]/g).test(s.charAt(i+1))) {
                i++;
                item += s.charAt(i);
            }
            res += Number(op + item);
        }
    }

    return res;
};

function calculateII(s: string): number {
    let res:number = 0,
        op:string = "+";

    // 处理 * 和 /
    for (let i = 0; i < s.length; i++) {
        let item:string = s.charAt(i);
        if (item === "/" || item === "*") {
            let pre:string = "",
                next:string = "",
                j:number = i,
                k:number = i;
            while (s.charAt(j-1) === " ") j--;
            while (s.charAt(k+1) === " ") k++;
            // 向前找
            while (RegExp(/[0-9]/g).test(s.charAt(j-1))) {
                j--;
                pre = s.charAt(j) + pre;
            }
            // 向后找            
            while (RegExp(/[0-9]/g).test(s.charAt(k+1))) {
                k++;
                next += s.charAt(k);
            }
            let sum:string = item === "/" ? String(Math.floor(Number(pre) / Number(next))) : String(Number(pre) * Number(next));
            s = s.substring(0, j) + sum + s.substring(k+1);
            i = j + sum.length - 1;
        }
    }

    // 处理 + 和 -
    for (let i = 0; i < s.length; i++) {
        let item:string = s.charAt(i);
        if (item === "+" || item === "-") {
            op = item;            
        } else if (item === " ") {
            continue;
        } else if (item === "/" || item === "*") {
            let pre:string = "",
                next:string = "",
                j:number = i,
                k:number = i;
            while (s.charAt(j-1) === " ") j--;
            while (s.charAt(k+1) === " ") k++;
            // 向前找
            while (RegExp(/[0-9]/g).test(s.charAt(j-1))) {
                j--;
                pre = s.charAt(j) + pre;
            }
            // 向后找            
            while (RegExp(/[0-9]/g).test(s.charAt(k+1))) {
                k++;
                next += s.charAt(k);
            }
            let sum:string = item === "/" ? String(Math.floor(Number(pre) / Number(next))) : String(Number(pre) * Number(next));
            s = s.substring(0, j) + sum + s.substring(k+1);
            i = j + sum.length - 1;
        } else {
            while (RegExp(/[0-9]/g).test(s.charAt(i+1))) {
                i++;
                item += s.charAt(i);
            }
            res += Number(op + item);
        } 
    }

    return res;
};

function calculateIII(s: string): number {
    let num:number = 0,
        sign:string = '+';
    const stack: number[] = [];

    for(let i = 0; i < s.length; i ++) {
        if(RegExp(/[0-9]/g).test(s.charAt(i))) {
            num = num * 10 + Number(s[i])
        } 
        if(['+', '-', '*', '/'].indexOf(s[i]) > -1 || i === s.length - 1) {
            switch(sign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    const v1:number = stack.pop()!;
                    stack.push(v1 * num);
                    break;
                case '/':
                    const v2:number = stack.pop()!;
                    stack.push(v2 > 0 ? Math.floor(v2 / num): Math.ceil(v2 / num));
                    break;
                default:
                    break;
            }
            sign = s.charAt(i);
            num = 0
        }
    } 
    return stack.reduce((a, b) => a + b)
};

function isValidSerialization(preorder: string): boolean {
    let i:number = 0,
        slots:number = 1;
    while (i < preorder.length) {
        if (slots === 0) return false;
        if (preorder[i] === ',') {
            i++;
        } else if (preorder[i] === '#') {
            slots--;
            i++;
        } else {
            while (i < preorder.length && preorder[i] !== ',') i++;
            slots++;
        }
    }
    return slots === 0;
};
class MyHashSet {
    private arr:number[];
    constructor() {
        this.arr = [];
    }

    public add(key: number): void {
        if (!this.contains(key)) {
            this.arr.push(key);
        }
    }

    public remove(key: number): void {
        let i:number = this.arr.indexOf(key);
        if (i !== -1) {
            this.arr.splice(i, 1);
        }
    }

    public contains(key: number): boolean {
        let i:number = this.arr.indexOf(key);
        return i !== -1;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

 class MyHashMap {
    private obj:Record<string, number>;
    constructor() {
        this.obj = {};
    }

    public put(key: number, value: number): void {
        this.obj[`${key}`] = value;
    }

    public get(key: number): number {
        let value:number | null = this.obj[`${key}`];
        return value !== undefined ? value : -1;
    }

    public remove(key: number): void {
        delete this.obj[`${key}`];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

 function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length;
    const columns = matrix[0].length;
    const total = rows * columns;
    const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(true));
    const result: number[] = new Array(total).fill(0);
    let directionIndex = 0;
    let row = 0;
    let column = 0;
    const direction = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    for (let i = 0; i < total; i += 1) {
        result[i] = matrix[row][column];
        visited[row][column] = false;
        const nextRow = row + direction[directionIndex][0];
        const nextColumn = column + direction[directionIndex][1];
        if (
        !(
            nextRow >= 0 &&
            nextRow < rows &&
            nextColumn >= 0 &&
            nextColumn < columns &&
            visited[nextRow][nextColumn]
        )
        ) {
        directionIndex = (directionIndex + 1) % 4;
        }
        row += direction[directionIndex][0];
        column += direction[directionIndex][1];
    }
    return result;
};

function generateMatrix(n: number): number[][] {
    const r:number[][] = new Array(n).fill(0).map(_v => new Array(n));
    let i:number = 0, 
        j:number = 0, 
        k:number = 1;

    while(!r[i][j] && k < n * n) {
        while(j < n-1 && !r[i][j+1]) r[i][j++] = k++;
        while(i < n-1 && !r[i+1][j]) r[i++][j] = k++;
        while (j > 0 && !r[i][j-1]) r[i][j--] = k++;
        while (i > 0 && !r[i-1][j]) r[i--][j] = k++;
    }

    r[i][j] = k;
    return r;
};
function numDistinct(s: string, t: string): number {
    const m:number = s.length, 
          n:number = t.length,
          dp:number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    if (m < n) return 0;
    
    for (let i = 0; i <= m; i++) dp[i][n] = 1;
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (s[i] == t[j]) {
                dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
            } else {
                dp[i][j] = dp[i + 1][j];
            }
        }
    }
    return dp[0][0];
};

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let dummy:ListNode | null = new ListNode(0),
        pre:ListNode | null = dummy;          
    dummy.next = head;
    for (let i = 1; i < left; i++) pre = pre.next!;
    
    head = pre.next!;
    for (let i = left; i < right; i++) {
        let temp:ListNode | null = head.next!;
        head.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }
    return dummy.next;
};

class ParkingSystem {
    private map:Map<number, number>;
    constructor(big: number, medium: number, small: number) {
        this.map = new Map<number, number>([[1, big], [2, medium], [3, small]])
    }

    public addCar(carType: number): boolean {
        let count:number = this.map.get(carType)!;
        if (count === 0) return false;
        this.map.set(carType, count - 1);
        return true;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
 
 function evalRPN(tokens: string[]): number {
    const stack: number[] = new Array<number>();
    const evalFn = (preNum:number, nextNum:number, operator:string): number => {
        let res:number = 0;
        switch(operator) {
            case "+":
                res = preNum + nextNum;
                break;
            case "-":
                res = preNum - nextNum;                
                break;
            case "*":
                res = preNum * nextNum;
                break;
            case "/":
                res = ~~(preNum / nextNum);
                break;
            default:
                break;
        }
        return res;
    }
    tokens.forEach((v) =>{
        if (new RegExp(/[0-9]/).test(v)) {
            stack.push(Number(v));
        } else {
            let nextNum:number = stack.pop()!,
                preNum:number = stack.pop()!,
                res:number = evalFn(preNum, nextNum, v);
            stack.push(res);
        }
    })

    return stack[0];
};

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let flag: boolean = false;
    const n: number = matrix.length,
          m: number = matrix[0].length;
    
    for (let i = 0; i < n; i++) {
        if (matrix[i][0] == 0) flag = true;
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] == 0) matrix[i][0] = matrix[0][j] = 0;
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 1; j--) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
        }
        if (flag) matrix[i][0] = 0;
    }
};

function hammingWeight(n: number): number {
    let ret:number = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) ret++;
    }
    return ret;
};

// class NestedIterator {
//     stack = []

//     constructor(nestedList: NestedInteger[]) {
//         this.stack = nestedList
//     }

//     hasNext(): boolean {
//         while (this.stack.length > 0 && !this.stack[0].isInteger()) {
//             const _list = this.stack.shift().getList()
//             this.stack = _list.concat(this.stack)
//         }
//         return this.stack.length > 0
//     }

//     next(): number {
//         return this.stack.shift().getInteger()
//     }
// }

function find132pattern(nums: number[]): boolean {
    const stack: number[] = [];
    let mid:number = Number.MIN_SAFE_INTEGER;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (mid > nums[i]) return true;
        
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            mid = stack.pop()!;
        }
        
        stack.push(nums[i]);
    }

    return false;
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicatesII(head: ListNode | null): ListNode | null {
    if (!head) return head;
    const dummy: ListNode | null = new ListNode(0, head);
    let cur: ListNode | null = dummy;

    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const val: number = cur.next.val;
            while (cur.next && cur.next.val === val) {
                cur.next = cur.next.next;
            } 
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};

function deleteDuplicatesI(head: ListNode | null): ListNode | null {
    let pre: ListNode | null = new ListNode(0, head),
        node: ListNode | null = pre;

    while (node !== null) {
        let temp: ListNode | null = node.next;
        while (temp && temp.next && temp.val === temp.next.val) temp = temp.next;
        node.next = temp;
        node = node.next;
    }

    return pre.next;
};

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null) return head;
    let newHead: ListNode | null = head,
        preNode: ListNode | null = new ListNode(0, head),
        len: number = 0;
    while (1) {
        len++;
        if (newHead.next === null) {
            newHead.next = head;
            break;
        }
        newHead = newHead.next;
    }
    
    k %= len;
    k = len - k;
    newHead = head;

    while (k > 0) {
        k--;
        preNode = preNode.next!;
        newHead = newHead.next!;
    }
    preNode.next = null;

    return newHead;
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
    private cur: TreeNode | null;
    private stack: TreeNode[];;
    constructor(root: TreeNode | null) {
        this.cur = root;
        this.stack = [];
    }

    public next(): number {
        while (this.cur !== null) {
            this.stack.push(this.cur);
            this.cur = this.cur.left!;
        }
        this.cur = this.stack.pop()!;
        const ret: number = this.cur.val;
        this.cur = this.cur.right;
        return ret;
    }

    public hasNext(): boolean {
        return this.cur !== null || this.stack.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
 function reverseBits(n: number): number {
	let rev: number = 0;
    for (let i = 0; i < 32 && n > 0; ++i) {
        rev |= (n & 1) << (31 - i);
        n >>>= 1;
    }
    return rev >>> 0;
};

function searchMatrix(matrix: number[][], target: number): boolean {
    const row: number = matrix[0].length,
          col: number = matrix.length;

    for (let i = 0; i < col; i++) {
        // 每一行的最后一个元素和第一个元素之间
        if (matrix[i][row - 1] >= target && matrix[i][0] <= target) {
            return matrix[i].indexOf(target) > -1;
        }
    }

    return false;
};

function subsetsWithDup(nums: number[]): number[][] {
    const ret: number[][] = [];
    // 先排序
    nums.sort((a, b) => a - b);

    const bfs = (resArr: number[], restArr: number[]): void => {
        ret.push([...resArr]);
        for (let i = 0; i < restArr.length; i++) {
            if (restArr[i-1] === restArr[i]) continue;
            resArr.push(restArr[i]);
            bfs([...resArr], restArr.slice(i+1));
            resArr.pop();
        }
    }
    bfs([], nums)
    return ret;
};

function clumsy(N: number): number {
    const a: number[] = [1, 2, 2, -1];
    if(N > 4) {
        return N + a[N % 4];
    } else if(N > 2) {
        return N + 3;
    } else {
        return N;
    }
};

function trap(height: number[]): number {
    if(height.length < 3) return 0;

    let left: number = 0, 
        right: number = height.length - 1,
        leftmax: number = height[left], 
        rightmax: number = height[right],
        res: number = 0;

    while(left < right){
        if(leftmax < rightmax){
            res += leftmax - height[left++];
            leftmax = Math.max(height[left], leftmax);
        }else{
            res += rightmax - height[right--];
            rightmax = Math.max(height[right], rightmax);
        }
    }

    return res;
};

function longestCommonSubsequence(text1: string, text2: string): number {
    const m: number = text1.length, 
          n: number = text2.length,
          dp: number[][] = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        const c1: string = text1.charAt(i - 1);
        for (let j = 1; j <= n; j++) {
            const c2: string = text2.charAt(j - 1);
            if (c1 == c2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};
function numRabbits(answers: number[]): number {
    const count: Map<number, number> = new Map<number, number>();
    for (const y of answers) {
        count.set(y, (count.get(y) || 0) + 1);
    }
    let ans: number = 0;
    for (const [y, x] of count.entries()) {
        ans += Math.floor((x + y) / (y + 1)) * (y + 1);
    }
    return ans;
};
/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p: number = m + n - 1;
    m--;
    n--;
    while (m >= 0 && n >= 0) {
        nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    }
    while (n >= 0) {
        nums1[p--] = nums2[n--];
    }
};
function removeDuplicates1(nums: number[]): number {
    let len: number = nums.length,
        slow: number = 2,
        fast: number = 2;
    if (len <= 2) return len;
    
    while (fast < len) {
        if (nums[slow-2] !== nums[fast]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};

function searchII(nums: number[], target: number): boolean {
    const len: number = nums.length;
    if (len === 1) return nums[0] === target
    let l: number = 0,
        r: number = len - 1;
    while (l <= r)  {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) return true;
        // l, r, m 相同
        if (nums[l] == nums[m] && nums[m] == nums[r]) {
            ++l;
            --r;
        } else if (nums[l] <= nums[m]) {
            if (nums[l] <= target && target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (nums[m] < target && target <= nums[len - 1]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return false;
};

function findMin(nums: number[]): number {
    const len: number = nums.length;
    let l: number = 0,
        r: number = len - 1;
    if (nums[l] <= nums[r]) return nums[l];
    while (l < r) {
        // 只剩下两个值的时候直接返回
        if (r - l == 1) return Math.min(nums[l], nums[r]);
        let m: number = Math.floor((l + r) / 2);
        // 最小值在后部分
        if (nums[l] < nums[m]) {
            l = m;
        } else {
        // 最小值在前部分
            r = m;
        }
    }
    return nums[0]
};

function findMinII(nums: number[]): number {
    const len: number = nums.length;
    let l: number = 0,
        r: number = len - 1;
    while (l < r) {
        // 只剩下两个值的时候直接返回
        if (r - l == 1) return Math.min(nums[l], nums[r]);
        let m: number = Math.floor((l + r) / 2);
        // l, r, m 相同
        while (nums[l] == nums[m] && nums[m] == nums[r]) {
            ++l;
            --r;
        }
        if (nums[l] < nums[r]) return nums[l];
        // 最小值在后部分
        if (nums[l] <= nums[m]) {
            l = m;
        } else {
        // 最小值在前部分
            r = m;
        }
    }
    return nums[0];
};

function isUgly(n: number): boolean {
    if (n <= 0) return false;
    const factors: number[] = [2, 3, 5];
    for (const factor of factors) {
        while (n % factor === 0) n /= factor;
    }
    return n == 1;
};
function nthUglyNumber(n: number): number {
    const dp: Array<number> = new Array(n + 1).fill(0);
    dp[1] = 1;
    let p2: number = 1, p3: number = 1, p5: number = 1;
    for (let i = 2; i <= n; i++) {
        const num2: number = dp[p2] * 2, num3: number = dp[p3] * 3, num5: number = dp[p5] * 5;
        dp[i] = Math.min(num2, num3, num5);
        if (dp[i] === num2) {
            p2++;
        }
        if (dp[i] === num3) {
            p3++;
        }
        if (dp[i] === num5) {
            p5++;
        }
    }
    return dp[n];
};

function largestNumber(nums: number[]): string {
    const firstNumArr: string[][] = new Array(10).fill(0).map(_ => new Array());
    let res: string = "";
    nums.forEach((v) => {
        let str: string = String(v),
            idx: number = Number(str.charAt(0)),
            len: number = firstNumArr[idx].length;
        for (let i = 0; i < firstNumArr[idx].length; i++) {
            if (isBig(str, firstNumArr[idx][i])) {
                firstNumArr[idx].splice(i, 0, str);
                break;
            }
        }
        // 假如长度不变就代表未曾添加
        if (firstNumArr[idx].length === len) firstNumArr[idx].push(str);
    })
    firstNumArr.reverse().forEach((arr) => {
        arr.forEach((v) => {
        if (!(res === "" && v === "0")) res += v
        })
    })
    return res || '0';
};

function isBig(str1: string, str2: string): boolean {
    return (str1+str2) > (str2+str1)
}

function minDiffInBST(root: TreeNode | null): number {
    let ans: number = Number.MAX_SAFE_INTEGER, 
        pre: number = -1;
    const dfs = (root: TreeNode | null): void => {
        if (root === null) {
            return;
        }
        dfs(root.left);
        if (pre == -1) {
            pre = root.val;
        } else {
            ans = Math.min(ans, root.val - pre);
            pre = root.val;
        }
        dfs(root.right);
    }
    dfs(root);
    return ans;
};

function minDiffInBSTII(root: TreeNode | null): number {
    if (root === null) return 0;
    const stack: TreeNode[] = [];
    let min: number = Number.MAX_VALUE,
        node: TreeNode | null = root,
        pre: number = -min;

    while (stack.length > 0 || node != null) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
        let item: TreeNode = stack.pop()!;
        min = Math.min(item.val - pre, min);
        if (min === 1) return 1;
        pre = item.val;
        node = item.right;
    }
    return min;
};

class Trie {
    private root: any;
    constructor() {
        this.root = Object.create(null);
    }
    public insert(word: string): void {
        let node = this.root;
        for (const c of word) {
            if (!node[c]) node[c] = Object.create(null);
            node = node[c];
        }
        node.isWord = true;
    }
    public traverse(word: string): any {
        let node = this.root;
        for (const c of word) {
            node = node[c];
            if (!node) return null;
        }
        return node;
    }
    public search(word: string): boolean {
        const node = this.traverse(word);
        return !!node && !!node.isWord;
    }
    public startsWith(prefix: string): boolean {
        return !!this.traverse(prefix)
    }
}

function rob(nums: number[]): number {
    const len: number = nums.length;
    if (len === 1) return nums[0];
    if (len === 2) return Math.max(nums[0], nums[1]);
    return Math.max(robRange(nums.slice(1)), robRange(nums.slice(0, len - 1)))
};

function robRange(nums: number[]): number {
    const len: number = nums.length;
    if (len === 2) return Math.max(nums[0], nums[1]);
    const dp: number[] = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }
    return dp[len - 1];
}

function isScramble(s1: string, s2: string): boolean {
    const n = s1.length;
    const m = s2.length;
    if (n !== m) return false;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dp[i][j] = new Array(n + 1).fill(false);
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j][1] = s1[i] === s2[j];
        }
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            for (let j = 0; j < n - len + 1; j++) {
                // 已经记录过的值就无需再改写
                for (let k = 1; k < len && !dp[i][j][len]; k++) {
                    dp[i][j][len] = (dp[i][j][k] && dp[i + k][j + k][len - k]) ||
                    (dp[i][j + len - k][k] && dp[i + k][j][len - k]);
                }
            }
        }
    }
    return dp[0][0][n];
};

function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    const getKey = (value: number): number => {
        return Math.floor(value / (t + 1));
    }
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const key: number = getKey(nums[i]);

        if (map.has(key)) return true;  
        if (map.has(key - 1) && nums[i] - map.get(key - 1)! <= t) return true;
        if (map.has(key + 1) && map.get(key + 1)! - nums[i] <= t) return true;

        map.set(key, nums[i]);
        if(i >= k) {
            map.delete(getKey(nums[i-k]))
        }
    }
    return false
};

function removeDuplicatesII(nums: number[]): number {
    let idx: number = 0;
    const len: number = nums.length;
    if (len === 0) return 0;
    for (let i = 0; i < len; i++) {
        while (i < len && nums[i] === nums[i+1]) i++;
        if (i < len) {
            nums[idx] = nums[i];
            idx++;
        }
    }
    return idx;
};

function removeElement(nums: number[], val: number): number {
    const len: number = nums.length;
    let i: number = 0;
    for (let num of nums) {
        if (num !== val) {
            nums[i] = num;
            i++;
        }
    }
    return i;
};

function strStr(haystack: string, needle: string): number {
    let n: number = haystack.length, 
        L: number = needle.length;
    for (let start = 0; start < n - L + 1; start++) {
        if (haystack.substring(start, start + L) === needle) {
            return start;
        }
    }
    return -1;
};

function strStrII(haystack: string, needle: string): number {
    const n: number = haystack.length, 
          m: number = needle.length;
    if (m === 0) return 0;
    const pi: number[] = new Array(m).fill(0);

    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) j = pi[j - 1];
        if (needle[i] == needle[j]) j++;
        pi[i] = j;
    }

    for (let i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack[i] != needle[j]) j = pi[j - 1];
        if (haystack[i] == needle[j]) j++;
        if (j === m) return i - m + 1;
    }
    return -1;
};
// 暴力法， 不能通过全部测试用例
// function numDecodings(s: string): number {
//     let res: number = 0;
//     const fn = function(str: string): void {
//         if (str.length === 0) {
//             res++;
//             return;
//         }
//         if (str.substr(0, 1) !== "0") {
//             fn(str.substring(1));
//             if (str.length > 1 && Number(str.substr(0, 2)) < 27) {
//                 fn(str.substring(2));
//             }
//         }
//     }
//     fn(s);
//     return res;
// };

// function numDecodings(s: string): number {
//     const  len: number = s.length,
//            dp: number[] = new Array(len+1).fill(0);
//     dp[0] = 1;
//     for (let i = 1; i <= len; i++) {
//         if (s.charAt(i-1) !== "0") {
//             dp[i] += dp[i-1];
//         }
//         if (i > 1 && s.charAt(i-2) !== "0" && Number(s.substr(i-2, 2)) < 27) {
//             dp[i] += dp[i-2]
//         }
//     }
//     return dp[len];
// };

function numDecodings(s: string): number {
    const  len: number = s.length;
    let num1: number = 1,
        num2: number = 0,
        res: number = 0;
    for (let i = 1; i <= len; i++) {
        res = 0;
        if (s.charAt(i-1) !== "0") {
            res += num1;
        }
        if (i > 1 && s.charAt(i-2) !== "0" && Number(s.substr(i-2, 2)) < 27) {
            res += num2;
        }
        num2 = num1;
        num1 = res;
    }
    return res;
};

function maxSumSubmatrix(matrix: number[][], k: number): number {
    const row: number = matrix.length,
          col: number = matrix[0].length;
    let res: number = Number.MIN_SAFE_INTEGER;
    for (let h = 0; h < row; h++) {
        let rowSum: number[] = new Array(col).fill(0);
        for (let l = h; l < row; l++) {
            for (let i = 0; i < col; i++) {
                rowSum[i] += matrix[l][i];
            }
            for (let pre = 0; pre < col; pre++) {
                let sum: number = 0;
                for (let next = pre; next < col; next++) {
                    sum += rowSum[next];
                    if (sum === k) return k;
                    if (sum > res && sum < k) res = sum;
                }
            }
        }
    }
    return res;
};

function largestDivisibleSubset(nums: number[]): number[] {
    const len: number = nums.length;
    nums.sort((a, b) => a - b);

    const dp: number[] = new Array(len).fill(1);
    let maxSize: number = 1,
        maxVal: number = dp[0];
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        if (dp[i] > maxSize) {
            maxSize = dp[i];
            maxVal = nums[i];
        }
    }

    const res: number[] = [];
    // 提前返回
    if (maxSize === 1) {
        res.push(nums[0]);
        return res;
    }
    
    for (let i = len - 1; i >= 0 && maxSize > 0; i--) {
        if (dp[i] === maxSize && maxVal % nums[i] === 0) {
            res.push(nums[i]);
            maxVal = nums[i];
            maxSize--;
        }
    }
    return res;
};
function combinationSum4(nums: number[], target: number): number {
    const dp: number[] = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (num <= i) {
                dp[i] += dp[i - num];
            }
        }
    }
    return dp[target];
};
// function increasingBST(root: TreeNode | null): TreeNode | null {
//     const fakeNode = new TreeNode();
//     let pre = fakeNode;

//     const dfsHelper = (root: TreeNode | null) => {
//         if (!root) return;
//         dfsHelper(root.left);
//         root.left = null;
//         pre.right = root;
//         pre = root;
//         dfsHelper(root.right);
//         return;
//     }
//     dfsHelper(root);
//     return fakeNode.right;
// };

function shipWithinDays(weights: number[], D: number): number {
    let l: number = Math.max(...weights),
        r: number = weights.reduce((pre, cur) => pre + cur);

    while (r > l) {
        const mid: number = Math.floor((l + r) / 2);
        let need: number = 1, 
            cur: number = 0;

        for (const weight of weights) {
            if (cur + weight > mid) {
                need++;
                cur = 0;
            } 
            cur += weight;
        }
        if (need <= D) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (root === null) return 0;
    const queue: TreeNode[] = [root];
    let sum: number = 0;
    while (queue.length > 0) {
        let node: TreeNode = queue.shift()!;
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
        if (node.val >= low && node.val <= high) sum += node.val;
    }
    return sum;
};

function judgeSquareSum(c: number): boolean {
    for (let a = 0; a * a <= c; a++) {
        const b: Number = Math.sqrt(c - a * a);
        if (b === parseInt(String(b))) {
            return true;
        }
    }
    return false;
};

function canCross(stones: number[]): boolean {
    const n: number = stones.length;
    const dp: boolean[][] = new Array(n).fill(0).map(() => new Array(n).fill(false));
    dp[0][0] = true;
    for (let i = 1; i < n; ++i) {
        if (stones[i] - stones[i - 1] > i) {
            return false;
        }
    }
    for (let i = 1; i < n; ++i) {
        for (let j = i - 1; j >= 0; --j) {
            const k = stones[i] - stones[j];
            if (k > j + 1) {
                break;
            }
            dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1];
            if (i === n - 1 && dp[i][k]) {
                return true;
            }
        }
    }
    return false;
};

function singleNumber(nums: number[]): number {
    let a: number = 0, 
        b: number = 0;
    for (const num of nums) {
        b = ~a & (b ^ num);
        a = ~b & (a ^ num);
    }
    return b;
};

interface Employee {
    id: number,
    importance: number,
    subordinates: number[],
}

function GetImportance(employees: Employee[], id: number): number {
	const map: Map<number, Employee> = new Map();
    for (const employee of employees) {
        map.set(employee.id, employee);
    }
    const dfs = (id: number) => {
        const employee: Employee = map.get(id)!;
        let total: number = employee.importance;
        const subordinates: number[] = employee.subordinates;
        for (const subId of subordinates) {
            total += dfs(subId);
        }
        return total;
        
    }

    return dfs(id);
};

function leastBricks(wall: number[][]): number {
    const cnt: Map<number, number> = new Map();
    for (const widths of wall) {
        const n: number = widths.length;
        let sum: number = 0;
        for (let i = 0; i < n - 1; i++) {
            sum += widths[i];
            cnt.set(sum, (cnt.get(sum) || 0) + 1);
        }
    }
    let maxCnt: number = 0;
    for (const [_, c] of cnt.entries()) {
        maxCnt = Math.max(maxCnt, c);
    }
    return wall.length - maxCnt;
};

function reverse(x: number): number {
    if(x === 0) return 0;
    
    let res: number = 0;
    if (x > 0) {
        res = Number(`${x}`.split('').reverse().join(''));
        return res > 2147483647 ? 0 : res;
    } else {
        res = Number(`${-x}`.split('').reverse().join(''));
        return -res < -2147483648 ? 0 : -res;
    }
};

function minCost(houses: number[], cost: number[][], m: number, n: number, target: number): number {
     // 将颜色调整为从 0 开始编号，没有被涂色标记为 -1
    houses = houses.map(c => --c);
    const dp = new Array(m).fill(0)
                           .map(() => new Array(n).fill(0)
                           .map(() => new Array(target).fill(Number.MAX_VALUE)));
    
    // dp 所有元素初始化为极大值
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (houses[i] !== -1 && houses[i] !== j) {
                continue;
            }
            
            for (let k = 0; k < target; ++k) {
                for (let j0 = 0; j0 < n; ++j0) {
                    if (j === j0) {
                        if (i === 0) {
                            if (k === 0) {
                                dp[i][j][k] = 0;
                            }
                        } else {
                            dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j][k]);
                        }
                    } else if (i > 0 && k > 0) {
                        dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j0][k - 1]);
                    }
                }

                if (dp[i][j][k] !== Number.MAX_VALUE && houses[i] === -1) {
                    dp[i][j][k] += cost[i][j];
                }
            }
        }
    }
    
    let ans: number = Number.MAX_VALUE;
    for (let j = 0; j < n; ++j) {
        ans = Math.min(ans, dp[m - 1][j][target - 1]);
    }
    return ans === Number.MAX_VALUE ? -1 : ans;
};

function deleteAndEarn(nums: number[]): number {
    const sum: number[] = new Array(Math.max(...nums) + 1).fill(0);
    nums.forEach((v) => {
        sum[v] += v;
    });
    let first: number = sum[0],
        second: number = Math.max(first, sum[1]);
    for (let i = 2; i < sum.length; i++) {
        let temp: number = second;
        second = Math.max(second, first + sum[i]);
        first = temp;
    }
    return second;
};

function decode(encoded: number[], first: number): number[] {
    const n: number = encoded.length + 1;
    const arr: number[] = new Array(n).fill(0);
    arr[0] = first;
    for (let i = 1; i < n; i++) {
        arr[i] = arr[i - 1] ^ encoded[i - 1];
    }
    return arr; 
};

function xorOperation(n: number, start: number): number {
    let res: number = 0;
    for (let i = 0; i < n; i++) {
        res ^= start + 2 * i;
    }
    return res;
};

function minimumTimeRequired(jobs: number[], k: number): number {
    const n: number = jobs.length;
    const workers: number[] = new Array(k).fill(0);
    let ans: number = Infinity;
    
    const dfs = (i: number, max: number): void => {
       if(i === n) {
        ans = Math.min(max,ans);
        return;
       }
       const set = new Set();
       for (let j = 0; j < k; j++) {
         if(workers[j]+jobs[i] > ans) {
           continue;
         }
         if(set.has(workers[j])) {
           continue;
         }
         set.add(workers[j]);
         workers[j] += jobs[i];
         dfs(i+1,Math.max(workers[j],max));
         workers[j] -= jobs[i];
       }
    };
    
    dfs(0,0);
    return ans;
};

function minDays(bloomDay: number[], m: number, k: number): number {
    if (m * k > bloomDay.length) return - 1;

    let num = m * k;

    if (num === bloomDay.length) return Math.max(...bloomDay);

    let l = Math.min(...bloomDay),
        r = Math.max(...bloomDay),
        mid = 0,
        f = 0,
        c = 0;

    while(l < r) {
        mid = (l + r) >> 1;
        f = 0;
        c = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                f++;
                if (f === k) {
                    c++;
                    f = 0;
                }
            } else {
                f = 0;
            }
        }
        if (c >= m) {
            r = mid;
        } else {
            l  = mid + 1;
        }
    }
    return l;
};

// function decode(encoded: number[]): number[] {
//     const n: number = encoded.length + 1;
//     let total: number = 0;
//     for (let i = 1; i <= n; i++) {
//         total ^= i;
//     }
//     let odd: number = 0;
//     for (let i = 1; i < n - 1; i += 2) {
//         odd ^= encoded[i];
//     }
//     const perm: number[] = new Array(n).fill(0);
//     perm[0] = total ^ odd;
//     for (let i = 0; i < n - 1; i++) {
//         perm[i + 1] = perm[i] ^ encoded[i];
//     }
//     return perm;
// };

function xorQueries(arr: number[], queries: number[][]): number[] {
    const res: number[] = new Array(queries.length).fill(0);
    for (let i = 0; i < res.length; i++) {
        for (let j = queries[i][0]; j <= queries[i][1]; j++) {
            res[i] ^= arr[j];
        }
    }
    return res;
};

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const fn = function(root: TreeNode | null): string {
        if (root === null) return "";
        const arr: number[] = [];
        const dfs = function(node: TreeNode): void {
            if (node.left === null && node.right === null) arr.push(node.val);
            if (node.left !== null) dfs(node.left);
            if (node.right !== null) dfs(node.right);
        }
        dfs(root);
        return arr.join(",");
    }
    return fn(root1) === fn(root2);
};

function sumOddLengthSubarrays(arr: number[]): number {
    const len: number = arr.length;
    let sumArr: number[] = new Array(len).fill(0);
    let sum = 0;
    for (let i = 0; i < len; i++) {
      if (i === 0) {
        sumArr[i] = arr[i];
        continue;
      }
      sumArr[i] = sumArr[i-1] + arr[i];
    }
    for (let i = 1; i <= len; i += 2) {
      sum += sumArr[i - 1];
      for (let j = i; j < len; j++) {
        sum += sumArr[j] - sumArr[j - i];
      }
    }
    return sum;
  };
  class Solution {
    data: number[] = [];
    sum: number;
    constructor(w: number[]) {
      this.data = w
      this.sum = w.reduce((a, b) => a + b);
    }
  
    pickIndex(): number {
      let r: number = Math.floor(Math.random() * this.sum);
      for (let i = 0; i < this.data.length; i ++) {
        r -= this.data[i];
        if (r < 0) {
          return i;
        }
      }
      return 0;
    }
  }

function corpFlightBookings(bookings: number[][], n: number): number[] {
	const diff: number[] = new Array(n).fill(0);
	bookings.forEach((item) => {
		const [first, last, seats] = item;
		diff[first-1] += seats;
		if (last < n) diff[last] -= seats;
	});
	const res: number[] = new Array(n).fill(0);
	res[0] = diff[0];
	for (let i = 1; i < n; i++) {
		res[i] = res[i-1] + diff[i];
	}
	return res;
};

function compareVersion(version1: string, version2: string): number {
    const len1: number = version1.length;
    const len2: number = version2.length;
    let i: number = 0;
    let j: number = 0;
    while (i < len1 && j < len2) {
        let num1: string = '';
        let num2: string = '';
        while(version1[i] === '.' && i < len1) {
            num1 += version1[i];
            i++;
        }
        while(version2[j] === '.' && j < len2) {
            num2 += version2[j];
            j++;
        }
        if (Number(num1) > Number(num2)) return 1;
        if (Number(num1) < Number(num2)) return -1;
        i++;
        j++;
    }
    if (i < len1) {
        while((version1[i] === '0' || version1[i] === '.') && i < len1) i++;
        if (i < len1) return 1;
    }
    if (j < len2) {
        while((version2[j] === '0' || version2[j] === '.') && j < len2) j++;
        if (j < len2) return -1;
    }
    return 0;
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let pre: ListNode | null = head;
    let next: ListNode | null = head;
    if (k == 0 || head === null) return null;
    while (next !== null && k > 0) {
        next = next.next;
        k--;
    }
    if (next === null && k > 0) return null;
    while (next !== null) {
        pre = pre.next;
        next = next.next;
    }
    return pre;
};

/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

 function rand10(): number {
    let row: number, 
        col: number, 
        idx: number;
    do {
        row = rand7();
        col = rand7();
        idx = col + (row - 1) * 7;
    } while (idx > 40);
    return 1 + (idx - 1) % 10;
};

function search(nums: number[], target: number): number {
    let mid:number = 0, 
        left:number = 0, 
        right:number = nums.length-1;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);

        if(nums[mid] == target) return mid;

        if(target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
};

function balancedStringSplit(s: string): number {
  //L is 1 R is -1
  let sum: number = 0;
  let res: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') sum++;
    if (s[i] === 'R') sum--;
    if (sum === 0) res++;
  }
  return res;
};
type Pair = {
    profit: number;
    capital: number;
}

class Heap {
    // heap sorted by the decreasing profit
    private heap: Pair[];
    constructor() {
        this.heap = [];
    }
    insert(pair: Pair) {
        this.heap.push(pair);
        // up adjust
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const idx_parent = Math.floor((idx - 1) / 2);
            if (this.heap[idx_parent].profit < this.heap[idx].profit) {
                [this.heap[idx_parent], this.heap[idx]] = [this.heap[idx], this.heap[idx_parent]];
                idx = idx_parent;
            } else break;
        }
        // down adjust
        while (idx < this.heap.length) {
            const idx_left = idx * 2 + 1, idx_right = idx * 2 + 2;
            if (idx_right < this.heap.length) {
                if (this.heap[idx_left].profit > this.heap[idx_right].profit) {
                    if (this.heap[idx_left].profit > this.heap[idx].profit) {
                        [this.heap[idx_left], this.heap[idx]] = [this.heap[idx], this.heap[idx_left]];
                        idx = idx_left;
                    } else break;
                } else {
                    if (this.heap[idx_right].profit > this.heap[idx].profit) {
                        [this.heap[idx_right], this.heap[idx]] = [this.heap[idx], this.heap[idx_right]];
                        idx = idx_right;
                    } else break;
                }
            } else if (idx_left < this.heap.length) {
                if (this.heap[idx_left].profit > this.heap[idx].profit) {
                    [this.heap[idx_left], this.heap[idx]] = [this.heap[idx], this.heap[idx_left]];
                    idx = idx_left;
                } else break;
            } else break;
        }
    }
    pop(): Pair {
        const res = this.heap[0];
        if (this.heap.length === 1) {
            this.heap = [];
            return res;
        }
        this.heap[0] = this.heap.pop();
        // down adjust
        let idx = 0;
        while (idx < this.heap.length) {
            const idx_left = idx * 2 + 1, idx_right = idx * 2 + 2;
            if (idx_right < this.heap.length) {
                if (this.heap[idx_left].profit > this.heap[idx_right].profit) {
                    if (this.heap[idx_left].profit > this.heap[idx].profit) {
                        [this.heap[idx_left], this.heap[idx]] = [this.heap[idx], this.heap[idx_left]];
                        idx = idx_left;
                    } else break;
                } else {
                    if (this.heap[idx_right].profit > this.heap[idx].profit) {
                        [this.heap[idx_right], this.heap[idx]] = [this.heap[idx], this.heap[idx_right]];
                        idx = idx_right;
                    } else break;
                }
            } else if (idx_left < this.heap.length) {
                if (this.heap[idx_left].profit > this.heap[idx].profit) {
                    [this.heap[idx_left], this.heap[idx]] = [this.heap[idx], this.heap[idx_left]];
                    idx = idx_left;
                } else break;
            } else break;
        }
        return res;
    }
    isEmpty(): boolean {
        return this.heap.length === 0;
    }
}

function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    // greedy: for each round, we get the most profitable item which capital is not greater than capital we have
    // cuz profits are always greater than 0, we maintain a heap whose items' capital are all not greater than the capital we have,
    // after each round, as the capital we have increases, we insert the heap the items whose capitals are not greater than the capital
    // we have
    const pairs: Pair[] = [];
    for (let i = 0; i < profits.length; i++) {
        pairs.push({
            profit: profits[i],
            capital: capital[i]
        });
    }
    pairs.sort((a, b) => a.capital - b.capital);
    let idx = 0;
    const heap = new Heap();
    insert();
    while (k-- && !heap.isEmpty()) {
        const top = heap.pop();
        w += top.profit;
        insert();
    }
    return w;

    function insert() {
        while (idx < profits.length) {
            if (pairs[idx].capital <= w) {
                heap.insert(pairs[idx++]);
            } else break;
        }
    }

};
function fullJustify(words: string[], maxWidth: number): string[] {
    const ans: string[] = [];
    let right: number = 0, 
        n: number = words.length;
    while (true) {
        const left: number = right; // 当前行的第一个单词在 words 的位置
        let sumLen: number = 0; // 统计这一行单词长度之和
        while (right < n && sumLen + words[right].length + right - left <= maxWidth) {
            sumLen += words[right].length;
            right++;
        }

        // 当前行是最后一行：单词左对齐，且单词之间应只有一个空格，在行末填充剩余空格
        if (right === n) {
            const s = words.slice(left).join(' ');
            ans.push(s + blank(maxWidth - s.length));
            break;
        }
        const numWords: number = right - left;
        const numSpaces: number = maxWidth - sumLen;

        // 当前行只有一个单词：该单词左对齐，在行末填充空格
        if (numWords === 1) {
            ans.push(words[left] + blank(numSpaces));
            continue;
        }
        
        // 当前行不只一个单词
        const avgSpaces: number = Math.floor(numSpaces / (numWords - 1));
        const extraSpaces = numSpaces % (numWords - 1);
        const s1 = words.slice(left, left + extraSpaces + 1).join(blank(avgSpaces + 1)); // 拼接额外加一个空格的单词
        const s2 = words.slice(left + extraSpaces + 1, right).join(blank(avgSpaces)); // 拼接其余单词
        ans.push(s1 + blank(avgSpaces) + s2);
    }
    return ans;
};

const blank = (n) => {
    return new Array(n).fill(' ').join('');
}
function chalkReplacer(chalk: number[], k: number): number {
    const sum: number[] = [...chalk];
    for (let i = 1; i < sum.length; i++) {
        sum[i] = sum[i-1] + chalk[i]
    }
    k = k % sum[sum.length - 1];
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] > k) return i; 
    }
    return 0;
};
var findIntegers = function(n) {
    const dp = new Array(31).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i < 31; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    let pre = 0, res = 0;
    for (let i = 29; i >= 0; --i) {
        let val = 1 << i;
        if ((n & val) !== 0) {
            res += dp[i + 1];
            if (pre === 1) {
                break;
            }
            pre = 1;
        } else {
            pre = 0;
        }

        if (i === 0) {
            ++res;
        }
    }

    return res;
};
function checkValidString(s: string): boolean {
    const leftParenthesis: number[] = [];
    const asterisks: number[] = [];
    for (let i = 0; i < s.length; i++) {
        const item: string = s.charAt(i);
        if (item === '(') leftParenthesis.push(i);
        if (item === '*') asterisks.push(i);
        if (item === ')') {
            if (leftParenthesis.length > 0) {
                leftParenthesis.pop();
            } else if (asterisks.length > 0) {
                asterisks.pop();
            } else {
                return false;
            }
        }
    }
    while (leftParenthesis.length > 0 && asterisks.length > 0) {
        if (leftParenthesis.pop() > asterisks.pop()) return false;
    }
    return leftParenthesis.length === 0;
};
function numberOfBoomerangs(points: number[][]): number {
    let count = 0
    // 一次遍历：每项都做为顶点
    for(let i = 0; i < points.length; i++) {
        let obj = {}
        let x = points[i][0]
        let y = points[i][1]
        // 二次遍历：计算其他点距离顶点的距离
        for(let j = 0; j < points.length; j++) {
            if (i === j) continue
            let x1 = points[j][0]
            let y1 = points[j][1]
            // 距离：通过勾股定理计算
            let attr = (x1 - x) ** 2 + (y1 - y) ** 2
            if (obj[attr] == undefined) {
                obj[attr] = 1
            } else {
                count += (obj[attr]++) * 2
            }
        }
    }
    return count
};
function findLongestWord(s: string, dictionary: string[]): string {
    dictionary.sort((a,b)=>b.length-a.length||a.localeCompare(b))
    const n = s.length;
    for(const str of dictionary){
        const sLen=str.length
        let i=0,j=0
        while(i<n&&j<sLen){
            if(str[j]===s[i]){
                i++
                j++
            }else{
                i++
            }
        }
        if(j===sLen)return str
    }
    return '';
};
function findPeakElement(nums: number[]): number {
    let left = 0, 
    right = nums.length - 1;
    while (left < right ) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

// function fib(n: number): number {
//     if (n === 1 || n === 2) return 1;
//     return fib(n-1) + fib(n-2);
// }
function fib(n: number): number {
    let pre = 0;
    let next = 1;
    
    if (n === 0) return 0;
    if (n === 1) return 1;

    for (let i = 2; i <= n; i++) {
        const newNext = next + pre;
        pre = next;
        next = newNext;
    }
    return next;
}
function toLowerCase(s: string): string {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCode > 64 && charCode < 91) {
            res += String.fromCharCode(charCode + 32);
        } else {
            res += s.charAt(i);
        }
    }

    return res;
};
function maxIncreaseKeepingSkyline(grid: number[][]): number {
    let sum: number = 0;
    // 求出每一行每一列最高
    const row: number[] = new Array(grid.length).fill(0);
    const col: number[] = new Array(grid[0].length).fill(0);
    for (let i = 0; i < grid.length; i++) {
        row[i] = Math.max(...grid[i]);
    }

    for (let j = 0; j < grid[0].length; j++) {
        const arr: number[] = []
        for (let i = 0; i < grid.length; i++) {
            arr.push(grid[i][j])
        }
        col[j] = Math.max(...arr);
    }
    for (let j = 0; j < grid[0].length; j++) {
        for (let i = 0; i < grid.length; i++) {
            sum += Math.min(row[i], col[j]) - grid[i][j];
        }
    }
    return sum;
};
function scheduleCourse(courses: number[][]): number {
    courses.sort((a, b) => a[1] - b[1]);
    const queue: number[] = [];
    let count: number = 0;
    for (let i = 0; i < courses.length; i++) {
      const duration = courses[i][0];
      if (count + duration <= courses[i][1]) {
        queue.push(duration);  
        queue.sort((a, b)=> a - b);
        count += duration;
      } else {
          if (queue[queue.length - 1] >= duration) {
              count -= queue.pop()!
              count += duration;
              queue.push(duration);
              queue.sort((a, b) => a - b);
          }
      }
    }
    return queue.length;
}

function loudAndRich(richer: number[][], quiet: number[]): number[] {
    const n = quiet.length
    const g = new Array(n).fill(0).map(v => new Array())
    const d = new Array(n).fill(0)
    const ans = new Array(n).fill(0).map((v, i) => v = i)

    for (let e of richer) {
        let [a, b] = e
        g[a].push(b)
        d[b] += 1
    }

    const queue = []
    for (let i = 0; i < n; i++)
        if (d[i] === 0) queue.push(i)

    while (queue.length > 0) {
        let t = queue.shift()
        let q_t = quiet[ans[t]]
        for(let i of g[t]){
            if(q_t < quiet[ans[i]]){
                ans[i] = ans[t]
            }
            if(--d[i] === 0) queue.push(i)
        }
    }
    return ans
};
function visiblePoints(points: number[][], angle: number, location: number[]): number {
    const calc = (x,y) => {
        return Math.atan2(y- location[1],x - location[0]) * 180 / Math.PI;
    }

    let self = 0
    let ret = 0
    let angles = []

    for(const [x,y] of points){
        if(x === location[0] && y === location[1]){
            self++
        }else{
            const rad = calc(x,y)
            angles.push(rad)
        }
    }

    angles.sort((a,b) => a - b)
    // console.log(angles)
    angles = angles.concat(angles.map((a) => a + 360))
    // console.log(angles)


    for(let l = 0, r = 0; r < (angles.length); r++){
        while(l < r && angles[r] - angles[l] > angle){
            l++
        }
        ret = Math.max(ret, r - l + 1)
    }

    return ret + self;
};
function numWaterBottles(numBottles: number, numExchange: number): number {
    let res: number = numBottles;
    
    while (numBottles >= numExchange) {
        const num = Math.floor(numBottles / numExchange);
        res += num;
        numBottles = numBottles % numExchange + num;
    }

    return res;
};
function countBattleships(board: string[][]): number {
    const row: number = board.length;
    const col: number = board[0].length;
    let ans: number = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // 当前位置是战舰
            if (board[i][j] == 'X') {
                // 假如当前的左边和上边也是战舰，就看作同一个战舰
                if ((i > 0 && board[i - 1][j] == 'X') || (j > 0 && board[i][j - 1] == 'X')) continue;
                ans++;
            }
        }
    }
    return ans;
};
function findJudge(n: number, trust: number[][]): number {
	const inToValues: number[] = new Array(n+1).fill(0);
	for ( const v of trust) {
		inToValues[v[0]]--;
		inToValues[v[1]]++;
	}
	for (let i = 1; i <= n; i++) {
		if (inToValues[i] === n - 1) return i;
	}
	return -1;
};
function findRadius(houses: number[], heaters: number[]): number {
    houses.sort((a,b)=>a-b)
    heaters.sort((a,b)=>a-b)
    let ans = 0
    for(let i=0, j=0; i < houses.length; i++){
        let cur = Math.abs(houses[i] - heaters[j])
        while(j < heaters.length && heaters[j] <= houses[i])
            cur = houses[i] - heaters[j++]
        if(j < heaters.length)
            cur = Math.min(cur, heaters[j] - houses[i])
        ans = Math.max(ans, cur)
        if(j > 0)
            j--
    }
    return ans
};
function dayOfYear(date: string): number {
     const dateArr = date.split('-');
    const month = Number(dateArr[1]);
    const d = new Date(date);
    let result = Number(dateArr[2]);
    for (let i = 1; i < month; i++) {
        d.setMonth(i, 0); //月份是0-11
        result += d.getDate();
    }
    return result;
};
function repeatedStringMatch(a: string, b: string): number {
    if (a.length >= b.length && a.indexOf(b) !== -1) {
        return 1;
    }
    let str = a;
    while (str.length < b.length) {
        str += str;
    }
    str += a;
    const index = str.indexOf(b);
    if (index === -1) {
        return -1;
    }
    return Math.ceil((b.length + index) / a.length);
};
function longestDupSubstring(s: string): string {
    let pre: number = 0;
    let str: string = '';
    let next: number = pre + 1;
    let temp: string = s[pre];

    while (pre < s.length - 1) {
        while (s.lastIndexOf(temp) > pre && next < s.length) {
            if (str.length < temp.length) {
                str = temp;
            }
            temp += s[next];
            next++;
        }
        temp = temp.slice(1, temp.length)
        pre++;
    }

    return str;
};
function eatenApples(apples: number[], days: number[]): number {
    let res = 0, minDay = days[0] - 1;
    const freshArr = new Array(days.length).fill(0);
    for (let i = 0; i < freshArr.length; i++) {
        if (i < days.length && days[i] > 0) {
            freshArr[i + days[i] - 1] = (freshArr[i + days[i] - 1] || 0) + apples[i];
            minDay = Math.min(minDay, i + days[i] - 1);
        }
        minDay = Math.max(minDay, i);
        while (minDay < freshArr.length && !freshArr[minDay]) minDay++;
        if (freshArr[minDay]) res++, freshArr[minDay]--;
    }
    return res;
};
function findOcurrences(text: string, first: string, second: string): string[] {
    const  arr: string[] = text.split(' ');
    const res: string[] = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === first && arr[i+1] === second) {
            res.push(arr[i+2]);
        }
    }

    return res;
};

function numFriendRequests(ages: number[]): number {
    let ans: number = 0;
    ages.sort((a, b) => a - b);
    let left: number = 0;
    let right: number = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < 15) {
            continue;
        }
        while (ages[left] <= 0.5 * ages[i] + 7) {
            ++left;
        }
        while (right + 1 < ages.length && ages[right + 1] <= ages[i]) {
            ++right;
        }
        ans += right - left;
    }
    return ans;
};

function countQuadruplets(nums: number[]): number {
    let ans: number = 0;
    const len: number = nums.length;
    const count: Map<number, number> = new Map<number, number>();

    for (let b = len - 3; b >= 1; b--) {
        for (let d = b + 2; d < len; d++) {
            count.set(nums[d] - nums[b + 1], (count.get(nums[d] - nums[b + 1]) || 0) + 1);
        }
        for (let a = b - 1; a >= 0; a--) {
            ans += count.get(nums[a] + nums[b]) || 0;
        }
    }
    
    return ans;
};
function construct2DArray(original: number[], m: number, n: number): number[][] {
    const len: number = original.length;
    if (len !== m * n) return [];
    const res: number[][] = [];

    for (let i = 0; i < m; i++) {
        const temp: number[] = [];
        for (let j = 0; j < n; j++) {
            temp.push(original[n * i + j]);
        }
        res.push(temp);
    }
    return res;
};
function lastRemaining(n: number): number {
    let a1: number = 1;
    let k: number = 0;
    let cnt: number = n;
    let step: number = 1;
    while (cnt > 1) {
        if (k % 2 === 0) {
            a1 += step;
        } else {
            a1 += cnt % 2 === 0 ?  0 : step;
        }
        k++;
        cnt = cnt >> 1;
        step = step << 1;
    }
    return a1;
};
function dayOfTheWeek(day: number, month: number, year: number): string {
    let days: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let date: Date = new Date();
    let time: number = date.setFullYear(year);
    time = date.setMonth(month-1);
    time = date.setDate(day);
    let weekday: number = new Date(time).getDay();
    return days[weekday];
};
const getNextResult = (mouse, cat, turns) => {
    const MOUSE_WIN = 1;
    const CAT_WIN = 2;
    const DRAW = 0;

    var catMouseGame = function(graph) {
        this.n = graph.length;
        this.graph = graph;
        this.dp = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n * 2).fill(-1)));
        return getResult(1, 2, 0);
    };

    const getResult = (mouse, cat, turns) => {
        if (turns === n * 2) {
            return DRAW;
        }
        if (dp[mouse][cat][turns] < 0) {
            if (mouse === 0) {
                dp[mouse][cat][turns] = MOUSE_WIN;
            } else if (cat === mouse) {
                dp[mouse][cat][turns] = CAT_WIN;
            } else {
                getNextResult(mouse, cat, turns);
            }
        }
        return dp[mouse][cat][turns];
    }
    const curMove = turns % 2 === 0 ? mouse : cat;
    const defaultResult = curMove == mouse ? CAT_WIN : MOUSE_WIN;
    let result = defaultResult;
    const nextNodes = graph[curMove];
    for (const next of nextNodes) {
        if (curMove === cat && next === 0) {
            continue;
        }
        const nextMouse = curMove == mouse ? next : mouse;
        const nextCat = curMove == cat ? next : cat;
        const nextResult = getResult(nextMouse, nextCat, turns + 1);
        if (nextResult !== defaultResult) {
            result = nextResult;
            if (result !== DRAW) {
                break;
            }
        }
    }
    dp[mouse][cat][turns] = result;
}
function modifyString(s: string): string {
    const arr: string[] = ['a', 'b', 'c'];
    const strs: string[] = s.split('');

    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === '?') {
            const pre: string = strs[i - 1] || '';
            let next: string = strs[i + 1] || '';
            for (let j = 0; j < 3; j++) {
                if (next === '?') next = 'c';
                if ([pre, next].includes(arr[j])) continue;
                strs[i] = arr[j]
            }
        }
    }

    return strs.join('');
};
function simplifyPath(path: string): string {
    const stack: string[] = [];
    const strs: string[] = path.split('/');
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === '..') {
            stack.pop();
        } else if (strs[i] && strs[i] !== '.') {
            stack.push(strs[i]);
        }
    }
    return `/${stack.join('/')}`;
};
function maxDepth(s: string): number {
    const strs: string[] = s.split('');
    let res: number = 0;
    let count: number = 0;

    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === ')') {
            // 出栈
            count--;
        } else if (strs[i] === '(') {
            // 入栈
            count++;
            res = Math.max(res, count);
        }
    }
    return res;
};
function maxDepth(s: string): number {
    const strs: string[] = s.split('');
    let res: number = 0;

    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === '(') {
            let l: number = 1;
            let r: number = 0;
            for (let j = i - 1; j >= 0; j--) {
                if (strs[j] === '(') l++;
                if (strs[j] === ')') l--;
            }
            for (let j = i + 1; j < strs.length; j++) {
                if (strs[j] === ')') r++;
                if (strs[j] === '(') r--;
            }
            res = Math.max(res, Math.min(l, r));
        }
    }
    return res;
};
function grayCode(n: number): number[] {
    //【笔记】自己与自己左移一位进行异或，得到的就是它的格雷码。
    const res: number[] = [];
    for (let i = 0; i < (1 << n); ++i) {
        res[i] = i ^ (i >> 1);
    }
    return res;
};
function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let max: number = releaseTimes[0];
    let ans: string = keysPressed[0];
    const len: number = releaseTimes.length;

    for (let i = 1; i < len; i++) {
        const timer: number = releaseTimes[i] - releaseTimes[i-1];
        const key: string = keysPressed[i];
        if (max > timer) continue;
        if (max < timer) {
            max = timer;
            ans = key;
        }
        if (max === timer && ans.charCodeAt(0) < key.charCodeAt(0)) {
            ans = key;
        }
    }

    return ans;
};
function isAdditiveNumber(num: string): boolean {
    // 暴力。。。
    const len: number = num.length;
    // 验证函数
    const validate = (len1: number, len2: number): boolean => {
        let first: string = num.substr(0, len1);
        let second: string = num.substr(len1, len2);
        let str: string = num.substr(len1 + len2);
        // 开头为 0 || 小于两个数
        if (
            (first.length > 1 && first[0] === '0') ||
            (second.length > 1 && second[0] === '0') || 
            str === '') 
            return false;
        while (str.length > 0) {
            const sum: string = (Number(first) + Number(second)).toString();
            const step: number = sum.toString().length;
            if (str.substr(0, step) === sum) {
                [first, second, str] = [second, sum, str.substr(step)]
            } else {
                return false;
            }
        }
        return true;
    }
    
    for (let i = 1; i < len; i++) {
        for (let j = 1; j < len; j++) {
            if (validate(i, j)) return true;
        }
    }

    return false;
};
function isEscapePossible(blocked: number[][], source: number[], target: number[]): boolean {
    // 判断有没有被包裹着 高斯公式 超过 n * (n-1) / 2 就不被包
    const count: number = blocked.length * (blocked.length - 1) / 2;
    // 访问过的
    const visited: Set<string> = new Set();
    // 判断是否符合规范 没越界 不是blocked 没有被访问过
    const check = (rect: number[]): boolean => {
        if (blocked.some(node => node[1] === rect[1] && node[0] === rect[0])) return false;
        if (rect[0] < 0 || rect[1] < 0 || rect[0] > 999999 || rect[1] > 999999) return false;
        if (visited.has(rect.toString())) return false;
        return true;
    }
    // 判断能否超过 count 或者 在同一个圈里面
    const bfs = (rect: number[], targetRect: number[]): boolean => {
        let n: number = 0;
        const temp: number[][] = [rect];

        while (temp.length > 0) {
            const arr: number[] = temp.shift();
            const x: number = arr[0];
            const y: number =  arr[1];
            // 找到目标了 或者 超过了 直接返回
            if ((x === targetRect[0] && y === targetRect[1]) || n > count) {
                visited.clear();
                return true;
            }
            // 上下左右
            if (check([x, y-1])) {
                n++;
                temp.push([x, y-1]);
                visited.add([x, y-1].toString())
            }
            if (check([x, y+1])) {
                n++;
                temp.push([x, y+1]);
                visited.add([x, y+1].toString())
            }
            if (check([x-1, y])) {
                n++;
                temp.push([x-1, y]);
                visited.add([x-1, y].toString())
            }
            if (check([x+1, y])) {
                n++;
                temp.push([x+1, y]);
                visited.add([x+1, y].toString())
            }
        }
        visited.clear();
        return false;
    }
    
    return bfs(source, target) && bfs(target, source);
};
function increasingTriplet(nums: number[]): boolean {
    // 单调栈
    const stack: number[] = [nums[0]];
    let second: number = Number.MAX_VALUE;
    for (let i = 1; i < nums.length; i++) {
        const item: number = stack.pop()!;
        if (second < nums[i]) return true;

        if (item < nums[i]) {
            stack.push(item, nums[i]);
        } else if(nums[i] < item) {
            if (stack.length > 0) {
                const pre: number = stack.pop();
                if (nums[i] > pre) {
                    stack.push(pre, nums[i]);
                } else if (nums[i] < pre) {
                    stack.push(nums[i]);
                    second = Math.min(item, second);
                } else {
                    stack.push(pre, item);
                }
            } else {
                stack.push(nums[i]);
            }
        } else {
            stack.push(item);
        }
        if (stack.length > 2) return true;
    }
    return false;
};
// 简单一点的写法
function increasingTriplet(nums: number[]): boolean {
    if(nums.length < 3) return false;

    let first: number = Number.MAX_SAFE_INTEGER;
    let second: number = Number.MAX_SAFE_INTEGER;

    for(let num of nums) {
        if (num <= first){
            first = num;
        } else if (num <= second) {
            second = num;
        } else if (num > second) {
            return true;
        }
    }
    return false;
};
// 最短版本
function increasingTriplet(nums: number[]): boolean {
    // 单调栈
    let first: number = nums[0];
    let second: number = Number.MAX_VALUE;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > second) return true;
        if (nums[i] > first) second = Math.min(second, nums[i]);
        if (nums[i] < first) first = nums[i];
    }
    return false;
};
function dominantIndex(nums: number[]): number {
    let max: number = 0;
    let res: number = -1;
    nums.forEach(num => {
        max = Math.max(num, max);
    })
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== max && nums[i] * 2 > max) return -1;
        if (nums[i] === max) res = i;
    }
    return res;
};
function dominantIndex(nums: number[]): number {
    if (nums.length === 1) return 0;
    let first: number = -1;
    let second: number = -1;
    let res: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
            res = i;
        } else if (nums[i] > second) { 
            second = nums[i];
        }
    }
    return first >= second * 2 ? res : -1;
};
function swap<T = number>(arr: T[], a: number, b: number) {
    const t: T = arr[a]
    arr[a] = arr[b]
    arr[b] = t
  }
  
  const compare = (a: number, b: number) => {
    return a > b
  }
  
  interface ItemI {
    val: number,
    index: number
  }
  type Item = [ItemI, ItemI]
  
  const getVal = (v: Item) => {
    if (!v) {
      return Infinity
    }
    return v[0].val + v[1].val
  }
  
  class MinHeap {
    private data: Item[] = []
    private count: number = 0;
  
    size() {
      return this.count
    }
  
    isEmpty() {
      return this.count === 0
    }
  
    getData() {
      return this.data
    }
  
    heapify(arr: Item[]) {
      this.data = []
      this.count = arr.length
      if (arr.length <= 1) {
        this.data = arr
        return arr
      }
      arr.forEach((v, i) => {
        this.data[i] = v
      })
      for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
        this.shiftDown(i)
      }
    }
  
    // 对叶子节点进行操作
    private shiftUp(k: number) {
      // 对元素位置进行调整
      // 对于堆 永远有父节点大于子节点
      // 对子节点i 有 parent=Math.floor((i-1)/2) 
      // 对父节点i 有 left child=i*2+1  right child =i*2+2
      // 进行替换位置的时候 需要对比的初始值为 子节点 i= this.count
      const pIndex = Math.floor((k - 1) / 2)
      if (k > 0 && compare(getVal(this.data[pIndex]), getVal(this.data[k]))) {
        // 进行位置的交换
        swap(this.data, k, pIndex)
        this.shiftUp(pIndex)
      }
    }
  
    // 添加元素
    insert(item: Item) {
      // 注意 data[0] 应该永远是undefined 便于计算
      this.data[this.count++] = item
      // 调整位置
      this.shiftUp(this.count - 1)
    }
  
    // 对非叶子节点进行操作
    private shiftDown(k: number) {
      // 向下进行比较
      const leftC = this.data[k * 2 + 1]
      const rightC = this.data[k * 2 + 2]
      const current = this.data[k]
      if (leftC === undefined && rightC === undefined) {
        return
      }
      const compareIndex = !compare(getVal(leftC), getVal(rightC)) ? k * 2 + 1 : k * 2 + 2
      if (compare(getVal(current), getVal(this.data[compareIndex]))) {
        // 进行位置的交换
        swap(this.data, k, compareIndex)
        this.shiftDown(compareIndex)
      }
    }
  
    // 取出元素 必定为最大的元素
    extractTarget(): Item {
  
      if (this.data.length === 0) {
        throw new Error('没有元素了')
      }
      // 先跟最后一个元素调换一个位置再逐步进行下走
      swap(this.data, 0, --this.count)
      const target = this.data.pop()
      this.shiftDown(0)
      return target!
    }
  }
  
  
  function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const minHeap = new MinHeap()
    let first = 0
    let second = 0
    // 构造最开始的结构
    for (let i = 0; i < k && i < nums1.length; i++) {
      minHeap.insert([{ index: i, val: nums1[i] }, { index: 0, val: nums2[0] }])
    }
    let index = 0
    // 当拿出来了k个或者里面已经没有其他元素的时候 也就是first跟second都是最后一个数的时候
    first = 0
    second = 0
    let result: number[][] = []
    while (index < k && !minHeap.isEmpty()) {
      const i = minHeap.extractTarget()
      result.push([i[0].val, i[1].val])
      first = i[0].index
      second = i[1].index
      if (second < nums2.length - 1) {
        minHeap.insert([{ val: nums1[first], index: first }, { val: nums2[second + 1], index: second + 1 }])
      }
      //  else if (first < nums1.length - 1) {
      //   minHeap.insert([{ val: nums1[first + 1], index: first + 1 }, { val: nums2[second], index: second }])
      // }
      index++
    }
  
    return result
  };
  type HeapType = "min" | "max";
  class Heap<T = number> {
      type: HeapType;
      heap: T[];
      constructor(type: HeapType = "min", compare?: (a: T, b: T) => boolean) {
          this.type = type;
          this.compare = compare || this.compare;
          this.heap = [];
      }
      compare(a: T, b: T) {
          return this.type === "min" ? a < b : a > b;
      }
      isEqual(a: T, b: T) {
          return a === b;
      }
      swap(i: number, j: number) {
          [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
      }
      insert(val: T) {
          this.heap.push(val);
          this.shiftUp(this.heap.length - 1);
      }
      getParentIndex(index: number) {
          return Math.floor((index - 1) / 2);
      }
      getLeftIndex(index: number) {
          return 2 * index + 1;
      }
      getRightIndex(index: number) {
          return 2 * index + 2;
      }
      shiftUp(index: number) {
          if (index === 0) return;
          const parentIndex = this.getParentIndex(index);
          if (
              this.heap[parentIndex] != null &&
              this.compare(this.heap[index], this.heap[parentIndex])
          ) {
              this.swap(parentIndex, index);
              this.shiftUp(parentIndex);
          }
      }
      pop() {
          if (this.heap.length === 0) throw new Error("error");
          if (this.heap.length === 1) return this.heap.pop()!;
          const res = this.heap[0];
          this.heap[0] = this.heap.pop()!;
          this.shiftDown(0);
          return res;
      }
      shiftDown(index: number) {
          const leftIndex = this.getLeftIndex(index);
          const rightIndex = this.getRightIndex(index);
          if (
              this.heap[leftIndex] != null &&
              this.compare(this.heap[leftIndex], this.heap[index])
          ) {
              this.swap(leftIndex, index);
              this.shiftDown(leftIndex);
          }
          if (
              this.heap[rightIndex] != null &&
              this.compare(this.heap[rightIndex], this.heap[index])
          ) {
              this.swap(rightIndex, index);
              this.shiftDown(rightIndex);
          }
      }
      peek() {
          if (this.heap.length === 0) throw new Error("error");
          return this.heap[0];
      }
      size() {
          return this.heap.length;
      }
  }
  
  function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
      const heap = new Heap<[number, number]>(
          "min",
          (a, b) => nums1[a[0]] + nums2[a[1]] < nums1[b[0]] + nums2[b[1]]
      );
      const res: [number, number][] = [];
      const set = new Set<string>()
      heap.insert([0, 0]);
      while (heap.size() > 0 && res.length < k) {
          const arr = heap.pop();
          if(set.has(arr.join('.'))) continue
          res.push([nums1[arr[0]], nums2[arr[1]]]);
          set.add(arr.join('.'))
          if (arr[0] + 1 < nums1.length) heap.insert([arr[0] + 1, arr[1]]);
          if (arr[1] + 1 < nums2.length) heap.insert([arr[0], arr[1] + 1]);
      }
      return res;
  };
function totalMoney(n: number): number {
    const w: number = n / 7 >> 0;
    const d: number = n % 7;
    return 28 * w + 7 * w * (w - 1) / 2 + d * w + d * (d + 1) / 2;
};
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class Solution {
    private head: ListNode;
    constructor(head: ListNode | null) {
        this.head = head;
    }

    getRandom(): number {
        let ans: number = 0;
        let i: number = 1;
        let node: ListNode = this.head;
        while ( node != null) {
            if (Math.floor(Math.random() * i) === 0) { // 1/i 的概率选中（替换为答案）
                ans = node.val;
            }
            i++;
            node = node.next
        }
        return ans;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
export {
    removeDuplicatesII,
    isScramble,
    calculate,
    characterReplacement,
    regionsBySlashes,
    hitBricks,
    sortItems,
    calcEquation,
    canPlaceFlowers,
    rotate,
    findTheDifference,
    maxProfit2,
    maxProfit1,
    wordPattern,
    monotoneIncreasingDigits,
    matrixScore,
    leastInterval,
    searchRange,
    countPrimes,
    largestPerimeter,
    generate,
    uniquePaths1,
    fourSumCount,
    splitIntoFibonacci,
    predictPartyVictory,
    wiggleMaxLength,
    reorganizeString,
    containsDuplicate,
    groupAnagrams,
    maximumGap,
    lemonadeChange,
    uniquePaths,
    sortString,
    countNodes,
    findMinArrowShots,
    isAnagram,
    sortList,
    insertionSortList,
    moveZeroes,
    canCompleteCircuit,
    allCellsDistOrder,
    slidingPuzzle,
    reconstructQueue,
    removeKdigits,
    relativeSortArray,
    sortArrayByParityII,
    kClosest,
    maxProfit,
    countRangeSum,
    sortByBits,
    ladderLength,
    insert,
    validMountainArray,
    intersection,
    wordBreak,
    // RandomizedCollection,
    islandPerimeter,
    sumNumbers,
    uniqueOccurrences,
    preorderTraversal,
    RestoreTreeStructure,
    smallerNumbersThanCurrent,
    longestMountain,
    videoStitching,
    minFallingPathSum,
    maxScoreWords,
    isPalindrome,
    partitionLabels,
    search,
    findTargetSumWays,
    uniquePathsIII,
    isLongPressedName,
    shortestSubarray,
    postorderTraversal,
    insertIntoBST,
    minimumOperations,
    numJewelsInStones,
    twoSum,
    addTwoNumbers,
    fourSum,
    sumOfDistancesInTree,
    sortColors,
    reverseString,
    hasCycle,
    detectCycle,
    canPartition,
    getMinimumDifference,
    swapPairs,
    commonChars,
    connect,
    sortedSquares,
    totalNQueens,
    removeNthFromEnd,
    backspaceCompare,
    reorderList1,
    reorderList2,
    solveNQueens,
    lengthOfLIS,
    maxSatisfaction,
}