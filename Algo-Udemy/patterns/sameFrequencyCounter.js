//Write a function called sameFreqency. Diven two positive integers, find out the two numbers
//have the same frequency of digits. Your solution Must have the following complexities//
//time O(N)
//example 1  //sameFrequency(182, 281) => true
//example 2  //sameFrequency(31, 14) => false
//example 3  //sameFrequency(22, 222) => false
//example 4  //sameFrequency(3589578, 5879385) => true

//This problem is same as valid anagram//

function sameFrequency(num1, num2) {
  //takes two parameters//
  //create two variables strNum1 and strNum2 and convert it to string//
  let strNum1 = num1.toString(); //this method will convert integer into sring//
  let strNum2 = num2.toString();

  //check edge case//
  //return false if the length of num1 and num2 is not equal //
  if (num1.length !== num2.length) return false;

  //create two variable with value empty object//
 let countNum1 = {};
 let countNum2 = {};

 //loop over each elements in strNum1//
 for(let i = 0; i < strNum1.length; i++){
   //set
   countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
 }

for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
}

for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
}

return true;
}

sameFrequency(182, 281) // => true

//Another solution//
function sameFrequency(num1,num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    if (num1.length !== num2.length) return false;
    const lookup = {};
    for (let digit of num1) {
        lookup[digit] = lookup[digit] ? lookup[digit] + 1 : 1;
    }

    for (let digit of num2) {
        if (!lookup[digit]) {
            return false;
        } else {
            lookup[digit] -= 1;
        }


    }

    return true;
}

sameFrequency(243, 342) // => true
