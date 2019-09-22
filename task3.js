/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let numberArr = [];
    // 转二进制
    /**
     * @description: 
     * @param {number} 
     * @return: number
     */
    var bites = function(arg){
        let result = arg;
        let resultCount = 0;
        result = arg.toString(2).split('');
        
        for(let i = 0; i < result.length; i++){
            if(result[0]=='1') resultCount++;
        }

        return resultCount;
    }
    //循环
    for(let i = 0; i <= num; i++){
        numberArr[i] = bites(i);
    }
    return numberArr;
};

console.log(countBits(1))