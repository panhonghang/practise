/**
 * @param {string} s
 * @return {number}
 */
/* 查找最长子字串问题 */
var lengthOfLongestSubstring = function(s) {
    var res = 0,
        i = 0;
    var temp = [];
    while(i < s.length) {
        
        // 当子字符串里面没有这个字符的时候就添加
        if(temp.indexOf(s[i]) === -1) {
            temp.push(s[i]);
        } else {
        
        // 当子字符串里面有这个字符的时候就取出第一个字符，并且结束该轮循环
            temp.shift();
            continue;
        }

        // 判断取最大值
        res = Math.max(res, temp.length);
        i++;
    }
    return res;
};
