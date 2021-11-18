//Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
//The function should calculate the maximum sum of n consecutive elements in the array//
//example 1
//maxSubarraySum([1,2,5,2,8,1,5,], 2) //  => 10
//maxSubarraySum([1,2,5,2,8,1,5,], 4) //  => 17
//maxSubarraySum([4,2,1,6], 1) //  => 6

//Time complexity - O(N)//

const arr = [2,6,9,2,1,8,5,6,3];
const num = 3;


function maxSubarraySum(arr, num){
  //create  two variable maxSum and tempSum and set value to 0//
  let maxSum = 0;
  let tempSum = 0;

  //edge case return null if arr length is less than num//
  if(arr.length < num) return null;
//loop over each elements//
for(let i = 0; i < num; i++){
  //assign maxSum plus equal to 1st element of array//
  maxSum += arr[i];
}

// assign tempSum equal to temporory maxSum//
tempSum = maxSum // this is just for initial maxsum until another loops starts//
//start the loop from the given num//
//if it starts from 3 start the loop from index 3 of array//
//in this example num is 3 so i will start from index 3//
for(let i = num; i < arr.length; i++){
  //reassaign tempSum vairable//
  //subtrate 1st element of array with current num//
  //and add current num with the tempSum//
  tempSum = tempSum - arr[i - num] + arr[i];
  maxSum = Math.max(maxSum, tempSum);

}

return maxSum;


}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)// [8,5,6]  => 19











