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
  if(root.val > val) {
     root.left = insertIntoBST(root.left,val);
  } else {
      root.right = insertIntoBST(root.right,val);
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
      pre = pre.next;
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
function reorderList1(head: ListNode | null): void | ListNode {
  let node:ListNode | null = head,
      nodeArr:ListNode[] = [],
      pre:number = 1,
      next:number = 0,
      res:ListNode | null = head;

  if(!head) return;

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
function reorderList2(head: ListNode | null): void | ListNode{
  let pre:ListNode | null = head,
      next:ListNode | null = head && head.next,
      res: ListNode | null = head;

  if(!head) return;

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

export {
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
