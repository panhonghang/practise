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
/**
 * @param  {} con
 * 实现apply
 */
// Function.prototype.apply1 = function(con){
//     con.fn = this;
//     let list = [...arguments];
//     list.shift();
//     let result = con.fn(...list[0]);
//     delete con.fn;
//     return result;
// }

/**
 * @param  {} con
 * 实现bind函数
 */
//  Function.prototype.bind1 = function bind1(con){
//     self.fn  = this;
//     let list = [...arguments];
//     list.shift();
//     return function(){
//         return self.fn.apply1(con,list);
//     }
// }

// Function.prototype.bind1 = function(context){
//     let fn = this;

//     let arg = [...arguments];
//     arg.shift();

//     return function(){
//         return fn.apply(context,arg)
//     }
// }

// let a = function(name){
//     console.log(this.value);
//     console.log(name);
// }

// let b = {
//     value: 1,
// }

// let c = {
//     value: 3
// }

// let a2 = a.bind1(b,'aa')();

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
// // JavaScript实现链表

// // 节点
// let Node = function(elem){
//     this.elem = elem;
//     this.next = null
// }
// // 链表类
// let NodeList = function(){
//     this.head = new Node('head');
//     this.find = find;
//     this.insert = insert;
//     this.remove = remove;
//     this.show = show;
// }
// // find方法
// let find = function(a){
//     let current = this.head;
//     while(current.elem !== a){
//     if(current.next == null){
//         return null;
//         } else {
//             current = current.next;
//         }
//     }
//     return current;
// }

// // insert方法
// let insert = function(pre,elem){
//     let newElem = new Node(elem);
//     let current = this.find(pre);
//     let next = current.next;
//     current.next = newElem;
//     newElem.next = next;
// }

// // show方法
// let show = function(){
//     let current = this.head;
//     while(current.next !== null){
//         console.log(current.elem);
//         current = current.next;
//     }
//     console.log(current.elem);    
// }

// // remove方法
// let remove = function(elem){
//     let pre = this.head;
//     while(pre.next==elem){
//         pre = pre.next
//     }
//     pre.next = this.find(elem).next
// }

// let a = new NodeList();
// let b = new Node('bb');
// let c = new Node('cc');
// let d = new Node('dd');
// let e = new Node('ee');
// let f = new Node('ff');

// a.head.next = b;
// b.next = c;
// a.insert('cc','dd');
// a.show();

// // JavaScript实现双向链表

// let Node = function(elem){
//     this.elem = elem;
//     this.next = null;
//     this.pre = null;
// }

// let NodeList = function(){
//     this.head = new Node('head');
//     this.find = find;
//     this.insert = insert;
//     this.show = show;
//     this.remove = remove;
//     this.findLast = findLast;
//     this.showReverse = showReverse;
// }
// // find方法
// let find = function(a){
//     let current = this.head;
//     while(current.elem !== a){
//         // if(a.next == null){
//         //     return null;
//         // } else{
//             current = current.next;
//         // }
//     }
//     return current
// }
// // insert方法
// let insert = function(pre,elem){
//     let preElem = this.find(pre);
//     let that = new Node(elem);
//     if(preElem.next == null){
//         preElem.next = that;
//         that.pre = preElem;
//     } else {
//         let next = preElem.next;

//         preElem.next = that;
//         next.pre = that;

//         that.pre = preElem;
//         that.next = next;
//     }
// }

// // show方法
// let show = function(){
//     let current = this.head;
//     while(current !== null){
//         console.log(current.elem);
//         current = current.next;
//     }
// }

// // remove方法
// let remove = function(elem){
//     let current = this.find(elem);
//     let next = current.next;
//     let preElem = current.pre;
//     preElem.next = next;
//     next.pre = preElem;
// }

// // findLast方法
// let findLast = function(){
//     let current = this.head;
//     while(current.next !== null){
//         current = current.next;
//     }
//     return current;
// }

// // showReverse方法
// let showReverse = function(){
//     let current = this.findLast();
//     while(current !== null){
//         console.log(current.elem);
//         current  = current.pre;
//     }
// }

// let a = new NodeList();
// let b = new Node('bb');
// let c = new Node('cc');
// let d = new Node('dd');
// let e = new Node('ee');
// let f = new Node('ff');

// a.head.next = b;
// b.pre = a.head;

// b.next = c;
// c.pre = b;

// a.insert('cc','dd');
// a.show();
// console.log('----------------------------------');
// a.remove('bb');
// a.show();
// console.log('----------------------------------');
// a.showReverse();
// console.log(a.findLast());


// JavaScript实现HashTable




// /**
//  * @description: hash函数
//  * @param data为数组类型
//  * @return: 
//  */

// let simpleHash = function(data){
//     let total = 0;
//     data.split('').forEach((data)=>{
//         total = total + data.charCodeAt();
//     })
//     return total % this.table.length;
// }

// /**
//  * @description: put函数
//  * @param string
//  * @return: 
//  */
// let put = function(data){
//     let pos = this.betterHash(data);
//     // let pos = this.simpleHash(data);
//     this.table[pos] = data;
// }

// let showDistro = function(){
//     for(let i = 0; i < this.table.length; i++){
//         if(this.table[i] !== undefined)  console.log('this is:',i,'   ',this.table[i])
//     }
// }
// /**
//  * @description:霍纳算法改进 
//  * @param string
//  * @return: 
//  */
// let betterHash = function(data){
//     let total = 0;
//     let h = 37;
//     data.split('').forEach((data)=>{
//         total = total*h + data.charCodeAt();
//     })
//     return total % this.table.length;
// }

// let HashTable = function(){
//     this.table = new Array(137);
//     this.simpleHash = simpleHash.bind(this);
//     this.showDistro = showDistro.bind(this);
//     this.put = put.bind(this);
//     this.betterHash = betterHash.bind(this);
// }

// let task = ['aaa','bbbb','cccc','dddddddddddddddddddddddddddgh'];

// let hb = new HashTable();


// task.forEach(hb.put);

// hb.showDistro()

// var value = 1;


// /**
//  * @description: javascript 实现二叉树
//  * @param {type} 
//  * @return: 
//  */

// let Node = function(data,left,right) {
//     this.left = left||null;
//     this.right = right||null;
//     this.data = data;
// }

// let insert = function(data){
//     let node = new Node(data);
//     if(this.root == null){
//         this.root = node;
//     } else {
//         let current = this.root;
//         while(1){
//             if(data < current.data){
//                 if(current.left == null){
//                     current.left = node;
//                     break;
//                 } else{
//                     current = current.left;
//                 }
//             } else {
//                 if(current.right == null){
//                     current.right = node;
//                     break;
//                 } else{
//                     current = current.right;
//                 } 
//             }
//         }
//     }
// }

// /**
//  * @description: javascript 递归实现先序遍历
//  * @param {type} 
//  * @return: 
//  */

// let preOrder = function(){
//     let start = this.root;
//     if(start == null){
//         return
//     } else {
//         let order = function(current){
//             if(current !== null){
//                 console.log(current.data);
//                 order(current.left);
//                 order(current.right);
//             }
//          }
//         order(start)
//     }
//  }

// /**
//  * @description: javascript 递归实现中序遍历
//  * @param {type} 
//  * @return: 
//  */ 

// let midOrder = function(){
//     let start = this.root;
//     if(start == null){
//         return
//     } else {
//         let order = function(current){
//             if(current !== null){
//                 order(current.left);
//                 console.log(current.data);
//                 order(current.right);
//             }
//          }
         
//        order(start);
//     }
//  }
// /**
//  * @description: javascript 递归实现后序遍历
//  * @param {type} 
//  * @return: 
//  */ 

// let nexOrder = function(){
//     let start = this.root;
//     if(start == null){
//         return
//     } else {
//         let fn = function(current){
//             if(current !== null){
//                 fn(current.left);
//                 fn(current.right);
//                 console.log(current.data);
//             }
//          }
//          fn(start)
//     }
//  }
 

// /**
//  * @description: 实现查找二叉树最小值
//  * @param {type} 
//  * @return: 
//  */ 
// let getMin = function(){
//     let current = this.root;
//     while(current.left !== null){
//         current = current.left;
//     }
//     return current.data;
// }

// /**
//  * @description: 实现查找二叉树最大值
//  * @param {type} 
//  * @return: 
//  */ 
// let getMax = function(){
//     let current = this.root;
//     while(current.right !== null){
//         current = current.right;
//     }
//     return current.data;
// }

// /**
//  * @description: 实现查找给定值
//  * @param {type} 
//  * @return: 
//  */

// let getFind = function(data){
//     let start = this.root;

//     let result = null;

//     let fn = function(arg) {
//         if(arg !== null){
//             if(arg.data > data){
//                 fn(arg.left)
//             } else if(arg.data < data){
//                 fn(arg.right);
//             } else {
//                 result = arg;
//             }
//         } 
//     }

//     fn(start)
    
//     return result;
// }

// /* 
//     需要先找到父节点
// */


// // 根据给定删除给定节点下二叉树的对应节点
// let removeNode = function(node, data) {
//     if(node == null) {
//         return null;
//     }
//     if(data == node.data) {
//         // 没有子节点（子树）
//         if(node.left == null && node.right == null) {
//             return null;
//         } 
//         // 只有右子节点（子树）
//         else if(node.left == null ) {
//             return node.right;
//         } 
//         // 只有左子节点（子树）
//         else if(node.right == null){
//             return node.left;
//         } 
//         // 有两个子节点（子树）
//         else {
//             // 都不空的情况

//             // 查找左节点最大值
//             let maxLeft = node.left;
//             // 左节点最大值就是左节点本身
//             if(maxLeft.right == null){
//                 maxLeft.right = node.right;
//                 node.data = maxLeft.data;
//             } else { 
//                 while(maxLeft.right !== null){
//                         maxLeft = maxLeft.right;
//                 }
//                 // 交换data的值
//                 node.data = maxLeft.data;
//                 // 删除左子树的最大值以后，更新左节点。
//                 node.left = removeNode(node.left,maxLeft)
//             } 
//             return node;
//         }
//     } else if(data < node.data) {
//         node.left = this.removeNode(node.left, data);
//         return node;
//     } else {
//         node.right = this.removeNode(node.right, data);
//         return node;
//     }
// }

// let BST = function(){
//     this.root = null;
//     this.insert = insert;
//     this.preOrder = preOrder;
//     this.midOrder = midOrder;
//     this.nexOrder = nexOrder;
//     this.getMax = getMax;
//     this.getMin = getMin;
//     this.getFind = getFind;
//     this.removeNode = removeNode;
// }

// let task = new BST();

// let arr = [23,45,16,37,3,99,22];

// arr.forEach((aa)=> {task.insert(aa)});

// // console.log(task.getFind(23))
// // console.log(task.getFind(22))
// // console.log(task.getFind(99))


// // console.log(task.getMax());
// // console.log(task.getMin());

// // task.preOrder();
// // task.midOrder();
// // task.nexOrder();

// task.removeNode(task.root,22);

// console.log(task);


// /**
//  * @description: JavaScript实现图
//  * @param {type} 
//  * @return: 
//  */


// /**
//  * @description: addEdge方法
//  * @param {type} 
//  * @return: 
//  */

// let addEdge = function(a,b){
//     this.adj[a].push(b);
//     this.adj[b].push(a);
//     this.edges++;
// }

// /**
//  * @description: showGraph函数
//  * @param {type} 
//  * @return: 
//  */

//  let showGraph = function(){
//      let i = 0;
//     this.adj.forEach((arr)=>{
//         console.log(i++,'--->')
//         arr.forEach((elm)=>{
//             if(elm!==undefined){
//                 console.log(elm);   
//             }
//         })
//     })
//  }

// /**
//  * @description: dfs函数
//  * @param {type} 
//  * @return: 
//  */ 

//  let DFS = function(v){
//     this.mark[v] = true;

//     if(this.adj[v] !== undefined){
//         console.log(v,'------------------',this.adj[v]);
//     }

//     this.adj[v].forEach((i)=>{
//         if(this.mark[i] ==false ){
//             this.DFS(i)
//         }
//     })
//  }

// /**
//  * @description: BFS函数
//  * @param {type} 
//  * @return: 
//  */ 

// let BFS = function(v){
//     this.mark[v] = true;
//     let queue = [];
//     let = queue.push(v);

//     while(queue.length > 0){
//         let s = queue.shift();
        
//         if(this.adj[s] !== undefined){
//             console.log(s,'------------------',this.adj[s]);
//             this.adj[s].forEach((i)=>{
//                 if(!this.mark[i]){
//                     this.mark[i] = true;
//                     queue.push(i)
//                 }
//             })
//         }
//     }
// }

// let Graph = function(v){
//     this.vertices = v;
//     this.edges = 0;
//     this.adj = [];
//     this.mark = [];

//     for(let i = 0; i < this.vertices; i++){
//         this.mark[i] = false;
//         this.adj[i] = [];
//     }

//     this.addEdge = addEdge;
//     this.showGraph = showGraph;

//     this.DFS = DFS;
//     this.BFS = BFS;
// }

// let g = new Graph(5);

// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(0,3);
// g.addEdge(0,4);
// g.addEdge(1,1);
// g.addEdge(1,2);
// g.addEdge(1,3);
// g.addEdge(1,4);

// // g.showGraph()
// // g.DFS(0);
// g.BFS(0);

// var threeSum = function(nums) {
//     let arr = [];
//     let re = [];
    
//     if(nums.length < 3) return re;

//     nums.sort((a,b)=>a-b);
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             for(let k = j+1; k < nums.length; k++){
//                 if(nums[i] + nums[j] + nums[k] == 0){
//                    arr.push([nums[i],nums[k],nums[j]].sort((a,b)=>a-b))
//                 }
//             }            
//         }
//     }
//     let bb = []
//     // 去重函数
//     if(arr.length>2){
//         arr1 = arr.map((i)=>i.toLocaleString());
//         arr1 = Array.from(new Set(arr1));
//         re = arr1.map((j)=> j.split(','));

//         for(let i = 0; i < re.length; i++){
//             for(let j = 0; i < re.length; j++){
//                 Number(re[i][j])
//             }
//         }

//     } else {
//         re.push(arr)
//     }

// };

// threeSum([0,0,0])


// var threeSum = function (nums) {
//     let res = []
//     let length = nums.length;
//     nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
//     if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
//       for (let i = 0; i < length - 2;) {
//         if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
//         let first = i + 1
//         let last = length - 1
//         do {
//           if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
//           let result = nums[i] + nums[first] + nums[last]
//           if (result === 0) { // 如果可以组队
//             res.push([nums[i], nums[first], nums[last]])
//           }
//           if (result <= 0 ) { // 实力太弱，把菜鸟那边右移一位
//             while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
//           } else { // 实力太强，把大神那边右移一位
//             while (first < last && nums[last] === nums[--last]) {}
//           }
//         } while (first < last)
//         while (nums[i] === nums[++i]) {}
//       }
//     }
//     return res
//   }



// var maxDistToClosest = function(seats) {
//     let arr = [];
//     let first = 0;
//     let end = 0;
//     let start = 0;

//     for(let i = 0; i < seats.length; i++){
//         if(seats[i] == 0) {
//             first++;
//             if(seats[i+1] == 1){
//                 arr.push(first);
//                 first = 0;
//             }
//             if(i == seats.length - 1){
//                 arr.push(first);
//             }
//         }
//     }

//     if(seats[seats.length-1] == 0){
//         end = arr.pop();
//         arr.push(end);
//     } 
    
//     if(seats[0] == 0){
//         start = arr.shift();
//         arr.unshift(start);
//     }

//     arr.sort((a,b)=> a-b);

//     let max = arr.pop()||1;

//     if(max%2 == 0){
//         max = max/2;
//     } else {
//         max = (max+1)/2
//     }

//     max = [start,end,max].sort((a,b)=> a-b).pop()

//     return max
// };

// let a = maxDistToClosest([0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1])

// console.log(a)


/**
 * @description: 
 * @param {type} 矩形叠加去重
 * @return: 
 */

    // for(let i = 0; i < arr.length; i++){
    //     let width;
    //     let height;
    //     let w = 0;
    //     let h = 0;
    //     // 到达最高的一个

    //     if( i === arr.length-1){
    //         width = arr[i].right-arr[i].left;
    //         height = arr[i].high-arr[i].low;
    //     } else {
    //         // 不相交
    //         if(arr[i].high <= arr[i+1].low) {
    //             width = arr[i].right-arr[i].left;
    //             height = arr[i].high-arr[i].low;
    //         } else {
    //             // 不相交
    //             if(arr[i].right <= arr[i+1].left||arr[i+1].right <= arr[i].left){
    //                 width = arr[i].right-arr[i].left;
    //                 height = arr[i].high-arr[i].low;
    //                 // 相交就用自己的面积减去相交的面积
    //             } else {
    //                 width = arr[i].right-arr[i].left;
    //                 height = arr[i].high-arr[i].low;
    //                 // 找到相交部分的高度
    //                 h = [arr[i].low,arr[i].high,arr[i+1].low,arr[i+1].high].sort((a,b)=>a-b);
    //                 h = h[2] - h[1];
    //                 // 找到相交部分的宽度
    //                 w = [arr[i].left,arr[i].right,arr[i+1].left,arr[i+1].right].sort((a,b)=>a-b);
    //                 w = w[2] - w[1];
    //             }
    //         }
    //     }

    //     console.log(width*height - w*h)
    //     // 累加面积
    //     s = width*height - w*h + s;
    // }

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
// var rectangleArea = function(rectangles) {
//     let arr = [];
//     let line = [];
//     let s = 0;

//     rectangles.forEach((i)=>{
//         let node = {
//             left: i[0],
//             right: i[2],
//             high: i[3],
//             low: i[1]
//         }
//         line.push(i[1],i[3]);
//         arr.push(node);
//     });

//     arr.sort((a,b)=>a.left-b.left);

//     line = Array.from(new Set(line)).sort((a,b)=> a-b);
    
//     for(let i = 0; i < line.length - 1; i++){
//         let width = [];
//         let h = line[i+1] - line[i];
//         // 当前这一行的总宽度
//         let w = 0;

//         // 取得当前这一行的所有元素
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j].low <= line[i]&&line[i] < arr[j].high){
//                 width.push(arr[j]);
//             }
//         }   

//         if(width.length < 2){
//             // 直接返回宽度
//             if(width.length==0){
//                 w = 0;
//             } else {
//                 w = width[0].right - width[0].left + w;
//             }
//         } else {
//              // 从左往右排序
//             width.sort((a,b)=> a.left-b.left);

//             let length = width.length;

//             let fn = function(wlist){

//                 let list = [];

//                 if(wlist.length < 2) return wlist; 

                
                
//                 for(let a = 0; a < wlist.length - 1; a++){
                    
//                     let start1 = wlist[a];
//                     let start2 = wlist[a+1]; 
//                     // 不相交就都取出来
//                     if(start1.right < start2.left||start2.right < start1.left){
//                         list.push(start1);
//                     } else {
//                         // 相交就添加新的进去
//                         let newNode = [start1.right,start1.left,start2.right,start2.left].sort((a,b)=>a-b);     
//                         let node = {
//                             left: newNode[0],
//                             right: newNode[3]
//                         }  

//                         list.push(node);
//                     }

//                     if(a == wlist.length - 2) list.push(start2);
//                 }
                
//                 if(list.length == length){
//                     return list;
//                 } else {
//                     length = list.length;
//                     list.sort((a,b)=> a.left-b.left);
//                     return fn(list)
//                 }
//             }

//             width = fn(width);
            
//             if(width.length>1){
//                 for(let i = 0; i < width.length; i++){
//                     w = width[i].right - width[i].left + w;                
//                 }
//             } else{
//                 w = width[0].right - width[0].left;
//             }
//         }
//         console.log(w*h)
//         s = w*h + s; 
//     }

//     if(s > 10**9) return s % (10**9 -7)

//     return s;
// };


// let s = rectangleArea([[72,10,92,86],[25,12,64,28],[10,27,43,54],[65,12,100,91]]);


// console.log(s)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// let Node = function(e){
//     this.e = e;
//     this.next = null;
// }

// let add = function(ele){
//     this.length ++;
//     let node = new Node(ele);
//     let current = this.head;
//     while(current.next!==null){
//         current = current.next;
//     }
//     current.next = node;
// }

// let ListNode = function() {
//     this.head = new Node('head');
//     this.add = add;
//     this.length = 1;
// }

// var addTwoNumbers = function(l1, l2) {
//     let list1 = new ListNode();
//     let list2 = new ListNode();
//     let list3 = new ListNode();

//     for(let i = 0; i < l1.length; i++){
//         list1.add(l1[i])
//     }

//     for(let i = 0; i < l2.length; i++){
//         list2.add(l2[i])
//     }

//     let current1 = list1.head;
//     let current2 = list2.head;
//     let current3 = list3.head;

//     let flag = false;

//     while(!(list1.length==1 || list2.length==1)){
//         list1.length--;
//         list2.length--;

//         current1 = current1.next;
//         current2 = current2.next;

//         if(flag){
//             result = current1.e + current2.e+1;
//         } else {
//             result = current1.e + current2.e;
//         }

//         if(result < 10){
//             list3.add(result);
//             flag = false;
//         } else {
//             result = result % 10;
//             list3.add(result);
//             flag = true;
//         }

//         if(list1.length==1 || list2.length==1){
//             list3.add(1);
//         }
//     }

//     let l3 = [];
    
//     while(current3.next!==null){
//         current3 = current3.next;
//         l3.push(current3.e)
//     }
    
//     return l3;
// }

// console.log(addTwoNumbers([2,4,3,2],[5,6,4,8]))

// let log = ()=> console.log("a");

// setinterval1(log,1000);

// //clearInterval函数
// let clearInterval = ()=>{
//     flag = false;
// }
// /**
//  * @param {string} s
//  * @return {number}
//  */
// /* 查找最长子字串问题 */
// var lengthOfLongestSubstring = function(s) {
//     var res = 0,
//         i = 0;
//     var temp = [];
//     while(i < s.length) {
        
//         // 当子字符串里面没有这个字符的时候就添加
//         if(temp.indexOf(s[i]) === -1) {
//             temp.push(s[i]);
//         } else {
        
//         // 当子字符串里面有这个字符的时候就取出第一个字符，并且结束该轮循环
//             temp.shift();
//             continue;
//         }

//         // 判断取最大值
//         res = Math.max(res, temp.length);
//         i++;
//     }
//     return res;
// };
//'123456789'.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// // 比特计数
// /**
//  * @param {number} num
//  * @return {number[]}
//  */
// var countBits = function(num) {
//     let numberArr = [];
//     // 转二进制
//     /**
//      * @description: 
//      * @param {number} 
//      * @return: number
//      */
//     var bites = function(arg){
//         let result = arg;
//         let resultCount = 0;
//         result = arg.toString(2).split('');
        
//         for(let i = 0; i < result.length; i++){
//             if(result[i]=='1') resultCount++;
//         }

//         return resultCount;
//     }
//     //循环
//     for(let i = 0; i <= num; i++){
//         numberArr[i] = bites(i);
//     }
//     return numberArr;
// };


// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// //螺旋矩阵
// var generateMatrix = function(n) {
//     let resArr = [];
//     for(let i = 0; i < n; i++){
//         resArr[i] = [];
//     }

//     let c = 1, j = 0;
//     while (c <= n * n) {
//         for (let i = j; i < n - j; i++){
//                 resArr[j][i] = c++;
//             }
//         for (let i = j + 1; i < n - j; i++){
//                 resArr[i][n - j - 1] = c++;
//             }
//         for (let i = n - j - 2; i >= j; i--){
//                 resArr[n - j - 1][i] = c++;
//             }
//         for (let i = n -j - 2; i > j; i--){
//                 resArr[i][j] = c++;
//             }
//         j++;
//     }

//     return resArr;
// };

// console.log(generateMatrix(4))

// 求子集 问题
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     let resArr = [[]];
//     for(let i=0;i<nums.length;i++){
//         let len = resArr.length;
//         for(let j=0;j<len;j++){
//             resArr.push([...resArr[j],nums[i]])
//         }
//     }
//     /* 
//     task1 resArr = [] [1]
//     task2 resArr = [] [1]  [2] [1,2]
//     task3 resArr = [] [1]  [2] [1,2]  [3] [2,3] [1,2,3]
//      */
//     return resArr;
// };

// console.log(subsets([1,2,3]))

/**
 * @param {number} n
 * @return {number}
 * 动态规划问题
 */
// var climbStairs = function(n) {
//     if(n===0||n===1) return 1;
//     if(n===2) return 2;
//     let res = [1,2];

//     for(let i = 2; i<n; i++){
//         res[i] = res[i-1]+res[i-2];
//     }

//     return res[n-1];
// };

// console.log(climbStairs(0))

/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function(n) {
//     if(n===0) return 0;
//     if(n===1||n===2) return 1;
//     let res = [0,1,1];
    
//     for(let i = 3; i <= n;i++){
//         res[i] = res[i-2] + res[i-1] + res[i-3];
//     }

//     return res[n];
// }

// console.log(tribonacci(6))

/**
 * @description: 求全排列
 * @param {type} {array} nums
 * @return: array
 */

//  var permute = function(nums) {
//     nums.sort((pre,next)=> pre - next);
//     let result = [];
//     /**
//      * @description: change element's index
//      * @param {type} {number[]} nextArr {number} pre next
//      * @return: null
//      */
//     let swep = function(nextArr,pre,next){
//         let temp = nextArr[pre];
//         nextArr[pre] = nextArr[next];
//         nextArr[next] = temp;
//     }
//     /**
//      * @description: add element to result
//      * @param {type} {number[]} arr {number} start
//      * @return: 
//      */
//     let fn = function(arr,start){
//         if(start === arr.length - 1) return result.push(arr);
//         let len = arr.length;
//         for(let i = start; i < len; i++){
//             swep(arr,start,i);
//             let newA = [...arr];
//             fn(newA,start+1);
//         }
//     }
//     fn(nums,0)

//     return result;
// };

//  console.log(permute([1,3,2]))

/**
 * @description: 求全排列||
 * @param {number[]} nums
 * @return {number[][]}
 */

//这样写效率太低了
// var permuteUnique = function(nums) {
//     nums.sort((pre,next)=> pre - next);
//     let result = [];
//     /**
//      * @description: change element's index
//      * @param {type} {number[]} nextArr {number} pre next
//      * @return: null
//      */
//     let swep = function(nextArr,pre,next){
//         let temp = nextArr[pre];
//         nextArr[pre] = nextArr[next];
//         nextArr[next] = temp;
//     }
//     /**
//      * @description: add element to result
//      * @param {type} {number[]} arr {number} start
//      * @return: 
//      */
//     let fn = function(arr,start){
//         if(start === arr.length - 1) return result.push(arr);
//         let len = arr.length;
//         for(let i = start; i < len; i++){
//             swep(arr,start,i);
//             let newA = [...arr];
//             fn(newA,start+1);
//         }
//     }
//     fn(nums,0);
//     //实现多维数组去重，装逼可以效率不行
//     result = [...new Set(result.map(key => key = key.join(',')))].map(key => key.split(',').map(key=> +key));

//     return result;
// };

// var permuteUnique = function(nums) {
//     nums.sort((pre,next)=> pre - next);
//     let result = [];
//     /**
//      * @description: change element's index
//      * @param {type} {number[]} nextArr {number} pre next
//      * @return: null
//      */
//     let swep = function(nextArr,pre,next){
//         let temp = nextArr[pre];
//         nextArr[pre] = nextArr[next];
//         nextArr[next] = temp;
//     }
//     /**
//      * @description: add element to result
//      * @param {type} {number[]} arr {number} start
//      * @return: 
//      */
//     let fn = function(arr,start){
//         if(start === arr.length - 1) return result.push(arr);

//         let len = arr.length;
//         let map = new Map();

//         for(let i = start; i < len; i++){
//             // 解决重复问题
//             if(!map.get(arr[i])){
//                 map.set(arr[i],true);
//                 swep(arr,start,i);
//                 let newA = [...arr];
//                 fn(newA,start+1);
//             }
//         }
//     }
//     fn(nums,0);

//     return result;
// };

// console.log(permuteUnique([1,1,2,2]))

/**
 * @description 784. 字母大小写全排列
 * @param {string} S
 * @return {string[]}
 */
// var letterCasePermutation = function(S) {
//     let res = [];
//     let Arr = S.split('');
//     let order = [];
    
//     Arr.forEach((key,index)=>{
//         if(+key < 10) return;
//         order.push(index);
//     });

//     let leng = order.length;

//     let fn = function(start,arr){
//         if(start >= leng) return res.push(arr.join(''));

//         arr[order[start]]=arr[order[start]].toLocaleLowerCase();
//         fn(start+1,[...arr]);
//         arr[order[start]]=arr[order[start]].toLocaleUpperCase();
//         fn(start+1,[...arr]);
//     }

//     fn(0,Arr);

//     return res;
// };

// console.log(letterCasePermutation('12sA'))

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// let head = new ListNode(1);
// head.next = new ListNode(2);

// var reverseList = function(head) {
//     let node = head;
//     let resNode = head;
//     let arr = [];

//     while(1){
//         if(!node) break;
//         arr.push(node.val);
//         node = node.next;
//     }

//     arr.reverse();
    
//     arr.forEach((key,index)=>{
//         resNode.val = arr[index]
//         resNode = resNode.next;
//     })
//     return head;
// };

// reverseList(head)


/**
 * @description 两个数组求交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//     let res = nums1.filter(elm => nums2.includes(elm));
//     res = [...new Set(res)]
//     return res
// };

// console.log(intersection([1,2,2,1],[2,2]))

/**
 * 求两个数组交集||
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//     let res = nums1.filter(elm => {
//         let index = nums2.indexOf(elm);
//         if(index !== -1){
//             nums2.splice(index,1);
//             return true
//         }
//     });

//     return res
// };

// console.log(intersect([1,2,2,1],[2]))

/**
 * 按奇偶排序数组 II
 * @param {number[]} A
 * @return {number[]}
 */
// var sortArrayByParityII = function(A) {
//     let even = 0;
//     let odd = 1;
//     let res = [];

//     A.forEach(key=>{
//         if(key%2===0){
//             res[even] = key;
//             even = even + 2;
//         } else {
//             res[odd] = key;
//             odd = odd + 2;
//         }
//     })

//     return res
// };

// console.log(sortArrayByParityII([4,2,5,7]))

/**
 * @param {number[]} A
 * @return {number}
 */
// var sumSubarrayMins = function(A) {
//     let res = 0;
    
//     return res;
// };

// sumSubarrayMins([1,2,3,4])

/**
 * @description: 扑克牌问题 1.0
 * 在纸上面写出了结果以后强行倒推的
 * @param {type} {number[]} A
 * @return: {number[]} res
 */

// var sortPoke = function(A){
//     let res = [];

//     let temp1 = A.splice(0,Math.floor(A.length/2)+1);
//     let temp2 = A.splice(0,Math.floor(A.length/2));
//     let temp3 = A.splice(0,Math.floor(A.length/2));
    
//     let fn = function(Arr1,Arr2){
//         let resA = [];
//         Arr1.forEach(key=>{
//             resA.push(key);
//             if(Arr2.length > 0) resA.push(Arr2.shift());
//         })
//         return resA;
//     }
    
//     res = fn(temp1,fn(fn(A,temp3),temp2))

//     console.log(res)
//     return res;
// }

// sortPoke([1,2,3,4,5,6,7,8,9,10,11,12,13])



// 后面发现先写出正序方法，之后将队列方法改为栈方法，可以快速解决

// /**
//  * @description: 扑克牌问题正序
//  * @param {type} {number[]} A
//  * @return: {number[]} res
//  */

// var sortPokeOrder = function(A){
//     let res = [];
//     let length = A.length;

//     while(length > 0){
//         res.push(A.shift());
//         A.push(A.shift());
//         length--;
//     }

//     console.log('这是正序',res);
    
//     return res;
// }

// sortPokeOrder([1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7])

// /**
//  * @description: 扑克牌问题倒序
//  * @param {type} {number[]} A
//  * @return: {number[]} res
//  */

// var sortPoke = function(A){
//     A.reverse();
//     let res = [];
//     let length = A.length;

//     while(length > 0){
//         res.unshift(A.pop());
//         A.unshift(A.pop());
//         length--;
//     }
//     res.reverse();

//     console.log('这是倒叙',res)
//     return res;
// }

// sortPoke([1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7])


/**
 * @description: 网上找的大神解法,洗牌问题
 * @param {type} 
 * @return: 
 */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// function sort(arr) {
//     let pre = []
    
//     while (arr.length > 1) {
//         pre.push(arr.pop())
//         pre.push(pre.shift())
//     }

//     pre.push(arr.pop())
//     console.log(pre.reverse())
// }
// sort(arr)
/**
 * @description: 修改代码
 * @param {type} 
 * @return: 
 */
// let fn = (...arg)=>{
//   console.log(...arg)
// }
// // function
// // function 是你想要在到期时间(delay毫秒)之后执行的函数。
// // code
// // 这是一个可选语法，你可以使用字符串而不是function ，在delay毫秒之后编译和执行字符串 (使用该语法是不推荐的, 原因和使用 eval()一样，有安全风险)。
// // delay 可选
// // 延迟的毫秒数 (一秒等于1000毫秒)，函数的调用会在该延迟之后发生。如果省略该参数，delay取默认值0，意味着“马上”执行，或者尽快执行。不管是哪种情况，实际的延迟时间可能会比期待的(delay毫秒数) 值长，原因请查看Reasons for delays longer than specified。
// // param1, ..., paramN 可选
// // 附加参数，一旦定时器到期，它们会作为参数传递给function 

// setTimeout(fn,1,1,1,2,3)

// 给定一个二叉树，找出其最大深度。
 // Definition for a binary tree node.
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
* @param {TreeNode} root
* @return {number}
*/

// var maxDepth = function(root) {
//     let resArr = [];
//     let current = root;

//     let fn = function(node,num){
//         if(node==null) return resArr.push(num);
//         num++;
//         node.left&fn(node.left);
//         node.right&fn(node.right);
//     }

//     fn(current,1);

//     resArr.sort((a,b)=>a-b);

//     return resArr[0];
// };


/**
* @param {number} n
* @return {boolean}
*/
// var canWinNim = function(n) {
//     return  n%4!=0;
// };

/**
* 回文数
* @param {number} x
* @return {boolean}
*/
// var isPalindrome = function(x) {
//     console.log(typeof x.toString())
//     let l = x.toString();
//     let s = l.split('').reverse().join('');
//     return (s===l);
// };

// console.log(isPalindrome(121));

/**
* 反转字符串
* @param {string} s
* @return {string}
*/
// var reverseWords = function(s) {
//     return s.split(' ').map(key=>key.split('').reverse().join('')).join(' ');
// };

// console.log(reverseWords('let.w'));

/**
* @param {character[]} s
* @return {void} Do not return anything, modify s in-place instead.
*/
//reverse实现
// var reverseString = function(s) {
//     return s.reverse()
// };
//循环 实现
// var reverseString = function(s) {
//     let start = 0,
//         end = s.length - 1,
//         temp;
//     while(start <= end){
//         temp = s[start];
//         s[start] = s[end];
//         s[end] = temp;
//         start++;
//         end--;
//     }

//     return s;
// };

// console.log(reverseString(["h","e","l","l","o"]));

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
* 查找其中第 k 个最小的元素。
*/
/**
* @param {TreeNode} root
* @param {number} k
* @return {number}
*/
// var kthSmallest = function(root, k) {
//     let r = [];
//      let fn = function(node){
//         if(node == null) return;
//         fn(node.left);
//         r.push(node.val);
//         fn(node.right);
//      }
//     fn(root)
//     r = r.sort((a,b)=>a-b);
//     return r[k-1];
// };

/**
* @param {number} n
* @return {number[]}
*/
// var grayCode = function(n) {
//     let size = 1<<n;
//     //【笔记】自己与自己左移一位进行异或，得到的就是它的格雷码。
//     let arr = [];
//     for (let i = 0; i < size; ++i) {
//         arr[i] = i^(i >> 1);
//     }
//     return arr;
// };

// console.log(grayCode(4));

/**
* @param {number[]} nums
* @return {number}
*/
// var singleNumber = function(nums) {
//     let res = 0;
   
//     for(let i = 0;i < nums.length; i ++){
//         res ^= nums[i]
//     }

//     return res;
// };

// console.log(singleNumber([1,2,2,1,3]));

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* 两数相加
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
// var addTwoNumbers = function(l1, l2) {
//     let s = new ListNode(0);
//     let crruent = s;

//     while(l1 !== null||l2 !== null){
//         // if(l1 !== null&&l2 !== null) s.val = s.val + l1.val + l2.val;
//         // if(l1 !== null&&l2 == null) s.val = s.val + l1.val;
//         // if(l1 == null&&l2 !== null) s.val = s.val + l2.val;

//         // 简化
//         s.val = s.val + (l1!==null?l1.val:0) + (l2!==null?l2.val:0);
//         if(s.val > 9){
//             s.val = s.val % 10;
//             s.next = new  ListNode(1);
//             if(l1 !== null) l1 = l1.next;
//             if(l2 !== null) l2 = l2.next;
//         } else {
//             s.next = new  ListNode(0);
//             if(l1 !== null) l1 = l1.next;
//             if(l2 !== null) l2 = l2.next;
//             if(l1 == null&&l2 == null) s.next = null;
//         }
//         s = s.next
//     }
//     return crruent;
// };


/**
* @param {string} str
* @return {number}
*/
// var myAtoi = function(str) {
//     // 为空就返回0
//     if(str.length == 0) return 0;
//     let arr = str.split('');
//     let res = '';
       
//     let reg = /^[0-9]+.?[0-9]*/;

//     for(let i = 0; i < arr.length; i++){
//         // 判断第一个非空字符是不是数字或者 + —
//         if(res.length == 0 && arr[i] !==' '&&!(arr[i]=="-"||arr[i]=='+'||reg.test(arr[i]))) return 0;
//         // 判断是否结束遍历
//         if(res.length > 0 && !reg.test(arr[i])) break;
//         // 判断 为正负或者 数字    
//         if(arr[i]=="-"||arr[i]=='+'||reg.test(arr[i])){
//             res += arr[i];
//          }
//     }

//     res = +res;
//     if(isNaN(res)) return 0;
//     // 判断是否超出范围
//     if(res > Math.pow(2,31) - 1) res =  Math.pow(2,31) - 1;
//     if(res < -Math.pow(2,31)) res = -Math.pow(2,31);

//     return res;
// };

// console.log(myAtoi("+"))

/**
* @param {string} s
* @return {boolean}
*/

//  状态机解法 感觉太复杂了
// var isNumber = function(s) {
//     let state = 0, 
//         finals = [0,0,0,1,0,1,1,0,1],
//         transfer = [[ 0, 1, 6, 2,-1,-1],
//                     [-1,-1, 6, 2,-1,-1],
//                     [-1,-1, 3,-1,-1,-1],
//                     [ 8,-1, 3,-1, 4,-1],
//                     [-1, 7, 5,-1,-1,-1],
//                     [ 8,-1, 5,-1,-1,-1],
//                     [ 8,-1, 6, 3, 4,-1],
//                     [-1,-1, 5,-1,-1,-1],
//                     [ 8,-1,-1,-1,-1,-1]], 
//         make = (c) => {
//             switch(c) {
//                 case " ": return 0;
//                 case "+":
//                 case "-": return 1;
//                 case ".": return 3;
//                 case "e": return 4;
//                 default:
//                     let code = c.charCodeAt();
//                     if(code >= 48 && code <= 57) {
//                         return 2;
//                     } else {
//                         return 5;
//                     }
//             }
//         };
//     for(let i=0; i < s.length; ++i) {
//         state = transfer[state][make(s[i])];
//         if (state < 0) return false;
//     }
//     return finals[state];
// };
// // 内置函数解法
// var isNumber = function(s) {
//     return parseFloat(s, 10) == s ? true : false
//  };

/**
* @param {number} n
* @return {boolean}
*/
// 判断是不是2的幂
// var isPowerOfTwo = function(n) {
//     let res = false;
//         flag = false;

//     n.toString(2).split('').forEach(key=>{
//         if(key==1){
//             res=flag?false:true;
//             flag = true;
//         }
//     });

//     return res;
// };
// 位运算解法
// var isPowerOfTwo = function(n){
//     return (n > 0)&n&(n-1)
// }

/**
* @param {number[]} nums
* @return {number[]}
*/
// 除自身以外数组的乘积
// var productExceptSelf = function(nums) {
//     let current = 1;
//     let len = nums.length;
//     let res = [];
//     // 左遍历记录左值
//     for(let i=0;i<len;i++){
//         res[i] = current;
//         current *= nums[i];
//     }
//     // 右遍历记录右值
//     for(let j=len-1;j>=0;j--){
//         res[j] *= current;
//         current *= nums[j];
//     }

//     return res;
// }

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode} head
* @return {ListNode}
*/
// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
// var sortList = function(head) {
//     let current = head;
//     let arr = [];
   
//     while(current!==null){
//         arr.push(current.val);    
//         current = current.next;
//     }
   
//     arr.sort((a,b)=>a-b);
//     current = head;
   
//      for(let i = 0; i < arr.length; i++){
//         current.val = arr[i];    
//         current = current.next;
//     }
   
//     return head;
// };
/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @param {TreeNode} p
* @param {TreeNode} q
* @return {TreeNode}
*/
// 二叉搜索树的最近公共祖先
// var lowestCommonAncestor = function(root, p, q) {
//     if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
//     if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
//     return root;
// };

/**
* @param {number[]} nums
* @return {number}
*/
// 求众数
// var majorityElement = function(nums) {
//     if(nums.length < 2) return nums[0];
   
//     let obj = new Map();
//     let max = 1;
//     let name = '';
//     let temp = 0;
   
//       nums.forEach(value => {
//         if (obj.has(value)) {
//           // 已经有值了 就把值+1
//           temp = obj.get(value);
//           obj.set(value,++temp);
//           if (obj.get(value) > max) { // 判断重复次数有没有超过当前最高的
//             max = obj.get(value); // 重复次数
//             name = value; // 当前元素
//           }
//         } else {
//           // 没有值 就初始化一个值
//           obj.set(value,1);
//         }
//       });
   
//       return name;
// };

/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
//  数组中的第K个最大元素
// var findKthLargest = function(nums, k) {
//     nums.sort((a,b)=>b-a);
   
//     if(k > nums.length) return nums.pop();
//     return nums[k-1];
// };

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
// 旋转链表
// var rotateRight = function(head, k) {
//     let current = head;
//     let arr = [];
//     let temp = [];
//     while(current !== null){
//         arr.push(current.val);
//         current = current.next;
//     }
//     k = k % arr.length;
//     temp = arr.splice(k-1);
//     arr = [...temp,...arr];
//     arr.forEach(key=>{
//         current.val = key;
//         current = current.next;
//     })
//     return head;
// };

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
// 效率太低了
// var mergeTwoLists = function(l1, l2) {
//     let head = new listNode(0);
//     let temp = head;
//     let arr = [];
//     let fn = function(current){
//         while(current !== null){
//             arr.push(current.val);
//             current = current.next;
//         }
//     }
//     fn(l1);
//     fn(l2);
//     arr.sort((a,b)=> a-b);
//     arr.forEach(key=>{
//        temp = temp.next = new listNode(key);
//     });
//     return head;
// };
// 最优解法
// var mergeTwoLists = function(l1, l2) {
//     if (l1 == null) return l2;
//     if (l2 == null) return l1;

//     if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };

/**
* @param {number[][]} matrix
* @return {number[]}
*/
// var spiralOrder = function(matrix) {
//     if(matrix.length == 0) return [];
//     let arr = [];
//     let n = matrix.length;
//     let w =matrix[0].length;
//     let m = 0;

//     while(n>m){
//         // left => right
//         for(let i = m; i < w-m; i++ ){
//             if(matrix[m][i]!==undefined){
//                 arr.push(matrix[m][i]);    
//                 matrix[m][i]=undefined           
//             }
//         }
//         // top => bottom
//         for(let i = m; i < n - m; i++ ){
//             if(matrix[i][w-m-1]!==undefined){
//                 arr.push(matrix[i][w-m-1]);
//                 matrix[i][w-m-1]=undefined;
//             }
//         }
//         // right => left
//         for(let i = w - m - 1; i > 0; i-- ){
//             if(matrix[n-m-1][i]!==undefined){
//                 arr.push(matrix[n-m-1][i]);
//                 matrix[n-m-1][i]=undefined;
//             }
//         }
//         // bottom => top
//         for(let i = n - m -1; i > 0; i-- ){
//             if(matrix[i][m]!==undefined){
//                 arr.push(matrix[i][m]);
//                 matrix[i][m]=undefined;
//             }
//         }
//         ++m;
//     }

//     return arr;
// };

// console.log(spiralOrder([[]]));

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode[]} lists
* @return {ListNode}
*/

