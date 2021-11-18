//Given a sorted array of integers, write a function called search, that accepts a value and returns the
//index where the value passed to the function is located. If the value is not found, return -1

//example 1
//Search([1,2,3,4,5,6,], 4) => 3 because 4 is in the index of 3 in this array//
//example2
//Search([1,2,3,4,5,6,], 6) => 5 because 6 is in the index of 5 in this array//
//example 3
//Search([1,2,3,4,5,6], 11) => -1 because 11 is not in the array//

//Naive solution//

function search(arr, val){ // takes two parameters
 //loop over each elements//
 for(let i = 0; i < arr.length; i++){
     //check condition curren index of array is equal to value//
     if(arr[i] === val){
         return i;
     }
 }
 return -1;
} 

search([1,2,3,4,5,6], 6) // => 5

//time Complexity = O(N) linear 