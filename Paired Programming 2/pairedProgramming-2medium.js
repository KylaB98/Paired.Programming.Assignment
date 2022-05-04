/* MEDIUM (1)
Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input 
is a vowel */
function vowelChecker(char) {
    if (char.length == 1) {
      var vowels = new Array("a", "e", "i", "o", "u");
      var isVowel = 'This is a vowel.';

      for (e in vowels) {
        if (vowels[e] == char) {
          isVowel = 'This is not a vowel';
        }
      }

      return isVowel;
    }
  }
 console.log(vowelChecker('a'));


//Medium 2

 function checkAnagram (a , b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){

    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
}
checkAnagram('racecar', 'raecarc')
checkAnagram('red', 'blue')
checkAnagram('dogs','cats')

//Medium 3
function gcd_two_numbers(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) 
      return false;
    a = Math.abs(a);
    b = Math.abs(b);
    while(b) {
      var t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  console.log(gcd_two_numbers(336, 360));
  console.log(gcd_two_numbers(78, 126));


/* Medium (4) */
/* Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; 
A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods 
should affect the car’s mileage adding to it each time and console logging the old mileage and the new 
mileage. */

const car ={
    make: "Aston Martin",
    model: "Vantage V12",
    year: 2023,
    milage: 2000,
    color: "Satin Black",
    workDrive: 33,
    worldDrive: 24000,
    errandDrive: 30,
    driveToWork(){
         console.log(`Old Milage: ${this.milage} | New Milage: ${this.milage+this.workDrive}`);
    }, 
    driveAroundTheWorld(){
        console.log(`Old Milage: ${this.milage+this.workDrive} | New Milage: ${this.milage+this.workDrive+this.worldDrive}`);
    },
    runErrands(){
        console.log(`Old Milage: ${this.milage+this.worldDrive+this.workDrive} | New Milage: ${this.milage+this.errandDrive+this.workDrive+this.worldDrive}`);
    }
};
car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();
