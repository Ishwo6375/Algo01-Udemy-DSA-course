//Merging Arrays Pseudocode//

//Create an empty array, take a look at the smallest values in each input array//
//While there are still values we haven't looked at...
//if the value in the first array is smaller that the value in teh second array
//push the value in the first array into our results and move on to the next valure in the first array//
//if the value in the first arrya is larger than the value in teh second array,
//push the value in the second array into our results and move on to the next value in the second array//
//Once we exhaust one array, push in all remaining values from the other array//

function merge(arr1, arr2){
  //create a new variable and set it equal to an empty array//
  let result = [];
  //assing two variable and set both equal to the first element of array//
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){
    //if the number of second array is greater than 1st array//
    if(arr2[j] > arr1[i]){
      //push the first number of array 1 to the result//
      result.push(arr1[i]);
      //increase index of array 1 by 1//
      i++;
    }else{
      //if the number of 1st array is greater than the second array//
      //push the number of second array to result//
      result.push(arr2[j]);
      //increment second array by 1
      j++;
    }
  }

  //if array2 is shorter than array1 and hit the end before the second array//
  //push remaining numbers of array1   to result
  while(i < arr1.length){
    result.push(arr1[i])
    i++;
  }
  //if array1 is shorter than array2 and hit the end before the first array//
  //push remaining numbers of array2 to result//
   while(j < arr2.length){
    result.push(arr2[j])
    j++;
  }

  return result;
}

merge([100], [1,2,3,5,6])// output [1,2,3,5,6,100]