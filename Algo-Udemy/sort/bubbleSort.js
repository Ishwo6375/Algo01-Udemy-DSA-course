//########BubbleSort Pseudocode//
//start looping from with a variable called i the end of the array towards the beginging//
//start an inner loop with a variable called j from the beginning until i - 1;
//if arr[j] is greater than arr[j+1], swap those two values!
//return the sorted array//

function bubbleSort(arr) {
  //assign a varaible with no value//
  let noSwaps;
  //iterate over elements//
  for (let i = arr.length; i > 0; i--) {
    //assign a value to noSwaps variable//
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      //check if current number is greater or less than the next number//
      //if current number is greater// 
      //swap current number with next number//
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,5,4,6,7,30]) // output = [1,2,3,4,5,6,7,8,30]
