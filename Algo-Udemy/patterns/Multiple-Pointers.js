//Write a function called sumZero which accpets a sorted array of integers
//The function should find the  first pair where the sum is 0.
//Return an array that includes both values that sum to zero or undefined if
//a pair does not exist//
//example1 [-3, -2, -1, 0, 1, 2, 3] => [-3, 3] = 0
//example 2 [-2, 0, 1, 3] // undefined // doesnot equal to 0
//example 3 [1, 2, 3] => undefined // doesnot equal to 0


function sumZero(arr) {
  //initialize pointer of left and right//
  let left = 0;
  let right = arr.length - 1;
  //using while loop to check condition//
  while (left < right) {
    let sum = arr[left] + arr[right];
    //check conditions//
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]); // => [-3, 3]
//time complexity = O(n) linear time
//space complexity = O(1) constant 
