const isValidParenthesis = (str) => {
    const stack = [];
    const brackets = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    };

    for (let char of str) {
        if (brackets[char]) {
            stack.push(char);
        } else {
            let top = stack.pop();
            if (!top || brackets[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParenthesis("(){}[]"));  // true
console.log(isValidParenthesis("(])]"));    // false
console.log(isValidParenthesis("()"));      // true
console.log(isValidParenthesis("("));       // false



//Reverse string in a stack

const reverseString = (str) =>{

    const stack = []

    for(let char of str){
        stack.push(char)
    }

    let reverseString = "";

    while(stack.length !== 0){
        reverseString += stack.pop()
    }

    console.log(reverseString)
}

reverseString("hello world")