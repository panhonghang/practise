import { 
  shortestSubarray,
  postorderTraversal,
  insertIntoBST,
  minimumOperations,
  numJewelsInStones,
  twoSum,
  addTwoNumbers
} from '../leetcode';

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