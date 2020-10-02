import { 
  shortestSubarray,
  postorderTraversal,
  insertIntoBST,
  minimumOperations,
  numJewelsInStones
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