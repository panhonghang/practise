/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
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

// function postorderTraversal(root: TreeNode | null): number[] {
//     let resArr:number[] = [];

//     const fn= function(node: TreeNode | null): void {
//         if(!node) return;

//         if(node.left) fn(node.left);
//         if(node.right) fn(node.right);
//         resArr.push(node.val);
//     }

//     fn(root)

//     return resArr;
// };

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

export {
    shortestSubarray,
    postorderTraversal,
    insertIntoBST,
    minimumOperations,
    numJewelsInStones
}
