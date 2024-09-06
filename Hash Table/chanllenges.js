//count the number of word

const wordCounter = (txt) =>{
    const lowerText = txt.toLowerCase()

    const word = lowerText.split(/\s+/)

    const wordMap = {}

    for(let words of word){
        if(wordMap[words]){
            wordMap[words]++
        }
        else{
            wordMap[words] = 1
        }
    }

    console.log(wordMap)
}

wordCounter("Hello is is Peter KSL")