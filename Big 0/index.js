const fruits = ["apple", "banana", "cherry", "date", "elderberry"]

const findFruitName = (fdb, fruit) => {
    for(let i=0; i<fdb.length; i++){
        if(fdb[i] === fruit) {
            console.log(`${fruit} Found`)
        }
    }
}

// 0(n)
findFruitName(fruits, "banana")

//0(1) 
// Need to get apple we know exact location no matter on input grows
const fruitName = (index) => fruits[index]
console.log(fruitName(0))
