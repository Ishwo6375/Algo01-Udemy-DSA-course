//write a function that accepts an array and a value 
//loop through the array and check if the current array element is
//equal to the value //if it is, return the index at which the element is found
//if the value is never found, return -1//

//time complexity = O(N);
//space complexity = O(1);

function linearSearch(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }

  return -1;

}


linearSearch([32,34, 1, 2, 3, 4,5], 1); //output => 2
search = linearSearch([0,31,-1,2,3,6],21) //output:  -1