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