//合并k个有序链表

// var mergeKLists = function(lists) {
//     let fn = function(l1,l2){
//         if (l1 == null) return l2;
//         if (l2 == null) return l1;

//         if (l1.val < l2.val) {
//             l1.next = fn(l1.next, l2);
//             return l1;
//         } else {
//             l2.next = fn(l1, l2.next);
//             return l2;
//         }  
//     }

//     let len = lists.length;
//     let temp = fn(lists[0],lists[1]);

//     for(let i = 2; i < len; i++){
//         temp = fn(temp,lists[i]);    
//     }
//     return temp;
// };

// //效率高一点
// var mergeKLists = function(lists) {
//     let len  = lists.length;
//     if(len == 0) return null;
//     if(len == 1) return lists[0];
//     let arr = [];
   
//     for(let i = 0;i<len;i++){
//         let temp = lists[i];
//         while(temp){
//             arr.push(temp.val);
//             temp = temp.next;
//         }
//     }
   
//     arr.sort((a,b)=>a-b);
   
//     let head = new ListNode(0);
//     let current = head;
//     len = arr.length;
   
//     for(let i = 0;i<len;i++){
//         let node = new ListNode(arr[i]);
//         current.next = node;
//         current = current.next;
//     }
//     return head.next;
// };

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  中位数
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//     let arr = [...nums1,...nums2];
//     let len = arr.length;
//     arr.sort((a,b)=>a-b);
//     if(len%2==0){
//         len = Math.floor(len/2);
//         return (arr[len]+arr[len-1])/2;
//     }

//     return arr[Math.floor(len/2)];
// };

// console.log(findMedianSortedArrays([1,2],[3]))

/**
* @param {number[]} guess
* @param {number[]} answer
* @return {number}
*/
// 猜数字
// var game = function(guess, answer) {
//     let res = 0;
//     if(guess[0]===answer[0]) res++;
//     if(guess[1]===answer[1]) res++;
//     if(guess[2]===answer[2]) res++;

//     return res;
// };

/**
* @param {number[]} cont
* @return {number[]}
* 分式化简
*/
// 没看懂

// var fraction = function(cont) {
   
//     const head = cont[0];

//     if (cont.length === 1) return [head, 1]; 
//     const [a, b] = fraction(cont.slice(1))
 
//     return [head * a  + b, a];
// };

// console.log(fraction([1, 2, 3, 4]))

// var fraction = function(cont) {
//     // 当只有一个元素时候直接返回 元素和1
//     if (cont.length === 1) return [cont[0], 1]; 
//     // 取出第一个元素
//     let head = cont[0];
//     let [a,b] = fraction(cont.slice(1));
//     // 理解原理：每多一个元素时候，分子是前一个数字乘以后一个的值再加一
//     return [head * a + b, a]
// };
   
// console.log(fraction([1, 2, 3, 4]))
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
 * 141. 环形链表
 */
// var hasCycle = function(head) {
//     while(head!==null){
//         if(head.val=='flag'){
//             return true;
//         } else {
//             head.val = 'flag';
//             head = head.next;
//         }
//     }
//     return false;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 26.删除排序数组中的重复项
 */
// var removeDuplicates = function(nums) {
//     let length = nums.length;
//     let res = 1;
    
//     for(let i = 1; i < length; i++){
//         if(nums[i]!=nums[i-1]){
//            nums[res++] = nums[i];
//         }
//     }

//     return res;
// }; 

/**
 * @param {string[]} strs
 * @return {string}
 * 最长公共前缀
 */
// var longestCommonPrefix = function(strs) {
//     if(strs.length < 1) return '';

//     let res = [];
//     let len = strs[0].length;

//     for(let i = 0; i < len; i++){
//         let fn = (key)=>{
//             return key[i] == strs[0][i];
//         }
//         if(strs.every(fn)){
//             res.push(strs[0][i]);
//         } else {
//             break;
//         }
//     }
    
//     return res.join('');
// };

// console.log(longestCommonPrefix(["ower","ow","light"]))

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     let p = m-- + n-- - 1;
//        while (m >= 0 && n >= 0) {
//            nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
//        }
       
//        while (n >= 0) {
//            nums1[p--] = nums2[n--];
//        }
// };

/**
 * @param {string} s
 * @return {string}
 * 最长回文字符
 */
// var longestPalindrome = function(s) {

//     if (!s || !s.trim()) return '';
//     if (s.length === 1) return s;
//     if (s.length === 2) return s[0] === s[1] ? s[0] + s[1] : s[1];
//     let result = '';

//     /**
//     *扩散坐标
//     */
//     var calPalindromeIndex = function(left,right,s){
//         let len = s.length;
//         while(left>=0&&right<len&&s[left] == s[right]){
//             left--;
//             right++;
//         }
//         return {left:left+1,right:right}
//     }


//     for(let i = 0,len = s.length;i<len;i++){
//         let even = '';
//         let odd = '';
//         if(s[i] == s[i+1]){
//             //经过当前位与下一位判断已构成回文，扩散位直接从下一位开始，可以提速
//             let evenIndex = calPalindromeIndex(i-1,i+2,s);
//             even = s.slice(evenIndex.left,evenIndex.right);
//         }

//         let oddIndex = calPalindromeIndex(i-1,i+1,s);
//         odd = s.slice(oddIndex.left,oddIndex.right);
        
//         let re = odd.length>even.length?odd:even;
//         result = result.length>re.length?result:re;
//     }
//     return result;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 * 存在重复元素
 */
// var containsDuplicate = function(nums) {
//     let arr = [...new Set(nums)];
//     return nums.join('') === arr.join('');
// };

/**
 * @param {number} x
 * @return {number}
 * 反转数字
 * 坑点：反转后的数字范围也是在 [-2147483648,2147483647]
 */

// var reverse = function(x) {
//     if(x < -2147483648 || x > 2147483647) return 0;

//     let res = 0;
//     if(x > 0){
//         res = `${x}`.split('').reverse().join('');
//         return res > 2147483647 ? 0:res;
//     } else if( x < 0){
//         res = -`${-x}`.split('').reverse().join('')
//         return res < -2147483648? 0:res;
//     } else {
//         return 0
//     }
// };

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     let arr = [];
//     let temp = '';
//     for(let i = 0; i < s.length; i++){
//         if((temp=='{'&&s[i]=='}')||(temp=='['&&s[i]==']')||(temp=='('&&s[i]==')')){
//             arr.pop();
//             temp = arr[arr.length-1];
//         } else {
//             arr.push(s[i]);
//             temp = s[i];
//         }
//     }
//     return arr.length == 0;
// };

// isValid("()")


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * O(log n) 级别。33. 搜索旋转排序数组
 */
// var search = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;
//     let mid;

//     // while(low < high){
//     //     mid = Math.floor((low + high)/2);    
//     //     // 异或写得优雅
//     //     if((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid])){
//     //         low = mid + 1;
//     //     } else {
//     //         high = mid;
//     //     }
//     // }
    
//     // return low == high && nums[low] == target ? low : -1;

//     while(low<high){
//         mid = Math.floor((low+high)/2);
//         if(nums[mid]<nums[low]||(nums[low]<=target&&target<=nums[mid])){
//             high = mid;
//         } else {
//             low = mid + 1;
//         }
//     }

//     return low == high && nums[low] == target ? low : -1;
// };

// console.log(search([4,5,6,7,0,1,2],9))

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 62. 不同路径
 */
// var uniquePaths = function(m, n) {
//     // let res = 0;

//     // let fn = function(x,y){
//     //     if(x==m||y==n) res++;

//     //     if(x<m&&y<n) {
//     //         fn(++x,y);
//     //         fn(x,++y);
//     //     }
//     // }
//     // fn(1,1);
//     // console.log(res)
//     // return res;

//     let memo = [];
//     memo.length = m;
//     memo.fill(1);

//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             memo[j] += memo[j - 1];
//         }
//     }

//     console.log(memo[n-1]);
// };

// uniquePaths(7,3);

/**
 * initialize your data structure here.
 */
// var MinStack = function() {
//     this.arr = [];
//     this.arr2 = [];
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//     this.arr.push(x);
//     arr2 = [...this.arr].sort((a,b)=>a-b);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     let temp = this.arr.pop();
//     if(temp == this.arr2[0]){
//         this.arr2.shift();
//     }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.arr[Array.length-1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.arr2[0];
// };

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(x)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */

/**
 * @param( {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function(nums, target) {

//     if(nums.length < 3) return 0;
//     nums.sort((a,b)=>a-b);
//     if(nums[0] >= target) return nums[0]+nums[1]+nums[2];
//     if(nums[nums.length-1] <= target) return nums[nums.length-1] + nums[nums.length-2] + nums[nums.length-3];
    
//     let res = 0,
//         temp = 0;

//     for(let i = 1; i < nums.length - 1; i++){
//         let start = 0,
//             end = nums.length -1,
//         while(start<i&&end>i){
//             temp = nums[start] + nums[i] + nums[end];
//             if(temp==target) return temp;
//             if(temp<target) start+=1;
//             if(temp>target) end-=1;
//             if(Math.abs(target-temp) < Math.abs(target-res)) res = temp;
//         }
//     }

//     return res;
// };

// var threeSumClosest = function(nums, target) {
//     if(nums.length<3)
//         return ;
//     nums.sort((a,b)=>a-b);
//     var res=nums[0]+nums[1]+nums[nums.length-1];
//     for(var middle=1;middle<nums.length-1;middle++){
//         var start=0,
//             end=nums.length-1;
//         while(start<middle&&end>middle){
//             var result=nums[start]+nums[end]+nums[middle];
//             if(Math.abs(target-result)<Math.abs(target-res))
//                 res=result;
//             if(result===target){
//                 return result;
//             }
//             if(result<target){
//                 start+=1;
//             }
//             if(result>target){
//                 end-=1;
//             }
//         }
//     }
//     return res;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 160. 相交链表
 */

//  双指针法，最好
// var getIntersectionNode = function(headA, headB) {
//     if(headA == null|| headB == null) return null;
//     let A = headA;
//     let B = headB;

//     while(headA!=headB){
//         headB = headB==null?A:headB.next;
//         headA = headA==null?B:headA.next;
//     }

//     return headA;
// };

/**
 * @param {number[]} height
 * @return {number}
 * 11. 盛最多水的容器
 */
// 一般方法
// var maxArea = function(height) {
//     let length = height.length;
//     let max = 0;
//     let temp;
//     for(let i = 0; i < length; i++){
//         for(let j = i + 1; j < length; j++){
//             temp = Math.min(height[i],height[j])*(j-i);
//             if(max < temp) max = temp;
//         }
//     }
//     return max;
// };

// 双指针法 效率高
// var maxArea = function(height){
//     let max = 0,
//         start = 0,
//         end = height.length - 1,
//         temp = 0;
//     while(start<end){
//         temp = Math.min(height[start],height[end])*(end-start);
//         if(max<temp) max = temp;
//         if(height[start]<height[end]){
//             ++start;
//         } else {
//             --end;
//         }
//     }
//     return max;
// }

/**
 * @param {number[]} prices
 * @return {number}
 * 122. 买卖股票的最佳时机 II
 */
// var maxProfit = function(prices) {
//     let res = 0,
//         temp = 0;
//     for(let i = 0; i < prices.length - 1; i++){
//         if(prices[i] < prices[i+1]) temp = prices[i+1] - prices[i];
//         res += temp;
//         temp = 0;
//     }
//     return res;
// };

/**
 * @param {number[]} prices
 * @return {number}
 * 121. 买卖股票的最佳时机
 */
// var maxProfit = function(prices) {
//     let res = 0,
//         temp = 0;
//     for(let i = 0; i < prices.length; i++){
//         for(let j = i; j < prices.length; j++){
//             if(prices[i]<prices[j]) temp = prices[j] - prices[i];
//             res = Math.max(res,temp);
//         }
//     }
//     return res;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 53. 最大子序和
 */
// var maxSubArray = function(nums) {
//     let res = [];
//     let temp;
//     if(nums.length==1) nums[0];
//     for(let i = 0; i < nums.length; i++){
//         temp = nums[i];
//         res.push(temp);
//         for(let j = i + 1; j < nums.length; j++){
//             temp += nums[j];
//             res.push(temp);
//         }
//     }
//     res.sort((a,b)=>b-a);
//     return res[0];
// };

// var maxSubArray = function(nums) {
//     let ans = nums[0];
//     let sum = 0;
//     for(const num of nums) {
//         if(sum > 0) {
//             sum += num;
//         } else {
//             sum = num;
//         }
//         ans = Math.max(ans, sum);
//     }
//     return ans;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//     if (root == null || root == p || root == q) {
//         return root;
//     }
    
//     let left = lowestCommonAncestor(root.left, p, q);
//     let right = lowestCommonAncestor(root.right, p, q);

//     if (left != null && right != null) {
//         return root;
//     } else if (left != null) {
//         return left;
//     } else if (right != null) {
//         return right;
//     }
//     return null;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 124. 二叉树中的最大路径和
 * 没看懂
 */
// var maxPathSum = function(root) {
//     if(root==null)return 0;

//     var result=root.val;

//     function sum(node){
//         if(node==null) return 0;

//         var left=sum(node.left),
//             right=sum(node.right);

//         result=Math.max(result,node.val+(left>0?left:0)+(right>0?right:0));

//         return node.val+Math.max((left>0?left:0),(right>0?right:0));
//     }

//     sum(root);
//     return result;
// };

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 43. 字符串相乘
 * 思路从后面开始添加
 */
// var multiply = function(num1, num2) {
//     let arr  = [];
//         arr.length = num1.length+num2.length;
//         arr.fill(0);
//     let index = arr.length - 1;

//     if(num1==''||num1=='0'||num2==''||num2=='0') return '0';

//     for(let i = num1.length -1; i >= 0; i--){
//         for(let j = num2.length -1; j >= 0;j--){
//             multiplyFn(num1[i],num2[j],arr,index);
//             index--;
//         }
//         index = arr.length - num1.length + i - 1;
//     }
//     if(arr[0] == 0) {
//         while(arr[0] == 0){
//             arr.shift()
//         }
//     };
//     return arr.join('');
// };

// /**
//  * @description: 处理乘法
//  * @param {string} s1 
//  * @param {string} s2 
//  * @param {number[]} TheArr
//  * @return: 
//  */
// var multiplyFn = function(s1,s2,TheArr,TheIndex){
//     let geIndex = parseInt(s1)*parseInt(s2)%10;
//     let siIndex = parseInt(parseInt(s1)*parseInt(s2)/10);
//     let num = TheArr[TheIndex];
//     TheArr[TheIndex] = (num+geIndex) % 10;
//     if((num+geIndex) > 9){
//         TheArr[TheIndex - 1] = TheArr[TheIndex - 1] + siIndex + parseInt((num+geIndex)/10);
//     } else {
//         TheArr[TheIndex - 1] = TheArr[TheIndex - 1] + siIndex;
//     }
// }
// console.log(multiply("89","999"));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//     if(head==null) return null;
//     if(!head.next) return null;
//     if(!head.next.next) return null;

//     let CircleLength = 1;
//         preNode = head, 
//         nextNode = head.next.next;
        
//     while(preNode!=nextNode){
//         preNode = preNode.next;
//         if(nextNode.next == null) return null;
//         if(nextNode.next.next == null) return null;
//         nextNode = nextNode.next.next;
//         if(nextNode == null) return null;
//     }   

//     preNode = preNode.next;

//     while(preNode!=nextNode){
//         CircleLength++;
//         preNode = preNode.next;
//     }  
    
//     preNode = nextNode = head;
    
//     while(CircleLength){
//         nextNode = nextNode.next;
//         CircleLength--;
//     }
    
//     while(preNode!=nextNode){
//         preNode = preNode.next;
//         nextNode = nextNode.next;
//     }  
//     return preNode;
// };

// var detectCycle = function(head) {
//     if(head==null||!head.next||!head.next.next) return null;

//     let CircleLength = 1;
//         preNode = head, 
//         nextNode = head.next.next;
        
//     while(preNode!=nextNode){
//         if(nextNode == null||nextNode.next == null) return null;
//         preNode = preNode.next;
//         nextNode = nextNode.next.next;
//     }   
//     preNode = head;

//     while(preNode!=nextNode){
//         preNode = preNode.next;
//         nextNode = nextNode.next;
//     }
//     return preNode;
// };
// var detectCycle = function(head) {
//     if(head==null||!head.next||!head.next.next) return null;

//     let preNode = head, 
//         nextNode = head.next.next;
        
//     while(1){
//         if(nextNode == null||nextNode.next == null) return null;
//         preNode = preNode.next;
//         nextNode = nextNode.next.next;
//         if(preNode==nextNode){
//              preNode = head;
//              while(1){
//                 preNode = preNode.next;
//                 nextNode = nextNode.next;
//                 if(preNode==nextNode) return preNode;
//             }
//         }
//     }   
// };

// var LRUCache = class {

//     constructor(capacity) {
//         this.cache = new Map();
//         this.capacity = capacity;
//     }

//     /**
//      * @param {number} key
//      * @return {number}
//      */
//     get(key) {
//         let cache = this.cache;
//         if (cache.has(key)) {
//             let temp = cache.get(key)
//             cache.delete(key);
//             cache.set(key, temp);
//             return temp;
//         } else {
//             return -1;
//         }
//     };

//     /**
//      * @param {number} key
//      * @param {number} value
//      * @return {void}
//      */
//     put(key, value) {
//         let cache = this.cache;
//         if (cache.has(key)) {
//             cache.delete(key);
//         } else if (cache.size >= this.capacity) {
//             cache.delete(cache.keys().next().value);
//         }
//         cache.set(key, value);
//     };
// };

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 不同路径 II
 */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     let width = obstacleGrid.length;
//     let height = obstacleGrid[0].length;

//     let dp = [[]];

//     for(let i = 0; i < width; i++){
//         dp[i] = new Array(height).fill(0);
//     }

//     dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;

//     for(let i = 1; i < width; i++){
//         if(obstacleGrid[i][0]!=1){
//             dp[i][0] = dp[i-1][0];
//         }
//     }

//     for(let i = 0; i < height; i++){
//         if(obstacleGrid[0][i]!=1){
//             dp[0][i] = dp[0][i-1];
//         }
//     }

//     for(let i = 1; i < width; i++){
//         for(let j = 1; j < height; j++){
//             if(obstacleGrid[i][j]!=1){
//                 dp[i][j] = dp[i][j-1] + dp[i-1][j];
//             };
//         }
//     }

//     return dp[width-1][height-1];
// };

// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     // 行
//     var n = obstacleGrid.length;
//     // 列
//     var m = obstacleGrid[0].length;
//     // 初始化
//     var dp = new Array(n);
//     for(var i = 0;i<n;i++){
//         dp[i] = new Array(m).fill(0);
//     }
//     dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;
//     // 如果起点就是障碍物
//     if(dp[0][0] == 0){
//         return 0 ;
//     }
//     // 第一行
//     for(var j = 1;j < m;j++){
//         if(obstacleGrid[0][j] != 1){
//             dp[0][j] = dp[0][j-1];
//         }
//     }
//     // 第一列
//     for(var r = 1;r < n;r++){
//         if(obstacleGrid[r][0] != 1){
//             dp[r][0] = dp[r-1][0];
//         }
//     }
//     // 动态递推
//     for(var i = 1;i < n;i++){
//         for(var r = 1;r < m;r++){
//             if(obstacleGrid[i][r] != 1){
//                 dp[i][r] = dp[i-1][r] +dp[i][r-1];
//             }
//         }
//     }
//     return dp[n-1][m-1];
// };

// /**
//  * @param {number} n
//  * @return {number}
//  * 70.爬楼梯
//  */
// var climbStairs = function(n) {
//     let arr  = [];
//     arr[0] = 1;
//     arr[1] = 1;

//     for(let i = 2; i <= n; i++){
//         arr[i] = arr[i-1] + arr[i-2];
//     }

//     return arr[n];
// };

// climbStairs(4)

/**
 * @param {number[]} nums
 * @return {number}
 * 198. 打家劫舍
 */
// var rob = function(nums) {
//     let len = nums.length,
//         dp = [];
//     if(len == 0) return 0;
//     dp[0] = 0; 
//     dp[1] = nums[0];

//     for(let i = 2; i <= len; i++){
//         dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1]);
//     }

//     return dp[len];
// };

