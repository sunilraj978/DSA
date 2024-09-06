class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    push(value){
        let newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.length = 1
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++
        
    }


    //Pop
    pop(){

        if(!this.head){
            console.log('No element defined')
            return
        }
        

        let temp = this.head
        let prev = this.head

        while(temp.next !== null){
            prev = temp
            temp = temp.next;
        }

        this.tail = prev
        this.tail.next = null
        this.length--

        if(this.length === 0){
            this.head = null
            this.tail = null
        }
    }

    unshift(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = value
            this.tail = value
        }

        newNode.next = this.head
        this.head = newNode

        this.length++
    }

    shift(){
        if(!this.head){
            return undefined
        }

        let temp = this.head

        this.head = this.head.next
        temp.next = null
        this.length--
        
    }

    getFirst(){
        return this.head
    }

    getLast(){
        return this.tail
    }

    getElementByIndex(index){
        let temp = this.head

        let counter = 0
        while(temp){
            if(counter === index)
                return temp

            temp = temp.next
            counter++
        }
    }

    reverse(){
        let temp = this.head
        this.tail = this.head
        this.head = this.tail
        let next = temp
        let prev = null

        for(let i=0;i<this.length;i++){
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
    }
}


const myLinkedList = new LinkedList(2)
myLinkedList.push(5)
myLinkedList.push(10)
myLinkedList.push(15)
console.log(myLinkedList)


//Pop from linked list
// myLinkedList.pop()

//Add the element at first
myLinkedList.unshift(20)
console.log(myLinkedList)

//remove the element at first
myLinkedList.shift()
console.log(myLinkedList)

//get the first element
console.log(myLinkedList.getFirst())

//get the last element
console.log('last')
console.log(myLinkedList.getLast())


//getElement By index
console.log('Element By index')
console.log(myLinkedList.getElementByIndex(2))