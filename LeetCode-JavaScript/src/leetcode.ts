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

function maxProfit(k: number, prices: number[]): number {
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
export {
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
