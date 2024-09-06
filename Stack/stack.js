class Node{
    constructor(value){
        this.value = value
        this.next  = null
    }
}


class Stack{
    constructor(value){
        let newNode = new Node(value)
        this.head = newNode
        this.length = 1
    }

    push(value){
        let newNode = new Node(value)

        if(this.length === 0){
            this.head = newNode
        }

        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    pop(){
        if(this.length === 0)
            return undefined

        let temp = this.head
        this.head = this.head.next
        temp.next = null

        this.length --
    }
}


const stack = new Stack(43)
stack.push(3)
stack.push(87)


//Pop the element
//stack.pop()
console.log(stack)