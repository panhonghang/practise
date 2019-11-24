/**
 * @param {string} s
 * @return {number}
 * 647. 回文子串
 */
var countSubstrings = function(s) {
    let temp = [[]],
        len = s.length,
        res = 0;
    if(len == 0) return 0;
    for(let i = 0; i < len; i++){
        let len1 = temp.length;
        for(let j = 0; j < len1; j++){
            temp.push([...temp[j],s[i]])
        }
    }
    temp.shift();

    for(let i = 0; i < temp.length; i++){
        if(temp[i].join('') == temp[i].reverse().join('')) res++;
    }
    console.log(temp)
    return res;
};

countSubstrings("abc")