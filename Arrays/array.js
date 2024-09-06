class customArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }

    // Push data in Array
    push(item){
    this.data[this.length] = item
    this.length++
    }

    // Get the data in Array
    get(index){
        return this.data[index]
    }

    //Pop the data in Array
    pop(){
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
    }

    //shift the array
    shift(){
        const firstItem = this.data[0]

        for(let i=0; i<this.length; i++){
            this.data[i] = this.data[i+1]
        }

        delete this.data[this.length - 1]
        this.length--
    }

    //delete by index
    delete(index){
        for(let i=index; i<this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }

        delete this.data[this.length - 1]
        this.length--
        
    }
}



const myArray = new customArray()

//Push the data
myArray.push("Apple")
myArray.push("Orange")
myArray.push("Grapes")
myArray.push("Watermelon")

//get the data
myArray.get(3)

//Pop the Array
//myArray.pop()


//Shift the array
//myArray.shift()


//custom DeleteByIndex
console.log(myArray)
myArray.delete(1)
console.log(myArray)