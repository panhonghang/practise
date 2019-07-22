// JavaScript实现链表

// 节点
let Node = function(elem){
    this.elem = elem;
    this.next = null
}
// 链表类
let NodeList = function(){
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.show = show;
}
// find方法
let find = function(a){
    let current = this.head;
    while(current.elem !== a||current.next==null){
        current = current.next;
    }
    return current;
}

// insert方法
let insert = function(pre,elem){
    let newElem = new Node(elem);
    let current = this.find(pre);
    let next = current.next;
    current.next = newElem;
    newElem.next = next;
}

// show方法
let show = function(){
    let current = this.head;
    while(current.next !== null){
        console.log(current.elem);
        current = current.next;
    }
    console.log(current.elem);    
}

// remove方法
let remove = function(elem){
    let pre = this.head;
    while(pre.next==elem){
        pre = pre.next
    }
    pre.next = this.find(elem).next
}

let a = new NodeList();
let b = new Node('bb');
let c = new Node('cc');
let d = new Node('dd');
let e = new Node('ee');
let f = new Node('ff');

a.head.next = b;
b.next = c;

a.show();
a.remove('bb');
a.show();
a.insert('head','dd');
a.show();