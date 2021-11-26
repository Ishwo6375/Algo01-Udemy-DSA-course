//naive solution//

//loop over the longer string//
//loop over the shorter string//
//if the characters don't match, break out of the inner loop//
//if the characters do match, keep going//
//if you complete the inner loop and find a match, increament the count of matches//
//at the end return count//

function naiveSearch(long, short) {
  //assign a varaible count and set it equal to 0 to keep track of the match found//
  let count = 0;
  //first loop over each element in the long string//
  for (let i = 0; i < long.length; i++) {
    //nested loop for short string//
    for (let j = 0; j < short.length; j++) {
      //check the condition //
      if (short[j] !== long[i + j]) {
        //if short string character is not equal to long string character//
        //break out of loop
        break;
      }
      if(j === short.length - 1){
          count++;
      }
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");
