//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has it's corresponding
//value squared in the second array. The frequency of values must be the same.
//example1 ([1,2,3], ([4,1,9])) => true 
//example2 ([1,2,3], ([1,9])) => false
//example3 ([1,2,1], [4,4,1]) => false (must be same frequency)

//A navive solution
//time complexity = O(n2) //nested loop

// function same(arr1, arr2){
//     //return false if arr1 length is not equal to arr2 length
//     if(arr1.length !== arr2.length){
//         return false
//     }

//     //looping over every elements///
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1){
//             return false;
//         }
//         arr2.splice(correctIndex, 1)
//     }

//     return true;
// }

// same([1,2,4], [1,4,16]); // => true


//Refactored //Two seperate loop is better than one nested loop
//time complexity = O(n)

//pseudo code//
//create two empty object//
//loop over each elements in the first array//
//check if it is alreay in the object or not//
//if it is not in the object set its frequency to 1//
//if it already int he object increment its frequency by 1//
//loop over each elements in array2//
//do same as we done for array1//
//again start another loop for array 1//
//check if current element we are on in array1 square equals to element in array2//
//if it is not equal return false//
//check if the elements in second array have the same square value of 1st array or not//
//if there is not return false//
//for example if there is two 2 in array1 there should be two 4 in second array//
//other wise return true//

function same(arr1, arr2){
    //return false if arr1 length is not equal to arr2 length
    if(arr1.length !== arr2.length){
        return false;
    }

    //initialize a variables as empty object to hold result
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    //using for of loop insted of for loop to itereate each elements//
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false;
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
          return false;
      }
  }
  return true;

}



