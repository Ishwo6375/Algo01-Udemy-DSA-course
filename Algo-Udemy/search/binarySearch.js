//Write a function that accetps a sorted array and a value
//create a left pointer at the start of the array, and a right 
//pointer at the end of the array//
//while the left pointer comes before the right pointer//
//create a pointer in the middle
//if you find the value you want, return the index//
//if the value is too small, move the left pointer up//
//if the value is too large, move the right pointer down//
//if you never  find the value, return -1//

//example 1
//binarySearch([1,2,3,4,5,], 2) // 1
//binarySearch([1,2,3,4,5], 3) // 2

function binarySearch(arr, elem){
  //set the start vlaue of the array//
  let start = 0;
  //set the end value  of the array//
  let end = arr.length - 1;
  //set the middle value of the array//
  let middle = Math.floor((start + end) / 2);

  //check condition if the middle vlaue is eqaul to value we are searching//
  //if middle value is not equal to the value we are looking do this//
  while(arr[middle] !== elem && start <= end){
    // check if the value we are looking is less than the middle value in the array//
  if(elem < arr[middle]) {
    //if it is less than the middle value//
    end = middle - 1;
    //if the value we are looking is greater than middle do this//
  }else{
    start = middle + 1;
  }
 // reassign middle value//
  middle = Math.floor((start + end) / 2);

  }
  //at the end return middle if the middle is equal to value//
  //otheriwse return -1//
  //using ternary operator
  return arr[middle] === elem ?  middle : -1;

  //using normal if else//
//   if(arr[middle] === elem) {
//     return middle;
//   }
//  return -1;
}

binarySearch([2,5,6,9,13,15,28,30], 9); //output : 3
binarySearch([2,5,6,9,13,15,28,30], 50); //output : -1 //beacuse 50 is not in the array//