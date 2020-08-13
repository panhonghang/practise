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


// request("https://wenku.baidu.com/view/5a05b002df80d4d8d15abe23482fb4daa58d1d04.html?rec_flag=default&sxts=1591346297238",function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
//   });