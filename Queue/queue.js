class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Queue{
    constructor(value){
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }


    enqueue(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
            this.length = 1
        }

        else{
            this.tail.next = newNode
            this.tail = newNode

            this.length++
        }
    }

    dequeue(){

        if(this.length === 0)
            return undefined

        let temp = this.head
        this.head = this.head.next
        temp.next = null

        this.length--

    }

    min(){
        if(this.length === 0)
            return undefined

        let current = this.head
        let min = current.value

        while(current.next){

            current = current.next

            if(current.value < min){
                min = current.value
            }

            console.log(min)
        }
    }
}

const queue = new Queue(20)

//Push the element in queue
queue.enqueue(3)
queue.enqueue(7)


//Pop the element in queue
//queue.dequeue()


//Min element in the queue
queue.min()