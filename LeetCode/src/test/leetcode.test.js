import { 
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
  isLongPressedName,
  uniquePathsIII,
  findTargetSumWays,
  search,
} from '../leetcode';

test('二分查找', () => {
  expect(search([-1,1,2], 1)).toBe(1)
})

test('查找目标和', () => {
  expect(findTargetSumWays([1,1,1], 3)).toBe(1)
})

test('查找目标和', () => {
  expect(findTargetSumWays([1,1,1,1,1], 3)).toBe(5)
})

test('不同路径 III', () => {
  expect(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])).toBe(2);
})

test('不同路径 III', () => {
  expect(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]])).toBe(4);
})

test('长按键入', () => {
  expect(isLongPressedName("alex", "alexxr")).toBe(false);
})

test('做菜顺序', () => {
  expect(maxSatisfaction([-1,-8,0,5,-7])).toBe(14);
})

test('和至少为 K 的最短子数组', () => {
  expect(shortestSubarray([1], 1)).toBe(1);
});

test('和至少为 K 的最短子数组', () => {
  expect(shortestSubarray([1, 2], 4)).toBe(-1);
});

test('后续遍历', () => {
  expect(postorderTraversal()).toEqual([]);
});

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function ListNode(val, next){
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

test('后续遍历', () => {
  expect(postorderTraversal(new TreeNode(1))).toEqual([1]);
});

test('插入二叉树', () => {
  expect(insertIntoBST(null, 1)).toEqual(new TreeNode(1));
});

test('秋叶搜集', () => {
  expect(minimumOperations("rrryyyrryyyrr")).toBe(2);
});

test('宝石与石头', () => {
  expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
});

test('两数之和', () => {
  expect(twoSum([1, 2, 3, 4], 5)).toEqual([1, 2]);
});

test('两数相加', () => {
  expect(addTwoNumbers(null, null)).toEqual(null);
});

test('两数相加', () => {
  expect(addTwoNumbers(null, new ListNode(1))).toEqual(new ListNode(1));
});

test('两数相加', () => {
  let res = new ListNode(0);
  res.next = new ListNode(1);

  expect(addTwoNumbers(new ListNode(9), new ListNode(1))).toEqual(res);
});

test('四数之和', () => {
  expect(fourSum([1,0,-1,0,-2,2], 0)).toEqual([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
});

test('树中距离之和', () => {
  expect(sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]])).toEqual([8,12,6,10,10,10]);
});

test('颜色分类', () => {
  expect(sortColors([2,0,2,1,1,0])).toEqual([0,0,1,1,2,2]);
});

test('颜色分类', () => {
  expect(sortColors([2,0,1])).toEqual([0,1,2]);
});

test('反转字符串', () => {
  expect(reverseString(['a','b','c'])).toEqual(['c','b','a']);
});

test('反转字符串', () => {
  expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"]);
});

test('环形链表', () => {
  expect(hasCycle()).toBeFalsy();
});

test('环形链表2', () => {
  expect(detectCycle()).toBeNull;
});


test('分割等和子集', () => {
  expect(canPartition([1,5,11,5])).toBe(true);
});

test('二叉搜索树的最小绝对差', () => {
  expect(getMinimumDifference(null)).toBe(0);
});

test('两两交换链表中的节点', () => {
  expect(swapPairs(null)).toBeNull
});

test('两两交换链表中的节点', () => {
  let input = new ListNode(1);
  input.next = new ListNode(2);

  let output = new ListNode(2);
  output.next = new ListNode(1);

  expect(swapPairs(input)).toEqual(output)
});

test('查找常用字符', () => {
  expect(commonChars(["bella","label","roller"])).toEqual(["e","l","l"])
});

test('查找常用字符', () => {
  expect(commonChars(["cool","lock","cook"])).toEqual(["c","o"])
});

test('填充每个节点的下一个右侧节点指针', () => {
  expect(connect(null)).toEqual(null)
});

test('有序数组的平方', () => {
    expect(sortedSquares([2])).toEqual([4])
});

test('有序数组的平方', () => {
  expect(sortedSquares([-5,3,4,10])).toEqual([9,16,25,100])
});

test('N皇后 II', () => {
  expect(totalNQueens(4)).toEqual(2)
});

test('N皇后 II', () => {
  expect(totalNQueens(10)).toEqual(724)
});

test('删除链表的倒数第N个节点', () => {
  expect(removeNthFromEnd(null)).toBe(null)
});

test('比较含退格的字符串', () => {
  expect(backspaceCompare("ab#c", "ad#c")).toBe(true)
});

test('重排链表 数组解法', () => {
  let ListNode1 = new ListNode(1);
  ListNode1.next = new ListNode(2);
  ListNode1.next.next = new ListNode(3);
  ListNode1.next.next.next = new ListNode(4);

  let ListNode2 = new ListNode(1);
  ListNode2.next = new ListNode(4);
  ListNode2.next.next = new ListNode(2);
  ListNode2.next.next.next = new ListNode(3);

  expect(reorderList1(ListNode1)).toEqual(ListNode2)
});

test('重排链表 数组解法', () => {
  let ListNode1 = new ListNode(1);
  ListNode1.next = new ListNode(2);
  ListNode1.next.next = new ListNode(3);

  let ListNode2 = new ListNode(1);
  ListNode2.next = new ListNode(3);
  ListNode2.next.next = new ListNode(2);

  expect(reorderList1(ListNode1)).toEqual(ListNode2)
});

test('重排链表 双指针解法', () => {
  let ListNode1 = new ListNode(1);
  ListNode1.next = new ListNode(2);
  ListNode1.next.next = new ListNode(3);
  ListNode1.next.next.next = new ListNode(4);

  let ListNode2 = new ListNode(1);
  ListNode2.next = new ListNode(4);
  ListNode2.next.next = new ListNode(2);
  ListNode2.next.next.next = new ListNode(3);

  expect(reorderList2(ListNode1)).toEqual(ListNode2)
});

test('重排链表 双指针解法', () => {
  let ListNode1 = new ListNode(1);
  ListNode1.next = new ListNode(2);
  ListNode1.next.next = new ListNode(3);

  let ListNode2 = new ListNode(1);
  ListNode2.next = new ListNode(3);
  ListNode2.next.next = new ListNode(2);

  expect(reorderList2(ListNode1)).toEqual(ListNode2)
});

test('八皇后', () => {
  expect(solveNQueens(4)).toEqual([[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]])
})

test('最长上升子序列', () => {
  expect(lengthOfLIS([1,3,6,7,9,4,10,5,6])).toEqual(6)
})

test('最长上升子序列', () => {
  expect(lengthOfLIS([])).toEqual(0)
})