// /**
//  * Definition for a binary tree node.
//  * 337. 打家劫舍 III
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var rob = function(root) {
//     let dp = [];

//     let fn = function(node,max){
//         if(node) dp;
//     }
// };


/**
 * @param {number[]} nums
 */
// var NumArray = function(nums) {
//     this.Arr = [0];
//     let temp;
//     nums.forEach((key)=>{
//         temp += key;
//         this.Arr.push(temp);
//     })
// };

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(i, j) {
//     console.log(this.Arr)
//     return this.Arr[j+1] - this.Arr[i]
// };

// /** 
//  * Your NumArray object will be instantiated and called as such:
//  * var obj = new NumArray(nums)
//  * var param_1 = obj.sumRange(i,j)
//  */


/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// var findTargetSumWays = function(nums, S) {
//     let len = nums.length - 1;
//     let res = 0;
//     let te = 0;

//     let dpfunc = function(temp,n){
//         if(n==len&&(temp+nums[n]==S||temp-nums[n]==S)) res++;
//         if(n>=len) return;
//         temp = nums[n];
//         n++;
//         dpfunc(temp+nums[n],n);
//         dpfunc(temp-nums[n],n)
//     }

//     dpfunc(0,0);
//     console.log(res)
//     return res;
// };

// findTargetSumWays([1, 1,1,1,1], 3)

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// var findTargetSumWays = function(nums, S) {
//     let sum = 0;
//     for (let num of nums) {
//         sum += num;
//     }
//     if (sum < S || (sum + S) % 2 === 1) return 0;
//     let target = (sum + S) / 2;
//     let dp = new Array(target+1).fill(0);
//     dp[0] = 1;
//     for (let num of nums) {
//         for (let i = target; i >= num; i--) {
//             dp[i] += dp[i - num];
//         }
//     }
//     return dp[target];
// };

/**
 * @param {number} N
 * @return {boolean}
 * 1025. 除数博弈
 */
// var divisorGame = function(N) {
//     if(N==1) return false;
//     if(N==2) return true;
//     return N%2 === 0;
// };

/**
 * @param {number[]} piles
 * @return {boolean}
 * 877. 石子游戏
 */
// var stoneGame = function(piles) {
//     return true;
// };

/**
 * @param {number} n
 * @return {number}
 * 96. 不同的二叉搜索树
 */

//  状态方程 当n>3的时候 dp[n] = 2*(dp[0] +。。。。。+ dp[n-1])

// var numTrees = function(n) {
//     if(n<=1) return 1;
//     if(n==2) return 2;

//     let dp = new Array(n+1);
//         dp.fill(0);
//     dp[0] = 1;
//     dp[1] = 1;
//     dp[2] = 2;
//     dp[3] = 5;

//     for(let i = 4; i <= n; i++){
//         for(let j = 0; j < i; j++){
//             dp[i] += dp[j]*dp[i-j-1]
//         }
//     }
//     return dp[n]
// };

// numTrees(10);

/**
 * @param {number[][]} grid
 * @return {number}
 * 64. 最小路径和
 */
// var minPathSum = function(grid) {
//     if(grid.length == 0) return 0;
//     let Clen = grid.length,
//         Rlen = grid[0].length;
        
//     for(let i = 0; i < Clen; i++){
//         for(let j = 0; j < Rlen; j++){
//             if( i != 0 && j!= 0){
//                 grid[i][j] = Math.min(grid[i][j-1],grid[i-1][j])+grid[i][j];
//             }else if(i == 0 && j!=0){
//                 grid[i][j] = grid[i][j-1]+grid[i][j];
//             }else if(i != 0 && j==0){
//                 grid[i][j] = grid[i-1][j]+grid[i][j];
//             }else if(i == 0 && j==0){
//                 grid[i][j] = grid[i][j];
//             }
//         }
//     }

//     return grid[Clen-1][Rlen-1]
// };

/**
 * @param {number[][]} triangle
 * @return {number}
 * 120. 三角形最小路径和
 */
// var minimumTotal = function(triangle) {
//     var dp = new Array(triangle.length+1).fill(0);
//     for(var i = triangle.length-1;i >= 0;i--){
//         for(var j = 0;j < triangle[i].length;j++){
//             dp[j] = Math.min(dp[j],dp[j+1]) + triangle[i][j];
//         }
//     }
//     return dp[0];
// };

// console.log(minimumTotal([[0],[1,2],[2,1,4],[5,6,7,8]]))

/**
 * @param {number} n
 * @return {number}
 * 1227. 飞机座位分配概率
 */
// var nthPersonGetsNthSeat = function(n) {
//     if(n==1) return 1;
//     return 1/2;  
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 * 95. 不同的二叉搜索树 II
 */
// var generateTrees = function(n) {
//     let results = new Array(n+1).fill(undefined).map(()=>[]);
//     if(n===0) return [];
//     results[0].push(null);
//     for(let i=1; i<n+1; i++){  //求i个节点的所有组合
//         for(let j=1; j<i+1; j++){  //其中第j个节点作为根节点
//             results[j-1].forEach(left =>{  //左子树的所有组合
//                 results[i-j].forEach(right =>{  //右子树的所有组合
//                     let root = new TreeNode(j);
//                     root.left = left;
//                     root.right = cloneTree(right, j);  //右子树偏移j
//                     results[i].push(root);
//                 })
//             })
//         }
//     }
//     return results[n];
//     function cloneTree(root, offset){
//         if(!root) return null;
//         let newRoot = new TreeNode(root.val+offset);
//         newRoot.left = cloneTree(root.left, offset);
//         newRoot.right = cloneTree(root.right, offset);
//         return newRoot;
//     }
// };

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {number}
//  * 712. 两个字符串的最小ASCII删除和
//  * 
//  */

// var minimumDeleteSum = function(s1, s2) {
//     let m = s1.length, 
//         n = s2.length;

//     let fn = function(s){
//         let res = 0;
//         for(let i = 0; i < s.length; i++){
//             res += s[i].charCodeAt()
//         }
//         return res;
//     }

//     if (m * n == 0) return fn(s1+s2);

//     let dp = new Array(m + 1).fill(0);

//     for (let i = 0; i < m + 1; i++) {
//         dp[i] = new Array(n + 1).fill(0)
//     }

//     for (let i = 1; i < m + 1; i++) {
//         for (let j = 1; j < n + 1; j++) {
//            if(s1[i-1]==s2[j-1]){
//                dp[i][j] = dp[i-1][j-1] + fn(s1[i-1])
//            } else {
//                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
//            }
//         }
//     }
//     return fn(s1+s2) - dp[m][n]*2
// };  


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 * 718. 最长重复子数组
 */

/* 
   二维数组解法
例如：
  [ [ 0, 0, 3, 2, 1, 4, 7 ],
  [ 0, 0, 0, 0, 0, 0, 0 ],
  [ 1, 0, 0, 0, 1, 0, 0 ],
  [ 2, 0, 0, 1, 0, 0, 0 ],
  [ 3, 0, 1, 0, 0, 0, 0 ],
  [ 2, 0, 0, 2, 0, 0, 0 ],
  [ 1, 0, 0, 0, 3, 0, 0 ] ]



 */
// var findLength = function(A, B) {
//     let len1 = A.length,
//         len2 = B.length,
//         dp = new Array(len1 + 2).fill(0).map(()=>new Array(len2+2).fill(0)),
//         res = 0;
//     for(let i=2;i<=len1+1;i++){
//         // 留下第二行和第二列的数为0
//         dp[i][0]=A[i-2];
//         for(let j=2;j<=len2+1;j++){
//             dp[0][j]=B[j-2];
//             if(A[i-2]==B[j-2]){
//                 dp[i][j] = dp[i-1][j-1] + 1;
//                 res = Math.max(res,dp[i][j]);
//             }
//         }
//     }
//     return res;
// };

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 583. 两个字符串的删除操作
 */

 /* 
 二维数组解法，好理解但是效率不行；
 例如：
 [ [ 0, 0, 'e', 'x', 'e', 'c', 'u', 't', 'i', 'o', 'n' ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 'i', 0, 0, 0, 0, 0, 0, 0, 1, 1, 1 ],
  [ 'n', 0, 0, 0, 0, 0, 0, 0, 1, 1, 2 ],
  [ 't', 0, 0, 0, 0, 0, 0, 1, 1, 1, 2 ],
  [ 'e', 0, 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
  [ 'n', 0, 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
  [ 't', 0, 1, 1, 1, 1, 1, 2, 2, 2, 2 ],
  [ 'i', 0, 1, 1, 1, 1, 1, 2, 3, 3, 3 ],
  [ 'o', 0, 1, 1, 1, 1, 1, 2, 3, 4, 4 ],
  [ 'n', 0, 1, 1, 1, 1, 1, 2, 3, 4, 5 ] ]
  */
//  var minDistance = function(word1, word2) {
//     let len1 = word1.length,
//         len2 = word2.length,
//         dp = new Array(len1 + 2).fill(0).map(()=>new Array(len2+2).fill(0));
//     for(let i=2;i<=len1+1;i++){
//         // 留下第二行和第二列的数为0
//         dp[i][0]=word1[i-2];
//         for(let j=2;j<=len2+1;j++){
//             dp[0][j]=word2[j-2];
//             if(word1[i-2]==word2[j-2]){
//                 dp[i][j] = dp[i-1][j-1] + 1;
//             } else {
//                 dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
//             }
//         }
//     }
//     return len1 + len2 - 2*dp[len1+2,len2+2];
// };

// // leetcode里面JavaScript的最优解

// var minDistance = function(word1, word2) {
//     let m = word1.length, 
//         n = word2.length;
    
//     if (m * n == 0) return m + n;

//     let states = new Array(m + 1)

//     for (let i = 0; i < m + 1; i++) {
//         states[i] = new Array(n + 1)
//     }

//     for (let i = 0; i < m + 1; i++) {
//         states[i][0] = i
//     }
//     for (let j = 0; j < n + 1; j++) {
//         states[0][j] = j
//     }

//     for (let i = 1; i < m + 1; i++) {
//         for (let j = 1; j < n + 1; j++) {
//             // 三目运算符简化了if else
//             states[i][j] = word1[i - 1] == word2[j - 1] ? states[i - 1][j - 1] :1 + Math.min(states[i - 1][j], states[i][j - 1])
//         }
//     }

//     return states[m][n]
// };
/**
 * @param {string} s
 * @return {number}
 * 647. 回文子串
 */
// var countSubstrings = function(s) {
//     let len = s.length,
//         res = 0;
//     if(len == 0) return 0;
//     for(let i = 0; i < len; i++){
//         for(let j = i + 1; j <= len; j++){
//            if(s.substring(i,j) == s.substring(i,j).split('').reverse().join('')) res++
//         }
//     }

//     return res;
// };

/**
 * @param {number[]} A
 * @return {number[]}
 * 977. 有序数组的平方
 */
// var sortedSquares = function(A) {
//     return A.map(key=>key*key).sort((a,b)=>a-b);
// };
// 双指针 效率没有快排高
// var sortedSquares = function(A) {
//    let result = [],
//         lastnumber = 0,
//         i = 0, 
//         j = A.length -1,
//         leftnumber = Math.pow(A[i], 2),
//         rightnumber = Math.pow(A[j], 2);

//     while(i <= j) {
//       if (leftnumber > rightnumber) {
//          result.unshift(leftnumber);
//          i++;
//          leftnumber = Math.pow(A[i], 2);
//       }else{
//         result.unshift(rightnumber);
//         j--;
//         rightnumber = Math.pow(A[j], 2);
//       }
//     }
    
//     return result;
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 18. 四数之和
 */
// var fourSum = function(nums, target) {
//     let outleft,
//         outright,
//         m,
//         n,
//         len = nums.length -1,
//         resArr = [];
    
//     nums = nums.sort((a,b)=>a-b);

//     for(let i = 0; i <= len - 3; i++){
        
//         if(nums[i] == nums[i-1]) continue;
//         outleft = nums[i];

//         for(let j = len; j >= i + 2; j--){
//             if(nums[j] == nums[j+1]) continue;
//             outright = nums[j];
//             n = j - 1;
//             m = i + 1;

//             while(m < n){
//                 let temp = nums[m] + nums[n] + outleft + outright;
//                 if(temp == target){
//                     resArr.push([outleft,nums[m], nums[n], outright]);
//                     m++;
//                     n--;
//                     while(m < n&&nums[m-1] == nums[m]) {m++};
//                     while(m < n&&nums[n+1] == nums[n]) {n--};
//                 } else if(temp < target) {
//                     m++;
//                 } else {
//                     n--;
//                 }
//             }
//         }
//     }

//     return resArr;
// };

// fourSum([-3,-1,0,2,4,5],2)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 72. 编辑距离
 */
// var minDistance = function(word1, word2) {
//     let len1 = word1.length,
//         len2 = word2.length,
//         dp = new Array(len1 + 1).fill(0).map(()=>new Array(len2 + 1).fill(0));
//     for(let i = 0; i <= len1; i++) dp[i][0] = i;
//     for(let i = 0; i <= len2; i++) dp[0][i] = i;
//     for(let i = 1; i <= len1; i++){
//         for(let j = 1; j <= len2; j++){
//             dp[i][j] = (word1[i-1] !== word2[j-1])?Math.min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1]) + 1:dp[i-1][j-1];
//         }
//     }
//     return dp[len1][len2]
// };

// // 更优解法
// var minDistance = function (word1, word2) {
// 	let m = word1.length
// 	let n = word2.length
// 	let dp = []
// 	for (let i = 0; i <= m; i++) {
// 		dp.push([])
// 		for (let j = 0; j <= n; j++) {
// 			if (i * j) {
// 				dp[i][j] = word1[i - 1] === word2[j - 1]
// 					? dp[i - 1][j - 1]
// 					: 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
// 			} else {
// 				dp[i][j] = i + j
// 			}
// 		}
// 	}
// 	return dp[m][n]
// };



/**
 * @param {number} n
 * @return {string[][]}
 * 八皇后问题 对角线约束法
 */
// var solveNQueens = function (n) {
//     const result = [];
//     const dfs = ( subResult = [], row = 0) => {
//         if (row === n) {
//             result.push(subResult.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
//             return;
//         }
//         for (let col = 0; col < n; col++) {
//             if (!subResult.some((j, k) => j === col || j - col === row - k || j - col === k - row)) {
//                 subResult.push(col);
//                 dfs( subResult, row + 1);
//                 subResult.pop();
//             }
//         }
//     }
//     dfs();
//     return result;
// };


/**
 * @param {number} n
 * @return {string[][]}
 * 八皇后问题 回溯法
 */
// var solveNQueens = function(n) {
//     let result = new Array(n);
//     let results = [];
//     let dfs = (row,column) => {
//         let leftColumn =  column-1;
//         let rightColumn = column+1;
//         for(let i = row - 1;i >= 0;i--){
//             if(result[i] == column){
//                 return false;
//             }
//             if(leftColumn >= 0 && result[i] == leftColumn){
//                 return false;
//             }
//             if(rightColumn < n && result[i] == rightColumn){
//                 return false;
//             }
//             leftColumn--;
//             rightColumn++;
//         }
//         return true;
//     }
//     let Nqueens = (row) => {
//         if(row == n){
//             results.push(result.map(c=>'.'.repeat(c)+'Q'+'.'.repeat(n-1-c)));
//             return;
//         }
//         for(let j = 0;j < n;j++){
//             if(dfs(row,j)){
//                 result[row] = j;
//                 Nqueens(row+1)
//             }
//         }
//     }
//     Nqueens(0);
//     return results;
// };


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 模拟面试题目*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {number} n
 * @return {boolean}
 * 快乐数
 */
//不快乐数最后都会为4
// var isHappy = function(n) {
//     while (n != 1 && n != 4) {
//         n = (n + '').split('').reduce((sum, dist) => sum + dist ** 2, 0);
//     }
//     return n == 1;
// };

// 使用set效率最高
// var isHappy = function(n) {
//     let set = new Set();
//     while (n !== 1) {
//       n = (n + '').split('').reduce((sum, dist) => sum + dist ** 2, 0);
//       if (set.has(n)) {
//         return false;
//       } else {
//         set.add(n);
//       }
//     }
//     return true;
//   };

  /**
 * @param {number} a
 * @param {number} b
 * @return {number}
 *   两整数之和
 */
// var getSum = function(a, b) {
//     while (b !== 0) {
//         let temp = a ^ b;
//         b = (a & b) << 1;
//         a = temp;
//     }
//     return a;
// };

/**
 * @param {number} n
 * @return {string[]}
 * Fizz Buzz
 */
// var fizzBuzz = function(n) {
//     let arr = [];
   
//     for(let i = 1; i <= n; i++){
//         if(i < 3) temp = ''+i;
//         if(i%3==0){
//             if(i%5==0) temp = 'FizzBuzz';
//             temp = 'Fizz'
//         }

//         if(i%5==0) temp = 'Buzz';
//         arr.push(temp);
//     }
// }
    
//     return arr;
// };

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/*
    我们首先要知道能走完整个环的前提是gas的总量要大于cost的总量，这样才会有起点的存在。
    假设开始设置起点start = 0, 并从这里出发，如果当前的gas值大于cost值，就可以继续前进。
    此时到下一个站点，剩余的gas加上当前的gas再减去cost，看是否大于0，若大于0，则继续前进。
    当到达某一站点时，若这个值小于0了，则说明从起点到这个点中间的任何一个点都不能作为起点，
    则把起点设为下一个点，继续遍历。当遍历完整个环时，当前保存的起点即为所求。
 */
// var canCompleteCircuit = function(gas, cost) {
//     let sum = 0,
//         start = 0;
    
//     if(gas.reduce((i,j) => i+j,0) < cost.reduce((i,j) => i+j,0)) return -1;

//     for(let i = 0; i < gas.length; i++){
//         sum += gas[j] - cost[j];
//         if (sum < 0) {
//             start = i + 1;
//             sum = 0;
//         }
//     }

//     return start;
// };

/**
 * @param {number} capacity
 */
// var LRUCache = function(capacity) {
//     this.cache = new Map();
//     this.capacity = capacity;
// };

/** 
 * @param {number} key
 * @return {number}
 */

// LRUCache.prototype.get = function(key) {
//     let cache = this.cache;
//     if (cache.has(key)) {
//         let temp = cache.get(key)
//         cache.delete(key);
//         cache.set(key, temp);
//         return temp;
//     } else {
//         return -1;
//     }
// };

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

// LRUCache.prototype.put = function(key, value) {
//     let cache = this.cache;
//     if (cache.has(key)) {
//         cache.delete(key);
//     } else if (cache.size >= this.capacity) {
//         cache.delete(cache.keys().next().value);
//     }
//     cache.set(key, value);
// };

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 * 1262. 可被三整除的最大和
 */

//  最优法
// var maxSumDivThree = function(nums) {
//     let dp = [0,0,0],
//         sum = nums.reduce((a,b)=>a+b,0),
//         len1 = nums.length;

//     if(sum%3==0) return sum;

//     for(let i = 0; i < len1; i++){
//         let mod = nums[i] % 3;
//         let a = dp[(3 + 0 - mod) % 3];
//         let b = dp[(3 + 1 - mod) % 3];
//         let c = dp[(3 + 2 - mod) % 3];
//         if (a!=0 || mod == 0) dp[0] = Math.max(dp[0], a + nums[i]);
//         if (b!=0 || mod == 1) dp[1] = Math.max(dp[1], b + nums[i]);
//         if (c!=0 || mod == 2) dp[2] = Math.max(dp[2], c + nums[i]);
//     }

//     return dp[0];
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 1262. 可被三整除的最大和
 */

//  暴力法
// var maxSumDivThree = function(nums) {
//     let dp = [[],[],[]],
//          sum = nums.reduce((a,b)=>a+b,0),
//          len1 = nums.length;
     
//      nums = nums.sort((a,b)=>a-b);
 
//      if(sum%3==0) return sum;
 
//      for(let i = 0; i < len1; i++){
//          if(nums[i]%3==0) dp[0].push(nums[i]);
//          if(nums[i]%3==1) dp[1].push(nums[i]);
//          if(nums[i]%3==2) dp[2].push(nums[i]);
//      }
     
//      if(sum%3==1) {
//          if(dp[1].length >= 1){
//              if(dp[2].length >=2) {
//                 return sum - Math.min(dp[1][0],dp[2][0]+dp[2][1]);
//              } else {
//                 return sum - dp[1][0]
//              }
//          } else {
//             return sum - (dp[2][0]+dp[2][1]);
//          }
//      }

//      if(sum%3==2) {
//         if(dp[2].length >= 1){
//             if(dp[1].length >=2) {
//                return sum - Math.min(dp[2][0],dp[1][0]+dp[1][1]);
//             } else {
//                return sum - dp[2][0]
//             }
//         } else {
//            return sum - (dp[1][0]+dp[1][1]);
//         }
//      }
//  };

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 19. 删除链表的倒数第N个节点
 */
// var removeNthFromEnd = function(head, n) {
//     let num = n,
//         next = head,
//         pre = head;
//     if(!head.next) return null
//     while(n>0){
//         next = next.next;
//         n--;
//     }

//     while(next){
//         if(!pre.next.next) {
//             pre.next = null;
//             return head;
//         }
//         next = next.next;
//         pre = pre.next;
//         if(!pre.next.next) {
//             pre.next = null;
//             return head;
//         }
//     }
//     pre.val = pre.next.val;
//     pre.next = pre.next.next;
//     return head;
// };

/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 * 887. 鸡蛋掉落
 */
// var superEggDrop = function(K, N) {
//     let dp = new Array(K+1).fill(0).map(()=>new Array(N+1).fill(0));
//     if(K==1) return N;
//     if(N==1) return 1;

//     for(let i = 1; i <= N; i++) {
//         dp[0][i] = 0;
//         for(let j = 1; j <=K; j++) {
//             dp[j][i] = dp[j][i-1] + dp[j-1][i-1]+1;
//             if (dp[j][i] >= N) {
//                 return i;
//             }
//         }
//     }
// };

// superEggDrop(2,3);

// let xhr = new XMLHttpRequest();
// xhr.open('get','https://www.baidu.com/');

// xhr.onreadystatechange = ()=>{
//     console.log('ss')
//     if(xhr.readyState===4){
//         console.log('ss')
//         if(xhr.status>=200&& xhr.status < 300){
//             console.log('aaa',xhr.responseText)
//         }
//     }
// }
// // 超时时间单位为毫秒
// xhr.timeout = 100000

// // 当请求超时时，会触发 ontimeout 方法
// xhr.ontimeout = () => console.log('请求超时')

// xhr.send()


// 实现观察者模式
/* Pubsub */
// function Pubsub(){
//     //存放事件和对应的处理方法
//    this.handles = {};
// }

// Pubsub.prototype = {
//     //传入事件类型type和事件处理handle
//     on: function (type, handle) {
//         if(!this.handles[type]){
//             this.handles[type] = [];
//         }
//         this.handles[type].push(handle);
//     },

//     emit: function () {
//         //通过传入参数获取事件类型
//        var type = Array.prototype.shift.call(arguments);
//         if(!this.handles[type]){
//             return false;
//         }
//         for (var i = 0; i < this.handles[type].length; i++) {
//             var handle = this.handles[type][i];
//             //执行事件
//            handle.apply(this, arguments);
//         }
//     },
//     off: function (type, handle) {
//         handles = this.handles[type];
//         if(handles){
//             if(!handle){
//                 handles.length = 0;//清空数组
//            } else {
//                 for (var i = 0; i < handles.length; i++) {
//                     var _handle = handles[i];
//                     if(_handle === handle){
//                         handles.splice(i,1);
//                     }
//                 }
//             }
//         }
//     }
// }

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 * 458. 可怜的小猪
 */
// var poorPigs = function(buckets, minutesToDie, minutesToTest) {
//     if(buckets==1) return 0;
//     let times = Math.floor(minutesToTest/minutesToDie) + 1,
//         temp = 1,
//         number = 0;
//     while(temp <= buckets){
//         number++;
//         temp = temp*times;
//     }
//     return number;
// };

// poorPigs(1000,15,60);

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// var gameOfLife = function(board) {
//   if(board.length==0) return [];

//   let width = board.length,
//       height = board[0].length,
//       count = 0,
//       resArr = JSON.parse(JSON.stringify(board));

//   for(let i = 0; i < width; i++){
//     for(let j = 0; j < height; j++){
//       // 计数重置
//       count = 0;
//       // 上、下、左、右、上左、上右、下左、下右
//       if(j>0)  count += resArr[i][j-1]       
//       if(j + 1 < height) count += resArr[i][j+1]
//       if(i>0)  count += resArr[i-1][j]
//       if(i+1 < width)  count += resArr[i+1][j]
//       if(i>0&&j>0)  count += resArr[i-1][j-1]
//       if(i+1<width&&j>0)  count += resArr[i+1][j-1]
//       if(i>0&j+1<height)  count += resArr[i-1][j+1]
//       if(i+1<width&&j+1<height)  count += resArr[i+1][j+1]

//       //live
//       if(resArr[i][j] == 1){
//         if(count > 3 || count < 2) board[i][j] = 0;
//       } else {
//         // dead
//         if(count == 3) board[i][j] = 1;
//       }
//     }
//   }
// };

// console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))

/**
 * @param {string} str
 * @return {string}
 * 709. 转换成小写字母
 */
// var toLowerCase = function(str) {
//   return str.toLocaleLowerCase();
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 24. 两两交换链表中的节点
 */
// var swapPairs = function(head) {
//   let pre = new ListNode(0);
   
//   pre.next = head;

//   let temp = pre;

//   while(temp.next != null && temp.next.next != null) {
       
//       let start = temp.next,
//           end = temp.next.next;

//       temp.next = end;
//       start.next = end.next;
       
//       end.next = start;
//       temp = start;
//   }
//   return pre.next;
// };

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 27. 移除元素
 */
// var removeElement = function(nums, val) {
//   let i = 0;

//   for(let num of nums){
//     if(num!==val){
//       nums[i] = num;
//       i++
//     }
//   }

//   return i;
// };


/**
 * @param  {any[]} arr
 * @return {any[]} 
 * @description 数组扁平化
 */

// var flat = function(arr){
//   let resArr = [];

//   let fn = function(Arr){
//     if(Array.isArray(Arr)){
//       Arr.forEach(key=>fn(key))
//     } else {
//       resArr.push(Arr);
//     }
//   }

//   fn(arr);
//   return resArr;
// }

// console.log(flat([1,[2,3,[2]]]))
/**
 * 实现new操作
 */
// let newfn = function(){
//     let resObj = {},
//         arg = [...arguments],
//         fn = arg.shift();
//     resObj._proto_ = fn.prototype;
//     fn.apply(resObj,arg);
//     return resObj;
// }

// function Student(name, age){
//   this.name = name;
//   this.age = age;
// }

// let task1 = new Student('aa',11);
// let task1 = newfn(Student,'aa',11);

// console.log(task1)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//   if(needle.length==0) return 0;
//   return haystack.search(needle)
// };

// var strStr = function (haystack, needle) {
//   if (needle === "") return 0
//   for (var i = 0; i < haystack.length; i++) {
//       if (haystack[i] === needle[0]) {
//           if (haystack.substring(i, i + needle.length) === needle) return i;
//       }
//   }
//   return -1
// };

/**
 * @param {string} s
 * @return {boolean}
 * 125. 验证回文串
 */
// var isPalindrome = function(s) {
//   s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
//   return s == s.split('').reverse().join('');
// };
// // 双指针法
// var isPalindrome = function(s) {
//   s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
//   let left = 0, right = s.length-1;
//   while(left < right){
//       if(s[left]!==s[right]) return false;
//       left++;
//       right--;
//   }
//   return true;
// };

// /* 节流函数 */

// let throttle = function(fn,timer){
//   let flag = true;
//   return function(){
//       if(!flag) return;
//       flag = false;
//       settimeout(()=>{
//           fn();
//           flag = true;
//       },timer)
//   }
// }

// /* 防抖函数 */

// let debounce = function (fn, delay) {
//   var flag; // 维护一个 flag
//   return function () {
//       if (flag) {
//           clearTimeout(flag);
//       }
//       flag = setTimeout(function () {
//           fn();
//       }, delay);
//   };
// }
// /**
//  * @param  {} con
//  * 实现apply函数
//  */
// Function.prototype.apply1 = function(context){
//     context.fn = this;
//     let list = [...arguments];
//     list.shift();
//     let result = context.fn(...list[0]);
//     delete context.fn;
//     return result;
// }

// /**
//  * @param  {} context
//  *  实现bind 
//  */
// Function.prototype.bind1 = function(context){
//   // this指向调用的函数
//   let fn = this;
  
//   let arg = [...arguments];
//   // 去掉第一个元素
//   arg.shift();

//   return function(){
//     // 利用apply来实现的
//       return fn.apply(context,arg)
//   }
// }

// /* 测试 */
// let a = function(name){
//   console.log(this.value);
//   console.log(name);
// }

// let b = {
//   value: 1,
// }

// let c = {
//   value: 3
// }

// let a2 = a.bind1(b,'aa')();


// /* JavaScript实现常见排序算法 */

// /* 
//   稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；
//   不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；
//   内排序：所有排序操作都在内存中完成；
//   外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；
//   时间复杂度: 一个算法执行所耗费的时间。
//   空间复杂度: 运行完一个程序所需内存的大小。
//   链接：https://user-gold-cdn.xitu.io/2016/11/29/4abde1748817d7f35f2bf8b6a058aa40?imageView2/0/w/1280/h/960/format/webp/ignore-error/1
//  */

// // 冒泡排序
// function bubbleSort(arr) {
//   let len = arr.length;
//   for(let i=0; i<len; i++) {
//       for(let j=0; j<len - 1 - i; j++) {
//           if(arr[j] > arr[j+1]) {
//               [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
//           }
//       }
//   }
//   return arr;
// }

// // 选择排序

// function selectionSort(arr) {
//   var len = arr.length;
//   var minIndex;
//   for (var i = 0; i < len - 1; i++) {
//       minIndex = i;
//       for (var j = i + 1; j < len; j++) {
//           if (arr[j] < arr[minIndex]) {     //寻找最小的数
//               minIndex = j;                 //将最小数的索引保存
//           }
//       }
//       [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//   }
//   return arr;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// /* 插入排序 */
// function insertionSort(arr) {
//   for (let i = 1, len = arr.length; i < len; i++) {
//     const temp = arr[i];
//     let preIndex = i - 1;

//     while (arr[preIndex] > temp) {
//       arr[preIndex + 1] = arr[preIndex];
//       preIndex -= 1;
//     }
//     arr[preIndex + 1] = temp;
//   }

//   return arr;
// }

// /* 快速排序 */

// var quickSort = function(arr) {
//   　　if (arr.length <= 1) { return arr }

//   　　var pivotIndex = Math.floor(arr.length / 2);
//   　　    pivot = arr.splice(pivotIndex, 1)[0],
//   　　    left = [],
//   　　    right = [];

//   　　for (let i = 0; i < arr.length; i++){
//   　　　　if (arr[i] < pivot) {
//   　　　　　　left.push(arr[i]);
//   　　　　} else {
//   　　　　　　right.push(arr[i]);
//   　　　　}
//   　　}

//   　　return quickSort(left).concat([pivot], quickSort(right));
//   };



// var array = [ {"id": 20102034, "name": "报表集团", "pid": 0}, {"id": 20102035, "name": "北京分公司", "pid": 20102034}, {"id": 20102038, "name": "海淀分店", "pid": 20102035}, {"id": 20102039, "name": "朝阳分店", "pid": 20102035}, {"id": 20102065, "name": "青岛分店", "pid": 20102036}, {"id": 20102036, "name": "山东分公司", "pid": 20102034}, {"id": 20102066, "name": "烟台分店", "pid": 20102036} ];

// let treefn = function(arr){
//   let len = arr.length,
//     resObj = {},
//     tempObj ;

//     resObj.children=[{}];

//     temp = resObj.children[0]

//     for(let i = 0; i < len; i++){
//       if(i!==0) temp = temp.children[0];
      
//       temp.id = arr[i].id;
//       temp.pid = arr[i].pid;
//       temp.name = arr[i].name;
//       temp.children = [{}]
//     }
//     console.log(resObj)
//     return resObj;
// }

// treefn(array)

// /* 并归排序 */

// function merge(left,right){
//     var tmp=[];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             tmp.push(left.shift());
//         }else{
//             tmp.push(right.shift());
//         }
//     }
//     return tmp.concat(left,right)
// }

// function mergeSort(arr){
//     if(arr.length==1) return arr;
//     var mid=Math.floor(a.length/2),
//         left=arr.slice(0,mid);
//         right=arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right))
// }

// /* 希尔排序 */
// function shellSort(arr) {
//     var len = arr.length,
//         temp,
//         gap = 1;
//     console.time('希尔排序耗时:');
//     while(gap < len/5) {          //动态定义间隔序列
//         gap =gap*5+1;
//     }
//     for (gap; gap > 0; gap = Math.floor(gap/5)) {
//         for (var i = gap; i < len; i++) {
//             temp = arr[i];
//             for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
//                 arr[j+gap] = arr[j];
//             }
//             arr[j+gap] = temp;
//         }
//     }
//     console.timeEnd('希尔排序耗时:');
//     return arr;
// }

// /* 堆排序 */

// // 交换两个节点
// function swap(A, i, j) {
//     let temp = A[i];
//     A[i] = A[j];
//     A[j] = temp; 
//   }
//   //顶堆
//   function shiftDown(A, i, length) {
//     let temp = A[i]; // 当前父节点
//   // j<length 的目的是对结点 i 以下的结点全部做顺序调整
//     for(let j = 2*i+1; j<length; j = 2*j+1) {
//       temp = A[i];  // 将 A[i] 取出，整个过程相当于找到 A[i] 应处于的位置
//       if(j+1 < length && A[j] < A[j+1]) { 
//         j++;   // 找到两个孩子中较大的一个，再与父节点比较
//       }
//       if(temp < A[j]) {
//         swap(A, i, j) // 如果父节点小于子节点:交换；否则跳出
//         i = j;  // 交换后，temp 的下标变为 j
//       } else {
//         break;
//       }
//     }
//   }
  
//   // 堆排序
//   function heapSort(A) {
//     // 初始化大顶堆，从第一个非叶子结点开始
//     for(let i = Math.floor(A.length/2-1); i>=0; i--) {
//       shiftDown(A, i, A.length);
//     }
//     // 排序，每一次for循环找出一个当前最大值，数组长度减一
//     for(let i = Math.floor(A.length-1); i>0; i--) {
//       swap(A, 0, i); // 根节点与最后一个节点交换
//       shiftDown(A, 0, i); 
//     }
//   }
  
//   let Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
//   heapSort(Arr);
//   alert(Arr);

//   /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  * 242. 有效的字母异位词
//  */
// var isAnagram = function(s, t) {
//     if(s.length!==t.length) return false;
//     let len = s.length,
//         arr = s.split('');
//     for(let i = 0; i < len; i++){
//       if(!arr.includes(t[i])) return false;
//       arr.splice(arr.indexOf(t[i]),1);
//     }
//     return true;
// };

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  * 75. 颜色分类
//  */

// var sortColors = function(nums) {
//   let len  = nums.length,
//       temp = 0;
  
//   for(let i = 0; i < len; i++){
//       temp = nums[i];
//       if(temp==0){
//         nums.splice(i,1);
//         nums.unshift(temp);
//       } else if(temp==2){
//         let j = len;
//         while(j>i&&nums[j]!==1){
//             j--
//         }
//         [nums[i],nums[j]] = [nums[j],nums[i]]
//       }
//   }
//   return nums
// };

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  * 宝石与石头
//  */
// var numJewelsInStones = function(J, S) {
//   let res = 0,
//       len = S.length;
//   for(let i = 0; i < len; i++){
//       let re = new RegExp(S[i]);
//       if(re.test(J)) res++;
//   }
//   return res
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 80. 删除排序数组中的重复项 II
//  */
// var removeDuplicates = function(nums) {
//   let pre,middle,next;
//       for(let i = 0; i < nums.length - 2; i++){
//           pre = nums[i];
//           middle = nums[i+1];
//           next = nums[i+2];
//           if(pre==middle&&middle==next){
//               nums.splice(i+2,1);
//               i--
//           }
//       }
//   return nums.length;
// };


// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  * 94. 二叉树的中序遍历
//  */
// var inorderTraversal = function(root) {
//     let arr = [];

//     let fn = function(node){
//       if(node){
//         fn(node.left);
//         arr.push(node.val);
//         fn(node.right)
//       }
//     }

//     fn(root);

//     return arr
// };


// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} x
//  * @return {ListNode}
//  * 86. 分隔链表
//  */

// //  未保存初始位置
// var partition = function(head, x) {
//     let pre = next = head;
//     while(next){
//       if(next.val < x){
//         pre.val = next.val;
//         pre = pre.next;
//       }
//       next = next.next;
//     }

//     return head;
// };

// // 改进
// var partition = function(head, x) {

//   let node = head,
//       less = lessHead = new ListNode(0), 
//       more = moreHead = new ListNode(0);

//   while(node){
//     if(node.val < x){
//       less.next = new ListNode(node.val);
//       less = less.next;
//     } else {
//       more.next = new ListNode(node.val);
//       more = more.next
//     }
//     node = node.next
//   }

//   lessHead = lessHead.next;
//   moreHead = moreHead.next;
//   if(!lessHead) return moreHead
//   less.next = moreHead;

//   return lessHead;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  * 25. K 个一组翻转链表
//  */
// var reverseKGroup = function(head, k) {
//   let temp1 = [],
//       temp2 = [],
//       res = resHead = new ListNode(0);

//     while(head){
//       temp1.push(head.val)
//       head = head.next;
//     }

//     while(temp1.length >= k){
//       temp2 = [...temp2,...temp1.splice(0,k).reverse()]
//     }
//     temp2 = [...temp2,...temp1];
    
//     temp2.forEach(key=>{
//         res.next = new ListNode(key);
//         res = res.next;
//     })

//     resHead = resHead.next;

//     return resHead
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 164. 最大间距
//  */
// var maximumGap = function(nums) {
//   let len = nums.length,
//       res = 0;

//   if(len < 2) return 0;

//   nums.sort((a,b)=>a-b);
//   for(let i = 0; i < len - 1; i++){
//       res = nums[i+1] - nums[i]>res?(nums[i+1] - nums[i]):res;
//   }
//   return res;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 287. 寻找重复数
//  * 参考环形链表的解题方式
//  */
// var findDuplicate = function(nums) {
//   let pre = next = 0;
//       next = nums[nums[next]];

//   while(nums[pre]!=nums[next]){
//       pre = nums[pre];
//       next = nums[nums[next]];
//   }
  
//   pre = 0;
//   while(pre!=next){
//     pre = nums[pre];
//     next = nums[next]; 
//   }

//   return pre;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  * 234. 回文链表
//  */
// var isPalindrome = function(head) {
//   let slow = fast = head,
//       i = 0,
//       arr = [];
//       arr.unshift(slow.val);
//       while(fast&fast.next){
//           slow = slow.next;
//           fast = fast.next?fast.next.next:fast.next;
//           arr.unshift(slow.val);
//       }
//       console.log(arr,slow)
//       while(slow){
//           if(slow.val != arr[i]) return false
//           slow = slow.next;
//           i++;
//       }

//       return true
// };

// function sum(a,b=0){
//   if(arguments.length>1) return a+b;

//   return (a)=>a+b;
// }

// console.log(sum(1,1))
// console.log(sum(1));


// const list = [1, 2, 3];
// const square = num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num * num);
//         }, 1000);
//     });
// }

// function test() {
//     list.forEach(async x => {
//         const res = await square(x);
//         console.log(res);
//     });
// }

// test()

/**
 * @param {string} s
 * @return {string}
 */
// var reverseVowels = function(s) {
//     let pre = 0,
//         next = s.length-1,
//         arr  = ['a','e','i','o','u',"A","E","I","O","U"];
//     s = s.split('');
//     while(next>=pre){
//         if(arr.includes(s[pre])&&arr.includes(s[next])){
//            [s[pre],s[next]] = [s[next],s[pre]]
//             pre++;
//             next--
//         }
//         if(!arr.includes(s[pre])) pre++;
//         if(!arr.includes(s[next])) next--;
//     }        
//     return s.join('');
// };
// reverseVowels('holle')

// /**
//  * @description 925. 长按键入
//  * @param {string} name
//  * @param {string} typed
//  * @return {boolean}
//  */
// var isLongPressedName = function(name, typed) {
//     let i = 0, j = 0, N = name.length, T = typed.length;
//     if(N>T||(i==0&j==0&name[i]!==typed[j])) return false;
//     while(i<N-1){
//         if(name[i+1]==typed[j]){
//             i++; j++;
//         } else {
//             if(name[i]==typed[j]){
//                 j++
//             } else {
//                 return false
//             }
//         }
//     }
//     return true;
// };

// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//     this.cache = new Map();
//     this.capacity = capacity;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */

// LRUCache.prototype.get = function(key) {
//     if (!this.cache.has(key)) return -1;
//     // 改变原来的顺序将命中的移动到最后
//     let temp = cache.get(key)
//     cache.delete(key);
//     cache.set(key, temp);
//     return temp;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */

// LRUCache.prototype.put = function(key, value) {
//     let cache = this.cache;
//     // 删除已经存在的然后重新赋值
//     if (cache.has(key)) {
//         cache.delete(key);
//     } else if (cache.size >= this.capacity) {
//         cache.delete(cache.keys().next().value);
//     }
//     cache.set(key, value);
// };

// /**
//  * @param {number} n
//  * @return {number}
//  * @description 剑指offer 64题
//  */
// var sumNums = function(n) {
//     return n&&(n + sumNums(n-1));
// };

// /**
//  * @param {string} s
//  * @param {number} n
//  * @return {string}
//  * @description 剑指offer 58题
//  */
// var reverseLeftWords = function(s, n) {
//     s = s.substr(n) + s.substr(0,n)
//     return s
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  * @description 剑指offer 55题
//  */
// var maxDepth = function(root) {
//     let res = 0;
//     let dfs = function(node,n){
//         res = res>n?res:n;
//         if(!node) return
//         dfs(node.right,n+1);
//         dfs(node.left,n+1);
//     }
//     dfs(root,res)
//     return res
// };

// /**
//  * @param {number} n
//  * @return {number[]}
//  * @description 剑指offer 18题
//  */
// var printNumbers = function(n) {
//     let arr = [],
//         num = '';
//     for(let j = 0; j < n; j++){
//         num = num + '9'
//     }
//     for(let i = 1; i <= +num; i++){
//         arr.push(i)
//     }
//     return arr
// };

// /**
//  * @param {string} s
//  * @return {string}
//  * @description 剑指offer 05题
//  */
// var replaceSpace = function(s) {
//     let arr = s.split('');
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]==' ') arr[i] = '%20'
//     }
//     return arr.join('')
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  * @description 剑指offer 27题
//  */
// var mirrorTree = function(root) {
//     if (!root) return null;
//     [root.left, root.right] = [root.right,root.left]
    
