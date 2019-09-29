// const add = a => (b, c) => console.log(a + b + c)
// add(1)(2, 3)
// const add = (x) => x + x
// const mult = (x) => x * x
// const addAndMult = (x) => add(mult(x))
// console.log(addAndMult(5))

// function curry(fn, ...args) {
//     const length = fn.length
//     let lists = args || []
//     let listLen
//     return function (...args) {
//       lists = [...lists, ...args]
//       listLen = lists.length
//       if (listLen < length) {
//         const that = lists
//         lists = []
//         return curry(fn, ...that)
//       } else if (listLen === length) {
//         const that = lists
//         lists = []
//         return fn.apply(this, that)
//       }
//     }
//   }
//   var add = (a, b, c) => a + b + c;
// var curryAdd = curry(add)
// // 以下输出结果都相同
// console.log(curryAdd(1, 2, 3)) // 6
// console.log(curryAdd(1, 2)(3)) // 6
// console.log(curryAdd(1)(2)(3)) // 6
// console.log(curryAdd(1)(3)) // 6

// let curryAdd = (...args)=>{
//     let add = function(...addAarry) {
//         let list = [...addAarry];
//         return list.reduce((pre,next)=> pre+next)
//     }
//     let curry = function(fn,...ThisAgrs){
//         let list = [...ThisAgrs];
//         return function(...ThisAgrs){
//             if (ThisAgrs.length==0){
//                 return add.apply(this,list);
//             } else {
//                 that = [...ThisAgrs,...list];
//                 return curry(fn,...that);
//             }
//         }
//     }
//     return curry(add,...args);
// }

// let result = curryAdd(2,2)(2)();


/**
 * @description: 模拟call函数
 * @param 
 * @return: 
 */
// Function.prototype.call2 = function (context) {
//     var context = context || window;
//     context.fn = this;

//     var args = [];
//     for(var i = 1, len = arguments.length; i < len; i++) {
//         args.push('arguments[' + i + ']');
//     }

//     var result = eval('context.fn(' + args +')');

//     delete context.fn
//     return result;
// }

// // 测试一下
// var value = 2;

// var obj = {
//     value: 1
// }

// function bar(name, age) {
//     console.log(this.value);
//     return {
//         value: this.value,
//         name: name,
//         age: age
//     }
// }

// bar.call2(null); // 2

// console.log(bar.call2(obj, 'kevin', 18));


// Function.prototype.call1 = function(ag){
//     let con = ag || window;
//     con.fn = this;
//     let list = [...arguments];
//     list.shift();
//     console.log(list[0]);

//     con.fn(...list[0]);
//     delete con.fn;

// }

// let bar = function(name,age,lalala){
//     console.log(this.value);
//     console.log(name);
//     console.log(age);
//     console.log(lalala);
// }

// var value = "aasasdasdsa";

// let a = {
//     value:"aaa"
// }

// bar.call1(a,["pabn",29,'aa']);

// var b = 2;

// var a = {
//     b: 1,
//     fn: function() {
//        console.log(this.b)
//     }
// }

// a.fn();
// a.fn.bind(a);
// a.fn();
// var task = a.fn.bind(a);
// task();



// function foo() {
//     setTimeout( () => {
//       console.log("id:", this.id);
//     },100);
//   }
  
//   //var id = 21; // 加入这行
  
//   foo.call( { id: 42 } );

//   function foo(){
//     setTimeout(()=>{
//       console.log("id:", this.id)
//     }, 100);
//   }
//   var id = 20;
//   foo.call({id:42});

// function f() {
//     console.log(1)
//     return () => {
//     console.log(2)
//       return () => {
//     console.log(3)
//         return () => {
//           console.log(4)
//           console.log("id:", this.id);
//         };
//       };
//     };
//   }
// var f = f.call({id: 1});
// var t1 = f.call({id: 2})()();
// var t2 = f().call({id: 3})();
// var t3 = f()().call({id: 4});

// Function.prototype.apply1 = function(con){
//     con.fn = this;
//     let list = [...arguments];
//     list.shift();
//     let result = con.fn(...list[0]);
//     delete con.fn;
//     return result;
// }


//  Function.prototype.bind1 = function bind1(con){
//     self.fn  = this;
//     let list = [...arguments];
//     list.shift();
//     return function(){
//         return self.fn.apply1(con,list);
//     }
// }

// let a = function(name,age){
//     console.log(this.value);
//     console.log(name,age);
// }

// let b = {
//     value: 1
// }

// let c = {
//     value: 3
// }

// let a2 = a.bind1(b,'aa','aa').bind1(c)();

// const log = function(ss){
//     console.log(ss)
// }

// let a = [1,11,3,4,5,6,7,8,9,10];
// let b = (a,v)=>{
//     console.log(a*a);
// }

// a.forEach(b);

/**
 * @description: 实现reduce方法
 * @param {type} 
 * @return: 
 */

// Array.prototype.reduce1 = function(fn){
//     let arr = this[0];
//     if(this.length == 0){
//         throw new TypeError("Reduce of empty array with no initial value");
//     }
//     let result = this[0];
//     for(let i=1; i<this.length; i++){
//         result = fn(result,this[i],i,this);
//     }
//     return result;
// }

// let task = [1,23];
// let n = (a,b,c,d)=> {
//     console.log(a,b,c,d)
//     return a*b;
// };

// console.log('my',task.reduce1(n));
// console.log('true',task.reduce(n));

// 数组rest方法实现 

// let rest = function (arg){
//     let b = [];

//     let fn = function(arg){
//         if(Array.isArray(arg)){
//             arg.map(fn);
//         } else {
//             b.push(arg)
//         }
//     }
    
//     a.map(fn);

//     return b;
// }

// let a =[1,2,[3,4],[5,6,[7,8],[9,[10,[111]]]]];

// console.log(rest(a))

// 利用settimeout实现setinterval函数

// const setinterval2 = (func, interval) => {
//     const config = { shouldStop: false }
//     const loop = () => {
//         if (!config.shouldStop) {
//             func();
//             setTimeout(loop, interval);
//         }
//     }
//     setTimeout(loop, interval);
//     return config;
// }

// let flag = true;
    
// let setinterval1 = function(fn,time){
//     let a = function(){
//         if(flag){
//             fn();
//             setTimeout(setinterval1(fn,time),time);
//         }
//     }
//     setTimeout(a,time);
// }


// let log = ()=> console.log("a");

// setinterval1(log,1000);

// //clearInterval函数
// let clearInterval = ()=>{
//     flag = false;
// }






