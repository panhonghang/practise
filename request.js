// var request = require('request');
// var fs = require('fs');

// let num = 200;

// while(num<201){
//     header={
//         "Cookie":"PHPSESSID=ST-104038-Kmce2aotmkZklgbWmYf7-fI3L-ids1-1590836340029",
//     }
    
//     const options = {
//         url: 'http://jwc.cqupt.edu.cn/showstupic.php?xh=2017210016'+num,
//         headers: header,
//     };
    
//     function downloadFile(filename,callback){
//         var stream = fs.createWriteStream(filename);
//         request(options).pipe(stream).on('close', callback); 
//     }

//     var filename = '2018210'+num+'.jpg';
//     downloadFile(filename,function(a,b,c){
//         console.log(a,b,c);
//     });
//     num++;
// }