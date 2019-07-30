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