//     mirrorTree(root.left);
//     mirrorTree(root.right);

//     return root;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  * @description 剑指offer 22题
//  */
// var getKthFromEnd = function(head, k) {
//     let pre = head,
//         next = head;
//     while(k>0){
//         next = next.next;
//         k--
//     }
//     while(next){
//         pre = pre.next;
//         next = next.next;
//     }
//     return pre
// };
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {number[]}
//  * @description 剑指offer 06题
//  */
// var reversePrint = function(head) {
//     let arr = [];
//     //js里面unshift方法效率低下
//     while(head){
//         arr.push(head.val)
//         head = head.next;
//     }
//     return arr.reverse()
// };

// /**
//  * @param {number} n - a positive integer
//  * @return {number}
//  * @description 剑指offer 15题
//  */
// var hammingWeight = function(n) {
//     let s = n.toString(2),
//         res = 0;
//     for(let i = 0; i < s.length; i++){
//         if(s[i]=='1') res++
//     }
//     return res;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @description 剑指offer 56题
//  */
// var singleNumber = function(nums) {
//     let pre = 0,
//         next = 2;
//     nums.sort((a,b)=>a-b);
//     while(nums[pre]==nums[next]){
//         pre = pre + 3;
//         next = next + 3;
//     }
//     return nums[pre]
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  * @description 剑指offer 25题
//  */
// var mergeTwoLists = function(l1, l2) {
//     let head , temp;
//     head = temp = new ListNode(0);

//     while(l1&&l2){
//         if(l1.val>l2.val){
//             temp.next = new ListNode(l2.val);
//             l2 = l2.next;
//         } else {
//             temp.next = new ListNode(l1.val);
//             l1 = l1.next;
//         }
//         temp = temp.next;
//     }
//     temp.next = l1?l1:l2;
    
//     return head.next;
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  * @description 剑指offer 54题
//  */
// var kthLargest = function(root, k) {
//     let num = 0,
//         res;

//     let fn = function(node){
//         if(!node) return
//         fn(node.right);
//         if(++num==k){
//             res = node.val;
//             return
//         };
//         fn(node.left);
//     }
//     fn(root);
//     return res;
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  * @description 剑指offer 24题 迭代实现
//  */
// var reverseList = function(head) {
//     let pre = null, cur = head, next;
//     while(cur){
//         next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  * @description BFS 
//  */
// var levelOrder = function(root) {
//     if (!root) return [];
//     let result = [], 
//         // 缓存层节点
//         tmp = [root];
  
//     while (tmp.length) {
//       // 缓存子节点
//       let childtmp = [],
//       // 缓存层节点的值
//           level = []; 
  
//       for (let i = 0, len = tmp.length; i < len; i++) { 
//         level.push(tmp[i].val); 
//         // 添加左右子节点到缓存数组当中
//         tmp[i].left&&childtmp.push(tmp[i].left);
//         tmp[i].right&&childtmp.push(tmp[i].right);
//       }

//       tmp = childtmp;
//       result.push(level);
//     }
//     return result;
//   };

//   var CQueue = function() {
//     this.arr = [];
// };

// /** 
//  * @param {number} value
//  * @return {void}
//  */
// CQueue.prototype.appendTail = function(value) {
//     this.arr.push(value)
// };

// /**
//  * @return {number}
//  */
// CQueue.prototype.deleteHead = function() {
//     return this.arr.length?this.arr.shift():-1;
// };

// /** 
//  * Your CQueue object will be instantiated and called as such:
//  * var obj = new CQueue()
//  * obj.appendTail(value)
//  * var param_2 = obj.deleteHead()
//  */

//  /**
//  * @param {number[][]} grid
//  * @return {number}
//  * @description 剑指offer 47题 
//  */
// var maxValue = function(grid) {
//     // let row = grid.length
//     // let col = grid[0].length
//     // let dp = [...new Array(row+1)].map(() => Array(col+1).fill(0))
//     // for(let i=1;i<=row;i++) {
//     //     for(let j=1;j<=col;j++) {
//     //         dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i-1][j-1]
//     //     }
//     // }
//     // return dp[row][col]

//     // for (let i = 0,iLen = grid.length; i < iLen; i++) {
//     //     for (let j = 0,jLen = grid[0].length; j < jLen; j++) {
//     //         let left = grid[i][j-1]===undefined ? 0: grid[i][j-1]
//     //         let up = grid[i-1]===undefined?0:grid[i-1][j]
//     //         grid[i][j] = Math.max(left+grid[i][j],up+grid[i][j])
//     //     }
//     // }
//     // return grid[grid.length-1][grid[0].length-1]
//     let up;

//     for (let i = 0,iLen = grid.length; i < iLen; i++) {
//         for (let j = 0,jLen = grid[0].length; j < jLen; j++) {
//             up = grid[i-1]===undefined?0:grid[i-1][j]
//             grid[i][j] = Math.max((grid[i][j-1]||0)+grid[i][j],up+grid[i][j])
//         }
//     }
//     return grid[grid.length-1][grid[0].length-1]
// };

// /**
//  * // Definition for a Node.
//  * function Node(val, next, random) {
//  *    this.val = val;
//  *    this.next = next;
//  *    this.random = random;
//  * };
//  */
// /**
//  * @param {Node} head
//  * @return {Node}
//  * @description 剑指offer 34题 
//  */
// var copyRandomList = function(head) {
//     const mapping = new Map();
//     let copy = function(node) {
//       if (!node) return node; // 空结点
//       if (mapping.has(node)) return mapping.get(node); // 取缓存
  
//       const res = new Node();
//       mapping.set(node, res); // 先放缓存
//       res.val = node.val;
//       res.next = copy(node.next); // 结点，要递归
//       res.random = copy(node.random); // 结点，要递归
//       return res;
//     }
  
//     return copy(head);
//   };

//   /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {number[]} preorder
//  * @param {number[]} inorder
//  * @return {TreeNode}
//  * @description 剑指offer 07题 
//  */
// var buildTree = function(preorder, inorder) {
//     if (preorder.length ==0 || inorder.length == 0) return null;

//     let res = new TreeNode(preorder[0]);

//     let index = inorder.findIndex((i)=>i==preorder[0])
    
//     res.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
//     res.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
//     return res;
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @description 剑指offer 03题 
//  */
// var findRepeatNumber = function(nums) {
//     //使用set 效率比 map高
//     let map = new Set();

//     for(let i = 0; i < nums.length; i++){
//         if(map.has(nums[i])) return nums[i];
//         map.add(nums[i])
//     }
//     return -1
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  * 面试题68 - I. 二叉搜索树的最近公共祖先
//  */
// var lowestCommonAncestor = function(root, p, q) {
//     if(root.val < p.val&& root.val < q.val ){
//        return lowestCommonAncestor(root.right, p, q)
//     } else if(root.val > p.val&& root.val > q.val ){
//        return lowestCommonAncestor(root.left, p, q)
//     } else if((root.val > p.val&& root.val < q.val)||(root.val < p.val&& root.val > q.val )){
//         return root
//     } else {
//         return root.val==q.val?q:p
//     }
// };

// /**
//  * @param {number} n
//  * @return {number}
//  * 面试题10- I. 斐波那契数列
//  */
// var fib = function(n) {
//     if(n < 2) return n;
//     let cur1 = 0, cur2 = 1;
//     for(let i = 2; i <= n; i++){
//         let temp = cur1 + cur2;
//         cur1 = cur2;
//         cur2 = temp%1000000007;
//     }
//     return cur2;
// };

// /**
//  * @param {number} n
//  * @return {number}
//  * 面试题49. 丑数
//  */
// var nthUglyNumber = function(n) {
//     let res = [1],
//         p2 = 0,p3 = 0,p5 = 0;

//     for(let i = 1; i <= n; i++){
//         res.push(Math.min(res[p2]*2,Math.min(res[p3]*3,res[p5]*5)));
//         if (res[i] == res[p2] * 2) p2++;
//         if (res[i] == res[p3] * 3) p3++;
//         if (res[i] == res[p5] * 5) p5++;
//     }

//     return res[n-1]
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} val
//  * @description 面试题18. 删除链表的节点
//  * @return {ListNode}
//  */
// var deleteNode = function(head, val) {
//     if(head.val==val) return head.next;
//     let temp = head;
//     while(temp.next){
//         if(temp.next.val==val){
//             temp.next = temp.next.next;
//             return head
//         }
//         temp = temp.next
//     }
// };

// /**
//  * @param {number[]} prices
//  * @return {number}
//  * @description 面试题63
//  */
// var maxProfit = function(prices) {
//     if (prices.length<2) return 0;

// 	let max = 0,
//         last = 0;

// 	for (let i = 1; i < prices.length; i++){
// 		last = last + prices[i] - prices[i-1];
// 		last = last > 0 ? last:0;
// 		max = max > last ? max:last;
// 	}
// 	return max;
// };

// var maxProfit = function(prices) {
//     let res = 0
//     let min = Infinity
//     for(let i=0;i<prices.length;i++) {
//         min = Math.min(min,prices[i])
//         res = Math.max(res, prices[i] - min)
//     }
//     return res
// };

// /**
//  * @param {number} target
//  * @return {number[][]}
//  * @description 面试题57 - II. 和为s的连续正数序列
//  */
// var findContinuousSequence = function(target) {
//     let res = [],
//         temp = [],
//         j = 0;
//     for(let i = 1; i < target; i++){
//         j = i+1;
    
//         while(((i+j)*(j-i+1))/2<target){
//             j++
//         }
        
//         if(((i+j)*(j-i+1))/2==target){
//             temp = [];
//             for(let k = i; k <= j; k++){
//                 temp.push(k)
//             }
//             res.push(temp);
//         }
//     }

//     return res;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @description 面试题39. 数组中出现次数超过一半的数字
//  */
// var majorityElement = function(nums) {
//     // 排序找中位数的方法，效率太低
//     // nums.sort((a,b)=>a-b);
//     // return nums[parseInt(nums.length/2)]

// // 使用 Map 效率提升
//     let map = new Map();
//     nums.forEach(key=>{
//         map.set(key,map.get(key)+1||1)
//     });
//     return [...map].filter(([key,val])=>val > parseInt(nums.length/2))[0][0]
// };


// let fn = (N,num)=>{
//     let flag = (start,end,key)=>{
//         for(let i = start; i <= end; i++){
//             if(num[i]>key) return false
//         }
//         return true
//     }
    
//     let flag1 = (start,end,key)=>{
//         for(let i = start; i >= end; i--){
//             if(num[i]>key) return false
//         }
//         return true
//     }

//     let arr = new Array(N);
//         arr.fill(1)
//     for(let i = 0; i < N; i++){
        
//         for(let j = i+1; j < N; j++){
//             if(flag(i+1,j,num[j])) arr[i]++
//         }

//         for(let k = i-1; k >= 0; k--){
//             if(flag1(i-1,k,num[k])) arr[i]++
//         }
//     }
//     return arr.join(' ')
// }

// fn(6,[5,3,8,3,2,5])

// 重复生成字符串
// let Str = (s)=>{
//     let start = s[0],
//         res = ''
//     s = s.slice(2)
//     for(let i = 0; i < start; i++){
//         res=res+s
//     }
//     return res
// }

// let fn = (str)=>{
//     let left = [],
//         right = 0;
// // 记录 [ 的位置
//     for(let i = 0; i < str.length; i++){
//         if(str[i]=='[') left.push(i);
//     }
//     // 反转
//     left.reverse();
//     for(let j = 0; j < left.length; j++){
//         // 每次都重新查找 right
//         right = 0;
//         // 查找right值
//         while(str[right]!==']'){
//             right++;
//             if(str[right]==']') break
//         }
//         // 拼接
//         str = str.slice(0,left[j]) + Str(str.slice(left[j]+1,right)) + str.slice(right+1);
//     }

//     return str
// }

// fn('HG[3|B[2|CA]]F')

// //HGBCACABCACABCACAF

// /**
//  * 已有函数：生成一个二叉树
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} t1
//  * @param {TreeNode} t2
//  * @return {TreeNode}
//  */
// var mergeTrees = function(t1, t2) {
//     // 填入代码
//     let resNode = null;

//     if (t1==null && t2==null) return null
//     if (!t1) return t2;
//     if (!t2) return t1;

//     resNode = new TreeNode(t1.val + t2.val);
//     resNode.left = mergeTrees(t1.left, t2.left);
//     resNode.right = mergeTrees(t1.right, t2.right);

//     return resNode;
// };

// 2.	子串问题
// 给定两个字符串s1和s2，如果s2包含s1的任一排列，则返回true。
// 换句话说，第一个字符串的排列之一，是第二个字符串的子串。
// 例1：
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: True
// 说明: s2包含s1的一个排列("ba")

// 例2：
// Input: s1= "ab", s2 = "eidboaoo"
// Output: False
// 注：
// 1）输入的字符串只包含小写字母。
// 2）两个字符串的长度在[1, 10,000]范围内。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function(s1, s2) {
//     // 填入代码
//     let temp = s2.split('');
//     for(let i = 0; i < s1.length; i++){
//         if(!temp.includes(s1[i])) return false;
//     }
//     return true
// };

// var oddEvenList = function(head) {
//     // 填入代码
//     let arr1 = [],
//         arr2 = [],
//         flag = 1,
//         temp = head;
//     // 取出节点，并且分类
//     while(temp){
//         if(flag%2===1){
//             arr1.push(temp.val)
//         } else {
//             arr2.push(temp.val)
//         }
//         flag++;
//         temp = temp.next;
//     }
//     // 重新赋值
//     temp = head;
//     flag = 1;
//     while(temp){
//         if(flag%2===1){
//            temp.val = arr1.shift()
//         } else {
//            temp.val = arr2.shift()
//         }
//         flag++;
//         temp = temp.next;
//     }
//     return head;
// };


// console.log(checkInclusion("abc","eidboaoo")) 

// var genUrl = function(requireTree) {
//     // 填入代码
//     let str = ''
    
//     /**
//      * 描述
//      * @date 2020-02-27
//      * @description 实现层次遍历，并且返回一个数组
//      * @param {any} arr
//      * @returns {any}
//      */
//     let fn = function(arr){
//         if (arr.length == 0) return [];
//         // 层次遍历
//         let res = [], 
//             // 维护一个栈来储存每层的数值
//             queue = [];

//         queue.push(arr);

//         while(queue.length!==0){
//             var level = [];

//             for (var i = 0; i < queue.length; i ++) {
//                 var item = queue.shift();
//                 // 遍历属性
//                 for (var j = 0; j < item.length; j ++) {
//                     level.push(item[j]['name']);
//                     // 添加子元素到queue当中
//                     if(item[j]["require"]) queue.push(item[j]["require"]);
//                 }
//             }

//             // 加入数组当中
//             res.push(...level);
//         }
//         // 数组去重
//         res = [...new Set(res)]
//         // 返回遍历后的数组，要求是从底到顶遍历
//         return res.reverse();
//     }

//     let temp = fn(requireTree["require"]);
//     str = 'http://res.wx.qq.com/' + temp.join(',') + ','+requireTree['name']
//     console.log(str)
//     return str
// };

// let requireTree = { 
// 	"name":"page.js",
// 	"require":[
// 		{
// 			"name":"A.js",
// 			"require":[
// 				{
// 					"name":"C.js",
// 					"require":[
// 						{
// 							"name":"F.js"
// 						}
// 					]
// 				}
// 			]
// 		},
// 		{
// 			"name":"B.js",
// 			"require":[
// 				{
// 					"name":"D.js",
// 					"require":[
// 						{
// 							"name":"F.js"
// 						}
// 					]
// 				},
// 				{
// 					"name":"E.js",
// 					"require":[]
// 				}
// 			]
// 		},
// 	]
// }


// genUrl(requireTree)


// function permution(str) {
// 	let res = [],
// 		temp = [],
// 		arr = str.split('');
		
// 	let fn = function(curArr,strArr){
// 		if(curArr.length==strArr.length){
// 			// 注意这里需要生成一个新数组
// 			res.push([...curArr]);
// 			return 
// 		}
		
// 		strArr.forEach((k,i)=>{
// 			if(!curArr.includes(k)){
// 				curArr.push(k);
// 				fn(curArr,strArr);
// 				curArr.pop()
// 			}
// 		})
// 	}

// 	fn(temp,arr);
// 	console.log(res)
// 	return res	
// }

// permution('asd')


// let fn = function(n){
// 	if(n<5){
// 		console.log(1);
// 		return
// 	}
// 	// 能生的
// 	let arr1 = [1],
// 	// 不能生的
// 		arr2 = [];
// 	for(let i = 5; i <= n; i++){
// 		for(let j = 0; j < arr1.length; j++){
// 			arr2.push(1);
// 		}
// 		if(i%4==0){
// 			arr1.push(1);
// 			arr2.shift()
// 		}
// 	}
// 	console.log(arr1.length+arr2.length);
// }

// fn(9)

// let myNew = function(){
// 	let obj = {};
// 	let fn = [...arguments].shift();
// 	console.log(fn)
// 	obj._proto_ = fn.prototype;
// 	fn.call(obj,...arguments);
// 	return obj;
// }

// function a(aa){
// 	this.a = aa
// }

// // a();

// let b = new a(11);
// let c = myNew(a,10);

// console.log(c)

// Function.prototype.myCall = function (obj = window) {
// 	obj.fn = this
// 	const args = [...arguments].splice(1)
// 	const result = obj.fn(...args)
// 	delete obj.fn
// 	return result
//   }
  
//   Function.prototype.myApply = function (obj = window) {
// 	obj.fn = this
// 	const args = arguments[1]
// 	let result = args ?
// 	  obj.fn(...args) :
// 	  obj.fn()
// 	delete obj.fn
// 	return result
//   }
  
