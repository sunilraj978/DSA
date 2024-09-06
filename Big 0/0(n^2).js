const number = [1,2,3,4,5,6,7,8,9,10]



// 0(n^2)
const findNumberPair = (arr) =>{

    for(let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            console.log(`Pair ${arr[i]} - ${arr[j]}`)
        }
    }

    //O(n)
    for(let q=0; q<arr.length; q++){
        console.log('--------------'+q)
    }

// O(n^2) is a Dominant term
// "n" is a Non-Dominant term
// So we remove the "non-dominant" term and we're only left with O(n^2)
// This way, we simplify our bigO

}

findNumberPair(number)