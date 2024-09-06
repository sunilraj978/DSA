const InsertionSort = (arr) =>{
    for(let i=1; i<arr.length; i++){
        let key = arr[i]
        j = i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = key
    }
    return arr
}


const arr = [4,2,3,5,1]

console.log(InsertionSort(arr))