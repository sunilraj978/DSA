
const mergeFunction = (arr) =>{
    if(arr.length <= 1) return arr;

    let midValue = Math.floor(arr.length / 2)
    
    const left = arr.slice(0,midValue)
    const right = arr.slice(midValue)

    return mergeSort(mergeFunction(left), mergeFunction(right))
}







const mergeSort = (arr1,arr2) =>{
    let i=0;
    let j=0;

    const temp = []

    while(i<arr1.length && j< arr2.length){
        if(arr1[i] < arr2[j]){
            temp.push(arr1[i])
            i++
        }
        else{
            temp.push(arr2[j])
            j++
        }
    }

    temp.push(...arr1.slice(i))
    temp.push(...arr2.slice(j))

    return temp;
}


console.log(mergeFunction([2,9,7,1,3,5]))
