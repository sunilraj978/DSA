class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(value){
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        let newNode = new Node(value)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
            newNode.next = null
        }

        this.length ++
    }

    pop(){
        if(!this.head){
            return undefined
        }

        let temp = this.tail
        

        this.tail = this.tail.prev
        this.tail.next = null

        temp.prev = null
        this.length --
    }

    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.prev = null
            this.next = null
        }

        else{

            let temp = this.head
            newNode.next = this.head
            newNode.prev = null
            temp.prev = newNode
            this.head = newNode

        }

        this.length++
    }

    shift(){

        if(this.length === 0){
            this.head = null
            this.tail = null
        }

        let temp = this.head

        this.head = this.head.next
        this.head.prev = null

        temp.next = null

        this.length--

        
    }
}

let dlinkedList = new DoublyLinkedList(2)

dlinkedList.push(3)
dlinkedList.push(5)

//Pop the element

//dlinkedList.pop()


//Add the element at first
dlinkedList.unshift(20)


//remove the element at first
dlinkedList.shift()
console.log(dlinkedList)
