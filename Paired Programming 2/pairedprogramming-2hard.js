let matchParanthesis = (input) => {
    let braces = "{}[]()"
    let stack = [] //stack to store brackets order

    for(let bracket of input) {
    // check if input string is same as above, then store index bracketsIndex
      let bracketsIndex = braces.indexOf(bracket)
      if(bracketsIndex % 2 === 0) {
     //stack has a memory of all opening brackets have a match
        stack.push(bracketsIndex + 1)
      } else { 
        if(stack.pop() !== bracketsIndex) {
          return false; 
        }
      }
    }//the length of stack becomes 0, then returns true, if not then returns false
    return stack.length === 0
   }
   console.log(matchParanthesis('([])[{}]{(())}'))
   console.log(matchParanthesis('([])[{}]{(([))}'))
   console.log(matchParanthesis('{()}[]'))