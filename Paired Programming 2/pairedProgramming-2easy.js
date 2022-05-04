// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//   Odd Numbers: [7, 11, 15]

function splitOddAndEven(numbers) {
    let odd = [];
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
      } else {
        odd.push(numbers[i]);
      }
    }

    const returnObject = {
      odd,
      even,
    };

    return returnObject;
  }
console.log(splitOddAndEven([2, 4, 7, 11, 15, 16, 11, 13, 8, 18]));

// Create a function that checks an array for prime numbers then inserts any pimes into a new array.
// Example 1:
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

function checkPrime(number) {
    if (number <= 1) {
        return false
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
     } return true;

}
let arr = [2,, 3, 9, 12, 19, 20]

let prime = []

arr.forEach(function (element){
    const isPrime = checkPrime(element);
    if (isPrime) {
        prime.push(element)
        console.log('${element} is prime.')
    }else {
        console.log('${element} is not prime.')
    }
});

console.log(prime);