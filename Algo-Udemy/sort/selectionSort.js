//slection sort pseudocode/

//store the first element as the smallest value you've seen so far//
//Compare this item to the next item in the array until you find a smaller number//
//if a smaller number is found, designate that smaller number to be the new
//"minimum" and continure until the end of the array.
//if the "minimum" is not the value (index) you initially begian with, swap the two values//
//Repeat this with the next element until the array is sorted//

function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    //set lowest to 1st element of array//
    let lowest = i;
    //iterate over each element from next to ith index//
    for (var j = i + 1; j < arr.length; j++) {
      //if arr[j] is less thatn the current lowest number//
      if (arr[j] < arr[lowest]) {
        //reassian lowest to the current lowest value//
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }

  }
  return arr;

}

selectionSort([0, 2, 34, 22, 10, 19, 17]);  // output : [0,2,10,17,19,22,34]
