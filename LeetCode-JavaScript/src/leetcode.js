"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
exports.maxSatisfaction = exports.lengthOfLIS = exports.solveNQueens = exports.reorderList2 = exports.reorderList1 = exports.backspaceCompare = exports.removeNthFromEnd = exports.totalNQueens = exports.sortedSquares = exports.connect = exports.commonChars = exports.swapPairs = exports.getMinimumDifference = exports.canPartition = exports.detectCycle = exports.hasCycle = exports.reverseString = exports.sortColors = exports.sumOfDistancesInTree = exports.fourSum = exports.addTwoNumbers = exports.twoSum = exports.numJewelsInStones = exports.minimumOperations = exports.insertIntoBST = exports.postorderTraversal = exports.shortestSubarray = exports.isLongPressedName = exports.uniquePathsIII = exports.findTargetSumWays = exports.search = exports.partitionLabels = exports.isPalindrome = exports.maxScoreWords = exports.minFallingPathSum = exports.videoStitching = exports.longestMountain = exports.smallerNumbersThanCurrent = exports.RestoreTreeStructure = exports.preorderTraversal = exports.uniqueOccurrences = exports.sumNumbers = exports.islandPerimeter = exports.wordBreak = exports.intersection = exports.validMountainArray = exports.insert = exports.ladderLength = exports.sortByBits = exports.countRangeSum = exports.maxProfit = exports.kClosest = exports.sortArrayByParityII = exports.relativeSortArray = exports.removeKdigits = exports.reconstructQueue = exports.slidingPuzzle = exports.allCellsDistOrder = exports.canCompleteCircuit = exports.moveZeroes = exports.insertionSortList = exports.sortList = exports.isAnagram = exports.findMinArrowShots = exports.countNodes = exports.sortString = exports.uniquePaths = exports.lemonadeChange = exports.maximumGap = exports.groupAnagrams = exports.containsDuplicate = exports.reorganizeString = exports.wiggleMaxLength = exports.predictPartyVictory = exports.splitIntoFibonacci = exports.fourSumCount = exports.uniquePaths1 = exports.generate = exports.largestPerimeter = exports.countPrimes = exports.searchRange = exports.leastInterval = exports.matrixScore = exports.monotoneIncreasingDigits = exports.wordPattern = exports.maxProfit1 = exports.maxProfit2 = exports.findTheDifference = exports.rotate = exports.canPlaceFlowers = exports.calcEquation = void 0;
var shortestSubarray = function (A, K) {
    var len = Number.MAX_SAFE_INTEGER, sum = 0, pre = 0, next = 0;
    if (A[0] === K)
        return 1;
    while (pre < A.length - 1) {
        if (A[pre] === K)
            return 1;
        next = pre;
        sum = 0;
        while (sum < K && next < A.length) {
            sum += A[next];
            if (sum <= 0) {
                pre = next;
                sum = 0;
            }
            if (sum < K)
                next++;
        }
        if (sum >= K) {
            if (A[pre] > 0)
                len = Math.min(len, next - pre + 1);
            pre++;
        }
        else {
            break;
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? -1 : len;
};
exports.shortestSubarray = shortestSubarray;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function postorderTraversal(root) {
    if (!root)
        return [];
    var resArr = [];
    var queue = [root];
    while (queue.length) {
        var node = queue.shift() || new TreeNode();
        if (node.left)
            queue.unshift(node.left);
        if (node.right)
            queue.unshift(node.right);
        resArr.unshift(node.val);
    }
    return resArr;
}
exports.postorderTraversal = postorderTraversal;
;
function insertIntoBST(root, val) {
    if (!root)
        return new TreeNode(val);
    if (root.val > val && root.left) {
        root.left = insertIntoBST(root.left, val);
    }
    else {
        root.right = root.right && insertIntoBST(root.right, val);
    }
    return root;
}
exports.insertIntoBST = insertIntoBST;
;
function minimumOperations(leaves) {
    var len = leaves.length;
    // 初始状态不可能为 2, 3，设置为 Infinity
    var dp = [leaves[0] === 'r' ? 0 : 1, Infinity, Infinity];
    for (var i = 1; i < len; i++) {
        var isRed = leaves[i] === 'r';
        dp = [
            dp[0] + (isRed ? 0 : 1),
            Math.min(dp[0], dp[1]) + (isRed ? 1 : 0),
            Math.min(dp[1], dp[2]) + (isRed ? 0 : 1),
        ];
    }
    return dp[2];
}
exports.minimumOperations = minimumOperations;
;
function numJewelsInStones(J, S) {
    var res = 0, len = S.length;
    for (var i = 0; i < len; i++) {
        var re = new RegExp(S[i]);
        if (re.test(J))
            res++;
    }
    return res;
}
exports.numJewelsInStones = numJewelsInStones;
;
function twoSum(nums, target) {
    var resArr = [];
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                resArr = [i, j];
                break;
            }
        }
    }
    return resArr;
}
exports.twoSum = twoSum;
;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var temp = 0, pre = l1, next = l2, res = new ListNode(), head = res;
    if (pre === null && next === null)
        return null;
    while (pre || next) {
        res.val = ((pre && pre.val || 0) + (next && next.val || 0) + temp) % 10;
        temp = ((pre && pre.val || 0) + (next && next.val || 0) + temp) / 10;
        temp = Math.floor(temp);
        pre = pre && pre.next || null;
        next = next && next.next || null;
        if (pre === null && next === null)
            break;
        res.next = new ListNode();
        res = res.next;
    }
    if (temp !== 0)
        res.next = new ListNode(temp);
    return head;
}
exports.addTwoNumbers = addTwoNumbers;
;
function fourSum(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    var res = [], left = 0, right = nums.length - 1, sum = 0;
    for (var i = 0; i < nums.length - 3; i++) {
        while (nums[i] == nums[i - 1] && i !== 0)
            i++;
        for (var j = i + 1; j < nums.length - 2; j++) {
            while (nums[j] == nums[j - 1] && j !== i + 1)
                j++;
            left = j + 1;
            right = nums.length - 1;
            while (left < right) {
                sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum == target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    right--;
                    left++;
                    while (nums[right] == nums[right + 1])
                        right--;
                    while (nums[left] == nums[left - 1])
                        left++;
                }
                else if (target < sum) {
                    right--;
                }
                else {
                    left++;
                }
            }
        }
    }
    return res;
}
exports.fourSum = fourSum;
;
var sumOfDistancesInTree = function (N, edges) {
    var e_1, _a;
    var graph = new Array(N);
    for (var i = 0; i < graph.length; i++)
        graph[i] = [];
    try {
        for (var edges_1 = __values(edges), edges_1_1 = edges_1.next(); !edges_1_1.done; edges_1_1 = edges_1.next()) {
            var edge = edges_1_1.value;
            var _b = __read(edge, 2), from = _b[0], to = _b[1];
            graph[from].push(to);
            graph[to].push(from);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (edges_1_1 && !edges_1_1.done && (_a = edges_1["return"])) _a.call(edges_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var distSum = new Array(N).fill(0);
    var nodeNum = new Array(N).fill(1);
    var postOrder = function (root, parent) {
        var e_2, _a;
        var neighbors = graph[root];
        try {
            for (var neighbors_1 = __values(neighbors), neighbors_1_1 = neighbors_1.next(); !neighbors_1_1.done; neighbors_1_1 = neighbors_1.next()) {
                var neighbor = neighbors_1_1.value;
                if (neighbor == parent)
                    continue;
                postOrder(neighbor, root);
                nodeNum[root] += nodeNum[neighbor];
                distSum[root] += nodeNum[neighbor] + distSum[neighbor];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (neighbors_1_1 && !neighbors_1_1.done && (_a = neighbors_1["return"])) _a.call(neighbors_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    var preOrder = function (root, parent) {
        var e_3, _a;
        var neighbors = graph[root];
        try {
            for (var neighbors_2 = __values(neighbors), neighbors_2_1 = neighbors_2.next(); !neighbors_2_1.done; neighbors_2_1 = neighbors_2.next()) {
                var neighbor = neighbors_2_1.value;
                if (neighbor == parent) {
                    continue;
                }
                distSum[neighbor] = distSum[root] - nodeNum[neighbor] + (N - nodeNum[neighbor]);
                preOrder(neighbor, root);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (neighbors_2_1 && !neighbors_2_1.done && (_a = neighbors_2["return"])) _a.call(neighbors_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    postOrder(0, -1);
    preOrder(0, -1);
    return distSum;
};
exports.sumOfDistancesInTree = sumOfDistancesInTree;
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    var _a, _b;
    var pre = 0, next = nums.length - 1;
    for (var i = 0; i <= next; i++) {
        if (nums[i] === 0) {
            _a = __read([nums[pre], nums[i]], 2), nums[i] = _a[0], nums[pre] = _a[1];
            pre++;
        }
        else if (nums[i] === 2) {
            _b = __read([nums[next], nums[i]], 2), nums[i] = _b[0], nums[next] = _b[1];
            next--;
            i--;
        }
    }
    //测试使用
    return nums;
}
exports.sortColors = sortColors;
;
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    var _a;
    var pre = 0, next = s.length - 1;
    while (pre <= next) {
        _a = __read([s[next], s[pre]], 2), s[pre] = _a[0], s[next] = _a[1];
        pre++;
        next--;
    }
    //测试使用
    return s;
}
exports.reverseString = reverseString;
;
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
function hasCycle(head) {
    if (!head)
        return false;
    var pre = head, next = head;
    while (next) {
        pre = pre && pre.next;
        next = next.next && next.next.next || null;
        if (next && next === pre)
            return true;
    }
    return false;
}
exports.hasCycle = hasCycle;
;
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
function detectCycle(head) {
    if (!head)
        return null;
    var pre = head, next = head;
    do {
        pre = pre && pre.next || null;
        next = next && next.next && next.next.next || null;
    } while (next && pre !== next);
    if (next === null)
        return null;
    pre = head;
    while (true) {
        if (pre === next)
            return next;
        pre = pre && pre.next || null;
        next = next && next.next || null;
    }
}
exports.detectCycle = detectCycle;
;
function canPartition(nums) {
    var e_4, _a;
    var n = nums.length;
    var sum = 0, maxNum = 0;
    if (n < 2)
        return false;
    try {
        for (var nums_1 = __values(nums), nums_1_1 = nums_1.next(); !nums_1_1.done; nums_1_1 = nums_1.next()) {
            var num = nums_1_1.value;
            sum += num;
            maxNum = maxNum > num ? maxNum : num;
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (nums_1_1 && !nums_1_1.done && (_a = nums_1["return"])) _a.call(nums_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    if (sum & 1)
        return false;
    var target = Math.floor(sum / 2);
    if (maxNum > target)
        return false;
    var dp = new Array(n).fill(false).map(function (v) { return new Array(target + 1).fill(false); });
    for (var i = 0; i < n; i++) {
        dp[i][0] = true;
    }
    dp[0][nums[0]] = true;
    for (var i = 1; i < n; i++) {
        var num = nums[i];
        for (var j = 1; j <= target; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
            }
            else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[n - 1][target];
}
exports.canPartition = canPartition;
;
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
function getMinimumDifference(root) {
    var arr = [], min = Number.MAX_SAFE_INTEGER;
    if (!root)
        return 0;
    var fn = function (node) {
        if (node) {
            node.left && fn(node.left);
            arr.push(node.val);
            node.right && fn(node.right);
        }
    };
    fn(root);
    for (var i = 0; i < arr.length - 1; i++)
        min = Math.min(arr[i + 1] - arr[i], min);
    return min;
}
exports.getMinimumDifference = getMinimumDifference;
;
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
function swapPairs(head) {
    var pre1 = null, pre = null, next = null;
    if (!(head && head.next))
        return head;
    pre = head;
    next = head.next;
    head = head.next;
    while (pre && next) {
        if (pre1)
            pre1.next = next;
        pre.next = next.next;
        next.next = pre;
        pre1 = pre;
        pre = pre.next;
        next = pre && pre.next || null;
    }
    return head;
}
exports.swapPairs = swapPairs;
;
function commonChars(A) {
    var e_5, _a;
    var ans = [], word = A[0], slen = word.length;
    var _loop_1 = function (s) {
        if (A.every(function (m) { return m.includes(s); })) {
            A = A.map(function (m) { return m.replace(s, ''); });
            ans.push(s);
        }
    };
    try {
        for (var word_1 = __values(word), word_1_1 = word_1.next(); !word_1_1.done; word_1_1 = word_1.next()) {
            var s = word_1_1.value;
            _loop_1(s);
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (word_1_1 && !word_1_1.done && (_a = word_1["return"])) _a.call(word_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return ans;
}
exports.commonChars = commonChars;
;
function connect(root) {
    if (!root)
        return root;
    var arr = [], tempArr = [root];
    var _loop_2 = function () {
        arr.push(__spread(tempArr));
        var temp = [];
        tempArr.forEach(function (item) {
            if (item.left)
                temp.push(item.left);
            if (item.right)
                temp.push(item.right);
        });
        tempArr = __spread(temp);
    };
    while (tempArr.length > 0) {
        _loop_2();
    }
    arr.forEach(function (item) {
        for (var i = 0; i < item.length; i++)
            item[i].next = item[i + 1] || null;
    });
    return root;
}
exports.connect = connect;
;
function sortedSquares(A) {
    var res = new Array(A.length), pre = 0, next = A.length - 1, preValue = 0, nextValue = 0, index = A.length - 1;
    while (pre <= next) {
        preValue = Math.pow(A[pre], 2);
        nextValue = Math.pow(A[next], 2);
        if (preValue >= nextValue) {
            pre++;
            res[index] = preValue;
        }
        else {
            next--;
            res[index] = nextValue;
        }
        index--;
    }
    return res;
}
exports.sortedSquares = sortedSquares;
;
function totalNQueens(n) {
    var res = 0;
    var dfs = function (arr, level) {
        if (level === n) {
            res++;
            return;
        }
        var _loop_3 = function (i) {
            if (!arr.some(function (row, k) { return row === i || Math.abs(row - i) === Math.abs(k - level); })) {
                dfs(__spread(arr, [i]), level + 1);
            }
        };
        for (var i = 0; i < n; i++) {
            _loop_3(i);
        }
    };
    dfs([], 0);
    return res;
}
exports.totalNQueens = totalNQueens;
;
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
function removeNthFromEnd(head, n) {
    var num = n, next = head, pre = head;
    if (!head || !(head && head.next))
        return null;
    while (n > 0) {
        next = next && next.next || null;
        n--;
    }
    while (next) {
        if (num == 1 && !(pre && pre.next && pre.next.next)) {
            pre ? pre.next = null : null;
            return head;
        }
        next = next && next.next;
        pre = pre && pre.next;
    }
    if (pre && pre.next)
        pre.val = pre.next.val;
    if (pre && pre.next)
        pre.next = pre.next.next;
    return head;
}
exports.removeNthFromEnd = removeNthFromEnd;
;
function backspaceCompare(S, T) {
    var fn = function (S, arr) {
        for (var i = 0; i < S.length; i++) {
            if (S[i] === '#') {
                if (arr.length > 0)
                    arr.pop();
            }
            else {
                arr.push(S[i]);
            }
        }
        return arr.join('');
    };
    return fn(S, []) === fn(T, []);
}
exports.backspaceCompare = backspaceCompare;
;
/* 额外数组解决 */
function reorderList1(head) {
    var node = head, nodeArr = [], pre = 1, next = 0, res = head;
    if (!head)
        return null;
    while (node) {
        nodeArr.push(new ListNode(node.val));
        node = node.next;
    }
    next = nodeArr.length - 1;
    while (pre <= next) {
        head.next = nodeArr[next] || null;
        head = head.next;
        next--;
        if (head) {
            head.next = nodeArr[pre] || head;
            head = head.next;
            pre++;
        }
    }
    if (head)
        head.next = null;
    //方便测试
    return res;
}
exports.reorderList1 = reorderList1;
;
/* 双指针解决 */
function reorderList2(head) {
    var pre = head, next = head && head.next, res = head;
    if (!head)
        return null;
    while (next && next.next) {
        pre = pre && pre.next;
        next = next && next.next && next.next.next;
    }
    next = pre && pre.next;
    if (pre)
        pre.next = null;
    pre = head;
    var rervseListNode = function (node) {
        var pre = null, next = node, temp = null;
        while (next) {
            temp = next && next.next;
            next.next = pre;
            pre = next;
            next = temp;
        }
        return pre;
    };
    next = rervseListNode(next);
    pre = pre && pre.next;
    while (pre || next) {
        if (head)
            head.next = next;
        next = next && next.next;
        head = head && head.next;
        if (head)
            head.next = pre;
        pre = pre && pre.next;
        head = head && head.next;
    }
    //方便测试
    return res;
}
exports.reorderList2 = reorderList2;
;
function solveNQueens(n) {
    var resArr = [], temp = new Array(n).fill('.');
    var dfs = function (level, arr) {
        if (level === n) {
            resArr.push(arr.map(function (i, j) {
                var arr = __spread(temp);
                arr[i] = 'Q';
                return arr.join('');
            }));
            return;
        }
        var _loop_4 = function (i) {
            if (!arr.some(function (k, j) { return k === i || Math.abs(i - k) === Math.abs(level - j); }))
                dfs(level + 1, __spread(arr, [i]));
        };
        for (var i = 0; i < n; i++) {
            _loop_4(i);
        }
    };
    dfs(0, []);
    return resArr;
}
exports.solveNQueens = solveNQueens;
;
function lengthOfLIS(nums) {
    var len = nums.length, dp = new Array(len).fill(1);
    if (len <= 1)
        return len;
    for (var i = 1; i < len; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j])
                dp[i] = Math.max(dp[j] + 1, dp[i]);
        }
    }
    return Math.max.apply(Math, __spread(dp));
}
exports.lengthOfLIS = lengthOfLIS;
;
function maxSatisfaction(satisfaction) {
    satisfaction.sort(function (a, b) { return b - a; });
    var sum = 0, res = 0;
    // 逆序和+贪心
    for (var i = 0; i < satisfaction.length; i++) {
        sum += satisfaction[i];
        if (sum < 0)
            break;
        res += sum;
    }
    return res;
}
exports.maxSatisfaction = maxSatisfaction;
;
function isLongPressedName(name, typed) {
    var i = 0, j = 0;
    while (i < name.length || j < typed.length) {
        if (name[i] === typed[j]) {
            i++;
            j++;
        }
        else {
            if (name[i - 1] === typed[j]) {
                j++;
            }
            else {
                return false;
            }
        }
    }
    return true;
}
exports.isLongPressedName = isLongPressedName;
;
function uniquePathsIII(grid) {
    var res = 0, stepNum = 1, x = 0, y = 0;
    grid.forEach(function (arr, row) { return arr.forEach(function (item, col) {
        if (item === 1) {
            x = row;
            y = col;
        }
        if (item === 0)
            stepNum++;
    }); });
    var dfs = function (x, y, count, arr) {
        if (x === grid.length
            || x === -1
            || y === grid[0].length
            || y === -1
            || grid[x][y] === -1)
            return;
        if (grid[x][y] === 2) {
            if (count === 0)
                res++;
            return;
        }
        arr[x][y] = -1;
        dfs(x + 1, y, count - 1, arr);
        dfs(x - 1, y, count - 1, arr);
        dfs(x, y + 1, count - 1, arr);
        dfs(x, y - 1, count - 1, arr);
        arr[x][y] = 0;
    };
    dfs(x, y, stepNum, grid);
    return res;
}
exports.uniquePathsIII = uniquePathsIII;
;
function findTargetSumWays(nums, S) {
    var res = 0;
    var dfs = function (sum, index) {
        if (index === nums.length) {
            if (sum === S)
                res++;
            return;
        }
        dfs(sum + nums[index], index + 1);
        dfs(sum - nums[index], index + 1);
    };
    dfs(0, 0);
    return res;
}
exports.findTargetSumWays = findTargetSumWays;
;
function search(nums, target) {
    var mid = 0, left = 0, right = nums.length - 1;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target)
            return mid;
        if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}
exports.search = search;
;
function partitionLabels(S) {
    var pre = 0, next = 0, temp = 0, resArr = [];
    for (var i = 0; i < S.length; i++) {
        temp = S.lastIndexOf(S[i]);
        if (temp >= next)
            next = temp;
        if (i === next) {
            resArr.push(next - pre + 1);
            pre = i + 1;
        }
    }
    return resArr;
}
exports.partitionLabels = partitionLabels;
;
function isPalindrome(head) {
    var pre = head, next = head && head.next;
    if (!head)
        return true;
    while (next && next.next) {
        pre = pre && pre.next;
        next = next && next.next && next.next.next;
    }
    next = pre && pre.next;
    if (pre)
        pre.next = null;
    pre = head;
    var rervseListNode = function (node) {
        var pre = null, next = node, temp = null;
        while (next) {
            temp = next && next.next;
            next.next = pre;
            pre = next;
            next = temp;
        }
        return pre;
    };
    next = rervseListNode(next);
    while (next && pre) {
        if (pre.val != next.val)
            return false;
        pre = pre && pre.next;
        next = next && next.next;
    }
    return true;
}
exports.isPalindrome = isPalindrome;
;
function maxScoreWords(words, letters, score) {
    var res = 0, map = new Map();
    letters.forEach(function (item) {
        if (map.has(item)) {
            map.set(item, (map.get(item) || 0) + 1);
        }
        else {
            map.set(item, 1);
        }
    });
    var bfs = function (index, sum, map) {
        if (index >= words.length) {
            res = Math.max(sum, res);
            return;
        }
        bfs(index + 1, sum, new Map(map));
        var word = words[index];
        for (var i = 0; i < word.length; i++) {
            if (!map.has(word.charAt(i)) || map.get(word.charAt(i)) === 0)
                return;
            map.set(word.charAt(i), (map.get(word.charAt(i)) || 0) - 1);
            sum += score[word.charCodeAt(i) - 97];
        }
        bfs(index + 1, sum, new Map(map));
    };
    bfs(0, 0, new Map(map));
    return res;
}
exports.maxScoreWords = maxScoreWords;
;
function minFallingPathSum(arr) {
    var dp = __spread(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        var temp = __spread(dp);
        for (var j = 0; j < dp.length; j++) {
            dp[j] = Math.min.apply(Math, __spread(temp.slice(0, j), temp.slice(j + 1))) + arr[i][j];
        }
    }
    return Math.min.apply(Math, __spread(dp));
}
exports.minFallingPathSum = minFallingPathSum;
;
function videoStitching(clips, T) {
    clips.sort(function (a, b) { return a[0] - b[0]; });
    var min = clips[0][0], max = clips[clips.length - 1][1];
    if (min > 0 || max < T)
        return -1;
    var end = 0, next = 0, num = 0;
    while (end < T && clips[next]) {
        var nextEnd = end;
        while (clips[next] && clips[next][0] <= end) {
            if (clips[next][1] > nextEnd) {
                nextEnd = clips[next][1];
                if (nextEnd === T)
                    return num + 1;
            }
            next++;
        }
        num++;
        if (nextEnd === end)
            return -1;
        end = nextEnd;
    }
    return num;
}
exports.videoStitching = videoStitching;
;
function longestMountain(A) {
    var height = 0;
    for (var i = 1; i < A.length - 1; i++) {
        while (A[i] < A[i + 1]) {
            i++;
            if (i + 1 == A.length)
                break;
        }
        var pre = i, next = i;
        //i to pre
        while (pre > 0 && A[pre] > A[pre - 1])
            pre--;
        //i to next
        while (next < A.length - 1 && A[next] > A[next + 1])
            next++;
        if (pre != i && next != i)
            height = Math.max(height, next - pre + 1);
        i = next;
    }
    return height < 3 ? 0 : height;
}
exports.longestMountain = longestMountain;
;
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
function smallerNumbersThanCurrent(nums) {
    var res = nums.slice();
    nums.sort(function (a, b) { return a - b; });
    return res.map(function (item) { return nums.indexOf(item); });
}
exports.smallerNumbersThanCurrent = smallerNumbersThanCurrent;
;
var RestoreTreeStructure = function (data) {
    var map = new Map();
    data.forEach(function (item) {
        if (map.has(item.parentId)) {
            map.set(item.parentId, __spread((map.get(item.parentId) || []), [{ label: item.label, value: item.value }]));
        }
        else {
            map.set(item.parentId, [{ label: item.label, value: item.value }]);
        }
    });
    map.forEach(function (item) {
        item.map(function (obj) {
            if (map.has(obj.value))
                obj.children = map.get(obj.value);
        });
    });
    return map.get('-1') || [];
};
exports.RestoreTreeStructure = RestoreTreeStructure;
function preorderTraversal(root) {
    var res = [];
    var dfs = function (node) {
        if (node === null)
            return;
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return res;
}
exports.preorderTraversal = preorderTraversal;
;
function uniqueOccurrences(arr) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        }
        else {
            map.set(arr[i], 1);
        }
    }
    var times = new Set(map.values());
    return times.size === map.size;
}
exports.uniqueOccurrences = uniqueOccurrences;
;
function sumNumbers(root) {
    if (!root)
        return 0;
    if (!(root.left || root.right))
        return root.val;
    if (root.left) {
        root.left.val = root.val * 10 + root.left.val;
    }
    if (root.right) {
        root.right.val = root.val * 10 + root.right.val;
    }
    return sumNumbers(root.left) + sumNumbers(root.right);
}
exports.sumNumbers = sumNumbers;
;
function islandPerimeter(grid) {
    var result = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                result += 4;
                if (i - 1 >= 0 && grid[i - 1][j] === 1)
                    result -= 1;
                if (j - 1 >= 0 && grid[i][j - 1] === 1)
                    result -= 1;
                (i + 1 < grid.length && grid[i + 1][j] === 1) && (result -= 1);
                (j + 1 < grid[i].length && grid[i][j + 1] === 1) && (result -= 1);
            }
        }
    }
    return result;
}
exports.islandPerimeter = islandPerimeter;
;
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
function wordBreak(s, wordDict) {
    var d = new Set(wordDict), n = s.length, v = Array(n).concat([[[]]]);
    var dfs = function (i) {
        var e_6, _a;
        if (v[i])
            return v[i];
        v[i] = [];
        for (var j = i + 1; j <= n; ++j) {
            var w = s.slice(i, j);
            if (d.has(w)) {
                try {
                    for (var _b = (e_6 = void 0, __values(dfs(j))), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ws = _c.value;
                        v[i].push([w].concat(ws));
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        return v[i];
    };
    return dfs(0).map(function (ws) { return ws.join(' '); });
}
exports.wordBreak = wordBreak;
;
function intersection(nums1, nums2) {
    var res = [], set1 = new Set(nums1), set2 = new Set(nums2);
    set1.forEach(function (item) {
        if (set2.has(item))
            res.push(item);
    });
    return res;
}
exports.intersection = intersection;
;
function validMountainArray(A) {
    var n = A.length;
    var i = 0, j = n - 1;
    while (i + 1 < n && A[i] < A[i + 1])
        i++;
    while (j - 1 >= 0 && A[j - 1] > A[j])
        j--;
    if (i != 0 && i == j && j != n - 1)
        return true;
    return false;
}
exports.validMountainArray = validMountainArray;
;
function insert(intervals, newInterval) {
    var res = [], len = intervals.length;
    var i = 0;
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
}
exports.insert = insert;
;
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
var ladderLength = function (beginWord, endWord, wordList) {
    var wordSet = new Set(wordList);
    var queue = [];
    queue.push([beginWord, 1]);
    while (queue.length) {
        var _a = __read(queue.shift() || ['', 0], 2), word = _a[0], level = _a[1]; // 当前出列的单词
        if (word == endWord) {
            return level;
        }
        for (var i = 0; i < word.length; i++) { // 遍历当前单词的所有字符
            for (var c = 97; c <= 122; c++) { // 对应26个字母
                var newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1); // 形成新词
                if (wordSet.has(newWord)) { // 单词表里有这个新词
                    queue.push([newWord, level + 1]); // 作为下一层的词入列
                    wordSet["delete"](newWord); // 避免该词重复入列
                }
            }
        }
    }
    return 0; // bfs结束，始终没有遇到终点
};
exports.ladderLength = ladderLength;
function sortByBits(arr) {
    var count1 = function (num) {
        var res = 0, str = num.toString(2);
        for (var i = 0; i < str.length; i++) {
            if (str[i] === '1')
                res++;
        }
        return res;
    };
    arr.sort(function (a, b) { return count1(a) - count1(b) || a - b; });
    return arr;
}
exports.sortByBits = sortByBits;
;
function countRangeSum(nums, lower, upper) {
    if (nums.length === 0)
        return 0;
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        var sum = 0;
        for (var j = i; j < nums.length; j++) {
            sum += nums[j];
            if (lower <= sum && upper >= sum)
                result++;
        }
    }
    return result;
}
exports.countRangeSum = countRangeSum;
;
function maxProfit(prices) {
    var res = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] - prices[i] > 0)
            res += prices[i + 1] - prices[i];
    }
    return res;
}
exports.maxProfit = maxProfit;
;
function kClosest(points, K) {
    var list = points.sort(function (a, b) { return (Math.sqrt(Math.pow(Math.abs(a[0] - 0), 2) + Math.pow(Math.abs(a[1] - 0), 2)) -
        Math.sqrt(Math.pow(Math.abs(b[0] - 0), 2) + Math.pow(Math.abs(b[1] - 0), 2))); });
    return list.splice(0, K);
}
exports.kClosest = kClosest;
;
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    var _a, _b;
    var i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1])
        i--;
    if (i >= 0) {
        var j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i])
            j--;
        _a = __read([nums[j], nums[i]], 2), nums[i] = _a[0], nums[j] = _a[1];
    }
    var l = i + 1, r = nums.length - 1;
    while (l < r) {
        _b = __read([nums[r], nums[l]], 2), nums[l] = _b[0], nums[r] = _b[1];
        l++;
        r--;
    }
}
function findRotateSteps(ring, key) {
    var prevDp = [], curDp = [], temp = { sum: Infinity, index: 0 };
    for (var i = 0; i < key.length; i++) {
        prevDp = __spread(curDp);
        curDp = [];
        var _loop_5 = function (j) {
            if (key[i] === ring[j]) {
                if (i === 0) {
                    curDp.push({ sum: Math.min(j, ring.length - j) + 1, index: j });
                    return "continue";
                }
                temp = { sum: Infinity, index: j };
                prevDp.forEach(function (element) {
                    temp.sum = Math.min(temp.sum, element.sum +
                        Math.min(Math.abs(element.index - j), ring.length - Math.abs(element.index - j)) +
                        1);
                });
                curDp.push(temp);
            }
        };
        for (var j = 0; j < ring.length; j++) {
            _loop_5(j);
        }
    }
    curDp.sort(function (a, b) {
        return a.sum - b.sum;
    });
    return curDp[0].sum;
}
function sortArrayByParityII(A) {
    var _a;
    var i = 0;
    while (i < A.length) {
        if (!(i % 2 === A[i] % 2)) {
            var j = i;
            while (!(i % 2 === A[j] % 2)) {
                j++;
            }
            _a = __read([A[j], A[i]], 2), A[i] = _a[0], A[j] = _a[1];
        }
        i++;
    }
    return A;
}
exports.sortArrayByParityII = sortArrayByParityII;
;
function oddEvenList(head) {
    var pre = head, next = head && head.next, temp = next;
    while (pre && next) {
        pre.next = next.next;
        next.next = pre.next && pre.next.next;
        if (pre.next)
            pre = pre.next;
        next = next.next;
    }
    if (pre)
        pre.next = temp;
    return head;
}
;
function relativeSortArray(arr1, arr2) {
    var newArr = [];
    var otherNum = arr1.filter(function (n) { return arr2.indexOf(n) === -1; }).sort(function (a, b) { return a - b; });
    arr2.forEach(function (n) {
        arr1.forEach(function (item) {
            if (item == n)
                newArr.push(item);
        });
    });
    newArr.push.apply(newArr, __spread(otherNum));
    return newArr;
}
exports.relativeSortArray = relativeSortArray;
;
function removeKdigits(num, k) {
    var n = num.length, stack = [];
    if (n <= k)
        return '0';
    for (var i = 0; i < n; i++) {
        while (k && stack.length && num[i] < stack[stack.length - 1]) {
            k--;
            stack.pop();
        }
        if (stack.length || num[i] !== '0') {
            stack.push(num[i]);
        }
    }
    while (k--)
        stack.pop();
    return stack.join('') || '0';
}
exports.removeKdigits = removeKdigits;
;
function reconstructQueue(people) {
    var e_7, _a;
    var a = [];
    people.sort(function (a, b) { return a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]; });
    try {
        for (var people_1 = __values(people), people_1_1 = people_1.next(); !people_1_1.done; people_1_1 = people_1.next()) {
            var i = people_1_1.value;
            a.splice(i[1], 0, i);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (people_1_1 && !people_1_1.done && (_a = people_1["return"])) _a.call(people_1);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return a;
}
exports.reconstructQueue = reconstructQueue;
;
function slidingPuzzle(board) {
    var start = board[0].concat(board[1]).join(''), queue = [start], visited = new Set(queue), step = 0;
    var target = '123450', neighborMap = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
    while (queue.length) {
        var len = queue.length;
        var _loop_6 = function (i) {
            var curBoard = queue.shift();
            if (curBoard === target)
                return { value: step };
            var zeroIndex = curBoard && curBoard.indexOf('0') || 0;
            var neighbor = neighborMap[zeroIndex];
            neighbor.forEach(function (neighborPos) {
                var newBoard = swap(curBoard || '', zeroIndex, neighborPos);
                if (visited && !visited.has(newBoard)) {
                    queue.push(newBoard);
                    visited.add(newBoard);
                }
            });
        };
        for (var i = 0; i < len; i++) {
            var state_1 = _loop_6(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        step++;
    }
    return -1;
}
exports.slidingPuzzle = slidingPuzzle;
;
function swap(str, i, j) {
    var _a;
    var str1 = str.split('');
    _a = __read([str1[j], str1[i]], 2), str1[i] = _a[0], str1[j] = _a[1];
    return str1.join('');
}
function allCellsDistOrder(R, C, r0, c0) {
    var e_8, _a;
    var res = [], map = new Map();
    for (var i = 0; i < R; i++) {
        for (var j = 0; j < C; j++) {
            var num = Math.abs(i - r0) + Math.abs(j - c0);
            if (map.has(num)) {
                map.set(num, __spread((map.get(num) || []), [[i, j]]));
            }
            else {
                map.set(num, [[i, j]]);
            }
        }
    }
    try {
        for (var _b = __values(__spread(map.entries()).sort(function (a, b) { return a[0] - b[0]; })), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            res.push.apply(res, __spread(item[1]));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return res;
}
exports.allCellsDistOrder = allCellsDistOrder;
;
function canCompleteCircuit(gas, cost) {
    var sum = function (arr) { return arr.reduce(function (prev, current) { return prev + current; }); };
    var run = function (start) {
        var sum = 0, len = gas.length;
        for (var i = 0; i < len; i++) {
            var index = i + start >= len ? i + start - len : i + start;
            sum += gas[index] - cost[index];
            if (sum < 0)
                return false;
        }
        return true;
    };
    // gas小于cost的时候直接返回-1
    if (sum(gas) < sum(cost))
        return -1;
    for (var i = 0, len = gas.length; i < len; i++) {
        if (gas[i] >= cost[i] && run(i))
            return i;
    }
    return -1;
}
exports.canCompleteCircuit = canCompleteCircuit;
;
function moveZeroes(nums) {
    var pre = 0, next = 0;
    while (next < nums.length) {
        if (nums[pre] == 0) {
            while (nums[next] == 0) {
                next++;
                if (next >= nums.length)
                    break;
            }
            if (next >= nums.length)
                break;
            var temp = nums[pre];
            nums[pre] = nums[next];
            nums[next] = temp;
        }
        pre++;
        next++;
    }
    return nums;
}
exports.moveZeroes = moveZeroes;
;
function insertionSortList(head) {
    var pre = head, current = head && head.next;
    while (current !== null) {
        var pre1 = null, current1 = head;
        while (current1 !== current && current1 !== null) {
            if (current1.val > current.val) {
                if (head == current1)
                    head = current;
                if (pre1 !== null)
                    pre1.next = current;
                if (pre !== null)
                    pre.next = current.next;
                current.next = current1;
                break;
            }
            else {
                pre1 = current1;
                current1 = current1.next;
            }
        }
        if (pre && current !== pre.next) {
            current = pre.next;
        }
        else {
            pre = current;
            current = current.next;
        }
    }
    return head;
}
exports.insertionSortList = insertionSortList;
;
function sortList(head) {
    if (!head)
        return null;
    var r = [];
    while (head) {
        r.push(head);
        var tmp = head.next;
        head.next = null;
        head = tmp;
    }
    r.sort(function (a, b) { return a.val - b.val; }).reduce(function (p, v) { return p.next = v; });
    return r[0];
}
exports.sortList = sortList;
;
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    return sortStringFn(s) === sortStringFn(t);
}
exports.isAnagram = isAnagram;
;
function sortStringFn(s) {
    return s.split('').sort().join('');
}
function findMinArrowShots(points) {
    var e_9, _a;
    if (points.length === 0)
        return 0;
    points.sort(function (a, b) { return a[0] - b[0]; });
    var posEnd = points[0][1], res = 1;
    try {
        for (var points_1 = __values(points), points_1_1 = points_1.next(); !points_1_1.done; points_1_1 = points_1.next()) {
            var point = points_1_1.value;
            if (point[0] <= posEnd) {
                posEnd = Math.min(point[1], posEnd);
            }
            else {
                res++;
                posEnd = point[1];
            }
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (points_1_1 && !points_1_1.done && (_a = points_1["return"])) _a.call(points_1);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return res;
}
exports.findMinArrowShots = findMinArrowShots;
;
var getDepth = function (node) {
    var depth = 0;
    while (node) {
        depth++;
        node = node.left;
    }
    return depth;
};
function countNodes(root) {
    if (!root) {
        return 0;
    }
    var left = getDepth(root.left);
    var right = getDepth(root.right);
    if (left === right) {
        return countNodes(root.right) + Math.pow(2, left);
    }
    else {
        return countNodes(root.left) + Math.pow(2, right);
    }
}
exports.countNodes = countNodes;
;
function sortString(s) {
    var hash = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++)
        hash[s.charCodeAt(i) - 97]++;
    var res = [];
    var rest = s.length;
    while (rest > 0) {
        for (var i = 0; i < 26; i++) {
            if (hash[i] > 0) {
                res.push(String.fromCharCode(i + 97));
                hash[i]--;
                rest--;
            }
        }
        for (var i = 25; i >= 0; i--) {
            if (hash[i] > 0) {
                res.push(String.fromCharCode(i + 97));
                hash[i]--;
                rest--;
            }
        }
    }
    return res.join('');
}
exports.sortString = sortString;
;
function maximumGap(nums) {
    var n = nums.length;
    if (n < 2) {
        return 0;
    }
    var exp = 1;
    var buf = new Array(n).fill(0);
    var maxVal = Math.max.apply(Math, __spread(nums));
    while (maxVal >= exp) {
        var cnt = new Array(10).fill(0);
        for (var i = 0; i < n; i++) {
            var digit = Math.floor(nums[i] / exp) % 10;
            cnt[digit]++;
        }
        for (var i = 1; i < 10; i++) {
            cnt[i] += cnt[i - 1];
        }
        for (var i = n - 1; i >= 0; i--) {
            var digit = Math.floor(nums[i] / exp) % 10;
            buf[cnt[digit] - 1] = nums[i];
            cnt[digit]--;
        }
        nums.splice.apply(nums, __spread([0, n], buf));
        exp *= 10;
    }
    var ret = 0;
    for (var i = 1; i < n; i++) {
        ret = Math.max(ret, nums[i] - nums[i - 1]);
    }
    return ret;
}
exports.maximumGap = maximumGap;
;
function fourSumCount(A, B, C, D) {
    var map = new Map(), res = 0;
    A.forEach(function (a) { return B.forEach(function (b) {
        var sum = a + b;
        if (map.has(sum)) {
            map.set(sum, (map.get(sum) || 0) + 1);
        }
        else {
            map.set(sum, 1);
        }
    }); });
    C.forEach(function (c) { return D.forEach(function (d) {
        var sum = -(c + d);
        if (map.has(sum))
            res += map.get(sum) || 1;
    }); });
    return res;
}
exports.fourSumCount = fourSumCount;
;
function largestPerimeter(A) {
    A.sort(function (a, b) { return a > b ? 1 : -1; });
    for (var i = A.length - 1; i > 1; i--) {
        if (A[i] < A[i - 1] + A[i - 2]) {
            return A[i] + A[i - 1] + A[i - 2];
        }
    }
    return 0;
}
exports.largestPerimeter = largestPerimeter;
;
function searchRange(nums, target) {
    var binarySearch = function (nums, target, flag) {
        var left = 0, right = nums.length - 1, ans = nums.length;
        while (left <= right) {
            var mid = Math.floor((left + right) / 2);
            if (nums[mid] > target || (flag && nums[mid] >= target)) {
                right = mid - 1;
                ans = mid;
            }
            else {
                left = mid + 1;
            }
        }
        return ans;
    };
    var ans = [-1, -1];
    var leftIdx = binarySearch(nums, target, true);
    var rightIdx = binarySearch(nums, target, false) - 1;
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx, rightIdx];
    }
    return ans;
}
exports.searchRange = searchRange;
;
function countPrimes(n) {
    var h = Array(n).fill(true), r = 0;
    for (var i = 2; i * i < n; i++) {
        if (h[i]) {
            for (var j = i * i; j < n; j += i)
                h[j] = false;
        }
    }
    for (var i = n; i-- > 2;) {
        if (h[i])
            r++;
    }
    return r;
}
exports.countPrimes = countPrimes;
;
function leastInterval(tasks, n) {
    var map = new Map(), MaxCount = 0, MaxElement = 0;
    tasks.forEach(function (item) { return map.set(item, (map.get(item) || 0) + 1); });
    MaxElement = Math.max.apply(Math, __spread(map.values()));
    __spread(map.values()).forEach(function (item) {
        if (item === MaxElement)
            MaxCount++;
    });
    return Math.max(tasks.length, MaxCount + (n + 1) * (MaxElement - 1));
}
exports.leastInterval = leastInterval;
;
function generate(numRows) {
    if (numRows === 0)
        return [];
    var res = [[1]];
    while (numRows > 1) {
        numRows--;
        var temp = res.pop() || [], arr = new Array(temp.length + 1).fill(1);
        res.push(__spread(temp));
        for (var i = 0; i < temp.length - 1; i++) {
            arr[i + 1] = temp[i] + temp[i + 1];
        }
        res.push(__spread(arr));
    }
    return res;
}
exports.generate = generate;
;
function matrixScore(A) {
    var m = A.length, n = A[0].length;
    var ret = m * (1 << (n - 1));
    for (var j = 1; j < n; j++) {
        var nOnes = 0;
        for (var i = 0; i < m; i++) {
            if (A[i][0] === 1) {
                nOnes += A[i][j];
            }
            else {
                nOnes += (1 - A[i][j]); // 如果这一行进行了行反转，则该元素的实际取值为 1 - A[i][j]
            }
        }
        var k = Math.max(nOnes, m - nOnes);
        ret += k * (1 << (n - j - 1));
    }
    return ret;
}
exports.matrixScore = matrixScore;
;
function splitIntoFibonacci(S) {
    var max = Math.pow(2, 31) - 1;
    var res = [];
    var len = S.length;
    var dfs = function (start, S, res) {
        var size = res.length;
        if (start == len)
            return size > 2;
        var num = 0;
        for (var i = start; i < len; i++) {
            num = 10 * num + Number(S.charAt(i));
            if (num >= max || num < 0)
                return false; //是否超出范围
            if (size < 2 || num == res[size - 1] + res[size - 2]) {
                res.push(num);
                if (dfs(i + 1, S, res)) {
                    return true;
                }
                res.pop();
            }
            if (Number(S.charAt(i)) == 0 && i == start)
                return false;
        }
        return false;
    };
    return dfs(0, S, res) ? res : [];
}
exports.splitIntoFibonacci = splitIntoFibonacci;
;
function uniquePaths(m, n) {
    var dp = new Array(m).fill(1).map(function (v) { return new Array(n).fill(1); });
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}
exports.uniquePaths = uniquePaths;
;
function uniquePaths1(m, n) {
    var memo = new Array(n).fill(1);
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            memo[j] += memo[j - 1];
        }
    }
    return memo[n - 1];
}
exports.uniquePaths1 = uniquePaths1;
function lemonadeChange(bills) {
    var map = new Map();
    if (bills[0] === 5) {
        map.set(5, 1);
        map.set(10, 0);
    }
    else {
        return false;
    }
    for (var i = 1; i < bills.length; i++) {
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
                }
                else {
                    map.set(5, (map.get(5) || 0) - 1);
                    map.set(10, (map.get(10) || 0) - 1);
                }
                break;
            default:
                break;
        }
        if ((map.get(10) || 0) < 0 || (map.get(5) || 0) < 0)
            return false;
    }
    return true;
}
exports.lemonadeChange = lemonadeChange;
;
function predictPartyVictory(senate) {
    var e_10, _a;
    var n = senate.length;
    var radiant = [], dire = [];
    try {
        for (var _b = __values(Array.from(senate).entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), i = _d[0], ch = _d[1];
            if (ch === 'R') {
                radiant.push(i);
            }
            else {
                dire.push(i);
            }
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_10) throw e_10.error; }
    }
    while (radiant.length && dire.length) {
        if (radiant[0] < dire[0]) {
            radiant.push(radiant[0] + n);
        }
        else {
            dire.push(dire[0] + n);
        }
        radiant.shift();
        dire.shift();
    }
    return radiant.length > 0 ? "Radiant" : "Dire";
}
exports.predictPartyVictory = predictPartyVictory;
;
function wiggleMaxLength(nums) {
    var n = nums.length;
    if (n < 2)
        return n;
    var up = new Array(n).fill(0);
    var down = new Array(n).fill(0);
    up[0] = down[0] = 1;
    for (var i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1);
            down[i] = down[i - 1];
        }
        else if (nums[i] < nums[i - 1]) {
            up[i] = up[i - 1];
            down[i] = Math.max(up[i - 1] + 1, down[i - 1]);
        }
        else {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }
    return Math.max(up[n - 1], down[n - 1]);
}
exports.wiggleMaxLength = wiggleMaxLength;
;
function containsDuplicate(nums) {
    var e_11, _a;
    var set = new Set();
    try {
        for (var nums_2 = __values(nums), nums_2_1 = nums_2.next(); !nums_2_1.done; nums_2_1 = nums_2.next()) {
            var x = nums_2_1.value;
            if (set.has(x)) {
                return true;
            }
            set.add(x);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (nums_2_1 && !nums_2_1.done && (_a = nums_2["return"])) _a.call(nums_2);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return false;
}
exports.containsDuplicate = containsDuplicate;
;
function reorganizeString(S) {
    var e_12, _a;
    var strs = S.split(''), map = new Map(), odd = -1, even = -2;
    strs.forEach(function (item) { return map.set(item, (map.get(item) || 0) + 1); });
    try {
        for (var map_1 = __values(map), map_1_1 = map_1.next(); !map_1_1.done; map_1_1 = map_1.next()) {
            var _b = __read(map_1_1.value, 2), key = _b[0], value = _b[1];
            if (value * 2 > S.length + 1)
                return "";
            // 判断最长的元素value值是否超过一半
            var len = value * 2;
            while (value > 0) {
                // 奇偶间隔赋值给数组
                strs[(len <= S.length && odd < S.length - 2) ? odd += 2 : even += 2] = key;
                value--;
            }
        }
    }
    catch (e_12_1) { e_12 = { error: e_12_1 }; }
    finally {
        try {
            if (map_1_1 && !map_1_1.done && (_a = map_1["return"])) _a.call(map_1);
        }
        finally { if (e_12) throw e_12.error; }
    }
    return strs.join('');
}
exports.reorganizeString = reorganizeString;
;
function groupAnagrams(strs) {
    var e_13, _a;
    var res = [], map = new Map(), //排序后的字符串，在res数组当中的位置
    index = -1; //在res数组当中的位置
    try {
        for (var strs_1 = __values(strs), strs_1_1 = strs_1.next(); !strs_1_1.done; strs_1_1 = strs_1.next()) {
            var item = strs_1_1.value;
            var str = item.split('').sort(function (a, b) { return a > b ? 1 : -1; }).join('');
            if (!map.has(str)) {
                index++;
                map.set(str, index);
                res.push([]);
            }
            res[map.get(str) || 0].push(item);
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (strs_1_1 && !strs_1_1.done && (_a = strs_1["return"])) _a.call(strs_1);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return res;
}
exports.groupAnagrams = groupAnagrams;
;
function monotoneIncreasingDigits(N) {
    var strs = N.toString().split('').map(function (item) { return Number(item); });
    for (var i = strs.length - 1; i > 0; i--) {
        if (strs[i] < strs[i - 1]) {
            strs[i - 1] -= 1;
            for (var j = i; j < strs.length; j++) {
                strs[j] = 9;
            }
        }
    }
    return Number(strs.join(''));
}
exports.monotoneIncreasingDigits = monotoneIncreasingDigits;
;
function wordPattern(pattern, s) {
    var map = new Map(), strs = s.split(' '), patterns = pattern.split('');
    if (patterns.length !== strs.length || new Set(strs).size !== new Set(patterns).size)
        return false;
    for (var i = 0, len = strs.length; i < len; i++) {
        if (map.has(patterns[i])) {
            if (map.get(patterns[i]) != strs[i])
                return false;
        }
        else {
            map.set(patterns[i], strs[i]);
        }
    }
    return true;
}
exports.wordPattern = wordPattern;
;
function maxProfit1(prices, fee) {
    var dp = new Array(prices.length).fill(new Array(2));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (var i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[prices.length - 1][0];
}
exports.maxProfit1 = maxProfit1;
;
function maxProfit2(prices, fee) {
    var cash = 0, hold = -prices[0];
    for (var i = 1, len = prices.length; i < len; i++) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);
    }
    return cash;
}
exports.maxProfit2 = maxProfit2;
;
function findTheDifference(s, t) {
    var code = 0;
    for (var i = 0; i < t.length; i++)
        code ^= s.charCodeAt(i) ^ t.charCodeAt(i);
    return String.fromCharCode(code);
}
exports.findTheDifference = findTheDifference;
;
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    var n = matrix.length;
    for (var i = 0; i < Math.floor(n / 2); ++i) {
        for (var j = 0; j < Math.floor((n + 1) / 2); ++j) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }
}
exports.rotate = rotate;
;
function removeDuplicateLetters(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);
        if (stack.indexOf(char) > -1)
            continue;
        // 使用indexOf(xx, i)取代 lastIndexOf(xx)减少遍历次数会更快
        while (stack.length > 0 &&
            stack[stack.length - 1] > char &&
            s.indexOf(stack[stack.length - 1], i) > i) {
            stack.pop();
        }
        stack.push(char);
    }
    return stack.join('');
}
;
function minCostClimbingStairs(cost) {
    var dp = new Array(cost.length + 1).fill(0);
    for (var i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[cost.length];
}
;
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
function zigzagLevelOrder(root) {
    var res = [];
    if (root === null)
        return [];
    var bfs = function (arr, n) {
        if (arr.length === 0)
            return null;
        var temp = [], tempValue = [];
        while (arr.length > 0) {
            var node = arr.shift();
            tempValue.push(node.val);
            if (node.left)
                temp.push(node.left);
            if (node.right)
                temp.push(node.right);
        }
        if (n % 2 === 1)
            tempValue.reverse();
        res.push(__spread(tempValue));
        bfs(__spread(temp), n + 1);
    };
    bfs([root], 0);
    return res;
}
;
function firstUniqChar(s) {
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i)))
            return i;
    }
    return -1;
}
;
function candy(ratings) {
    var left = new Array(ratings.length).fill(1);
    var right = new Array(ratings.length).fill(1);
    for (var i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1])
            left[i] = left[i - 1] + 1;
    }
    var count = left[ratings.length - 1];
    for (var j = ratings.length - 2; j >= 0; j--) {
        if (ratings[j] > ratings[j + 1]) {
            right[j] = right[j + 1] + 1;
        }
        count += Math.max(left[j], right[j]);
    }
    return count;
}
;
function findContentChildren(g, s) {
    g.sort(function (a, b) { return a - b; });
    s.sort(function (a, b) { return a - b; });
    var res = 0, i = 0, j = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            res++;
            i++;
        }
        j++;
    }
    return res;
}
;
function maximalRectangle(matrix) {
    if (matrix.length === 0)
        return 0;
    var row = matrix.length, column = matrix[0].length;
    var maxWidthArr = new Array(row);
    matrix.forEach(function (ele, index) {
        maxWidthArr[index] = new Array(column);
        for (var j = 0; j < column; j++) {
            if (j === 0) {
                maxWidthArr[index][j] = ele[j] === "1" ? 1 : 0;
            }
            else {
                maxWidthArr[index][j] = ele[j] === "1" ? maxWidthArr[index][j - 1] + 1 : 0;
            }
        }
    });
    var maxArea = 0;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            var minWidth = Number.MAX_SAFE_INTEGER, currentMaxArea = 0;
            for (var k = i; k >= 0; k--) {
                minWidth = Math.min(minWidth, maxWidthArr[k][j]);
                currentMaxArea = Math.max(currentMaxArea, minWidth * (i - k + 1));
            }
            maxArea = Math.max(maxArea, currentMaxArea);
        }
    }
    return maxArea;
}
;
function isIsomorphic(s, t) {
    var map = new Map();
    for (var i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            if (map.get(s.charAt(i)) !== t.charAt(i))
                return false;
        }
        else {
            map.set(s.charAt(i), t.charAt(i));
        }
    }
    return true;
}
;
function maxProfitIV(k, prices) {
    var n = prices.length;
    if (k > n / 2) {
        k = Math.floor(n / 2);
    }
    var profit = new Array(k);
    //初始化买入卖出时的利润
    for (var j = 0; j <= k; j++) {
        profit[j] = {
            profit_in: -prices[0],
            profit_out: 0
        };
    }
    for (var i = 0; i < n; i++) {
        for (var j = 1; j <= k; j++) {
            profit[j] = {
                profit_out: Math.max(profit[j].profit_out, profit[j].profit_in + prices[i]),
                profit_in: Math.max(profit[j].profit_in, profit[j - 1].profit_out - prices[i])
            };
        }
    }
    return profit[k].profit_out;
}
;
function minPatches(nums, n) {
    var patches = 0, x = 1, index = 0;
    var length = nums.length;
    while (x <= n) {
        if (index < length && nums[index] <= x) {
            x += nums[index];
            index++;
        }
        else {
            x *= 2;
            patches++;
        }
    }
    return patches;
}
;
function lastStoneWeight(stones) {
    stones.sort(function (a, b) { return a - b; });
    while (stones.length > 1) {
        var max = stones.pop(), secondMax = stones.pop() || 0, temp = max - secondMax;
        if (temp === 0)
            continue;
        stones.push(temp);
        stones.sort(function (a, b) { return a - b; });
    }
    return stones[0] || 0;
}
;
function eraseOverlapIntervals(intervals) {
    if (intervals.length <= 1)
        return 0;
    var count = 1, end = 0;
    intervals.sort(function (a, b) { return a[1] - b[1]; });
    end = intervals[0][1];
    for (var i = 1; i < intervals.length; i++) {
        if (end > intervals[i][0])
            continue;
        end = intervals[i][1];
        count++;
    }
    return intervals.length - count;
}
;
function canPlaceFlowers(flowerbed, n) {
    var len = flowerbed.length;
    for (var i = 0; i < len; i++) {
        // 提前终止
        if (n === 0)
            return true;
        var preIsZaro = flowerbed[i - 1] ? flowerbed[i - 1] === 0 : true;
        var nextIsZaro = flowerbed[i + 1] ? flowerbed[i + 1] === 0 : true;
        if (flowerbed[i] === 0 && preIsZaro && nextIsZaro) {
            n--;
            flowerbed[i] = 1;
        }
    }
    return n === 0;
}
exports.canPlaceFlowers = canPlaceFlowers;
;
function maxSlidingWindow(nums, k) {
    if (!nums || !nums.length)
        return [];
    var res = [], queue = [], pop = function () { return queue[queue.length - 1]; };
    var first = 1 - k;
    for (var last = 0; last < nums.length; last++, first++) {
        while (queue.length && pop() < nums[last])
            queue.pop();
        queue.push(nums[last]);
        if (first < 0)
            continue;
        res.push(queue[0]);
        if (nums[first] === queue[0])
            queue.shift();
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
function partition(head, x) {
    var node = head, lessHead = new ListNode(0), less = lessHead, moreHead = new ListNode(0), more = moreHead;
    while (node) {
        if (node.val < x) {
            less.next = new ListNode(node.val);
            less = less.next;
        }
        else {
            more.next = new ListNode(node.val);
            more = more.next;
        }
        node = node.next;
    }
    lessHead = lessHead.next;
    moreHead = moreHead.next;
    if (!lessHead)
        return moreHead;
    less.next = moreHead;
    return lessHead;
}
;
function fib(n) {
    if (n === 0)
        return 0;
    var pre = 0, next = 1, res = pre + next;
    for (var i = 2; i <= n; i++) {
        res = pre + next;
        pre = next;
        next = res;
    }
    return res;
}
;
function largeGroupPositions(s) {
    var pre = 0, res = [];
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) !== s.charAt(i - 1) || undefined) {
            if (i - pre > 2)
                res.push([pre, i - 1]);
            pre = i;
        }
    }
    if (s.length - pre > 2)
        res.push([pre, s.length - 1]);
    return res;
}
;
function calcEquation(equations, values, queries) {
    var e_14, _a;
    var nvars = 0;
    var variables = new Map();
    var n = equations.length;
    for (var i = 0; i < n; i++) {
        if (!variables.has(equations[i][0])) {
            variables.set(equations[i][0], nvars++);
        }
        if (!variables.has(equations[i][1])) {
            variables.set(equations[i][1], nvars++);
        }
    }
    // 对于每个点，存储其直接连接到的所有点及对应的权值
    var edges = new Array(nvars).fill(0);
    for (var i = 0; i < nvars; i++) {
        edges[i] = [];
    }
    for (var i = 0; i < n; i++) {
        var va = variables.get(equations[i][0]), vb = variables.get(equations[i][1]);
        edges[va].push([vb, values[i]]);
        edges[vb].push([va, 1.0 / values[i]]);
    }
    var queriesCount = queries.length;
    var ret = [];
    for (var i = 0; i < queriesCount; i++) {
        var query = queries[i];
        var result = -1.0;
        if (variables.has(query[0]) && variables.has(query[1])) {
            var ia = variables.get(query[0]), ib = variables.get(query[1]);
            if (ia === ib) {
                result = 1.0;
            }
            else {
                var points = [];
                points.push(ia);
                var ratios = new Array(nvars).fill(-1.0);
                ratios[ia] = 1.0;
                while (points.length && ratios[ib] < 0) {
                    var x = points.pop();
                    try {
                        for (var _b = (e_14 = void 0, __values(edges[x])), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var _d = __read(_c.value, 2), y = _d[0], val = _d[1];
                            if (ratios[y] < 0) {
                                ratios[y] = ratios[x] * val;
                                points.push(y);
                            }
                        }
                    }
                    catch (e_14_1) { e_14 = { error: e_14_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                        }
                        finally { if (e_14) throw e_14.error; }
                    }
                }
                result = ratios[ib];
            }
        }
        ret[i] = result;
    }
    return ret;
}
exports.calcEquation = calcEquation;
;