//   Function.prototype.myBind = function (obj = window) {
// 	const that = this
// 	const args = [...arguments].splice(1)
// 	return function () {
// 	  return that.apply(obj, [...args, ...arguments])
// 	}
//   }

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var levelOrder = function(root) {
//     let temp = [],
//         res = [];
//     let fn = function(node){
//         if(node==null) return;
//         res.push(node.val);
//         node.left&&temp.push(node.left);
//         node.right&&temp.push(node.right);
//         while(temp.length>0){
//             fn(temp.shift())
//         }
//     }
//     fn(root);

//     return res;
// };

/**
 * @param {string} S
 * @return {string[]}
 */
// var letterCasePermutation = function(S) {
//     let res = [],
//         temp = S.split('');
//     let fn = function(s,arr){
//         if(s.length==S.length){
//             res.push(s);
//             return;
//         }
//         for(let i = 0; i < arr.length; i++){
// 			let t = arr.shift();
// 			// 防止恶意输入
//             fn(`${s}`+`${t}`,arr);
//             arr.push(t)
//         }
//     }
// 	fn('',temp);
//     return res;
// };

// letterCasePermutation("a1b2")

// var obj = {
// // 如果Symbol.toPrimitive()方法，优先调用再返回
// // 调用valueOf()，如果转换为原始类型，则返回
// // 调用toString()，如果转换为原始类型，则返回
// // 如果都没有返回原始类型，会报错
//     value: 3,
//     valueOf() {
//       this.value = this.value+1;
//       return this.value;
//     },
//     toString() {
//       this.value = this.value+2;
//       return this.value;
//     },
//     [Symbol.toPrimitive](){
//       this.value = this.value+3;
//       return this.value;
//     }
//   }
//   console.log(obj==6,obj==9); // 输出true true

// 寄生继承
//function createObj (o) {
//    var clone = object.create(o);
//    return clone;
//}

// 组合继承
// function Child (name, age) {
//    Parent.call(this);
//}
//Child.prototype = new Parent();

// 原型链继承
// function Child () {}

// Child.prototype = new Parent();
// 原型式继承
// function createObj(o) {
//     function F(){}
//     F.prototype = o;
//     return new F();
// }
// Child = creatObj(Parent)
// 寄生组合继承
//function object(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }
// function prototype(child, parent) {
//     var prototype = object(parent.prototype);
//     prototype.constructor = child;
//     child.prototype = prototype;
// }
// 当我们使用的时候：
// prototype(Child, Parent);
// 构造函数继承
// function Child () {
//     Parent.call(this);
// }


// 快排
// let arr = [2,2,4,1,5,7,2,7,9,2,5,8,4,7];

// let quickSort = function(arr){
//     if(arr.length<2) return arr
//     let middle = Math.floor(arr.length/2);
    
//     let fn = function(index,start,end){
//         let newI = index,
//             newS = start,
//             newE = end;
//         if(end-start==1) return

//         while(start<end){
//             if(arr[start]>arr[index]){
//                 [arr[start],arr[index]]=[arr[index],arr[start]];
//             } else{
//                 start++
//             }
//             if(arr[end]<arr[index]){
//                 [arr[end],arr[index]]=[arr[index],arr[end]];
//             } else{
//                 end--
//             }
//         }

//         fn(Math.floor((newI+newS)/2),newS,newI);
//         fn(Math.floor((newI+newE)/2),newI,newE);
//     }

//     fn(middle,0,arr.length-1);

//     return arr
// }

// console.log(quickSort(arr));

// let bigNumberAdd = function(num1,num2){
//     let res = '',
//         s1 = '',
//         s2 = '',
//         temp = 0;
//     if(num1==0) return num2;
//     if(num2==0) return num1;
//     num1 = num1+'';
//     num2 = num2+'';

//     s1 = num1.length-1;
//     s2 = num2.length-1;

//     while(s1>=0||s2>=0){
//         let a1 = parseInt(num1[s1])||0,
//             a2 = parseInt(num2[s2])||0;

//         res = res+(temp+a1+a2)%10;
//         temp = Math.floor((a1+a2)/10)
//         s1--;
//         s2--;
//     }
//     res = +(res+"").split('').reverse().join('')
//     return res;
// }

// console.log(bigNumberAdd(1234,109))


// const deepCopy = function(obj){
//     let newObj = {};
//     if(obj.__proto__.constructor !=="Object") return
//     for(let k in obj){
//         if(obj.hasOwnProperty(k)){
//             newObj[k] = obj[k];
//         }
//     }
//     console.log(newObj)
//     return newObj;
// }

// let a = {
//     a:1,
//     b:2
// }
// console.log(a.__proto__.constructor.prototype.s  = 0)

// deepCopy(a)


// const newFlat = function(arr){
//     let resArr = [];
    
//     let fn = function(ARR){
//         ARR.forEach((k)=>{
//             if(Array.isArray(k)){
//                 fn(k);
//             } else{
//                 resArr.push(k)
//             }

//         });
//     }
//     fn(arr)

//     console.log(resArr);
//     return resArr
// }


// newFlat([1,2,3,4,[3,4,5,[6,6,7]]])

// const throttle = function(fn,time){
//     let timer = null;
    
//     return function(){
//         if(timer) return;
//         timer = true;
//         let fn1 = ()=>{
//             fn();
//             timer = false;
//         }
//         setTimeout(fn1,time);
//     }
// }
// let a = function(){
//     console.log(1)
// }

// setInterval(throttle(a,5000),0)

// const debounce = function(fn,time){
//     let timer = null;
//     return function(){
//         if(timer){
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(fn,time);
//     }
// }

// const a = function(){
//     console.log(1)
// }
// setInterval(debounce(a,500),1000)


// function debounce(fn, wait) {
//     var timer = null;
//     return function () {
//         var context = this
//         var args = arguments
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(function () {
//             fn.apply(context, args)
//         }, wait)
//     }
//   }
  
//   var fn = function () {
//     console.log('boom')
//   }
  
//   setInterval(debounce(fn,500),1000) 
  
// const myNew = function(){
//     let obj = {};
//     let [constructor,...arg] = [...agruments];
//     obj.__proto__ = constructor.prototype;
//     let res = constructor.apply(obj,agr);
//     if(typeof res == 'object'&&res){
//         return res
//     }
//     return obj;
// }

// Function.prototype.myCall = function(){
//     let fn = this;
//     let [context,...arg] = [...arguments];
//     context.fn = fn;
//     let res = context.fn(...arg);
//     delete context.fn;
//     return res;
// }

// Function.prototype.myApply = function(){
//     let fn = this;
//     let [context,arr] = [...arguments];
//     context.fn = fn;
//     let res = null;
//     if(!arr){
//        res  = context.fn()
//     } else{
//         res  = context.fn(...arr)
//     }
//     delete context.fn;
//     return res;
// }

// function curry(fn,...arg){
//     if(fn.length>arg.length){
//         return (...newAgr)=>curry(fn,...arg,...newAgr);
//     } else{
//         return fn(...arg)
//     }
// }
// let add = function(a,b,c,d){
//     return a+b+c+d;
// }

// let a = curry(add)

// console.log(a(1)(2,4)(3))


// const JSONP = function(res){
//     let script = document.createElement('script');
//     var url = req.url + '?callback=' + req.callback.name;
//     script.src = url;
//     document.getElementsByTagName('head')[0].appendChild(script); 
// }

// function hello(res){
//     alert('hello ' + res.data);
// }
// jsonp({
//     url : '',
//     callback : hello 
// });

// const ajax = function(){

// }

// function ajax() {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('get', 'http://localhost:8080/readNum');
    //     xhr.send();
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4) {
    //             console.log('success', xhr.responseText);
    //         } else {
    //             console.log('error', xhr.responseText);
    //         }
    //     }
// }

// // 继承方式
// function parent() {
    
// }

// function child() {
    
// }
// // 原型链继承
// child.prototype = new parent();

// // 构造函数继承
// function child(){
//     parent.call(this);
// }
// // 组合继承

// function child(){
//     parent.call(this);
// }

// child.prototype = new parent()
// // 原型式继承

// child = Object.create(parent);

// // Object.create()原理

// const object = function(fn){
//     let F = function(){}
//     F.prototype = fn;
//     return new F;
// }

// // 寄生式继承

// const Fn = function(fn){
//     let clone = Object.create(fn);
//     return clone;
// }

// child = Fn(parent);

// // 寄生组合式

// function prototype(child, parent) {
//     var prototype = Object.create(parent.prototype);
//     prototype.constructor = child;
//     child.prototype = prototype;
// }

// const quicksort = function(arr){
//     const fn = function(start,end){
//         if(end-start==1) return
//         let mid = Math.floor((start+end)/2);
//         let newS = start, newE = end;
//         while(start<end){
//             if(arr[start]>arr[mid]){
//                 [arr[start],arr[mid]] = [arr[mid],arr[start]]
//             }
//             start++
//             if(arr[end]<arr[mid]){
//                 [arr[end],arr[mid]] = [arr[mid],arr[end]];
//             }
//             end--
//         }
//         fn(newS,mid);
//         fn(mid,newE);
//     }

//     fn(0,arr.length-1)
//     return arr
// }

// console.log(quicksort([1,4,2,6,7,3,8,3,10]))


// 并归排序

// const mergeSort = function(arr){
//     if(arr.length<2) return arr;
//     let mid = Math.floor(arr.length/2),
//         left = arr.splice(0,mid),
//         right = arr;
//     const merge = function(L,R){
//         let res = [];
//         while(L.length&&R.length){
//             if(L[0]>R[0]){
//                 res.push(R.shift())
//             } else{
//                 res.push(L.shift())
//             }
//         }
//         while(L.length){
//             res.push(L.shift())
//         }
//         while(R.length){
//             res.push(R.shift())
//         }
//         return res;
//     }

//     return merge(mergeSort(left),mergeSort(right))
// }

// console.log(mergeSort([1,4,2,6,7,3,8,3,10]))


// const curry = function(fn,...agr){
//     if(agr.length<fn.length){
//         return (...newA)=>curry(fn,...agr,...newA)
//     } else{
//         return fn(...agr)
//     }
// }

// let fn = function(x,y,z){
//     return x+y+z;
// }
// let a = curry(fn)
// console.log(a(1)(2,3))

// var re = /\w+\s/g;
// var str = "fee fi fo fum";
// var myArray = str.match(re);
// console.log(myArray);

//line=readline()
//print(line)

//   async await 实现
// function queue(list, count){

//     if(list.length<1) return
    
//     const cb = async function(){
//         await queue(list,count)
//     }

//     let arr = [];
//     for(let i = 0; i < count; i++) {
//         if(!list.length) break;
//         arr.push(list.shift())
//      }
//     for(let i = 0; i < arr.length; i++) {
//         arr[i](cb)
//     }
//   }
  
// promise实现
// function queue(list, count){
//   let arr = [];
//   for(let i = 0; i < count; i++) {
//     if(!list.length) break;
//       arr.push(list.shift())
//     }
//   for(let i = 0; i < arr.length; i++) {
//     new Promise((resolve,reject)=>{
//         arr[i](resolve)
//     }).then(res=>queue(list,count))
//   }
// }


  //二进制加减
// const fn = function(s1,s2){
//     let pre = s1.length -1,
//         next = s2.length-1,
//         temp = 0,
//         res = '';
//     while(pre>=0||next>=0){
//         let c = s1[pre]||0,
//             d = s2[next]||0;

//           c = +c;
//           d = +d;

//           res = ((temp + c + d)%2).toString()+res;
//           temp = Math.floor((temp + c + d)/2);
          
//           if(pre>=0) pre--;
//           if(next>=0) next--;
//     }
//     if(temp) res = (temp).toString()+res;
//     console.log(res);
//     return res;
// }

// fn('010','110')





//从一个整数数组中，找出连续递增的最长序列。

// function findCont(arr){

//       let Offset = 0, /*序列的开始位置*/
//           Count = 1;/*序列长度*/
//      let templen = 1,
//          tempstart = 0;

//       for(let i = 0; i < arr.length-1;i++){
//           if(arr[i]+1==arr[i+1]){
//             templen++
//           }else{
//             if(Count<templen){
//                 Count = templen;
//                 Offset = tempstart;
//             }
//             templen = 1,
//             tempstart = i+1;
//           }
//       }
//       if(Count<templen){
//         Count = templen;
//         Offset = tempstart;
//       }
//       return {offset : Offset, count: Count};
// }
// console.log(findCont([1,2,3,1,2,3,4]))
// 在二叉排序树{value:Number, left:Object, right:Object}
//上面找出第3大的节点。注意：不能把二叉树全量存储到另外的存储空间，
//比如存储到数组中，然后取出数组的第三个元素。

// function find(root){

//     let pre = root,
//         next = null,
//         num1 = 0,
//         num2 = 0;
//     const fn = function(node){
//         if(node.left) fn(node.left);
//         next = node;
//         num1++;
//         if(num1==3) fn(pre);
//         if(node.right) fn(node.right);
//     }

//     const fn1 = function(node){
//         if(node.left) fn(node.left);
//         pre = node;
//         num2++;
//         if(node.right) fn(node.right);
//     }
//     fn(root)
//     return pre;
// }

//设定如下的对应关系(A=1,B=2,C=3,...,Z=26,AA=27,AB=28,....AZ=, BA=, .....AAA=, ...)，
//编写一个转换函数，根据上面的规则把一个字符串: "WECHAT" 转换为数字

// function StrToInt(str){
//     let num = 0,
//         len = str.length;

//     for(let i = 0; i < len; i++){
//         num = num + (str[i].charCodeAt()-64)*Math.pow(26,len-i-1);
//     }
//     return num;
// }
// console.log(StrToInt('AA'))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * n数和
 */
// const findNSum = function (nums, target,n) {
//   const fn = function (nums, target, N, result, results) {
//     // 结束条件
//     if (nums.length<N || target < nums[0]*N || target > nums[nums.length-1]*N) return;

//     if (N === 2){
//       let left = 0,
//           right = nums.length - 1;
//       while (left < right) {
//           let s = nums[left] + nums[right];
//         if (s === target) {
//           //返回结果
//           results.push([...result,nums[left],nums[right]]);
//           //去重
//           while (left < right && nums[left] === nums[left+1]) left++;
//           while (left < right && nums[right] === nums[right-1]) right++;
//           // 继续找其他结果
//           left++;
//           right--;
//         } else if (s < target) {
//           left++;
//         } else {
//           right--;
//         }
//       }
//     } else {
//       for(let i = 0; i < nums.length - N + 1; i++) {
//         if (i === 0 || (i > 0 && nums[i-1] !== nums[i])){
//           // 先定其中一个值，再求值
//           fn(nums.slice(i + 1), target - nums[i], N-1, [...result,...[nums[i]]], results);
//         }
//       }
//     }
//   };
//   let results = [];
  
//   nums.sort((a,b)=>a-b);

//   fn(nums, target, n, [], results);

//   return results;
// };


// console.log(findNSum([-2, -1, -1, 1, 1, 2, 2], 0, 4));

// const fn = function(n,k,L,R){
//   let res = 0,
//       low = '',
//       high = '';
//    while(n){
//      n--;
//      low = low+`${L}`;
//      high = high+`${R}`;
//    }
//    if(k==1) {
//      console.log(high-low);
//      return
//    }
//    for(let i = low; i <= high; i++){
//       if(i%k==0) res++
//    }
//    return res
// }

// fn(9,1,1,3)

// const fn = function(x,k,arr){
//   let res = 0,
//       temp = 1,
//       tempI = 0,
//       resI = 0;
//   let Arr = arr.map((key)=>{
//     if((k|key)!==key){
//       return k|key;
//     } else{
//       return null
//     }
//   });

//   arr = [...arr,...Arr];
//   arr.sort((a,b)=>a-b);
  
//   for(let i = 0; i < arr.length-1; i++){
//     if(arr[i]==null) continue;

//     if(arr[i]==arr[i+1]){
//       temp++
//     } else{
//       if(temp>res){
//         res = temp;
//         resI = tempI;
//       }
//       tempI = i+1;
//       temp = 1;
//     }
//   }

//   if(temp>res){
//     res = temp;
//     resI = tempI;
//   }

//   return res
// }
// fn(5,2,[3,1,3,2,5])

// const fn = function(n,arr1,arr2){
//    let resArr = [],
//       res = 1;
//    for(let i = 0; i < n; i++){
//      resArr.push(0);
//    }

//    for(let i = 0; i < n; i++){
//     if(arr1[i]=='.') resArr[i]++
//     if(arr2[i]=='.') resArr[i]++
//    }

//    if(resArr.includes(0)){
//       print(-1)
//       return;
//    }
   
//    for(let i = 0; i < n; i++){
//       res = res*resArr[i]
//    }
//    print(res);
// }

// fn(5,['.','.','X','.','X'],['X','X','.','.','.'])

// function flatten(obj) {
//   /* 代码实现 */
//   let res = {};
//   for(let k in obj){
//     if(obj.hasOwnProperty(k)){
//       if((obj[k] instanceof Object)){
//         if(JSON.stringify(obj[k])!=='{}') res[k] = flatten(obj[k])
//       } else{
//         res[k] = obj[k]
//       }
//     }
//   }
//   return res;
// }

// console.log(flatten({a: 1,b:{c:{}, d: 2 }}))

// function isSorted(arr) {
//   /* 代码实现 */
//   let res = 0,
//       temp1 = [...arr],
//       temp2 = [...arr];
//       temp1.sort((a,b)=>a-b);
//       temp2.sort((a,b)=>b-a);
//       arr = arr.join('');
//       if(arr==temp1.join('')) return 1;

//       if(arr==temp2.join('')) return -1

//   return res;
// }

// console.log(isSorted([0, 1, 2, 2])); // 1
// console.log(isSorted([4, 3, 2])); // -1
// console.log(isSorted([4, 3, 5])); // 0

// const add = x => x + 1;
// const multiply = (x, y) => x * y;
// const multiplyAdd = composeFunctions(multiply, add);

// console.log(multiplyAdd)

// function composeFunctions(...fns) {
//   let len = fns.length -1;
//    if(len > 0){
//      let fn1 = fns.pop();
//       return fn1(composeFunctions(...fns),...arguments);
//    } else{
//      return (...agruments) => fns[0](...agruments)
//    }
// }

// const Str = (len,s)=>{
//     let res = '';

//     for(let i = 0; i < len; i++){
//         res=res+s
//     }
//     return res
// }

// let decodeString = (str)=>{
//     let left = [],
//         right = 0,
//         num = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i]=='[') left.push(i);
//     }

//     for(let j = 0; j < left.length; j++){
//         right = 0;
//         while(str[right]!==']'){
//             right++;
//             if(str[right]==']') break
//         }
//         str = str.slice(0,left[j]-1) + Str(str[left[j]-1],str.slice(left[j]+1,right)) + str.slice(right+1);
//     }
//     console.log(str)
//     return str
// }
// const s = '2[abc]3[cd]ef'; 

// decodeString(s)


/**
 * 题目一
 * 实现一个方法，接受一个对象，把其打平成一层
 * 说明：1. 对象的key符合变量名规则。2. 打平时，空对象忽略
 * 示例：
 *   flatten({a: 1, b: { c:{}, d: 2 }}); // {a: 1, 'b.d': 2}
 */
// function flatten(Obj) {
//   /* 代码实现 */
//   let res = {};
//   const fn = function(key,obj){
//     for(let k in obj){
//       if(obj.hasOwnProperty(k)){
//         if((obj[k] instanceof Object)){
//           if(JSON.stringify(obj[k])!=='{}'){
//             if(key!==''){
//               fn(`${key}`+'.'+`${k}`,obj[k]);
//             } else{
//               fn(`${k}`,obj[k]);
//             }
//           }
//         } else{
//           if(key!==''){
//             res[`${key}`+'.'+`${k}`] = obj[k]
//           } else{
//             res[k] = obj[k]
//           }
//         }
//       }
//     }
//   }

//   fn('',Obj)
//   console.log(res)
// }

// flatten({a: 1, b: { c:{}, d: 2, e:{f:1} }})

/**
 * 题目二
 * 判断数组的排序
 * 说明：实现一个方法，数组为升序返回1，数组为降序返回-1，乱序返回0
 * 示例：
 *   isSorted([0, 1, 2, 2]); // 1
 *   isSorted([4, 3, 2]); // -1
 *   isSorted([4, 3, 5]); // 0
 */
// function isSorted(arr) {
//   /* 代码实现 */
//   let res = 0,
//     temp1 = [...arr],
//     temp2 = [...arr];

//     temp1.sort((a,b)=>a-b);
//     temp2.sort((a,b)=>b-a);
//     arr = arr.join('');
  
//   if(arr==temp1.join('')) return 1;
//   if(arr==temp2.join('')) return -1;
//   return res;
// }

/** 
 * 题目三
 * 函数组合运行
 * 说明：实现一个方法，可将多个函数方法按从左到右的方式组合运行。
 *   如`composeFunctions(fn1,fn2,fn3,fn4)`等价于`fn4(fn3(fn2(fn1))`。
 * 示例：
 *  const add = x => x + 1;
 *  const multiply = (x, y) => x * y;
 *  const multiplyAdd = composeFunctions(multiply, add);
 *  multiplyAdd(3, 4) // 返回 13
 */

// function composeFunctions(...fns) {
//   return (...agr)  =>{
//     let res = fns[0](...agr);
//     for(let i = 1; i < fns.length; i++){
//       res = fns[i](res)
//     }
//     return res;
//   }
// }

// const add = x => x + 1;
// const multiply = (x, y) => x*y;
// const multiplyAdd = composeFunctions(multiply, add);

// console.log(multiplyAdd(3, 4)) // 返回 13

/**
 * 说明：给定一个编码字符，按编码规则进行解码，输出字符串
 *     编码规则是`count[letter]`，将letter的内容count次输出，count是0或正整数，letter是区分大小写的纯字母
 * 示例：
 * const s = '3[a]2[bc]'; decodeString(s); // 返回'aaabcbc'
 * const s = '3[a2[c]]'; decodeString(s); // 返回'accaccacc'
 * const s = '2[abc]3[cd]ef'; decodeString(s); // 返回'abcabccdcdcdef'
 */

   /* 功能实现 */
// const Str = (num,s)=>{
//   let res = '';
//   while(num){
//     res += s
//     num--;
//   }
//   return res;
// }

// function decodeString(str){
//   let left = [],
//       len = str.length;

//   for(let i = 0; i < len; i++){
//     if(str[i]=='[') left.push(i);
//   }

//   left = left.reverse();
//   for(let j = 0; j < left.length; j++){
//       let k = str.length;
//       while(str[k]!==']'){
//         k--;
//       }
//       str = str.slice(0,left[j]-1) + Str(str[left[j]-1],str.slice(left[j]+1,k)) + str.slice(k+1);
//   }
//   return str
// }


// const s = '2[abc]3[cd]ef'; 

// console.log(decodeString(s));


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function(head) {
//   if(!head||!head.next) return head;
//   let node = head,
//       pre = new ListNode(null),
//       next = null;
//       head = head.next;
//   while(node){
//       if(!node||!node.next) break;
//       next = node.next;
//       pre.next = next;
//       node.next = next.next;
//       next.next = node;

//       pre = node;
//       node = node.next;
//   }
//   return head
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function(head, k) {
//   let p = head,
//       cur = head,
//       pre = null,
//       next = null;
//   for(let i = 0; i < k; i++){
//       if(!p) return head;
//       p = p.next
//   }
//   for(let i = 0; i < k; i++){
//       next = cur.next;
//       cur.next = pre;

//       pre = cur;
//       cur = next;
//   }
//   head.next = reverseKGroup(cur,k)
//   return pre;
// };

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   let arr = [];
//   for(let i = 0; i < s.length; i++){
//       if(s[i]==']'){
//           if(arr.pop()!=='[') return false;
//       } else if(s[i]=='}'){
//           if(arr.pop()!=='{') return false;
//       } else if(s[i]==')'){
//           if(arr.pop()!=='(') return false;
//       } else{
//           arr.push(s[i])
//       }
//   }

//   return arr.length==0?true:false;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//   if(!root) return [];
//   let arr = [],
//       res = [],
//       level = 0,
//       len = 0,
//       temp = null;
//       arr.push(root);
//   while(arr.length){
//       len = arr.length;
//       res.push([]);
//       for(let i = 0; i < len; i++){
//           temp = arr.shift();
//           res[level].push(temp.val);
//           if(temp.left) arr.push(temp.left);
//           if(temp.right) arr.push(temp.right);
//       }
//       level++;
//   }
//   return res;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var rightSideView = function(root) {
//   if(!root) return [];
//   let arr = [],
//       res = [],
//       level = 0,
//       len = 0,
//       temp = null;
//       arr.push(root);
//   while(arr.length){
//       len = arr.length;
//       res.push(arr[0].val);
//       for(let i = 0; i < len; i++){
//           temp = arr.shift();
//           if(temp.right) arr.push(temp.right);
//           if(temp.left) arr.push(temp.left);
//       }
//   }
//   return res;
// };

// function deepClone(data, hash = new WeakMap()) {
//   if(data === null) return null
//   if(typeof data !== 'object'){
//     return data
//   }
//   if(hash.has(data)) return hash.get(data) // 利用hash表处理循环引用

//   let newData
//   if (isType(data, 'Array')) { // 处理数组复制
//     newData = []
//   } else if(isType(data, 'RegExp')){ // 处理正则表达式
//     newData = new RegExp(data.source, getRegExpFlag(data))
//   } else if(isType(data, 'Date')) { // 处理时间对象
//     newData = new Date(data.getTime())
//   } else { // 处理对象复制，并保留其原型
//     let prototype = Object.getPrototypeOf(data)
//     newData = Object.create(prototype)
//   }

//   hash.set(data, newData)

//   for(let i in data){
//     if(data.hasOwnProperty(i)){
//       newData[i] = deepClone(data[i], hash)
//     }
//   }
//   return newData
// }

// function isType(data, type){
//   return Object.prototype.toString.call(data) === `[object ${type}]`
// }

// function getRegExpFlag(data) {
//   let flag = ''
//   if(data.global) flag += 'g'
//   if(data.ignoreCase) flag += 'i'
//   if(data.multiline) flag += 'm'
//   return flag
// }

// const fn = function(obj){
//   console.log(1);

//   if(obj instanceof Date) return new Date(obj.getTime());
//   if(typeof obj == 'function') return obj;

//   let res = Array.isArray(obj)?[]:{};
//   if(typeof obj !== "object") return obj;
//   for(let i in obj){
//     if(obj.hasOwnProperty(i)){
//       if(typeof obj[i]=='object'){
//         res[i] = fn(obj[i])
//       } else{
//         res[i] = obj[i]
//       }
//     }
//   }

//   return res;
// }

// let time = new Date(123);

// console.log(fn(function(){}))
// for(let i = 1; i <= 26; i++){
//     console.log(String.fromCharCode(i+64).charCodeAt())
// }

// const levelOrder = function(root) {
//   if(!root) return [];
//   let queue = [],
//       res = [],
//       level = 0;
  
//   queue.push(root);
  
//   let temp;
//   while(queue.length) {
//       res.push([]);
//       let size = queue.length;
//       while(size --) {
//           let front = queue.shift();
//           res[level].push(front.val);
//           if(front.left) queue.push(front.left);
//           if(front.right) queue.push(front.right);
//       }        
//       level++;
//   }
//   return res;
// };


// const fn = function(n){
//   let sum = fn(n - 1) + fn(n - 2);
//   if (n<=1) return n;
// }
// console.log(fn(10))

// function DistanceToHigher(height) {
//     let temp = [],
//         res = [0];
//     for(let i = 1; i < height.length; i++){
//       temp = height.slice(0,i);
//       temp.reverse();
//       for(let j = 0; j < temp.length;j++){
//         if(temp[j]>height[i]){
//           res.push(j+1);
//           break;
//         }
//         if(j==temp.length-1)  res.push(0);
//       }
//     }
//     return res;
// }

// DistanceToHigher([175,174,179,163,167,177])

// const fn = function(arr){
//   let temp = [],
//       res = [];
//   for(let i = 1; i < arr.length; i++){
//     let num = 0;
//     temp = arr.slice(0,i);
//     for(let j = 0; j < temp.length;j++){
//       if(temp[j]>arr[i]){
//         num++;
//       }
//     }
//     if(num==1) res.push(i);
//   }
//   return res.join(' ');
// }

// fn([1,22,22,33,22,12,45,44,5])

// const fn = function(arr){
//   let res = [],
//       // arr1为豹子
//       arr1 = [],
//       // arr2为顺子
//       arr2 = [];
//   for(let i = 0; i < arr.length; i++){
//     let temp = arr[i]+'',
//         //顺子 
//         num = 1,
//         resNum = 0,
//         // 豹子
//         num1 = 1,
//         resNum1 = 0;
//     for(let j = 4; j < temp.length; j++){
//       // 顺子检查
//       if(parseInt(temp[j-1]) + 1 == parseInt(temp[j])){
//         num++;
//       } else{
//         resNum = num>resNum?num:resNum;
//       }
//       // 豹子检查
//       if(temp[j-1] == temp[j]){
//         num1++;
//       } else{
//         resNum1 = num1>resNum1?num1:resNum1;
//       }
//     }
//     if(resNum>resNum1){
//       if(resNum>=3) arr1.push({arr:temp,num:resNum})
//     } else{
//       if(resNum1>=3) arr2.push({arr:temp,num:resNum1})
//     }
//   }

//   arr1.sort((a,b)=>b.num-a.num);
//   arr2.sort((a,b)=>b.num-a.num);
//   let pre = null,
//       next = null;
//   while(arr1.length>0||arr2.length>0){
//       pre = arr1.shift()||{arr:[],num:0};
//       next = arr2.shift()||{arr:[],num:0};
//       if(pre.num>next.num){
//         if(pre.num==0) break;
//         res.push(pre.arr);
//         arr2.unshift(next);
//       } else{
//         if(next.num==0) break;
//         res.push(next.arr);
//         arr1.unshift(pre);
//       }
//   }
//   if(res.length>0){
//     console.log(res.join(','));
//   } else {
//     console.log(null);
//   }
// }

// fn([15166667234,15188887234])

// var lastRemaining = function (n, m) {
//   let ans = 0;
//   for (let i = 2; i <= n; i++) {
//     ans = (ans + m) % i;
//   }
//   return ans;
// };

// lastRemaining(5,3)

// const Queue = function(){
//   this.arr = [];
//   this.obj = {
//     this.arr = [];
//   };
//   this.task = function(timer,fn){
//     this.arr.push({timer:timer,fn:fn})
//     return this.obj
//   };
//   this.obj.start = function(){
//     let that = this;
//     console.log()
//     // for(let i = 0; i < this.arr.length; i++){
//     //   setTimeout(arr[i].fn,arr[i].timer)
//     // }
//   };
// }

// console.log(new Queue().task(1000, () => { 
//   console.log(1);
// }).start())

// const fn = function(N){
//   let pre = 1,
//       i = 4,
//       next = 1;
//   while(N>=i){
//     let temp = next;
//       next = pre + next;
//       pre = temp;
//       i++
//   }
//   return pre+next;
// }

// console.log(fn(100))


// function func1(cb){ 
//   setTimeout(function(){
//     console.log(1);
//     cb();
//   }, 400)   
// }  

// function func2(cb){
//   setTimeout(function(){
//     console.log(2)
//     cb();
//   }, 300)
// }

// function func3(cb){
//   setTimeout(function(){
//     console.log(3)
//     cb();
//   }, 10)   
// }

// function queue(list, count){
//   let arr = [];
//   let cb = function(){
//     queue(list,count)
//   };
//   for(let i = 0; i < count; i++) {
//     if(!list.length) break;
//       arr.push(list.shift())
//     }
//   for(let i = 0; i < arr.length; i++) {
//     arr[i](cb)
//   }
// }

// queue([func1, func2, func3], 2)

// var arr = document.getElementsByClassName('a');
// var tempArr = []
// for(var i = 0; i < arr.length; i++){
//    tempArr.push(arr[i].getAttribute('aa'));
// }
// console.log(tempArr)

// console.log(window.a,a);
// var a = 0;
// console.log(window.a,a);
// if(true){
//   console.log(window.a,a);
//   a=1;
//   console.log(window.a,a);
//   function a(){};
//   console.log(window.a,a);
//   a=21;
//   console.log(window.a,a);
// }

// console.log(a)


/*
* @param {number[]} nums
* @param {number} k
* @return {number}
*/

// var numberOfSubarrays = function(nums, k) {
//  let len = nums.length,
//      oddArr = []                    // 存储奇数 索引

//  for(let i = 0; i < len; i++){   // 找出所有奇数的索引
//    if(nums[i] % 2 === 1){
//      oddArr.push(i)
//    }
//  }

//  if(oddArr.length < k) return 0                 // 当奇数的个数小于k时 直接返回, 其实不用这段也可以,下面根本不会进循环
 
//  let total = 0                               // 接下来就是找出k位奇数两边有多少个偶数了, 计总数
//  for(let i = 0; i <= oddArr.length - k; i++){   // 循环奇数索引数组, 找出左右两边偶数
   
//   let left = 0, right = 0                                   // 用来统计左右两边偶数
//   let left_index = oddArr[i], right_index = oddArr[i + k - 1]     // 开始位置
   
//    while(left_index > 0 && nums[left_index - 1] % 2 === 0){  // 往左找到不是偶数的为止
//      left_index--
//      left++
//    }
   
//    while(right_index < len && nums[right_index + 1] % 2 === 0){ // 往右找到不是偶数的为止
//      right++
//      right_index++
//    }
   
//    total += (left + 1) * (right + 1)
//  }
//  return total
// };

// let waysToChange = (n)=> {
//   let dp = new Array(n+1).fill(1)
//   let coins = [1,5,10,25];

//   for(let i=1; i<4; i++){
//       for(let j=1; j<=n; j++){
//           if(j-coins[i]>=0){
//               dp[j] = (dp[j]+dp[j-coins[i]]) % (1e9+7)
//           } 
//       }
//   }
//   return dp[n]
// };

// let waysToChange = (n)=>{
//   let arr = new Array(n+1).fill(0),
//       dp= new Array(4).fill(arr),
//       coins= [1,5,10,25];

//   for(let i=0;i<=n;i++) dp[0][i]=1;
//   for(let i=0;i<4;i++) dp[i][0]=1;
      
//   for(let i=1;i<4;i++){
//       for(let j=1;j<=n;j++){
//           if(j>=coins[i]){
//             dp[i][j]=(dp[i-1][j]+dp[i][j-coins[i]])%1000000007;
//           } else {
//             dp[i][j]=dp[i-1][j];
//           }
//       }
//   }
//   return dp[3][n];
// }

// console.log(waysToChange(100));


/**
 * @param {string} astr
 * @return {boolean}
 */
// var isUnique = function(astr) {
//   let pre = 0,
//       next = 1;
//   for(let i = 0; i < astr.length-1; i++){
//       pre = i;
//       next = pre+1;
//       while(next<astr.length){
//           if(astr[next]===astr[pre]) return false
//           next++
//       }
//   }
//   return true
// };

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// var CheckPermutation = function(s1, s2) {
//   return s1.split('').sort().join('') == s2.split('').sort().join('')
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//   let resArr = [];
//   const fn = (arr,temp)=>{
//     if(arr.length==0){
//       resArr.push(temp);
//       return
//     }
//     arr.forEach((key,index)=>{
//       temp.push(key);
//       fn([...arr.slice(0,index),...arr.slice(index+1)],[...temp])
//       temp.pop(key);
//     })
//   }

//   fn(nums,[])
//   return resArr;
// };

// console.log(permute([1,2,3]))

/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
  // const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  //       roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // let res = "";
  // for (let i = 0; i < nums.length; i++) {
  //     while (num >= nums[i]) {
  //         num -= nums[i];
  //         res += roman[i];
  //     }
  // }
  // return res;
// };

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//   let arr = [],
//       // 判断反转，true为从上到下，否则从下到上
//       flag = true,
//       row = 0;
//       S = s.split('');
//   if(numRows==1) return s;
//   for(let i = 0; i < numRows; i++){
//     arr.push([]);
//   }

//   while(S.length>0){

//       if(row==numRows){
//         row = 0;
//         flag=!flag;
//       }
//       if(flag){
//           arr[row].push(S.shift())
//       } else{
//           if(row>0&&row<numRows-1){
//             arr[numRows-1-row].push(S.shift())
//           } else{
//             arr[numRows-1-row].push('');
//           }
//       }

//       row++;
//   }
//   return arr.map(k=>k.join('')).join('')
// };


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// let isMatch = function (s, p) {
//   let dp = Array(s.length + 1);

//   for (let i = 0; i < dp.length; i++) {
//       dp[i] = Array(p.length + 1).fill(false)
//   }
  
//   dp[0][0] = true;

//   for (let i = 1; i < p.length; i++) {
//       if (p.charAt(i) === "*") {
//           dp[0][i + 1] = dp[0][i - 1]
//       }
//   }

//   for (let i = 0; i < s.length; i++) {
//       for (let j = 0; j < p.length; j++) {
//           if (p.charAt(j) === '.') {
//               dp[i + 1][j + 1] = dp[i][j]
//           }

//           if (p.charAt(j) === s.charAt(i)) {
//               dp[i + 1][j + 1] = dp[i][j]
//           }

//           if (p.charAt(j) === '*') {
//               if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1) !== '.') {
//                   dp[i + 1][j + 1] = dp[i + 1][j - 1]
//               } else {
//                   dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1])
//               }
//           }
//       }
//   }
//   return dp[s.length][p.length]
// };


/**
 * @param {number[]} nums
 * @return {number}
 */
// var findLengthOfLCIS = function(nums) {
//     if(nums.length==0) return 0;
//     let res = 1,
//         temp = 1;
//    for(let i = 0; i < nums.length-1; i++){
//         if(nums[i]<nums[i+1]){
//             temp++;
//         } else {
//             res = Math.max(res,temp);
//             temp = 1;
//         }
//     }
//     res = Math.max(res,temp);
//     return res;
// };

// var longestConsecutive = function(nums) {
//     if(nums.length==0) return 0;
//     let res = 1,
//         temp = 1;

//     nums.sort((a,b)=>a-b);
//     console.log(nums)
//     for(let i = 0; i < nums.length-1; i++){
//         if(nums[i]+1==nums[i+1]){
//             temp++;
//         } else if(nums[i]==nums[i+1]){
//             continue;
//         } else {
//             res = Math.max(res,temp);
//             temp = 1;
//         }
//     }

//     res = Math.max(res,temp);
//     return res;
// };

// console.log(longestConsecutive([1,2,0,1]))


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//   let left = 0;
//  let right = nums.length - 1;
//  while (left <= right) {
//      let mid = left + Math.floor((right - left) / 2)
//      if (target === nums[mid]) {
//          return mid;
//      }
//      // 目标值在左升序区间逻辑
//      if (nums[left] <= nums[mid]) {
//          // 位于区间内，从右逼近
//          if (target >= nums[left] && target <= nums[mid]) {
//              right = mid - 1;
//          } else {
//              // 不位于区间内，从左逼近
//              left = mid + 1;
//          }
//      } else { // 目标值在右升序区间逻辑
//          // 位于区间内，从左逼近
//          if (target >= nums[mid] && target <= nums[right]) {
//              left = mid + 1
//          } else {
//              // 不位于区间内，从右逼近
//              right = mid - 1;
//          }
//      }
//  }
//  return -1;
// };


/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var singleNumbers = function(nums) {
//     let a = 0;
//     let b = 0;
//     let c = 0;
//     nums.forEach((item) => {
//     c ^= item;
//     });
//     let mark = 1;             // mark就是分组凭据
//     console.log(mark&c)
//     while((mark & c) === 0) { // 一直到找到第一个1为止 
//         mark <<= 1;
//     }
//     console.log(mark)
//     nums.forEach((item) => {
//     if ((mark & item) === 0) { // 分组
//         a ^= item
//     } else {
//         b ^= item;
//     }
//     });
//     return [a, b];
// };

// singleNumbers([3,4,2,3])

// /**
//  * @param {string} S
//  * @param {number} length
//  * @return {string}
//  */
// var replaceSpaces = function(S, length) {
//   return S.split('').map(k=>{
//       if(k==' '){
//           return '%20';
//       } else{
//           return k;
//       }
//   }).slice(0,length).join('');
// };

// /**
//  * @param {string} S
//  * @param {number} length
//  * @return {string}
//  */
// var replaceSpaces = function(S, length) {
//   return S.slice(0,length).replace(/[ ]/g,'%20');
// };


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var canPermutePalindrome = function(s) {
//   if(s.length==1) return true;

//   let arr = s.split('').sort();
//   let point = 0,
//       sum = 0;
//   while(point<s.length-1){
//       if(arr[point]==arr[point+1]){
//           point = point + 2;
//       } else{
//           point++;
//           sum++
//       }
//   }
//   if(point!==s.length) sum++
//   return sum<=1
// };

// console.log(canPermutePalindrome('asa'))

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var canPermutePalindrome = function(s) {
//   if(s.length==1) return true;
//   let map = new Map();
//   for(let i = 0; i < s.length; i++){
//       if(map.has(s[i])){
//           map.delete(s[i])
//       } else{
//           map.set(s[i])
//       }
//   }
//   return map.size<=1
// };

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var subarraySum = function(nums, k) {
//   //当刚刚相减为0的时候
//   let map = new Map([[0,1]]),
//       sum = 0,
//       res = 0;
//   nums.forEach(item=>{
//       sum += item;
//       if(map.has(sum-k)) res+=map.get(sum-k);
//       if(map.has(sum)){
//           map.set(sum,map.get(sum)+1);
//       } else {
//           map.set(sum,1);
//       }
//   })
//   return res;
// };

// console.log(subarraySum([1,2,3],2))


// function Foo(property_num,element_num) {
//   //添加可索引属性
//   for (let i = 0; i < element_num; i++) {
//       this[i] = `e${i}`
//   }
//   //添加常规属性
//   for (let i = 0; i < property_num; i++) {
//       let ppt = `p${i}`
//       this[ppt] = ppt
//   }
// }
// var bar = new Foo(20,0)

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxLength = function(nums) {
//   let map = new Map([[0,-1]]),
//       max = 0, 
//       sum = 0;      
//   nums.forEach((k,i)=>{
//     sum = sum + (k == 1 ? 1 : -1);
//     if (map.has(sum)) {
//       max = Math.max(max, i - map.get(sum));
//     } else {
//       map.set(sum, i);
//     }
//   })
//   return max;
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   let map = new Map();
//    for(let i = 0; i < nums.length;i++){
//        if(map.has(target-nums[i])){
//            return [map.get(target-nums[i]),i]
//        } else{
//            map.set(nums[i],i)
//        }
//    }
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   nums.sort((a,b)=>a-b);
//   let left = 0,
//       right = nums.length-1,
//       map = new Map(),
//       sum = 0,
//       res = [];
//   for(let i = 0; i < nums.length-2; i++){
      // 判断是否相等
//       if(map.has(nums[i])) continue;
//       left = i+1;
//       right = nums.length-1;
//       while(left<right){
//           sum = nums[i] + nums[left] + nums[right];
//           if(sum==0){
//               res.push([nums[i],nums[left],nums[right]]);
//               left++;
//               right--;
//               //判断现在与之前是否相等
//               while(nums[left]==nums[left-1]) left++;
//               while(nums[right]==nums[right+1]) right--;
//           } else if(sum<0){
//               left++
//           } else{
//               right--;
//           }
//       }
//       map.set(nums[i]);
//   }
//   return res;
// };


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */
// var fourSum = function(nums, target) {
//   nums.sort((a,b)=>a-b);
//   let res = [],
//       left = 0,
//       right = nums.length-1,
//       sum = 0;

//   for(let i = 0; i < nums.length-3; i++){
//     while(nums[i]==nums[i-1]&&i!==0) i++;
//       for(let j = i+1; j < nums.length-2; j++){
//           while(nums[j]==nums[j-1]&&j!==i+1) j++;
//           left = j+1;
//           right = nums.length-1;
//           while(left<right){
//               sum = nums[i]+nums[j]+nums[left]+nums[right];
//               if(sum==target){
//                   res.push([nums[i],nums[j],nums[left],nums[right]]);
//                   right--;
//                   left++;
//                   while(nums[right]==nums[right+1]) right--;
//                   while(nums[left]==nums[left-1]) left++;
//               } else if(target<sum){
//                   right--;
//               } else{
//                   left++;
//               }
//           }
//       }
//   }

//   return res
// };

// // console.log(fourSum([1,0,-1,0,-2,2],0))


// /**
//  * @param {number[][]} wall
//  * @return {number}
//  */
// var leastBricks = function (wall) {
//     var map = new Map(), res = 0, sum = 0;
//     for(let i = 0; i < wall.length; i++) {
//         for(let j = 0; j < wall[i].length-1; j++){
//             sum += wall[i][j];
//             if (map.has(sum)) {
//                 map.set(sum, map.get(sum) + 1);
//             }
//             else {
//                 map.set(sum, 1);
//             }
//         }
//         sum = 0;
//     };
    
//     map.forEach(function (v) { 
//         return res = Math.max(res, v); 
//     });
//     return wall.length - res;
// };

// leastBricks([
//     [1,2,2,1],
//     [3,1,2],
//     [1,3,2],
//     [2,4],
//     [3,1,2],
//     [1,3,1,1]])

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var trailingZeroes = function(n) {
//     let res = 0;
//     while(n>=5){
//         n = Math.floor(n/5);
//         res+= n;
//     }
//     return res;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//     let res = nums[0],
//         sum = 0;
//     nums.forEach(k=>{
//         if(k+sum>k){
//             sum += k;
//         } else{
//             sum = k;
//         }
//         res = Math.max(res,sum);
//     })
//     return res;
// };


// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//     const map = {
//         I : 1,
//         IV: 4,
//         V: 5,
//         IX: 9,
//         X: 10,
//         XL: 40,
//         L: 50,
//         XC: 90,
//         C: 100,
//         CD: 400,
//         D: 500,
//         CM: 900,
//         M: 1000
//     };
//     let ans = 0,
//         len = s.length,
//         i = 0;
//     while(i < len) {
//         if(i == len-1) {
//             ans += map[s[i]];
//             break;
//         }
//         if(map[s[i]+s[i+1]]) {
//             ans += map[s[i]+s[i+1]];
//             i += 2;
//         } else {
//             ans += map[s[i]];
//             i++;
//         }
//     }
//     return ans;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums) {
//     let left = 0,
//         right = 1,
//         steps = 0,
//         max = 0;

//     while (right < nums.length) {
//         max = 0;
//         for (let i = left; i < right; i++) {
//             max = Math.max(max,nums[i]+i);
//         }

//         left = right;
//         right = max + 1;
//         steps++;
//     }
//     return steps;
// }


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 
// var isValidBST = function(root,leftVal=-Infinity,rightVal=Infinity) {  
//     if(!root) return true;
//     if(leftVal>=root.val||rightVal<=root.val) return false;
//     return isValidBST(root.right,root.val,rightVal)&&isValidBST(root.left,leftVal,root.val);
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     let arr = [];
    
//     const fn = function(node){
//         if(!node) return;
//         fn(node.left);
//         arr.push(node.val);
//         fn(node.right);
//     }
//     fn(root);

//     for(let i = 0; i < arr.length-1;i++){
//         if(arr[i] >= arr[i+1]) return false;
//     }
//     return true;
// };


// /**
//  * @param {number[]} days
//  * @param {number[]} costs
//  * @return {number}
//  */
// var mincostTickets = function(days, costs) {
//     let lastDay = days[days.length-1], 
//         dp = new Array(lastDay+1).fill(0);
        
//     for(let i = 1; i < dp.length; i++) {
//       if(days.indexOf(i)==-1) { 
//           dp[i] = dp[i-1]; 
//           continue;
//       }

//       if(i>=30){
//         dp[i] = Math.min(dp[i-1] + costs[0],dp[i-7] + costs[1],dp[i-30] + costs[2]);
//       } else if(30>i&&i>=7){
//         dp[i] = Math.min(dp[i-1] + costs[0],dp[i-7] + costs[1],costs[2]);
//       } else{
//         dp[i] = Math.min(dp[i-1] + costs[0],costs[1],costs[2]);
//       }
//     } 

//     return dp[lastDay]
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} s
//  * @param {TreeNode} t
//  * @return {boolean}
//  */
// var isSubtree = function(s, t) {
//     let flag = false;

//     const fn1 = (node1,node2)=>{
//         if(!node1||!node2){
//             if(node1!==node2){
//                 return false;
//             } 
//             return true;
//         }
//         if(node1.val!==node2.val) return false;
//         return fn1(node1.left,node2.left)&&fn1(node1.right,node2.right);
//     }

//     const fn = (node)=>{
//         if(flag||!node) return

//         if(node.val==t.val){
//             if(fn1(node,t)) flag =true
//         }
//         fn(node.left,);
//         fn(node.right);
//     }

//     fn(s);    
//     return flag
// };

// var mySqrt = function(x) {
//     if (x < 2) {
//         return x;
//     }
//     let left = 2;
//     let right = x;
//     while (left <= right) {
//         let mid = left + Math.floor((right - left) / 2);
//         let num = mid * mid;
//         if (num > x) {
//             right = mid - 1;
//         }
//         else if (num < x) {
//             left = mid + 1;
//         }
//         else {
//             return mid;
//         }
//     }
//     return right;
// };

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// var checkSubarraySum = function(nums, k) {
//     if(nums.length<2) return false;
    
//     k = Math.abs(k);
//     if(k==1) return true
    
//     let map = new Map(),
//         sum = 0,
//         temp = sum;

//     for(let i = 0; i < nums.length; i++){
//         sum += nums[i];
//         temp = sum;
        
//         if(k!=0){
//             if(sum % k == 0&&i>0) return true;
//             temp = sum % k;    
//         }

//         if(!map.has(temp)){
//             map.set(temp,i);
//         } else if(map.get(temp)+2 <= i){
//             return true;
//         }
//     }

//     // 连续0；
//     for(let i = 1;i < nums.length;i++){
//         if(nums[i-1] == 0 && nums[i] == 0) return true;
//     }

//     return false;
// };

/* 完成一个函数fn，它接受多个函数作为参数，然后fn返回的也是一个函数，达到以下的效果：

// const operate = fn(div2, mul3, add1, add1)
// operate(0) // => 相当于 div2(mul3(add1(add1(0))))
// operate(2) // => 相当于 div2(mul3(add1(add1(2))))

// 其中
// const add1 = (x) => x + 1
// const mul3 = (x) => x * 3
// const div2 = (x) => x / 2

*/
const add1 = (x) => x + 1
const mul3 = (x) => x * 3
const div2 = (x) => x / 2

// const fn = function(){
//     return [...arguments].reduce((a, b) => (...args) => a(b(...args)))
// }

// const fn = (...arg) => {
//   return function(x) {
//     if (arg.length <= 1) return arg[0](x)
    
//     const currentFn = arg.shift();

//     return currentFn(fn(...arg)(x))
//   }
// };

// const operate = fn(div2, mul3, add1, add1)

// console.log(operate(2)) // => 相当于 div2(mul3(add1(add1(2))))

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//   if (root == null || root == p || root == q) {
//       return root;
//   }
//   let left = lowestCommonAncestor(root.left, p, q);
//   let right = lowestCommonAncestor(root.right, p, q);
//   if (left != null && right != null) {
//       return root;
//   } else if (left != null) {
//       return left;
//   } else if (right != null) {
//       return right;
//   }
//   return null;
// };

/**
 * @param {number} n
 * @return {string}
 */
// var countAndSay = function(n) {
//   let res = '1',
//       temp = '';
//       counter = 1;
//   while(counter<n){
//       let num = 1;
//       for(let i = 0; i < res.length; i++){
//           if(i<res.length-1&&res[i]==res[i+1]){
//               num++
//               continue;
//           } else{
//               temp += `${num}`+res[i];
//               num=1;
//           }
//       }
//       counter++;
//       res = temp;
//       temp = '';
//   }
//   return res;
// };


/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//   var result = [];

//   const fn = (left,right,str)=>{
//       if(left == n && right == n){
//           result.push(str)
//           return;
//       }
      
//       if(left < n){
//           fn(left+1,right,str+'(');
//       }
//       if(left > right){
//           fn(left,right+1,str+')');
//       }
//   }

//   fn(0,0,'');
//   return result;
// };

// generateParenthesis(3)

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//   if(x==0) return 0;
//   if(n==0) return 1;

//   let res = 1;
  
//   const fn = (num,pow)=>{
//       if(pow==1) return num;
//       if(pow%2==0){
//           return fn(num*num,pow/2);
//       } else{
//           return fn(num*num,(pow-1)/2)*num;
//       }
//   }

//   res = fn(x,Math.abs(n))
  
//   if(n<0) res = 1/res;

//   return res;
// };

// myPow(-1.00000,2)


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//   if (p === "*" || s === p) return true;
//   let dp = Array.from(Array(s.length + 1), ()=> Array(p.length + 1).fill(false));
  
//   dp[0][0] = true;
  
//   for (let i  = 1; i <= p.length; i++) {
//       if (!dp[0][i - 1]) break;
//       if (p[i - 1] === '*') dp[0][i] = true;
//   }

//   for (let i = 1; i <= s.length; i++) {
//       for (let j = 1; j <= p.length; j++) {
//           if (s[i - 1] === p[j - 1] || p[j - 1] === "?") {
//               dp[i][j] = dp[i - 1][j - 1];
//           } else if (p[j - 1] === "*") {
//               dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
//           }
//       }
//   }
//   return dp[s.length][p.length];
// };

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function (s, p) {
//   // 字符串s的起点位置
//   let i = 0;
//   // 字符串p的起点位置
//   let j = 0;
//   // s的当前位置
//   let s_match = 0;
//   // *的位置
//   let startIdx = -1;

//   let n = s.length;
//   let m = p.length;

//   while (i < n) {
//     if (j < m && (p[j] == "?" || s[i] == p[j])) {
//       i++;
//       j++;
//     } else if (j < m && p[j] == "*") {
//       startIdx = j;
//       s_match = i;
//       j++;
//     } else if (startIdx != -1) {
//       j = startIdx + 1;
//       s_match++;
//       i = s_match;
//     } else {
//       return false;
//     }
//   }
  
//   while (j < m && p[j] == "*") {
//     j++;
//   }

//   return j == m;
// };

/**
 * initialize your data structure here.
 */
// var MinStack = function() {
//     this.arr = [];
//     this.min = 0;
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//     this.arr.push(x);
//     for(let i = 0; i < this.arr.length; i++){
//         if(this.arr[this.min]>this.arr[i]) this.min = i;
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     this.arr.pop();
//     if(this.min>=this.arr.length-1){
//         this.min = 0;
//         for(let i = 0; i < this.arr.length; i++){
//            if(this.arr[this.min]>this.arr[i]) this.min = i;
//         }
//     }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.arr[this.arr.length-1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.arr[this.min]
// };

// /**
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(x)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */


/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function(digits) {
//   if(digits.length==0) return [];

//   let temp = [],
//       map = [[],[],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];

//   for(let i = 0; i < digits.length; i++){
//       temp.push(map[digits[i]])
//   }

//   if(temp.length==1) return temp[0]
  
//   let lists = [...temp[0]],
//       len = lists.length,
//       str = '';
//   for(let i = 1; i < temp.length; i++){
//       len = lists.length;
//       for(let k = 0; k < len; k++){
//           str = lists.shift();
//           for(let j = 0; j < temp[i].length; j++){
//               lists.push(str+temp[i][j]);
//           }
//       }
//   }       
  
//   return lists;
// };

// console.log(letterCombinations('22'));


// const obj1 = {key: "this is key"};
// const obj2 = {value: "this is value"};

// const fn = (obj)=>{
//   console.log(obj?.key||"no key",obj?.value||"no value");
// }

// fn(obj1);
// fn(obj2);

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//   const res = []
//   if (!root) return res;

//   const fn = function(root, level, res) {
//       if(res.length === level) res[level] = [];
      
//       res[level].push(root.val)
//       if (root.left) fn(root.left, level + 1, res)
//       if (root.right) fn(root.right, level + 1, res)
//   }

//   fn(root, 0, res);

//   return res
// };


/**
 * @param {number} N
 * @return {number}
 */
// var numDupDigitsAtMostN = function(N) {
//   if(N<11) return 0;
//   let res = 0,
//       arr = N.toString().split('');

//   for(let i = 0; i < arr.length; i++){
//       let sum = 1,
//           counte = arr.length - i -1;
      
//       if(arr[i]==0) continue;

//       while(counte>0){
//           sum *= (10-counte);
//           counte--;
//       }
//       console.log(sum);
      
//       sum *= arr[i];
//       res += sum;
//       sum = 1;
//   }

//   return N - res;
// };

// numDupDigitsAtMostN(1000)
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// var maxSubArray = function(nums) {
//   let res = nums[0],
//       sum = 0;
//   nums.forEach(k=>{
//       if(k+sum>k){
//           sum += k;
//       } else{
//           sum = k;
//       }
//       res = Math.max(res,sum);
//   })
//   return res;
// };

// var kConcatenationMaxSum = function(arr, k) {
//   if(arr.length==0) return 0;
//   let modnum = Math.pow(10,9) + 7;
  
//   if(k==1){
//       return  maxSubArray([...arr])%modnum ;
//   } 
//   if(k==2){
//       return  maxSubArray([...arr,...arr])%modnum ;
//   } 
//   let time1 =  maxSubArray(arr);
//   let time2 =  maxSubArray([...arr,...arr]);
//   let time3 =  maxSubArray([...arr,...arr,...arr]);

//   console.log(time1,time2,time3);

//   if(time1<=0) return 0;

//   if(time1 >= time2){
//       return time1%modnum ;
//   }

//   if(time3>time2){
//       let less = time2 - time1;
//       return (time1 + less * (k-1) )%modnum ;
//   }else{
//       return time2%modnum;
//   }
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function(head, k) {
//     if(!head||!head.next) return head;

//     let current = head,
//         next = current,
//         pre = null,
//         flag = true,
//         temp = null,
//         len = 0,
//         num = k;

//     while(current!==null){
//         len++;
//         current = current.next;
//     }

//     current = head;

//     while(next!==null){
//         if(len<k){
//             temp.next = current;
//             break;
//         }

//         while(num>0){
//             next = current.next;
//             current.next = pre;

//             pre = current;
//             if(num==k) temp = pre;
//             current = next;
//             next = current?current.next:null;
//             num--;
//             len--;
//         }

//         // 跳过第一次
//         if(!flag) temp.next = pre;
//         num = k;
//         // 第一次的节点
//         if(flag){
//             head = pre; 
//             flag = false;
//         }

//         pre = null;
//         next = current;
//     }    
    
//     return head;
// };

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// var findOrder = function(numCourses, prerequisites) {
//     // 入度表
//     let mapCount = new Map(),
//         //队列
//         queue = [],
//         // 结果数组
//         res = new Array(numCourses).fill(false);
        
//     for(let i = 0; i <prerequisites.length; i++){
//         let item = prerequisites[i];
//         if(mapCount.has(item[0])){
//             mapCount.set(item[0],mapCount.get(item[0])+1)
//         } else{
//             mapCount.set(item[0],1);
//         }
//     };

//     for(let i = 0; i < numCourses; i++){
//         if(!mapCount.has(i)){
//            // 放入入度为1的
//             queue.push(i)
//         }
//     }
        // 都有入度则为空
//     if(queue.length==0) return [];
    
//     let index = 0;

//     while(queue.length>0){
//         let start = queue.shift();
//         // 放入结果
//         res[index] = start;

//         // 使用start入度的减一，
//         for(let i = 0; i <prerequisites.length; i++){
//             let item = prerequisites[i];
//             if(item[1]==start){
//                 mapCount.set(item[0],mapCount.get(item[0])-1);
//                 if(mapCount.get(item[0])<=0) queue.push(item[0])
//             } 
//         }
//         index++;
//     }

//     if(res[numCourses-1]===false) return [];

//     return res;
// };

// console.log(findOrder(4,[[1,0],[2,0],[3,1],[3,2]]))

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     if(nums.length==1) return nums[0];

//     let res = 0,
//         max = 1,
//         min = 1,
//         temp = 0;
    
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] < 0){ 
//               tmp = max;
//               max = min;
//               min = tmp;
//         }
        
//         max = Math.max(max*nums[i], nums[i]);
//         min = Math.min(min*nums[i], nums[i]);

//         res = Math.max(res,max);
//     }

//     return res;
// };

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// function isPali(str, l, r) { // 辅助函数
//   while (l < r) { // 指针相遇 结束循环
//     if (str[l] !== str[r]) { // 一票否决
//       return false 
//     }
//     l++ // 指针挪动，相互逼近
//     r--
//   }
//   return true // 没有遇到不同，返回true
// }

// var validPalindrome = function(s) {
//   let start = 0,
//       end = s.length-1;
//   while(start<=end){
//       if(s[start]!==s[end]){
//           return isPali(s,start+1,end)||isPali(s,start,end-1)
//       }

//       start++;
//       end--;
//   }

//   return true;
// };

// console.log(validPalindrome("pidbliassaqozokmtgahluruufwbjdtayuhbxwoicviygilgzduudzgligyviciowxbhuyatdjbwfuurulhagtmkozoqassailbdip"));

// var findTheLongestSubstring = function(s) {
//     let state = new Array(32),
//      current = 0,
//      res = 0;

//     state[0] = -1;

//     for(let i = 0; i < s.length; i++) {
//       switch (s[i]) {
//         case 'a':
//           current^=1;
//           break;
//         case 'e':
//           current^=2;
//           break;
//         case 'i':
//           current^=4;
//           break;
//         case 'o':
//           current^=8;
//           break;
//         case 'u':
//           current^=16;
//           break;
//         default:
//           break;
//       }
//       if(state[current]) {
//         state[current] = i;
//       } else {
//         res = Math.max(res, i - state[current]);
//       }
//     }
//     return res
//   };

//   console.log(findTheLongestSubstring("leetcodeisgreat"));

/**
 * @param {string} s
 * @return {string}
 */
// const fn = function(s,left,right){
//   let L=left,
//       R=right;

//   while(L>=0 && R<s.length && s[R]==s[L]){
//       L--;
//       R++;
//   }

//   return R-L-1;
// }

// var longestPalindrome = function(s) {
//   if (!s || !s.trim()) return '';
//   if (s.length === 1) return s;
//   if (s.length === 2) return s[0] === s[1] ? s[0] + s[1] : s[1];
  
//   let start = 0,
//       end = 0,
//       cur = 0,
//       len1 = 0,
//       len2 = 0,
//       maxlen = 0;

//   while(cur < s.length){
//       len1=fn(s,cur,cur);
//       len2=fn(s,cur,cur+1);

//       if(len1>maxlen||len2>maxlen){
//           if(len1>len2){
//               maxlen = len1;
//               start= cur - Math.floor((maxlen)/2);
//               end= cur + Math.floor(maxlen/2);
//           } else{
//               maxlen = len2;
//               start= cur - Math.floor((maxlen)/2)+1;
//               end= cur + Math.floor(maxlen/2);
//           }
//       }
//     cur++;
//   }

//   return s.substring(start,end+1);
// };

// console.log(longestPalindrome("cacd"))

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function(preorder, inorder) {
//     if (inorder.length === 0) return null;

//     let node = new TreeNode(preorder[0]),
//         index = inorder.indexOf(preorder[0]);

//     node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
//     node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

//     return node;
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {number[]} preorder
//  * @param {number[]} inorder
//  * @return {TreeNode}
//  */
// var buildTree = function(preorder, inorder) {
//     if (!preorder.length || !inorder.length) return null;
    
//     let size = inorder.length;
//     const map = new Map();
//     let nodeIndex = 0;

//     for (let i = 0; i < size; i++) {
//         map.set(inorder[i], i);
//     }

//     var traversal = function (left, right) {
//         if (left === right) return null;
//         const nodeVal = preorder[nodeIndex];
//         const node = new TreeNode(nodeVal);
//         nodeIndex++;
//         const mid = map.get(nodeVal);
//         node.left = traversal(left, mid);
//         node.right = traversal(mid + 1, right);
//         return node;
//     };

//     return traversal(0, inorder.length);
// };

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// var divide = function(dividend, divisor) {
//     //判断符号
//         let symbol=(dividend>0&&divisor>0)||(dividend<0&&divisor<0)?1:-1;
//         //边界情况直接返回
//         if(dividend==Infinity&&divisor==1) return dividend;
//         if(dividend==Infinity&&divisor==-1) return -dividend;
//         if(dividend==-Infinity&&divisor==1) return -dividend;
//         if(dividend==-Infinity&&divisor==-1) return Infinity;

//         let a=Math.abs(dividend),b=Math.abs(divisor);
//         //记录结果
//         let result=0;
//         let i=0;
//         //temp用于保存最初始的b
//         let temp=b;
//         //当a恰好是2^n，b=2的时候是存在a=temp的，所以需要加上a==temp的情况
//         while(a>=b){
//             //左移，相当于b*2
//             b=b<<1;
//             //a<b情况说明到达临界点了
//             if(a<b){
//                 //计算result的值 2<<(i-1)等价与Math.pow(2,i),如果是i=0的情况说明Math.pow(2,0)就是1
//                result=result+(i>0?2<<(i-1):1); 
//                 //获取差值
//                a=a-(b>>1);
//                 //重新开始计算
//                b=temp;
//                i=0;
//             }else{
//                 //累计乘2的次数
//                 i++;
//             }
//         }
        
//     return symbol>0?result:-result;
// };

// var divide = function(dividend, divisor) {
//     let result = dividend / divisor
//     let sign = Math.sign(result);

//     let min = Math.pow(-2, 31);
//     let max = Math.pow(2, 31) - 1;

//     if (divisor !== 0 && result > min && result < max) {
//         return sign !== -1 ? Math.floor(result) : Math.floor(Math.abs(result)) * sign
//     } else {
//         return sign !== -1 ? max : min;
//     }
// };


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// var minWindow = function(s, t) {
//     let sleft = 0,
//         sright = 0,
//         start = Infinity,
//         min = Infinity,
//         slen = s.length,
//         tlen = t.length;

//     // 构建一个哈希表，用来查找当前元素是否在t当中;
//     let map = new Map(),
//         // 字符的种类，防止t当中有重复的字符；
//         chartypes = 0;

//     t.split('')
//         .forEach(key=>{
//             if(map.has(key)){
//                 map.set(key,map.get(key)+1);
//             } else{
//                 map.set(key,1);
//                 chartypes++;
//             }
//         });

//     while(sright<slen){
//         // 匹配到了
//         if(map.has(s[sright])) {
//             map.set(s[sright],map.get(s[sright])-1);
//             if(map.get(s[sright])==0) chartypes--;
//         }
        
//         // 匹配完全就开始缩小区间，移动左指针
//         while(chartypes==0){
//             if (sright-sleft+1 < min) { // 计算长度，和min比较
//                 min = sright - sleft + 1 // 更新min
//                 start = sleft // 更新最小子串的起点
//             }

//             if(map.has(s[sleft])){
//                 map.set(s[sleft],map.get(s[sleft])+1);
//                 if(map.get(s[sleft])>0) chartypes++;
//             }
//             sleft++;
//         }

//         // 移动右指针
//         sright++;
//     }
//     return s.substring(start,start+min);
// };

// console.log(minWindow("ADAOBECODEBANC","ABC"));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//     let head = new ListNode(0),
//         node = head,
//         sum = 0;

//     while(l1||l2){
//         sum += (l1&&l1.val) + (l2&&l2.val);

//         node.next = new ListNode(sum%10);
//         node = node.next;
//         sum = Math.floor(sum/10);

//         l1 = l1&&l1.next;
//         l2 = l2&&l2.next;
//     }

//     if(sum!==0) node.next = new ListNode(sum);

//     return head.next;
// };

/**
 * @param {number} n
 * @return {number}
 */
// var cuttingRope = function(n) {
//     let dp = new Array(n+1).fill(1);
    
//     for(let i = 2; i < n+1; i++){
//         for(let j = 1; j < i-1; j++){
//             dp[i] = Math.max(dp[i],Math.max(dp[i-j]*j,j*(i-j)));
//         }
//     }

//     return dp[n];
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//     if(root==null) return true;

//     let queue = [root, root];
    
//     while (queue.length > 0) {
//         let l = queue.shift();
//         let r = queue.shift();
        
//         if (l === null && r === null) continue;
//         if (l === null || r === null) return false;

//         if (l.val !== r.val) return false;

//         queue.push(l.left);
//         queue.push(r.right);
//         queue.push(l.right);
//         queue.push(r.left);
//     }

//     return true;
// };

// var isSymmetric = function(root) {
//     if (root === null) {
//         return true
//     }
//     return fn(root.left, root.right)
// };

// var fn = function(left, right) {
//     if (left === null || right === null) {
//         return left === right
//     }
//     if (left.val !== right.val) {
//         return false
//     }
//     return fn(left.left, right.right) && fn(left.right, right.left)
// }

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// // 判断最小数，undefined 忽略，最多只有一个为undefined
// function min(a,b) {
//     if(a === undefined) return b
//     if(b === undefined) return a
//     return Math.min(a,b)
// }
// // 判断最大数，undefined 忽略，最多只有一个为undefined
// function max(a,b) {
//     if(a === undefined) return b
//     if(b === undefined) return a
//     return Math.max(a,b)
// }

// var findMedianSortedArrays = function (nums1, nums2) {
//     // 短的数组作为nums1，可以减少二分的次数
//     if (nums1.length > nums2.length) {
//         let temp = nums1
//         nums1 = nums2
//         nums2 = temp
//     }

//     let len1 = nums1.length, len2 = nums2.length
//     // 两个数组取中间，因为存在奇数，所以nums1 默认floor， nums2 默认 ceil，以保证 左右两侧的数量差不大于1
//     let i = Math.floor(len1 / 2), j = Math.ceil(len2 / 2)
//     let beforeI = 0
    
//     while (true) {
//         // A[L] < B[R] B[L] < A[R] 此时数量相等，满足左侧均小于右侧
//         // 存在边界情况，即 两数组不相交，此时A[L]、A[R]、B[L]、B[R]可能不存在(即为undefined)，此时不做比较，直接取中间数
//         if (
//             (nums1[i - 1] === undefined || nums2[j] ===undefined || nums1[i - 1]<= nums2[j])
//             &&
//             (nums2[j - 1]===undefined ||  nums1[i] === undefined || nums2[j - 1]<= nums1[i])
//         ) {
//             let leftLen = i + j, rightLen = len1 + len2 - i - j;
//             // 左侧数量 === 右侧数量，取 左侧最大值 和 右侧最小值 平分
//             if (leftLen === rightLen) {
//                 return (max(nums1[i - 1], nums2[j - 1]) + min(nums2[j], nums1[i])) / 2
//             }
//             // 左侧数量 > 右侧数量，中位数为左侧最大值
//             if (leftLen - 1 === rightLen) return max(nums1[i - 1], nums2[j - 1]);
//             // 左侧数量 < 右侧数量，中位数为右侧最小值
//             if (leftLen + 1 === rightLen) return min(nums2[j], nums1[i])
//         } else if (nums1[i - 1] > nums2[j]) {
//             // A[L] > B[R], i 左移半 j 右移同样
//             let step = Math.max(Math.floor((i-beforeI) / 2), 1)
//             beforeI = i
//             i -= step
//             j += step
//             continue
//         } else if (nums2[j - 1] > nums1[i]) {
//             // B[L] > A[R], i 右移半 j 左移同样
//             let step = Math.max(Math.floor((i - beforeI) / 2), 1)
//             beforeI = i
//             i += step
//             j -= step
//             continue
//         }
//     }
// };

// console.log(findMedianSortedArrays([1,2],[-1,3]));

// class _LazyMan {
//     constructor(name) {
//       this.tasks = [() => {
//         console.log(`Hi! This is ${name}`);
//         this.next()
//     }];
//       // 如果不是异步就会导致tasks当中的任务还没有添加完全就结束了执行
//       setTimeout(()=>this.next(),0)
//     }
  
//     next() {      
//       const task = this.tasks.shift(); // 取第一个任务执行
//       task && task();
//     }
  
//     sleep(time) {
//       this._sleepWrapper(time, false);
//       return this;                     // 链式调用
//     }
  
//     sleepFirst(time) {
//       this._sleepWrapper(time, true);
//       return this;
//     }
  
//     _sleepWrapper(time, first) {
//       const task = () => {
//         setTimeout(() => {
//           console.log(`Wake up after ${time}`);
//           this.next();
//         }, time * 1000)
//       }
//       if (first) {
//         this.tasks.unshift(task);     // 放到任务队列顶部
//       } else {
//         this.tasks.push(task);        // 放到任务队列尾部
//       }
//     }
  
//     eat(name) {
//       const task = () => {
//         console.log(`Eat ${name}`);
//         this.next();
//       }
//       this.tasks.push(task);
//       return this;
//     }
//   }
  
// function LazyMan(name) {
//     return new _LazyMan(name);
// }


// LazyMan('Hank').sleep(1).eat('dinner')

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findDuplicate = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if((nums[i]^nums[j])===0) {
//                 return nums[j];
//             }
//         }
//     }
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findDuplicate = function(nums) {
//     let slow = 0, 
//         fast = 0;

//     while(1) {
//         slow = nums[slow] // 慢指针前进
//         fast = nums[nums[fast]] //快指针前进
//         if (slow === fast) break;
//     }
    
//     fast = 0;

//     while(1) {
//         fast = nums[fast]
//         slow = nums[slow]
//         if (fast === slow) break;
//     }

//     return slow
// };

// console.log(findDuplicate([1,3,4,2,2]))

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     let res = 0,
//         left = 0,
//         right = 0,
//         min = 0;

//     for(let index=1; index<height.length-1; index++){
//         left = 0;
//         right = 0;

//         for(let i = index-1; i>=0; i--){
//             left = Math.max(height[i],left);
//         }

//         for(let i=index+1; i<height.length; i++){
//             right = Math.max(height[i],right);
//         }

//         min = Math.min(left,right);

//         if(min > height[index]){
//             res += min-height[index] 
//         }
//     }

//     return res;
// };

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
// var hanota = function(A, B, C) {
//     let len = A.length;
//     if(len==0) return [];

//     const fn = function(N,FROM,MID,TO){
//         if(N==1){
//             TO.push(FROM.pop())
//             return;
//         }
//         fn(N-1,FROM,TO,MID);
//         TO.push(FROM.pop());
//         fn(N-1,MID,FROM,TO);
//     }

//     fn(len,A,B,C);

//     return C;
// };

// /**
//  * @param {number[]} g
//  * @param {number[]} s
//  * @return {number}
//  */
// var findContentChildren = function(g, s) {
//     g.sort((a,b)=>a-b);
//     s.sort((a,b)=>a-b);

//     let res = 0,
//         i = 0,
//         j = 0;

//     while (i < g.length && j < s.length){
//         if(s[j] >= g[i]){
//             res++;
//             i++;
//         }
//         j++;
//     }

//     return res;
// };

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// var subarraysDivByK = function(A, K) {
//     let map = new Map([[0,1]]),
//         res = 0,
//         sum = 0;
        
//         A.forEach((key)=>{
//             sum = (sum+key)%K;

//             if(sum<0) sum += K;

//             if(map.has(sum)){
//                 res += map.get(sum);
//             }

//             if(map.has(sum)){
//                 map.set(sum,map.get(sum)+1);
//             } else{
//                 map.set(sum,1);
//             }
//         })

//     return res;
// };

/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function(s) {
    
//     // num重复次数，str字符串
//     const fn = (str,num)=>{    
//         let temp = str;
//         console.log(str,num)
//         for(let i = 1; i < num; i++){
//             str += temp
//         }
//         return str;
//     }

//     for(let i = 0; i < s.length; i++){
//         // 是数字
//         if(s[i]=='['){
            
//             let end = i,
//                 start = i,
//                 count = 0;
            
//             // 找到str
//             while(1){
//                 if(s[end]=='['){
//                     count++;
//                 } else if(s[end]==']'){
//                     count--;
//                 }

//                 if(s[end]==']'&&count==0) break;
                
//                 end++;
//             }

//             // 找到num
//             while(1){
//                 if(isNaN(s[i-1])||i==0) break;
//                 i--;
//             }
            
//             console.log(s.slice(i,start));

//             s = s.slice(0,i) + fn(s.slice(start+1,end),s.slice(i,start)) + s.slice(end+1);
//         }
//     }

//     return s;
// };

// console.log(decodeString("s20[bc]"))

/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function(s) {
//     let reg = /([0-9]*)\[([a-zA-Z]*?)\]/g;
//     let count,
//         str;

//     while(s.match(reg)){
//       s = s.replace(reg,(...args)=>{
//         console.log(...args)
//         count = args[1];
//         str = ''
//         while(count){
//           str += args[2];
//           count --;
//         }
//         return str
//       })
//     }

//     return s;
// };

// console.log(decodeString("s20[bc]"))

/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     let len = nums.length,
//         dp = [];
//     if(len == 0) return 0;
//     if(len == 1) return nums[0];
//     if(len == 2) return Math.max(nums[0],nums[1]);
    
//     dp[0] = 0;
//     dp[1] = nums[0];
    
//     for(let i = 2; i <= len; i++){
//         dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1]);
//     }
    
//     return dp[len];
// }; 

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let max = -Infinity;

//     nums.reduce((total,cur,i)=>{
//         if( total > 0 ) total += cur;
//         else total = cur;
        
//         max = max > total?max:total;
//         return total;
//     },0)

//     return max;
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let max = 0,
//         min = Infinity;

//     for(let i = 0; i < prices.length; i++) {
//         if(prices[i] > min) {
//            max = Math.max(max,prices[i] - min)
//         } else{
//             min = prices[i]
//         }
//     }

//     return max
// };

/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//     // 往左往右找到边界
//     let max = heights[0],
//         left = 0,
//         right = 0,
//         width = 1;

//     for(let i = 0; i < heights.length; i++){
//         left = i;
//         right = i;

//         // 找左边
//         while(heights[i]<=heights[left]){
//             left--;
//         }
//         // 找右边
//         while(heights[i]<=heights[right]){
//             right++;
//         }

//         width = right-left-1;

//         console.log(width);
//         max = Math.max(max, heights[i]*width);

//         width = 1;
//     }

//     return max;
// };

// console.log(largestRectangleArea([3,1]))


/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//     const stack = [];
//     heights.unshift(0);
//     heights.push(0);
//     let res = 0;
//     for (let i=0;i<heights.length;i++) {
//         while (stack.length > 0 && heights[i] < heights[stack[stack.length-1]]) {
//             let cur = stack.pop();
//             let top = stack[stack.length-1];
//             res = Math.max(res, heights[cur] * (i - top -1))
//         }
//         stack.push(i);
//     }
//     return res;
// };


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function(root) {
//     if(root==null) return true;

//     let queue = [root, root];
    
//     while (queue.length > 0) {
//         let l = queue.shift();
//         let r = queue.shift();
        
//         if (l === null && r === null) continue;
//         if (l === null || r === null) return false;

//         if (l.val !== r.val) return false;

//         queue.push(l.left);
//         queue.push(r.right);
//         queue.push(l.right);
//         queue.push(r.left);
//     }

//     return true;
// };

// var isSymmetric = function(root) {
//     if (root === null) {
//         return true
//     }
//     return fn(root.left, root.right)
// };

// var fn = function(left, right) {
//     if (left === null || right === null) {
//         return left === right
//     }
//     if (left.val !== right.val) {
//         return false
//     }
//     return fn(left.left, right.right) && fn(left.right, right.left)
// }

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// var kidsWithCandies = function(candies, extraCandies) {
//     let len = candies.length,
//         // 数组最大值
//         max = Math.max(...candies);

//     return candies.map(key=>{
//         return (key+extraCandies)>=max
//     });
// };

// var sumNums = function(n: number): number {
//     return n&&sumNums(n-1)+n;
// };

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */

// var canIWin = function (maxChoosableInteger, desiredTotal) {
//     if (desiredTotal === 0) return true; // 目标就是0 => 稳赢
  
//     const sum = (1 + maxChoosableInteger) * maxChoosableInteger / 2;
//     if (sum < desiredTotal) return false; // 全部数字选完了，都不够 => 不能稳赢
//     if (sum === desiredTotal) return maxChoosableInteger & 1; // 选完刚好到达目标 => 最后出手的人稳赢
  
//     const memo = new Map();
  
//     // 当前已选择`cover`（二进制表示）、和为`sum`，最终是否能赢
//     function helper(cover, sum) {
//       // 如果和已经满足/超过目标，则我无法再继续，所以输
//       if (sum >= desiredTotal) {
//         return false;
//       }
  
//       // 取缓存
//       const key = `${cover},${sum}`;
      
//       if (memo.has(key)) {
//         return memo.get(key);
//       }
  
//       let res = false;
//       for (let i = 1; i <= maxChoosableInteger; ++i) { // 在1～max中，尝试未选的数字
//         if (!(cover & (1 << i))) { // 如果`i`未选
//           const nextCover = cover ^ (1 << i);
//           if (!helper(nextCover, sum + i)) { // 如果对方输了
//             res = true; // 那我就赢
//             break; // 可以break吗？
//           }
//         }
//       }
//       memo.set(key, res);
//       return res;
//     }
  
//     return helper(0, 0);
//   };

/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
// var new21Game = function(N, K, W) {
  // if(k == 0){
  //   return 1;
  // }

  // const dp = new Array(k+W+1).fill(0);
  
  // for(let i = k; i <= N&& i<K+W; i++){
  //   dp[i] = 1;
  // }

  // dp[k-1] = Math.min(N-K+1,W)/W;

  // for(let i = k-2; i>= 0; i--){
  //   dp[i] = dp[i+1] - (dp[i + W + 1] - dp[i + 1]) / W;
  // }
  // return dp[0];
// };  

// function new21Game(N: number, K: number, W: number): number {
//   if(K == 0){
//     return 1;
//   }

//   const dp:number[] = new Array(K+W+1).fill(0);
  
//   for(let i = K; i <= N&& i<K+W; i++){
//     dp[i] = 1;
//   }K

//   dp[K-1] = Math.min(N-K+1,W)/W;

//   for(let i = K-2; i>= 0; i--){
//     dp[i] = dp[i+1] - (dp[i + W + 1] - dp[i + 1]) / W;
//   }
//   return dp[0];
// };

/**
 * @param {string} s
 * @return {string[]}
 */
// var restoreIpAddresses = function(s) {
//   let resArr = [];

//   const fn = function(str,start,count){
//     if(count>3){
//       if(start>=s.length){
//         resArr.push(str.slice(1));
//       }
//       return;
//     }

//       let temp = '';
//       for(let i = 0; i < 3; i++){
//           temp += s[start+i];
//           // 判断小于255，并且防止 0.1.00.10", "0.1.001.0"这种情况
//           if(Number(temp)<=255&&Number(temp).toString()==temp){
//               fn(str+'.'+temp,start+i+1,count+1);
//           } else{
//               break;
//           }
//       }
//   }

//   fn('',0,0);
//   return resArr;
// };

// function restoreIpAddresses(s: string): string[] {
//   let resArr:string[] = [];

//   const fn = function(str:string,start:number,count:number){
//     if(count>3){
//       if(start>=s.length){
//         resArr.push(str.slice(1));
//       }
//       return;
//     }

//       let temp:string = '';
//       for(let i:number = 0; i < 3; i++){
//           temp += s[start+i];
//           if(Number(temp)<=255&&Number(temp).toString()==temp){
//               fn(str+'.'+temp,start+i+1,count+1);
//           } else{
//               break;
//           }
//       }
//   }

//   fn('',0,0);
//   return resArr;
// };

/**
 * @param {number} n
 * @return {string[][]}
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
// var solveNQueens = function(n) {
//     let result = [];
    
//     function dfs(cols) {
//         let row = cols.length;
//         if (row === n) return result.push(cols.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col -1)));
//         for (let col = 0; col < n; col++) {
//             if(cols.some((exCol, exRow) => (exCol === col || exRow - exCol === row - col || exRow + exCol === row + col))) continue;
//             dfs(cols.concat(col))
//         } 
//     }
//     dfs([]);

//     return result;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//     let current = 1,
//         len = nums.length,
//         res = [];
    
//     // 从头到尾
//     for(let i=0;i<len;i++){
//         res[i] = current;
//         current *= nums[i];
//     }
    
//     // 反转
//     current = 1;
    
//     // 从尾到头
//     for(let j=len-1;j>=0;j--){
//         res[j] *= current;
//         current *= nums[j];
//     }

//     return res;
// };

// function productExceptSelf(nums: number[]): number[] {
//     let current:number = 1,
//         len:number = nums.length,
//         res:number[] = [];
    
//     // 从头到尾
//     for(let i=0;i<len;i++){
//         res[i] = current;
//         current *= nums[i];
//     }
    
//     // 反转
//     current = 1;
    
//     // 从尾到头
//     for(let j=len-1;j>=0;j--){
//         res[j] *= current;
//         current *= nums[j];
//     }

//     return res;
// };


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var spiralOrder = function(matrix) {
//     if(matrix.length == 0) return [];
//     let arr = [];
//     let n = matrix.length;
//     let w =matrix[0].length;
//     let m = 0;

//     while(n>m){
//         // left => right
//         for(let i = m; i < w-m; i++ ){
//             if(matrix[m][i]!==undefined){
//                 arr.push(matrix[m][i]);    
//                 matrix[m][i]=undefined           
//             }
//         }
//         // top => bottom
//         for(let i = m; i < n - m; i++ ){
//             if(matrix[i][w-m-1]!==undefined){
//                 arr.push(matrix[i][w-m-1]);
//                 matrix[i][w-m-1]=undefined;
//             }
//         }
//         // right => left
//         for(let i = w - m - 1; i > 0; i-- ){
//             if(matrix[n-m-1][i]!==undefined){
//                 arr.push(matrix[n-m-1][i]);
//                 matrix[n-m-1][i]=undefined;
//             }
//         }
//         // bottom => top
//         for(let i = n - m -1; i > 0; i-- ){
//             if(matrix[i][m]!==undefined){
//                 arr.push(matrix[i][m]);
//                 matrix[i][m]=undefined;
//             }
//         }
//         ++m;
//     }

//     return arr;
// };

// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//   let maxCount = 0;
//       nums = new Set(nums);
  
//   for (let value of nums) {
//     if (nums.has(value - 1)) continue;
    
//     let curr = value, 
//         count = 1;
//     while (nums.has(value + 1)) {
//       nums.delete( value + 1 );
//       value++;
//       count++;
//     }
//     maxCount = Math.max(maxCount, count);
//   }
  
//   return maxCount;
// }

// function longestConsecutive(nums: number[]): number {
  
//   interface Set<T> {
//     add(value: T): Set<T>;
//     clear(): void;
//     delete(value: T): boolean;
//     entries(): IterableIterator<[T, T]>;
//     forEach(callbackfn: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void;
//     has(value: T): boolean;
//     keys(): IterableIterator<T>;
//     size: number;
//     values(): IterableIterator<T>;
//     [Symbol.iterator]():IterableIterator<T>;
//     [Symbol.toStringTag]: string;
//   }

//   let maxCount:number = 0,
//       set = new Set(nums);
  
//   for (let value of set) {
//     if (set.has(value - 1)) continue;
    
//     let curr:number = value, 
//         count:number = 1;

//     while(set.has(value + 1)) {
//       set.delete( value + 1 );
//       value++;
//       count++;
//     }
//     maxCount = Math.max(maxCount, count);
//   }
  
//   return maxCount;
// };

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// 全排列方法超时了，不能全部通过
// var findSubstring = function(s, words) {
//   if(''===s||words.length==0) return [];

//   // 储存全排列字符的数组
//   let arr = [],
//   // 去重
//       res = new Set();
//   // 先全排列，再使用indexOf匹配位置，返回不是-1的
  
//   const fn = function(curArr,resArr){
//       if(resArr.length==words.length){
//           arr.push(resArr.join(''));
//           return;
//       }
//       for(let i = 0; i < curArr.length; i++){
//           fn([...curArr.slice(0,i),...curArr.slice(i+1)],[...resArr,curArr[i]])
//       }
//   }

//   fn(words,[])
 
//   arr.forEach(k=>{
//       if(s.indexOf(k)!==-1){
//         let pos = s.indexOf(k);
//         // 查找所有符合条件的下标，indexOf的第二个参数代表下一次查询的起点
//         while(pos>-1){
//           res.add(pos);
//           pos = s.indexOf(k,pos+1);
//         }
//       } 
//   })
//   return [...res];
// };

// 可以通过但是效率低下
// var findSubstring = function(s, words) {
//   if(''===s||words.length==0) return [];

//   let res = new Set(),
//       len = words[0].length;

//   //以这个元素开头
//   for(let i = 0; i < s.length; i++){
//     let temp = [...words];

//     if(temp.indexOf(s.slice(i,i+len))!==-1){
//       let index = i;
      
//       while(1){
//         // 在temp当中的位置
//         let tIndex = temp.indexOf(s.slice(index,index+len));

//         if(tIndex!==-1){
//           // 删除这个元素
//           temp.splice(tIndex,1);
//           // 往下一步走
//           index += len
//         } else{
//           break;
//         }
//       }
      
//       // 走完了就添加
//       if(temp.length===0) res.add(i)
//     }
//   }
//   return [...res];
// };

// 使用map，效率提升，但是还是低下
// var findSubstring = function(s, words) {
//   if(''===s||words.length==0) return [];

//   let res = [],
//       len = words[0].length;

//   //以这个元素开头
//   for(let i = 0; i < s.length; i++){

//     if(words.indexOf(s.slice(i,i+len))!==-1){
      
//       let map = new Map(),
//           index = i,
//           str = s.slice(index,index+len);

//       // 因为要频繁删除所以使用map
//       words.forEach(item=>{
//         if(map.has(item)){
//           map.set(item,map.get(item)+1)
//         } else{
//           map.set(item,0);
//         }
//       })
          
//       while(1){
//         if(map.has(str)){
//           // 删除这个元素
//           if(map.get(str)>0){
//             map.set(str,map.get(str)-1)
//           } else{
//             map.delete(str)
//           }
//           // 往下一步走
//           index += len
//         } else{
//           break;
//         }
        
//         str = s.slice(index,index+len);
//       }
      
//       // 走完了就添加
//       if(map.size===0) res.push(i)
//     }
//   }
//   return res;
// };

// var findSubstring = function(s, words) {
//   if (!s || !words || !words.length) return [];
//   var needs = {},l =0,r=0,ans=[]
//   for(let item of words){
//       needs[item]===undefined?needs[item]=1:needs[item]++
//   }
//   var needslength = Object.keys(needs).length
//   let wordLength = words[0].length
//   for(var i =0;i<wordLength;i++){
//       var now = {}
//       l = r = i
//       var count = 0
//       while(r<=s.length-wordLength){
//           var w1 = s.slice(r,r+wordLength)

//           r= r+wordLength
//           if(!needs[w1]){
//               now = {}
//               l=r
//               count = 0
//               continue
//           }
//           now[w1] ? now[w1]++ : now[w1] = 1;
//           if (now[w1] === needs[w1]) count++;

//           while(needslength == count){
//               if(r-l == wordLength* words.length) {
//                   ans.push(l)
//               }
//               var w2 = s.slice(l,l+wordLength)
//               l= l+wordLength
//               if(needs[w2]){
//                   now[w2]--
//                   if(now[w2]<needs[w2]) count--
//               }
//           }
//       }
//   }
//   return ans;
// };

// findSubstring("pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfstartXauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel",["dhvf","sind","ffsl","yekr","zwzq","kpeo","cila","tfty","modg","ztjg","ybty","heqg","cpwo","gdcj","lnle","sefg","vimw","bxcb"])


/**
 * @param {string} s
 * @return {number}
 */

// var longestValidParentheses = function(s) {
//   let max = 0,
//       stack = [-1];

//   for(let i = 0;i < s.length;i++){  
//     if(s[i] == '('){
//       stack.push(i);
//     }else{
//       stack.pop();
//       if(stack.length == 0){
//         stack.push(i);
//       }else{
//         max = Math.max(max,i - stack[stack.length-1]);
//       }
//     }
//   }
//   return max;
// };


// longestValidParentheses('()()(())(')

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//   let len = nums.length,
//       res = false;

//   if(len<=1) return true;
//   nums.unshift(0);
//   // 当前位置
//   const fn = function(cur){
//       if(cur === len||res){
//         res = true;
//         return;
//       }
//       if(nums[cur]==0) return;

//       for(let i = 1; i <= nums[cur]; i++){
//         if(res) return
//         fn(cur+i)
//       }
//   }

//   fn(1);

//   return res;
// };

// canJump([2,3,1,1,4])

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//   let len = nums.length,
//       max = 0;

//   if(len<=1) return true;
  
//   for (let i = 0; i < len; i++) {
//     if (i <= max) {
//       max = Math.max(max, i + nums[i]);
//       if (max >= len - 1) return true;
//     }
//   }
  
//   return len < max;
// };

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
// 检查能不能转化
// const checkChange = function(str1,str2){
//   if(str1.length!==str2.length||str1===str2) return false;

//   let count = 0;

//   for(let i = 0; i < str1.length; i++){
//     if(str1[i]!==str2[i]){
//       count++;
//     }
//   }

//   return count<2;
// }


// var findLadders = function(beginWord, endWord, wordList) {
//   if(wordList.indexOf(endWord)==-1) return [];

//   let res = [],
//       minlen = Infinity;
      
//   wordList = [...new Set(wordList)];
  
//   // 当前的值，转化过程arr，剩下的list
//   const fn = function(cur,arr,list){
//       if(arr.length>minlen) return;

//       if(cur==endWord){
//           minlen = Math.min(minlen,arr.length);
//           if(arr.length<=minlen) res.push(arr);
//       }

//       for(let i = 0; i < list.length; i++){
//           // 可以转化
//           if(checkChange(list[i],cur)){
//             if(arr.length<=minlen) fn(list[i],[...arr,list[i]],[...list.slice(0,i),...list.slice(i+1)]);
//           }
//       }
//   }

//   fn(beginWord,[beginWord],wordList)

//   return res.length>0?res.filter(k=>k.length==minlen):[];
// };

// var findLadders = function(beginWord, endWord, wordList) {

//   let wordId = new Map(),//单词到id的映射
//       idWord = [],//id到单词的映射
//       edges,//存边用的数组
//       id = 0;

//   // 两个字符串是否可以通过改变一个字母后相等
//   function transformCheck(str1,str2){
//       if(str1.length!==str2.length||str1===str2) return false;
//       let count = 0;

//       for(let i = 0; i < str1.length; i++){
//         if(str1[i]!==str2[i]){
//           count++;
//         }
//       }

//       return count<2;
//   }

//   // 将wordList所有单词加入wordId中 相同的只保留一个  并为每一个单词分配一个id
//   for (let word of wordList) {
//       if (!wordId.has(word)) {
//           wordId.set(word, id++);
//           idWord.push(word);
//       }
//   }

//   // 若endWord不在wordList中 则无解
//   if (!wordId.has(endWord)) {
//       return [];
//   }

//   // 把beginWord也加入wordId中
//   if (!wordId.has(beginWord)) {
//       wordId.set(beginWord, id++);
//       idWord.push(beginWord);
//   }

//   // 初始化存边用的数组
//   edges = new Array(idWord.length);
//   for (let i = 0; i < idWord.length; i++) {
//       edges[i] = [];
//   }

//   // 添加边
//   for (let i = 0; i < idWord.length; i++) {
//       for (let j = i + 1; j < idWord.length; j++) {
//           // 若两者可以通过转换得到 则在它们间建一条无向边
//           if (transformCheck(idWord[i], idWord[j])) {
//               edges[i].push(j);
//               edges[j].push(i);
//           }
//       }
//   }

//   let dest = wordId.get(endWord),//目的id
//       res = [],//保存结果
//       cost =  new Array(id);//到每个点的代价

//   for (let i = 0; i < id; i++) {
//       cost[i] = Number.MAX_VALUE; // 每个点的代价初始化为无穷大
//   }

//   // 将起点加入队列 并将其cost设为0
//   let queue = [],
//       tmpBegin = [];

//   tmpBegin.push(wordId.get(beginWord));
//   queue.unshift(tmpBegin);
//   cost[wordId.get(beginWord)] = 0;

//   //开始广度优先搜索
//   while(queue.length !== 0){
//       let now = queue.pop(),
//           last = now[now.length - 1]; // 最近访问的点

//       if(last === dest){// 若该点为终点则将其存入答案res中
//           let tmp = [];
//           for (let index of now) {
//               tmp.push(idWord[index]); // 转换为对应的word
//           }
//           res.push(tmp);
//       }else{
//           for (let i = 0; i < edges[last].length; i++) {
//               let to = edges[last][i];
//               // 此处<=目的在于把代价相同的不同路径全部保留下来
//               if (cost[last] + 1 <= cost[to]) {
//                   cost[to] = cost[last] + 1;
//                   // 把to加入路径中
//                   let tmp = now.map(ele=>ele);
//                   tmp.push(to);
//                   queue.unshift(tmp); // 把这个路径加入队列
//               }
//           }
//       }
//   }

//   return res;
// };

// findLadders("qa","sq",["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"])


/**
 * @param {number[]} ratings
 * @return {number}
 */
// var candy = function(ratings) {
//     let left = new Array(ratings.length).fill(1);

//     let right = new Array(ratings.length).fill(1);

//     for (let i = 1; i < ratings.length; i++) {
//         if(ratings[i] > ratings[i-1])
//             left[i] = left[i-1] + 1;
//     }

//     let count = left[ratings.length - 1];
    
//     for (let j = ratings.length - 2; j >= 0; j-- ) {
//         if(ratings[j] > ratings[j+1]) {
//             right[j] = right[j+1] + 1;
//         }
//         count += Math.max(left[j], right[j])
//     }
//     return count;
// };

// candy([1,2,2,3,2,2,1])

/**
 * @param {string[]} equations
 * @return {boolean}
 */
// var equationsPossible = function(equations) {
//     const unionfind = {};
//     for (const [c1, c2, c3, c4] of equations) {
//       if (c2 === "=") {
//         union(c1, c4);
//       }
//     }
  
//     for (const [c1, c2, c3, c4] of equations) {
//       const x = find(c1);
//       const y = find(c4);
//       if (c2 === "!") {
//         if (x === y) {
//           return false;
//         }
//       }
//     }
//     return true;
  
//     function find(i) {
//       if (unionfind[i] === undefined) {
//         return (unionfind[i] = i);
//       }
//       return unionfind[i] === i ? i : (unionfind[i] = find(unionfind[i]));
//     }
  
//     function union(x, y) {
//       x = find(x);
//       y = find(y);
//       unionfind[y] = x;
//     }
//   };


/**
 * @param {number} num
 * @return {number}
 */
// var translateNum = function(num) {
//   if(num<10) return 1;

//   let str = num.toString(),
//       arr = [[str[0]]];

//   const fn = function(theArr,index){
//       if(index >= str.length) return;

//       theArr.forEach(item=>{
//           let pre = item[item.length-1];

//           if(pre!='0'&&Number(pre+str[index])<26){
//               arr.push([[...item].slice(0,item.length-1),Number(pre+str[index])])
//           }
//           item.push(str[index]);
//       })

//       fn([...arr],index+1)
//   }

//   fn(arr,1)
//   console.log(arr);
//   return arr.length;
// };

// translateNum(10)

/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//   if(height.length < 3) return 0;

//   let left = 0, 
//       right = height.length - 1,
//       leftmax = height[left], 
//       rightmax = height[right],
//       res = 0;

//   while(left < right){
//       if(leftmax < rightmax){
//           res += leftmax - height[left];
//           left++;
//           leftmax = Math.max(height[left], leftmax);
//       }else{
//           res += rightmax - height[right];
//           right--;
//           rightmax = Math.max(height[right], rightmax);
//       }
//       console.log(leftmax,rightmax,res)
//   }

//   return res;
// };

// var trap = function(height) {
//   let res = 0,
//       left = 0,
//       right = 0,
//       min = 0;

//   for(let index=1; index<height.length-1; index++){
//       left = 0;
//       right = 0;

//       for(let i = index-1; i>=0; i--){
//           left = Math.max(height[i],left);
//       }

//       for(let i=index+1; i<height.length; i++){
//           right = Math.max(height[i],right);
//       }

//       min = Math.min(left,right);

//       if(min > height[index]){
//           res += min-height[index] 
//       }
//   }

//   return res;
// };

// trap([0,1,0,2,1,0,1,3,2,1,2,1])

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     if(x<0) return false;
//     let str = x.toString(),
//         pre = 0,
//         next = str.length-1;
//     while(pre<=next){
//         if(str[pre]==str[next]){
//             pre++;
//             next--;
//         } else{
//             return false;
//         }
//     }

//     return true;
// };

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//   if(x<0) return false;
  
//   let num = x,
//       reverseNum = '';

//   while(x>0){
//       reverseNum = reverseNum + x%10;
//       x = parseInt(x/10);
//   }
  
//   return num==reverseNum;
// };

/**
 * @param {number[]} T
 * @return {number[]}
 */
// var dailyTemperatures = function(T) {
//     let len = T.length,
//         arr = new Array(len).fill(0);

//         for (let i = 0; i < len; i++) {
//             let current = T[i];
//             if (current < 100) {
//                 for (let j = i + 1; j < len; j++) {
//                     if (T[j] > current) {
//                         arr[i] = j - i;
//                         break;
//                     }
//                 }
//             }
//         }

//     return arr;
// };

// dailyTemperatures([73,74,75,71,69,72,76,73])

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     nums.sort((a,b)=>a-b);
//     let left = 0,
//         right = nums.length-1,
//         sum = 0,
//         res = [];
//     for(let i = 0; i < nums.length-2; i++){
//         // 判断是否相等
//         while(i!=0&&nums[i]==nums[i-1]) i++;
//         left = i+1;
//         right = nums.length-1;
//         while(left<right){
//             sum = nums[i] + nums[left] + nums[right];
//             if(sum==0){
//                 res.push([nums[i],nums[left],nums[right]]);
//                 left++;
//                 right--;
//                 //判断现在与之前是否相等
//                 while(nums[left]==nums[left-1]) left++;
//                 while(nums[right]==nums[right+1]) right--;
//             } else if(sum<0){
//                 left++
//             } else{
//                 right--;
//             }
//         }
//     }
//     return res;
// };

/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   if(n<2) return 1;
//   if(n==2) return 2;
//   let pre = 1,
//       next = 2,
//       temp = pre;
  
//   while(n>2){
//       temp = next;

//       next += pre;
      
//       pre = temp;
//       n--;
//   }

//   return next;
// };

/**
 * @param {number} n
 * @return {number}
 */
// var totalNQueens = function(n) {
//   let res = 0;
  
//   const fn = (subResult, row) => {
//       // 到了最底层
//       if (row === n) {
//           res++;
//           return;
//       }
//       // 每一列
//       for (let col = 0; col < n; col++) {
//           // 判断下方，右下，左下
//           if (!subResult.some((j, k) => j === col || j - col === row - k || j - col === k - row)){
//               // 回溯
//               subResult.push(col);
//               fn([...subResult], row+1);
//               subResult.pop();
//           }
//       }
//   }
//   fn([],0);
//   return res;
// };

// /**
//  * @param {number[]} startTime
//  * @param {number[]} endTime
//  * @param {number} queryTime
//  * @return {number}
//  */
// var busyStudent = function(startTime, endTime, queryTime) {
//   let res = 0;

//   for(let i = 0; i < startTime.length; i++){
//       if(startTime[i]<=queryTime&&queryTime<=endTime[i]) res++
//   }

//   return res;
// };

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
// var findBestValue = function(arr, target) {
//   if(arr.length==1) return target;
//   if(arr.length>Math.pow(10,4)) return 0;

//   // 排序
//   arr.sort((a,b)=>a-b);

//   let len = arr.length,
//       min = 0,
//       max = arr[len-1],
//       mid = Math.floor((min+max)/2),
//       res = mid,
//       minsum = len*arr[0],
//       maxsum = 0,
//       total = minsum,
//       temp = 0;
//   arr.forEach(item=>maxsum+=item)
  

//   while(Math.abs(max-min)>1){
//       arr.forEach(item=>{
//         if(item>mid){
//           temp += mid;
//         } else{
//           temp += item;
//         }
//       })
//       // 更加靠近
//       if(Math.abs(target-temp)<Math.abs(target-total)){
//           total = temp;
//           res = mid;
//       } else if(Math.abs(target-temp)==Math.abs(target-total)&&mid<res){
//           res = mid;
//       }

//       if(target-temp<0){
//           max = mid;
//       } else{
//           min = mid;
//       }
//       mid = Math.floor((min+max)/2);

//       temp = 0;
//   }

//   if(Math.abs(target-total)>Math.abs(target-minsum)){
//     return arr[0];
//   } else if(Math.abs(target-total)>Math.abs(target-maxsum)){
//     return arr[len-1]
//   }

//   if(res==1) return 0;

//   return res;
// };

// var findBestValue = function (arr, target) {
//   let sum = 0,
//       temp = Infinity,
//       value = 0;

//   while(1){
//       sum = 0;
//       // 求和
//       for (let i = 0; i < arr.length; i++) {
//           if (arr[i] > value){
//               sum += value;
//           } else{
//               sum += arr[i];
//           }
//       }
//       // 不断逼近，当超过最接近之后，返回上一个
//       if(temp > Math.abs(target - sum)){
//           temp = Math.abs(target - sum);
//       } else{
//           return value-1;            
//       }

//       value++;
//   }
// };

// console.log(findBestValue([2,3,5],10))

// var exchange = function(nums) {
//   let pre = 0,
//       next = nums.length-1;
//   while(pre<next){
//       while(nums[pre]%2==1&&pre<next){
//           pre++;
//       }
//       while(nums[next]%2==0&&pre<next){
//           next--;
//       }
//       [nums[pre],nums[next]] = [nums[next],nums[pre]];
//   }
//   return nums;
// };

// console.log(exchange([1,2,3,4]))

/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
// var maxJumps = function(arr, d) {
//   // 记忆化数组
//   const cache = new Array(arr.length).fill(0);

//   const fn = function(cur) {
//       // 判断是否访问
//       if(cache[cur] === 0) {
//           let max = 0;
//           // 向右遍历
//           for (let i = cur + 1; i <= cur + d && i < arr.length && arr[i] < arr[cur]; ++i) {
//               max = Math.max(fn(i), max);
//           }
//           // 向左遍历
//           for (let i = cur - 1; i >= cur - d && i >= 0 && arr[i] < arr[cur]; --i) {
//               max = Math.max(fn(i), max);
//           }
//           cache[cur] = 1 + max;
//       }
//       return cache[cur];
//   }
//   // 取最大值
//   return Math.max(...arr.map((v, i) => fn(i)));
// };

// console.log(maxJumps([6,4,14,6,8,13,9,7,10,6,12],2))

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   if(strs.length==0) return "";
//   let len = strs[0].length,
//       res = '';
  
//   for(let i = 0; i < len; i++){
//     if(strs.every(item=>item[i]==strs[0][i])){
//       res += strs[0][i]
//     } else{
//       break;
//     }
//   }

//   return res;
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]))

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// var serialize = function(root) {
//   if(!root) return 'null';
//   let arr = [],
//       temp = [root];

//   while(temp.length>0){
//       let node = temp.shift();
//       if(node){
//           arr.push(node.val);
//           temp.push(node.left);
//           temp.push(node.right);
//       } else{
//           arr.push('null')
//       }
//   }
//   return arr.join(",");
// };

// /**
// * Decodes your encoded data to tree.
// *
// * @param {string} data
// * @return {TreeNode}
// */
// var deserialize = function(data) {
//   if(data=='null') return null;    
//   let arr = data.split(","),
//       root = new TreeNode(arr.shift()),
//       temp = [root];

//       while(temp.length>0){
//           let node = temp.shift();

//           if(node){
//               let left = arr.shift(),
//                   right = arr.shift();
//               node.left = left==='null'?null:new TreeNode(left);
//               temp.push(node.left);
//               node.right = right==='null'?null:new TreeNode(right);
//               temp.push(node.right);
//           }
//       }

//   return root;
// };

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/

/**
 * @param {number[]} A
 * @return {number}
 */
// var maxScoreSightseeingPair = function(A) {
//     let max = A[0],
//         res = -Infinity;

//     for(let j = 1; j < A.length; j++) {
//         // 求max+A[j]-j的最大值
//         res = Math.max(res,max+ A[j] - j);
//         // 保存A[i] + i的最大值
//         max = Math.max(max, A[j] + j);
//     }

//     return res;
// };

// console.log(maxScoreSightseeingPair([8,1,5,2,6]))

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
/**
 * @param {string} S
 * @return {TreeNode}
 */
// var recoverFromPreorder = function(S) {
//   if(S.length==0) return null;

//   let root = 1,
//       len = S.length-1;
//   while(S[root]!=='-'&&root<S.length){
//     root++;
//   }
//   root = new TreeNode(S.slice(0,root))
//   //str字符串, node节点， count层数
//   const fn = function(str,node,count){
//       let temp = '';
//       for(let i = 0; i < count; i++){
//           temp += '-';
//       }
//       let leftIndex = str.search(new RegExp(`\\d${temp}\\d`)),
//           rightIndex =  str.slice(leftIndex+count+1).search(new RegExp(`\\d${temp}\\d`));

//       // 左节点存在
//       if(leftIndex!==-1){
//           leftIndex = leftIndex+count+1;
//           let end = leftIndex+1;

//           while(str[end]!=="-"&&end<str.length){
//             end++;
//           }

//           node.left = new TreeNode(str.slice(leftIndex,end));
//           fn(str.slice(end-1,rightIndex==-1?str.length:rightIndex+leftIndex+count+1),node.left,count+1);
//       }
//       // 右节点存在
//       if(rightIndex!==-1){
//           rightIndex = rightIndex+leftIndex+count+1;
//           let end = rightIndex+1;
//           while(str[end]!=="-"&&end<str.length){
//             end++;
//           }
//           node.right = new TreeNode(str.slice(rightIndex,end));
//           fn(str.slice(end-1),node.right,count+1);
//       }
            
//       return node;
//   }

//   fn(S,root,1);

//   return root;
// };

// var recoverFromPreorder = function(S) {
//   const parentStack = [new TreeNode(0)];
//   for (let i = 0, curDepth = 0, num = '', len = S.length; i < len; ++i) {
//     if (S[i] === '-') {
//       ++curDepth
//     } else {
//       while(i < len && S[i] !== '-') num += S[i++];
//       while (parentStack.length - curDepth !== 1) parentStack.pop();
//       const parent = parentStack[parentStack.length - 1];
//       const node = new TreeNode(num);
//       if (!parent.left) parent.left = node
//       else parent.right = node
//       parentStack.push(node);
//       num = '';
//       curDepth = 1;
//     }
//   }
//   return parentStack[0].left;
// };


// recoverFromPreorder("100-401--349---90--88")

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function(n, k){
//   let res = [];

//   const fn = function(count,resArr){
//     if(resArr.length>=k){
//       res.push([...resArr])
//       return;
//     }

//     for(let i = count; i < n; i++){
//       fn(i+1,[...resArr,i+1])
//     }
//   }
  
//   fn(0,[]);

//   return res;
// };

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function(n, k) {
//   var result = [];
//   var subresult = [];
//   function combineSub(start, subresult){
//       if(subresult.length === k){
//           result.push(subresult.slice(0));
//           return;
//       }
//       var len = subresult.length;
//       for(var i = start; i <= n - (k - len) + 1; i++){
//           subresult.push(i);
//           combineSub(i + 1, subresult);
//           subresult.pop();            
//       }   
//   }
//   combineSub(1, subresult);
//   return result;
// };

// console.log(combine(4,2))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//   let res = [[nums[0]]];
  
//   for(let i = 1; i < nums.length; i++){
//     let temp = res.map(k=>[...k,nums[i]]);
//     res = [...temp,...res,[nums[i]]]
//   }
//   res.push([])
//   return res;
// };

// console.log(subsets([1,2,3]))

// p[j] == s[i]:dp[i][j] = dp[i-1][j-1]

// p[j] == ".":dp[i][j] = dp[i-1][j-1]

// p[j] =="*":

// 3.1 p[j-1] != s[i]:dp[i][j] = dp[i][j-2]

// 3.2 p[i-1] == s[i] or p[j-1] == ".":

// dp[i][j] = dp[i-1][j] // 多个字符匹配的情况

// or dp[i][j] = dp[i][j-1] // 单个字符匹配的情况

// or dp[i][j] = dp[i][j-2] // 没有匹配的情况

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//   let slen = s.length,
//       plen = p.length,
//       dp = new Array(slen+1).fill(0),
//       temp = new Array(plen+1).fill(false);
//   if(plen==0) return slen==0;

//   for(let i = 0; i <=slen; i++){
//     dp[i] = [...temp];
//   }

//   dp[0][0] = true;

//   for(let i = 1; i <= slen; i++){
//     for(let j = 1; j <= plen; j++){
//       if(s[i-1]==p[j-1]||p[j-1]=='.'){
//         dp[i][j] = dp[i-1][j-1];
//       } else if(p[j-1]=="*"){
//         if(p[j-2]=="."&&p[j-1]==s[i-2]){
//           dp[i][j] = dp[i-1][j]||dp[i][j-1]||dp[i][j-2]
//         } else{
//           dp[i][j] = dp[i][j-2];
//         }
//       }
//     }
//   }
  
//   console.log(dp);
// };

// console.log(isMatch("aab","c*a*b"))

/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
// var patternMatching = function(pattern, value) {
//   if(pattern=='') return value=='';
//   if(value==''){
//     if(pattern.length==1) return true;
    
//     let num = 1;
//     for(let i = 0; i < pattern.length; i++){
//         num = num^pattern[i]
//     }
//     return num==0;
//   };

//   let aNum = 0,
//       bNum = 0,
//       plen = pattern.length,
//       vlen = value.length,
//       bItem = 0,
//       aItem = 0;

//   for(let i = 0; i < plen; i++){
//     if(pattern[i]=='a'){
//       aNum++;
//     } else{
//       bNum++;
//     }
//   }
//   // 其中一个为0
//   if(bNum==0||aNum==0){
//     if(bNum==0){
//       aItem = vlen/aNum;
//       if(Number.isInteger(aItem)){
//           let str = '';

//           aItem = value.slice(0,aItem);
//           for(let i = 0; i < plen; i++){
//                 str += aItem;
//           }
//           return str === value;
//       } 
//     } else{
//       bItem = vlen/bNum;
//       if(Number.isInteger(bItem)){
//           let str = '';

//           bItem = value.slice(0,bItem);
//           for(let i = 0; i < plen; i++){
//                 str += bItem;
//           }
//           return str === value;
//       }
//     }
//     return false;
//   }
  

//   for(let i = 0; i <= vlen; i++){
//     let str = '',
//         aStart = 0,
//         bStart = 0;

//     bItem = (vlen-aNum*i)/bNum;
//     if(!Number.isInteger(bItem)) continue;
//     aItem = (vlen-bNum*bItem)/aNum;
//     if(!Number.isInteger(aItem)) continue;
//     aStart = pattern.indexOf('a')*bItem;
//     bStart = pattern.indexOf('b')*aItem;

//     aItem = value.slice(aStart,aItem+aStart);
//     bItem = value.slice(bStart,bStart+bItem);

//     for(let i = 0; i < plen; i++){
//       if(pattern[i]=='a'){
//         str += aItem;
//       } else{
//         str += bItem;
//       }
//     }

//     if(str === value) return true;
//   }
//   return false;
// };

// console.log(patternMatching("bbbbbbbbabbbbbbbbbbbabbbbbbba","zezezezezezezezezkxzezezezezezezezezezezezkxzezezezezezezezkx"))

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//   let res = parseInt(a,2)+parseInt(b,2);
//   return res.toString(2);
// };

// var addBinary = function(a, b) {
//   let alen = a.length,
//       blen = b.length,
//       res = '',
//       temp1 = 0,
//       temp2 = 0;

//   if(alen==0) return b;
//   if(blen==0) return a;
  
//   while(alen>0||blen>0){
//     temp1 = Number(a[alen-1]||0)+Number(b[blen-1]||0);
//     res += temp1%2;
//     temp2 = parseInt(temp1/2);
//   }

//   return res;
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function(nums, target) {
//   nums.sort((a,b)=>a-b);
  
//   let res = nums[0]+nums[1]+nums[2],
//       result = 0;

//   for(let i = 1; i < nums.length-1; i++){
//       let start = 0,
//           end = nums.length-1;
          
//       while(start<i&&end>i){
//           result = nums[start]+nums[end]+nums[i];
          
//           if(Math.abs(target-result)<Math.abs(target-res)) res=result;

//           if(result<target){
//               start++;
//           } else if(result>target){
//               end--;
//           } else{
//               return result;
//           }
//       }
//   }

//   return res;
// };

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//   let len = s.length,
//       dp = new Array(len+1).fill(0),
//       map = new Set(wordDict);

//   dp[0] = true;
  
//   for(let i = 1; i <= len; i++){
//       for(let j = 0; j <= i; j++){
//           if(dp[j]&&map.has(s.substr(j, i-j))){
//               dp[i] = true;
//               break;
//           }
//       }
//   }
  
//   return dp[len];
// };

// wordBreak("leetcode",["leet","code"])

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var removeDuplicateNodes = function(head) {
//   if(!head) return head;
//   let start = head,
//       end = null,
//       temp = null;
//   while(start!==null){
//       end = start.next;
//       temp = start;
//       while(end!==null){
//           if(start.val==end.val){
//               temp.next = end.next;
//               end = end.next;
//               continue;
//           }
//           end = end.next;
//           temp = temp.next;
//       }
//       start = start.next;
//   }
//   return head;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function(nums) {
//   let len = nums.length;

//   for(let i = 0; i < len; i++){
//     while(nums[i]>0&&nums[i]<len&&nums[nums[i]-1]!=nums[i]){
//       [nums[nums[i]-1],nums[i]] = [nums[i],nums[nums[i]-1]];
//     }
//   }

//   for(let i = 0; i < len; i++){
//     if(nums[i]!==i+1) return i+1;
//   }

//   return len+1;
// };

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(s, nums) {
//   let res = Infinity,
//       pre = 0,
//       next = 0,
//       sum = 0;

//   while(next<nums.length){  
//       sum += nums[next];
//       while(sum>=s){     
//           res = Math.min(res, next-pre+1);
//           sum -= nums[pre];
//           pre++;
//       }
//       next++;
//   }

//   return res === Infinity?0:res;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
//     let arr = nums.sort((a,b)=>b-a);
//     if(k > arr.length) return arr.pop();
//     return arr[k-1];
// };

// var CQueue = function() {
//     this.arr = [];
// };

// /** 
//  * @param {number} value
//  * @return {void}
//  */
// CQueue.prototype.appendTail = function(value) {
//     this.arr.push(value);
// };

// /**
//  * @return {number}
//  */
// CQueue.prototype.deleteHead = function() {
//     if(this.arr.length===0) return -1;
//     return this.arr.shift();
// };

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

 /**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// var findLength = function(A, B) {
//     let len1 = A.length;
//     let len2 = B.length;
//     let dp = new Array(len1 + 2).fill(0).map(()=>new Array(len2+2).fill(0)); 
//     let res = 0;

//     for(let i=2;i<=len1+1;i++){
//         dp[i][0]=A[i-2];
//         for(let j=2;j<=len2+1;j++){
//             dp[0][j]=B[j-2];
//             if(A[i-2]==B[j-2]){
//                 dp[i][j] = dp[i-1][j-1] + 1;
//                 res = Math.max(res,dp[i][j]);
//             }
//         }
//     }
//     return res;
// };


// var sortedArrayToBST = function(nums) {
//     // 由于数组是排序好的，因此一个思路就是将数组分成两半，一半是左子树，另一半是右子树
//     // 然后运用“树的递归性质”递归完成操作即可。
//     if(nums.length === 0) return null;
//     const mid = nums.length >> 1;
//     const root = new  TreeNode(nums[mid]);

//     root.left = sortedArrayToBST(nums.slice(0, mid));
//     root.right = sortedArrayToBST(nums.slice(mid + 1))
//     return root;
// };
/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function(s) {
//     let res = 0,
//         stack = [-1];
  
//     for(let i = 0;i < s.length;i++){  
//       if(s[i] == '('){
//         stack.push(i);
//       }else{
//         stack.pop();
//         if(stack.length == 0){
//           stack.push(i);
//         }else{
//           res = Math.max(res,i - stack[stack.length-1]);
//         }
//       }
//     }
//     return res;
//   };

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
// var isMatch = function(s, p) {
//   if (p === "*" || s === p) return true;
//   let dp = Array.from(Array(s.length + 1), ()=> Array(p.length + 1).fill(false));
  
//   dp[0][0] = true;
//   for (let i  = 1; i <= p.length; i++) {
//       if (!dp[0][i - 1]) break;
//       if (p[i - 1] === '*') dp[0][i] = true;
//   }
//   for (let i = 1; i <= s.length; i++) {
//       for (let j = 1; j <= p.length; j++) {
//           if (s[i - 1] === p[j - 1] || p[j - 1] === "?") {
//               dp[i][j] = dp[i - 1][j - 1];
//           } else if (p[j - 1] === "*") {
//               dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
//           }
//       }
//   }
//   return dp[s.length][p.length];
// };
// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//   let res = 0,
//       col = obstacleGrid[0].length,
//       row = obstacleGrid.length;

//   const fn = function(i,j){
//       if(i>=row||j>=col||obstacleGrid[i][j]==1) return;
//       if(i==row-1&&j==col-1&&obstacleGrid[i][j]==0) {
//           res++;
//           return
//       }
//       fn(i+1,j)
//       fn(i,j+1)
//   }

//   fn(0,0)

//   return res;
// };

// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//   // 行
//   var n = obstacleGrid.length;
//   // 列
//   var m = obstacleGrid[0].length;
//   // 初始化
//   var dp = new Array(n);
//   for(var i = 0;i<n;i++){
//       dp[i] = new Array(m).fill(0);
//   }
//   dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;
//   // 如果起点就是障碍物
//   if(dp[0][0] == 0){
//       return 0 ;
//   }
//   // 第一行
//   for(var j = 1;j < m;j++){
//       if(obstacleGrid[0][j] != 1){
//           dp[0][j] = dp[0][j-1];
//       }
//   }
//   // 第一列
//   for(var r = 1;r < n;r++){
//       if(obstacleGrid[r][0] != 1){
//           dp[r][0] = dp[r-1][0];
//       }
//   }
//   // 动态递推
//   for(var i = 1;i < n;i++){
//       for(var r = 1;r < m;r++){
//           if(obstacleGrid[i][r] != 1){
//               dp[i][r] = dp[i-1][r] +dp[i][r-1];
//           }
//       }
//   }
//   return dp[n-1][m-1];
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} sum
//  * @return {boolean}
//  */
// var hasPathSum = function(root, sum) {
// 	// 遍历到叶子节点下一个节点-终止递归
// 	if (root === null) return false

// 	// 遍历到叶子节点 判断剩余节点是否与和差值未0
// 	if (root.left === null && root.right === null) {
// 		return (sum - root.val) === 0;
// 	}

// 	// sum一次减去该节点左节点、右节点 是否等于最后叶子节点
// 	let left = hasPathSum(root.left, sum - root.val),
// 	    right = hasPathSum(root.right, sum - root.val);

// 	// 存在一侧满足就满足
// 	return left || right
// };

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
// const respace = (dictionary, sentence) => {
//     if(sentence.length == 0) return 0;
// 	let dp = new Array(sentence.length).fill(0);
//     for(let i = 1;i<=sentence.length;i++){
//         dp[i] = dp[i-1]+1;
//         // 上面表示，如果没有匹配那么dp[i]相比于dp[i-1]直接多1
//         // 接着讨论如果新加一个字符，组成了一个词的情况
//         for(let j=0;j<dictionary.length;j++){
//             let word = dictionary[j].length;
//             if(dictionary[j] == sentence.substring(i-word,i) && word<=i){
//                 dp[i] = Math.min(dp[i],dp[i-word]);
//             }
//         }
//     }
//     return dp[sentence.length]
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     //如果天数小于一天，没有卖出时机，收益最大为0
//     if(prices.length<=1){
//           return 0;
//     }
//     let dp = [];
//     dp.push([0,-prices[0]]);
//     dp.push([Math.max(prices[1]-prices[0],0),Math.max(-prices[1],-prices[0])]);
//     for(let i=2;i<prices.length;i++){
//         let res = [];
//         res[0] = Math.max(dp[i-1][1]+prices[i],dp[i-1][0])
//         res[1] = Math.max(dp[i-2][0]-prices[i],dp[i-1][1])
//         dp.push(res);
//     }
//     return dp[prices.length-1][0];
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const countSmaller = (nums) => {
//     const len = nums.length;
//     if (len == 0) return nums;
//     const counts = new Array(len);
//     const sorted = [];
//     for (let i = len - 1; i >= 0; i--) {
//       const index = findIndex(sorted, nums[i]); // 当前数字理应出现在右边排序后的位置，也即是有index个右边元素比它小
//       sorted.splice(index, 0, nums[i]); // 将nums[i]插入到sorted数组的index处
//       counts[i] = index; // 将index存到counts数组的索引i处
//     }
//     return counts;
//   };
  
//   const findIndex = (arr, target) => {
//     let lo = 0;
//     let hi = arr.length - 1;
//     while (lo < hi) {
//       const mid = (lo + hi) >>> 1;
//       if (arr[mid] < target) {// 目标值比mid元素大，mid不是想要的
//         lo = mid + 1;         // 移到mid+1，lo是我最后想返回的
//       } else {                // 目标值小于等于mid元素 
//         hi = mid;             // mid可能是想要的，hi不能移到mid-1
//       }
//     }
//     if (arr[lo] < target) return lo + 1; // 目标值比lo元素大，lo还需+1
//     return lo;    // 否则 返回lo
//   };

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// var calculateMinimumHP = function(dungeon) {
//     let n = dungeon.length, 
//         m = dungeon[0].length,
//         dp = [];

//     for (let i = 0; i <= n; ++i) {
//         dp.push(new Array(n+1).fill(Number.MAX_SAFE_INTEGER));
//     }

//     dp[n][m - 1] = dp[n - 1][m] = 1;
    
//     for (let i = n - 1; i >= 0; --i) {
//         for (let j = m - 1; j >= 0; --j) {
//             let minn = Math.min(dp[i + 1][j], dp[i][j + 1]);
//             dp[i][j] = Math.max(minn - dungeon[i][j], 1);
//         }
//     }
//     return dp[0][0];
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//     return nums1.filter(item => {
//         let index = nums2.indexOf(item);
//         if(index !== -1){
//             nums2.splice(index,1);
//             return true
//         }
//     });
// };
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var minimumTotal = function(triangle) {
//     var dp = triangle;
//     for(var i = dp.length-2;i >= 0;i--){
//         for(var j = 0;j < dp[i].length;j++){
//             dp[i][j] = Math.min(dp[i+1][j],dp[i+1][j+1]) + dp[i][j];
//         }
//     }
//     return dp[0][0];
// };

/**
 * @param {number} n
 * @return {number}
 */
// var numTrees = function(n) {
//     const dp = new Array(n+1).fill(0);
//     dp[0] = 1;
//     dp[1] = 1;

//     for(let i = 2; i < n; i++) {
//         for(let j = 1; j <= i; j++){
//             dp[i] += dp[j-1] * dp[i-j]
//         }
//     }

//     return dp[n];
// };

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var numTrees = function(n) {
//     if(n<=1) return 1;
//     if(n==2) return 2;

//     let dp = new Array(n+1);
//         dp.fill(0);
//     dp[0] = 1;
//     dp[1] = 1;
//     dp[2] = 2;
//     dp[3] = 5;

//     for(let i = 4; i <= n; i++){
//         for(let j = 0; j < i; j++){
//             dp[i] += dp[j]*dp[i-j-1]
//         }
//     }
//     return dp[n]
// };

// /**
//  * @param {number[][]} graph
//  * @return {boolean}
//  */
// var isBipartite = function (graph) {
//     /* dfs + 染色法 */
//     const colors = new Array(graph.length).fill(0); // 用于存储染色信息的数组，0 表示未染色，1 表示染成红色，2 表示染成绿色
//     return colors.every((value, index) => value === 0 ? dfs(index, graph, colors, 1) : true); // 如果已经被染色就不必在递归了
//   };
  
//   const dfs = (i, graph, colors, color) => {
//     if (colors[i]) { // 递归出口，如果已被染色，则判断是否与要被染色的颜色一致
//       if (colors[i] !== color) return false; // 不一致 return false
//       return true; // 一致 return true
//     }
//     colors[i] = color; // 未被染色，则将其染色
//     return graph[i].every(value => dfs(value, graph, colors, color === 1 ? 2 : 1));
//   };
  
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// // var searchInsert = function(nums, target) {
// //     let res = 0;

// //     for(let i = 0; i < nums.length; i++) {
// //         if(nums[i] < target) res = i + 1;
// //         if(nums[i] == target) res = i;
// //     }

// //     return res;
// // };

// const isInterleave = (s1, s2, s3) => {
//     if (s1.length + s2.length != s3.length) return false;
    
//     const check = (i, j, k) => {             // 检查ijk开始的子串是否满足题目条件
//       if (k == s3.length) return true;       // k越过边界，s3扫描完了，返回true
//       let isValid = false;                   // 默认 false
//       if (i < s1.length && s1[i] == s3[k]) { // i没有越界，且s1[i]和s3[k]相同
//         isValid = check(i + 1, j, k + 1);    // i k 移动1，递归考察
//       }
//       if (j < s2.length && s2[j] == s3[k]) { // j没有越界，且s2[i]和s3[k]相同
//         isValid = isValid || check(i, j + 1, k + 1); 
//       }
//       return isValid;      // 如果整个遍历过程都没有返回true，则返回默认的false
//     };
//     return check(0, 0, 0); // 递归入口
//   };

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @param {string} s3
//  * @return {boolean}
//  */
// var isInterleave = function(s1, s2, s3) {
//     if(s1.length + s2.length != s3.length) return false;
    
//     const fn = function(i, j, k){
//         if(k === s3.length) return true;
//         let res = false;
//         if(i < s1.length && s1[i] === s3[k]){
//            res = fn(i+1, j, k+1)
//         }
//         if(j < s2.length && s2[j] === s3[k]){
//             res = res || fn(i, j+1, k+1)
//         }        

//         return res;
//     }

//     return fn(0,0,0);
// };

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// var isInterleave = function(s1, s2, s3) {
//     let n1= s1.length;
//     let n2 = s2.length;
    
//     if (n1+n2!=s3.length) return false

//     let dp = Array.from(new Array(n1+1), () => new Array(n2+1))
//     dp[0][0] = true
//     // 初始化
//     for(let i=1;i<=n1;i++) {
//         dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1]
//     }
//     for(let i=1;i<=n2;i++) {
//         dp[0][i] = dp[0][i-1] && s2[i-1] == s3[i-1]
//     }

//     for(let i =1;i<=n1;i++) {
//         for(let j=1;j<=n2;j++) {
//             dp[i][j] = dp[i-1][j] && s1[i-1] == s3[i-1+j] || dp[i][j-1] && s2[j-1] ==s3[i+j-1]
//         }
//     }

//     return dp[n1][n2]
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxCoins = function(nums) {
//     if(nums.length == 0) return 0;

//     nums = [1,...nums,1];

//     let length = nums.length;

//     let dp = Array.from(new Array(length), ()=> new Array(length).fill(0));

//     for (let i = length-3; i > -1; i--) {
//         for (let j =i+2;j < length;j++) {
//             let max = 0;
            
//             for(let k = i+1;k<j;k++) {
//                 let temp = dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]
//                 if(temp>max) {
//                     max = temp
//                 }
//             }
//             dp[i][j] = max
//         }
//     }
//     return dp[0][length-1]
// };
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//     let left = 0,
//       right = numbers.length - 1
//     while (left < right) {
//       // 当两个指针对应的元素和等于 target直接返回
//       if (numbers[left] + numbers[right] === target) {
//         return [left + 1, right + 1]
//       } else if (numbers[left] + numbers[right] > target) {
//         // 当和大于target，则右侧减小(较大的值减小)
//         right--
//       } else {
//         // 当和小于target，则左侧增大(较小的值增大)
//         left++
//       }
//     }
//   }

// var generateTrees = function(n) {
//   let results = new Array(n+1).fill(undefined).map(()=>[]);
//   if(n===0) return [];
//   results[0].push(null);
//   for(let i=1; i<n+1; i++){  //求i个节点的所有组合
//       for(let j=1; j<i+1; j++){  //其中第j个节点作为根节点
//           results[j-1].forEach(left =>{  //左子树的所有组合
//               results[i-j].forEach(right =>{  //右子树的所有组合
//                   let root = new TreeNode(j);
//                   root.left = left;
//                   root.right = cloneTree(right, j);  //右子树偏移j
//                   results[i].push(root);
//               })
//           })
//       }
//   }
//   return results[n];
//   function cloneTree(root, offset){
//       if(!root) return null;
//       let newRoot = new TreeNode(root.val+offset);
//       newRoot.left = cloneTree(root.left, offset);
//       newRoot.right = cloneTree(root.right, offset);
//       return newRoot;
//   }
// };

/**
 * @param {number[]} numbers
 * @return {number}
 */
// var minArray = function(numbers) {
//     let pre = 0,
//         next = 1;
//     if(numbers.length < 2) return numbers[0];

//     for(let i = 0; i < numbers.length -1; i++) {
//         if(numbers[pre] > numbers[next]) break;
//         pre++;
//         next++;
//     }

//     if(next >= numbers.length) next = 0;

//     return numbers[next];
// };

/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {
//     if(grid.length === 0) return 0;
//     let row = grid[0].length -1,
//         col = grid.length - 1;
    
//     for(let i = 1; i <= row; i++) grid[0][i] += grid[0][i-1];
//     for(let i = 1; i <= col; i++) grid[i][0] += grid[i-1][0];

//     for(let i = 1; i <= col; i++) {
//         for(let j = 1; j <= row; j++) {
//             grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]) 
//         }
//     }

//     return grid[col][row]
// };

/**
 * @param {number} N
 * @return {boolean}
 */
// var divisorGame = function(N) {
//     if(N==1) return false;
//     if(N==2) return true;
//     return N%2 === 0;
// };

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
// var splitArray = function(nums, m) {
//     let n = nums.length,
//         dp = Array.from(new Array(n + 1), ()=> new Array(m + 1).fill(Number.MAX_SAFE_INTEGER)),
//         sub = new Array(n +1).fill(0);
    
//     for(let i = 0; i < n; i++) sub[i+1] = sub[i] + nums[i];

//     dp[0][0] = 0;

//     for(let i = 1; i <= n; i++) {
//         for(let j = 1; j <= m; j++) {
//             for(let k = 0; k < i; k++) {
//                 dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j-1], sub[i] - sub[k]))
//             }
//         }
//     }

//     return dp[n][m]
// };

/**
 * @param {number[][]} matrix
 * @return {number}
 */
// var longestIncreasingPath = function(matrix) {
//     if(matrix.length === 0) return 0;

//     let res = 1,
//         row = matrix.length,
//         col = matrix[0].length;
    
//     for(let i = 0; i < row; i++) {
//         for(let j = 0; j < col; j++) {
//             dfs(i, j);
//         }
//     }

//     function dfs(r, c) {
//         if(r < 0 || c < 0 || r >= row || c >= col) return 0;

//         let max = 1;
//         //上
//         if(r-1>= 0 && matrix[r-1][c] > matrix[r][c]) max = Math.max(max, dfs(r-1, c) + 1)
//         //下
//         if(r+1 < row && matrix[r+1][c] > matrix[r][c]) max = Math.max(max, dfs(r+1, c)+1)
//         //左
//         if (c-1 >= 0 && matrix[r][c-1] > matrix[r][c]) max = Math.max(max, dfs(r, c-1)+1)
//         //右
//         if (c+1 < col && matrix[r][c+1] > matrix[r][c]) max = Math.max(max, dfs(r, c+1)+1)

//         res = Math.max(res, max);

//         return max;
//     }

//     return res;
// };

// /**
//  * @param {number[][]} matrix
//  * @return {number}
//  */
// var longestIncreasingPath = function(matrix) {
//     if(matrix.length === 0 || matrix[0].length === 0) return 0;
//     let res = 1,
//         row = matrix.length,
//         col = matrix[0].length,
//         dp = Array.from(new Array(row), () => new Array(col).fill(0));
    
//     for(let i = 0; i < row; i++) {
//         for(let j = 0; j < col; j++) {
//             dfs(i, j);
//         }
//     }

//     function dfs(r, c) {
//         if(r < 0 || c < 0 || r >= row || c >= col) return 0;
        
//         if (dp[r][c]) return dp[r][c];

//         // 以其自身做起点 默认节点数1
//         dp[r][c] = 1;
//         //上
//         if(r-1>= 0 && matrix[r-1][c] > matrix[r][c]) dp[r][c] = Math.max(dp[r][c], dfs(r-1, c) + 1)
//         //下
//         if(r+1 < row && matrix[r+1][c] > matrix[r][c]) dp[r][c] = Math.max(dp[r][c], dfs(r+1, c)+1)
//         //左
//         if (c-1 >= 0 && matrix[r][c-1] > matrix[r][c]) dp[r][c] = Math.max(dp[r][c], dfs(r, c-1)+1)
//         //右
//         if (c+1 < col && matrix[r][c+1] > matrix[r][c]) dp[r][c] = Math.max(dp[r][c], dfs(r, c+1)+1)

//         res = Math.max(res, dp[r][c]);

//         return dp[r][c];
//     }

//     return res;
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function(s, t) {
//     let map = new Map(),
//         count = s.length;

//     for(let i = 0; i < count; i++) {
//         if(map.has(s[i])) {
//             map.set(s[i], map.get(s[i] + 1))
//         } else {
//             map.set(s[i], 1)
//         }
//     }

//     for(let i = 0; i < t.length; i++) {
//         if(map.has(t[i]) && map.get(t[i]) > 0) {
//             count--;
//             map.set(t[i], map.get(t[i])-1)
//         }
//     }

//     return count === 0
// };

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isSubsequence = function(s, t) {
//     if(s.length === 0) return true;

//     let pre = 0,
//         next = 0;
    
//     while(next < t.length) {
//         if(s[pre] === t[next]) pre++;
//         next++;
//     }

//     return s.length === pre;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//     if(!root) return 0;
//     let max = 0;

//     const dfs = function(node, count) {
//         if(!node) {
//             max = Math.max(max, count);
//             return
//         }

//         dfs(node.left, count+1);
//         dfs(node.right, count+1);
//     }

//     dfs(root, 0);

//     return max;
// };

// 太难了
// var minimalSteps = function(maze) {
//     const dx = [1, -1, 0, 0]
//     const dy = [0, 0, 1, -1]

//     let n = maze.length
//     let m = maze[0].length

//     // 机关&石头
//     const buttons = []
//     const stones = []

//     // 起点&终点
//     let startX = -1, startY = -1, endX = -1, endY = -1

//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < m; j++) {
//             if(maze[i][j] === 'M') {
//                 buttons.push([i, j])
//             }
//             if(maze[i][j] === 'O') {
//                 stones.push([i, j])
//             }
//             if(maze[i][j] === 'S') {
//                 startX = i, startY = j
//             }
//             if(maze[i][j] === 'T') {
//                 endX = i, endY = j
//             }
//         }
//     }

//     // 机关&石头的数量
//     let nb = buttons.length, ns = stones.length

//     // 判断边界
//     function inBound(x, y) {
//         return x >= 0 && x < n && y >= 0 && y < m;
//     }

//     // bfs
//     function bfs(x, y, maze) {
//         let ret = Array.from(Array(n), () => Array(m).fill(-1))
//         ret[x][y] = 0
//         const queue = new Array()
//         queue.push([x, y])
//         while(queue.length) {
//             let p = queue.shift()
//             let curx = p[0], cury = p[1]
//             for(let k = 0; k < 4; k++) {
//                 let nx = curx + dx[k], ny = cury + dy[k];
//                 if(inBound(nx, ny) && maze[nx][ny] !== '#' && ret[nx][ny] == -1) {
//                     ret[nx][ny] = ret[curx][cury] + 1;
//                     queue.push([nx, ny])
//                 }
//             }
//         }
//         return ret
//     }

//     let startDist = bfs(startX, startY, maze)

//     // 边界情况：没有机关
//     if (nb == 0) {
//         return startDist[startX][startY]
//     }

//     // 从某个机关到其他机关 / 起点与终点的最短距离。
//     const dist = Array.from(Array(nb), () => Array(nb + 2).fill(-1))

//     // 中间结果
//     const dd = new Array(nb)
//     for(let i = 0; i < nb; i++) {
//         let d = bfs(buttons[i][0], buttons[i][1], maze)
//         dd[i] = d
//         dist[i][nb + 1] = d[startX][startY]
//     }
//     for(let i = 0; i < nb; i++) {
//         let tmp = -1
//         for(let k = 0; k < ns; k++) {
//             let midX = stones[k][0], midY = stones[k][1]
//             if(dd[i][midX][midY] != -1 && startDist[midX][midY] != -1) {
//                 if(tmp == -1 || tmp > dd[i][midX][midY] + startDist[midX][midY]) {
//                     tmp = dd[i][midX][midY] + startDist[midX][midY]
//                 }
//             }
//         }
//         dist[i][nb] = tmp
//         for (let j = i + 1; j < nb; j++) {
//             let mn = -1
//             for (let k = 0; k < ns; k++) {
//                 let midX = stones[k][0], midY = stones[k][1]
//                 if (dd[i][midX][midY] != -1 && dd[j][midX][midY] != -1) {
//                     if (mn == -1 || mn > dd[i][midX][midY] + dd[j][midX][midY]) {
//                         mn = dd[i][midX][midY] + dd[j][midX][midY]
//                     }
//                 }
//             }
//             dist[i][j] = mn
//             dist[j][i] = mn
//         }
//     }

//     // 无法达成的情形
//      for (let i = 0; i < nb; i++) {
//         if (dist[i][nb] == -1 || dist[i][nb + 1] == -1) {
//             return -1
//         }
//     }

//     // dp 数组， -1 代表没有遍历到
//     const dp = Array.from(Array(1 << nb), () => Array(nb).fill(-1))
//     for(let i = 0; i < nb; i++) {
//         dp[1 << i][i] = dist[i][nb]
//     }

//     // 由于更新的状态都比未更新的大，所以直接从小到大遍历即可
//     for(let mask = 1; mask < (1 << nb); mask++) {
//         for(let i = 0; i < nb; i++) {
//             // 当前 dp 是合法的
//             if((mask & (1 << i)) != 0) {
//                 for(let j = 0; j < nb; j++) {
//                     // j 不在 mask 里
//                     if((mask & (1 << j)) == 0) {
//                         let next = mask | (1 << j)
//                         if(dp[next][j] == -1 || dp[next][j] > dp[mask][i] + dist[i][j]) {
//                             dp[next][j] = dp[mask][i] + dist[i][j]
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     let ret = -1
//     let finalMask = (1 << nb) - 1

//     for(let i = 0; i < nb; i++) {
//         if(ret == -1 || ret > dp[finalMask][i] + dist[i][nb + 1]) {
//             ret = dp[finalMask][i] + dist[i][nb + 1]
//         }
//     }

//     return ret
// }

// function minimalSteps(maze: string[]): number {
//     // #region 声明变量
//     const H = maze.length;
//     const W = maze[0].length;
//     const MS: number[] = []; // 机关 可到达点
//     const OS: number[] = []; // 石堆 可到达点
//     const O2S: number[] = []; // O -> S 的所有距离，用于过渡
//     const M2S: number[] = []; // M -> S 的所有距离
//     const M2T: number[] = []; // M -> T 的所有距离
//     const MO: number[][] = []; // M <-> O 直接的距离矩阵 MO[i][j] 表示 第 i 个 M 到第 j 个 O 的距离
//     const M2M: number[][] = []; // M 到每一个 M 的最短距离
  
//     let tmp: any; // 公用临时变量
//     let start: number = 0; // 起始点位置
//     let end: number = 0; // 终点位置
//     let mCount = 0; // 机关总数
//     // #endregion
  
//     // #region 找到 start 和 end 位置 & 计算 M 总数
//     for (let h = 0; h < H; ++h) {
//       for (let w = 0; w < W; ++w) {
//         const v = maze[h][w];
  
//         if (v === "S") {
//           start = h * W + w;
//         } else if (v === "T") {
//           end = h * W + w;
//         } else if (v === "M") {
//           mCount++;
//         }
//       }
//     }
//     // #endregion
  
//     // #region 确定是否能到达终点 & 计算 MS 和 OS
//     tmp = false; // 是否能到达终点
//     bfs(start, (v, h, w, level) => {
//       const mv = maze[h][w];
//       if (mv === "M") {
//         MS.push(v);
//       } else if (mv === "O") {
//         OS.push(v);
//         O2S.push(level);
//       } else if (mv === "T") {
//         tmp = level;
//       }
//     });
//     // #endregion
  
//     // #region 如果不能到达终点 或者 部分 M 无法到达，直接 return -1
//     if (tmp === false || MS.length !== mCount) {
//       return -1;
//     } else if (MS.length === 0) {
//       return tmp;
//     } else if (OS.length === 0) {
//       return -1;
//     }
//     // #endregion
  
//     // #region 计算 M2T
//     tmp = MS.length; // 还需找到 M 的个数
//     bfs(end, (v, h, w, level) => {
//       if (maze[h][w] === "M") {
//         M2T[MS.indexOf(v)] = level;
  
//         if (!--tmp) {
//           return true;
//         }
//       }
//     });
//     // #endregion
  
//     // #region 计算 MO
//     for (let i = 0; i < MS.length; ++i) {
//       const result: number[] = [];
//       let count = OS.length;
  
//       bfs(MS[i], (v, h, w, level) => {
//         if (maze[h][w] === "O") {
//           result[OS.indexOf(v)] = level;
  
//           if (!--count) {
//             return true;
//           }
//         }
//       });
  
//       MO.push(result);
//     }
//     // #endregion
  
//     // #region 计算 M2S
//     for (let i = 0; i < MS.length; ++i) {
//       let min = Infinity;
//       for (let j = 0; j < OS.length; ++j) {
//         min = Math.min(min, O2S[j] + MO[i][j]);
//       }
//       M2S[i] = min;
//     }
//     // #endregion
  
//     // #region 计算 M2M
//     for (let i = 0; i < MS.length; ++i) {
//       const result: number[] = [];
//       for (let j = 0; j < MS.length; ++j) {
//         if (i === j) {
//           result.push(0);
//         } else {
//           let min = Infinity;
//           for (let k = 0; k < OS.length; ++k) {
//             min = Math.min(min, MO[i][k] + MO[j][k]);
//           }
//           result.push(min);
//         }
//       }
//       M2M.push(result);
//     }
//     // #endregion
  
//     // 需要用的只有 M2S, M2T, M2M
//     const ml = MS.length;
//     const cache: number[][] = new Array(ml).fill(0).map(() => []);
//     const f = (v: number, i: number): number => {
//       if (v === 1 << i) {
//         return M2S[i];
//       }
  
//       if (cache[i][v] !== undefined) {
//         return cache[i][v];
//       }
  
//       let k = v - (1 << i);
//       let nowM = Infinity;
//       for (let j = 0; j < ml; ++j) {
//         if (k & (1 << j)) {
//           nowM = Math.min(nowM, f(k, j) + M2M[j][i]);
//         }
//       }
  
//       return (cache[i][v] = nowM);
//     };
  
//     let min = Infinity;
//     // 枚举最后一个
//     for (let i = 0; i < ml; ++i) {
//       min = Math.min(min, f((1 << ml) - 1, i) + M2T[i]);
//     }
  
//     function bfs(
//       start: number,
//       cb: (v: number, h: number, w: number, level: number) => true | void
//     ) {
//       const used = new Set([start]);
//       let task = [start];
//       let level = 0;
  
//       while (task.length) {
//         const newTask: number[] = [];
  
//         for (let i = 0, l = task.length; i < l; ++i) {
//           const v = task[i];
//           const h = ~~(v / W);
//           const w = v % W;
  
//           // 为 true 表示停止
//           if (cb(v, h, w, level) === true) {
//             return;
//           }
  
//           // Up
//           if (h > 0 && !used.has((h - 1) * W + w)) {
//             if (maze[h - 1][w] !== "#") {
//               newTask.push((h - 1) * W + w);
//             }
//             used.add((h - 1) * W + w);
//           }
//           // Down
//           if (h < H - 1 && !used.has((h + 1) * W + w)) {
//             if (maze[h + 1][w] !== "#") {
//               newTask.push((h + 1) * W + w);
//             }
//             used.add((h + 1) * W + w);
//           }
//           // Left
//           if (w > 0 && !used.has(h * W + w - 1)) {
//             if (maze[h][w - 1] !== "#") {
//               newTask.push(h * W + w - 1);
//             }
//             used.add(h * W + w - 1);
//           }
//           // Right
//           if (w < W - 1 && !used.has(h * W + w + 1)) {
//             if (maze[h][w + 1] !== "#") {
//               newTask.push(h * W + w + 1);
//             }
//             used.add(h * W + w + 1);
//           }
//         }
  
//         level++;
//         task = newTask;
//       }
//     }
  
//     return min;
//   }

/**
 * @param {number} n
 * @return {number}
 */

// const integerBreak = (n) => {
//     const memo = new Array(n + 1);
//     const dfs = (n) => {
//       if (memo[n]) return memo[n];
//       let res = 0;
//       for (let i = 1; i <= n - 1; i++) {
//         res = Math.max(res, i * (n - i), i * dfs(n - i));
//       }
//       return memo[n] = res;
//     };
//     return dfs(n);
// };

// const integerBreak = (n) => {
//     const dp = new Array(n + 1);
//     dp[1] = 1;  
//     dp[2] = 1; 
//     for (let i = 3; i <= n; i++) {
//       dp[i] = 0;
//       for (let j = 1; j <= i - j; j++) {
//         dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
//       }
//     }
//     return dp[n];
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMagicIndex = function(nums) {
//     let index = -1;

//     for (let i = 0; i < nums.length; i++) {
//         if(i === nums[i]) return i
//     }

//     return index;
// };

// /**
//  * @param {number[][]} nums
//  * @return {number[]}
//  */
// var smallestRange = function(nums) {
//     let points = [];
//     for(let i = 0;i < nums.length;i++){
//         for(let j = 0;j < nums[i].length;j++){
//             points.push([nums[i][j],i]);
//         }
//     }
//     points.sort((a,b) => a[0] - b[0]);
//     let counts = new Array(nums.length).fill(0);
//     let countUnique = 0,minStart = -1,minLen = Number.MAX_SAFE_INTEGER;
//     for(let i = 0,j = 0;j < points.length;j++){
//         if(counts[points[j][1]]++ === 0) countUnique++;
//         while(countUnique === counts.length){
//             if(points[j][0] - points[i][0] + 1 < minLen){
//                 minStart = points[i][0];
//                 minLen = points[j][0] - points[i][0] + 1;
//             }
//             let prev = points[i][0];
//             while(i <= j && prev === points[i][0]){
//                 if(--counts[points[i++][1]] === 0) countUnique--;
//             }
//         }
//     }
//     return [minStart,minStart + minLen - 1];
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var flatten = function(root) {
//     if(!root) return null;

//     let arr = [];
//     const fn = function(node) {
//         if(!node) return;
//         arr.push(node);
//         fn(node.left);
//         fn(node.right);
//     }
//     fn(root);

//     for(let i = 0; i < arr.length -1; i++) {
//         arr[i].left = null;
//         arr[i].right = arr[i+1];
//     }
// };
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function(num1, num2) {
//     let pre = num1.length - 1,
//         next = num2.length -1,
//         temp = 0,
//         result = '';

//     while(pre >= 0 || next >= 0) {
//         temp += Number(num1[pre] || 0) + Number(num2[next] || 0);
//         result = String(temp % 10) + result;
//         temp = Math.floor(temp/10);

//         pre--;
//         next--;
//     }

//     if(temp !== 0) result = String(temp) + result;

//     return result;
// };

// let canFinish = function(numCourses, prerequisites) {
//     // 如果没有先决条件，即所有的课程均没有依赖关系
//     // 直接返回 true
//     if (prerequisites.length === 0) {
//         return true
//     }

//     // 维护入度表
//     let inDegree = new Array(numCourses).fill(0)
//     // 维护临接表
//     let adj = new Map()
    
//     for (let e of prerequisites) {
//         inDegree[e[0]]++
//         if(!adj.has(e[1])) adj.set(e[1], [])
//         let vEdge = adj.get(e[1])
//         vEdge.push(e[0])
//     }

//     let queue = []
//     // 首先加入入度为 0 的结点
//     for (let i = 0; i < numCourses; i++) {
//         if (inDegree[i] === 0) {
//             queue.push(i)
//         }
//     }

//     while (queue.length > 0) {
//         // 从队首移除
//         var v = queue.shift() 
//         // 出队一门课程
//         numCourses--
//         if(!adj.has(v)) continue
//         // 遍历当前出队结点的所有临接结点
//         for(let w of adj.get(v)) {
//             inDegree[w]--
//             if (inDegree[w] === 0) {
//                 queue.push(w)
//             }
//         }
//     }
//     return numCourses === 0
// }
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var rob = function(root) {
//     if (root == null) return 0;
//     let robIncludeRoot = root.val; 
//     if (root.left) robIncludeRoot += rob(root.left.left) + rob(root.left.right);
//     if (root.right) robIncludeRoot += rob(root.right.left) + rob(root.right.right);
    
//     const robExcludeRoot = rob(root.left) + rob(root.right); 

//     return Math.max(robIncludeRoot, robExcludeRoot);
// };

// /**
//  * @param {string[]} words
//  * @return {number[][]}
//  */
// var palindromePairs = function (words) {
//     const map = new Map()
//     const set = new Set()
    
//     words.forEach((word, i) => {
//         map.set(word.split('').reverse().join(''), i)
//     })

//     for (let i = 0; i < words.length; i++) {
//         const word = words[i]
//         for (let j = 0; j <= word.length; j++) {
//             const left = word.slice(0, j), right = word.slice(j)
//             if (isPalindrom(left)) {
//                 if (map.has(right) && map.get(right) !== i) {
//                     const temp = `${map.get(right)},${i}`
//                     set.add(temp)
//                 }
//             }
//             if (isPalindrom(right)) {
//                 if (map.has(left) && map.get(left) !== i) {
//                     const temp = `${i},${map.get(left)}`
//                     set.add(temp)
//                 }
//             }
//         }
//     }
//     const ans = [...set].map(v => v.split(','))
//     return ans
// }
// // 判断是否是回文字符串
// function isPalindrom(str) {
//     let i = 0, j = str.length - 1
//     while (i < j) {
//         if (str[i] !== str[j]) {
//             return false
//         }
//         i++
//         j--
//     }
//     return true
// }

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//     const fn = (node1, node2) => {
//         if(!node1 || !node2) return node1 === node2;

//         if(node1.val === node2.val){
//             return fn(node1.left, node2.left) && fn(node1.right, node2.right);
//         } else {
//             return false;
//         }
//     }

//     return fn(p, q);
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var recoverTree = function(root) {
//     let prevNode = new TreeNode(-Infinity),
//         pre,
//         next;
  
//     const inOrder = function (root) {            
//       if (!root) return;
//       inOrder(root.left);
      
//       if (prevNode.val >= root.val && pre == null) pre = prevNode;           
//       if (prevNode.val >= root.val && pre != null) next = root;               
      
//       prevNode = root;                                   
//       inOrder(root.right);
//     };
  
//     inOrder(root);
  
//     [pre.val, next.val] = [next.val, pre.val];
//   };

/**
 * @param {string} s
 * @return {string[]}
 */
// var restoreIpAddresses = function(s) {
//     let arr = [];
// // 字符串， 。的个数， 现在的位置
//     const fn = function(str, count, index) {
//         if(count >= 4) {
//             if(index === s.length) arr.push(str);
//             return
//         }
//         for(let i = 1; i <= 3; i++) {
//             let num = s.substr(index, i),
//                 temp = index === 0 ? (str + num) : (str + '.' + num);

//             if(String(+num) === num && Number(num) <= 255) fn(temp, count+1, index+i)
//         }
//     }
    
//     fn("", 0, 0)
//     return arr;
// };

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
// var countBinarySubstrings = function(s) {
//     if(s==='')return 0
//     let arr = []
//     let conte=1
//     for(let i=1;i<s.length;i++){
//         if(s[i]===s[i-1]){
//             conte++
//         }else{
//             arr.push(conte)
//             conte=1
//         }
//     }
//     arr.push(conte)
//     let result =0
//     for(let i=1;i<arr.length;i++){
//         result += Math.min(arr[i],arr[i-1])
//     }
//     return result
// };

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function(board) {
//     let m = board.length;
//     if(m == 0) return;
//     let n = board[0].length,
//         cache = {};

//     const dfs = function(i, j) {
//         if(i < 0 || j < 0 || i === m || j === n || board[i][j] != 'O' || cache[i+'-'+j]){
//             return;
//         }
//         cache[i+'-'+j] = true;

//         dfs(i-1, j)
//         dfs(i, j-1)
//         dfs(i+1, j)
//         dfs(i, j+1)
//     }

//    for(let i = 0;i < m;i++){
//         for(let j = 0;j < n;j++){
//             // 从边缘O出发寻找其相连点都标示为不可替换
//             if((i == 0 || j == 0 || i == m-1 || j == n-1) && board[i][j] == 'O'){
//                 dfs(i,j);
//             }
//         }
//     }

//     for (let i = 1; i < m-1; i++) {
//         for (let j = 1; j < n-1; j++) {
//             if(!cache[i+'-'+j]&&board[i][j] === 'O'){
//                 board[i][j] = 'X'
//             }
//         }
//     }
// };

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// var cloneGraph = function(node) {
//     let map = new Map();

//     const clone = function(node) {
//         if(!node) return null;
//         if(map.has(node.val)) return map.get(node.val);

//         const cloneNode = new Node(node.val, []);
//         map.set(cloneNode.val, cloneNode);

//         for(let neighbor of node.neighbors) {
//             let cloneNeighborNode = clone(neighbor);
//             cloneNode.neighbors.push(cloneNeighborNode);
//         }
//         return cloneNode;
//     } 

//     return clone(node)
// };
  

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var multiply = function(num1, num2) {
//   if (num1 === '0' || num2 === '0') return '0';

//   let n = num1.length,
//       m = num2.length,
//       dp = new Array(n + m).fill(0);

//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = m - 1; j >= 0; j--) {
//       let sum = dp[i + j + 1] + Number(num1[i]) * Number(num2[j]);

//       dp[i + j + 1] = sum % 10;
//       dp[i + j] = dp[i + j] + Math.floor(sum / 10);
//     }
//   }

//   return dp.join('').replace(/^0*/, '')
// };

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   let stack = [];

//   for(let i = 0; i < s.length; i++) {
//       if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
//           stack.push(s[i])
//       } else {
//           let temp = stack.pop();
//           if((s[i] === ')' && temp === "(") || (s[i] === ']' && temp === "[") || (s[i] === '}' && temp === "{")) continue;
//           return false;
//       }
//   }

//   return stack.length === 0;
// };