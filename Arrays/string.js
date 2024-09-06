//reverse the string

const reverseString = (str) => str.split('').reverse().join('')

console.log(reverseString("Hello"))


//Palindrome

const palindrome = (str) => str.split('').reverse().join('') === str
console.log(palindrome('abba'))

//reverse Integer
const reverseInt = (int) => {
  const reverseInt =  int.toString().split('').reverse().join('')
    return parseInt(reverseInt)
}

console.log(reverseInt(312))
