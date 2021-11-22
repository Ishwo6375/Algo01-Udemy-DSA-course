//finding odd values //
//using helper method//
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]);

//solving problem using pure recursion//

function collectOddValuesPure(arr) {
  //assign a new variable newArr to hold the result//
  let newArr = [];

  //return the last values if length of array is equals to 0//
  if (arr.length === 0) {
    return newArr;
  }
  //check if the current number is divisible by 2 or not//
  if (arr[0] % 2 !== 0) {
    //if it is not push the number to newArr//
    newArr.push(arr[0]);
  }
  //makes a dublicate of newArr and slice from the 1th element of the array//
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
  return newArr;
}

collectOddValuesPure([1, 2, 3, 4, 5, 6, 7]);
