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