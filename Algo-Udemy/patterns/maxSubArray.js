//Given an array of integers and a number, write a function called maxSubarraySum
//which finds the maximum sum of a subarray with the length of the number passed
//to the function.
//Note that a subarray must consist of consecutive elements from the original array. In the
//first example below [100,200, 300] is a subsarray of the orignal array, but 
//[100, 300] is not.

//examples maxSubarraySum([100,200,300, 400], 2)=> output 700
//examples maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
//examples maxSubarraySum([-3, 4,0, -2, 6, -1], 2) // 5



function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}