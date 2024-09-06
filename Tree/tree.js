class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value)

        if(this.root === null){
            this.root = newNode;
            return this;
        }

        let temp = this.root

        while(true){
            if(newNode.value === temp.value)
                return undefined

            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode
                    return this;
                }
                else{
                    temp = temp.left
                }
            }
            
            else{
                if(temp.right === null){
                    temp.right = newNode
                    return this;
                }
                else{
                    temp = temp.right
                }
            }

        }
    }


    findNumber(value){
        if(this.root === null){
            return false;
        }

        let temp = this.root;

        while(temp){
            console.log(temp.value)
            if(value < temp.value){
                temp = temp.left
            }
            else if(value > temp.value){
                temp = temp.right
            }
            else if(value === temp.value){
                return true;
            }
        }

        return false;
    }

    binarySearch(){
        let current = this.root

        let stack = []
        let data = []

        stack.push(current)

        while(stack.length){
            current = stack.shift()
            data.push(current.value)

            if(current.left) stack.push(current.left)
            if(current.right) stack.push(current.right)    
        }

        return data;
    }

    dfsPreOrder(node = this.root, data=[]){
        if(node === null) return data

        data.push(node.value)

        if(node.left) this.dfs(node.left, data)
        if(node.right) this.dfs(node.right, data)
            
        return data    
    }

    dfsPostOrder(node = this.root, data=[]){
        if(node === null) return data

        if(node.left) this.dfsPostOrder(node.left, data)
        if(node.right) this.dfsPostOrder(node.right, data)
            
        data.push(node.value)     
        return data    
    }

    dfsInOrder(node = this.root, data=[]){
        if(node === null) return data

        if(node.left) this.dfsInOrder(node.left, data)
        data.push(node.value)
        if(node.right) this.dfsInOrder(node.right, data)
                 
        return data    
    }
}

const bst = new BST()

//Insert
bst.insert(5);
bst.insert(8)
bst.insert(3)
bst.insert(1)
bst.insert(7)
bst.insert(9)


//FindElement
console.log(bst.findNumber(8))


//BST
console.log(bst.binarySearch())

//DFS
console.log(bst.dfs())