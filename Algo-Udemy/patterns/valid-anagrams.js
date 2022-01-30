//Given two strings, write a funciton to determine if the second
//string is an anagram of the first. An anagram is a word, pharse
//or name formed by rearranging the letters of another, such as cinema, formed
//from iceman//
//example validAnagram("anagram", "nagaram") => true
//example2 validAnagram("rat", "car") => false

//pseudo code//


function validAnagram(first, second) {
  //two parameters
  //return false if first length is not equal to second//
  if (first.length !== second.length) {
    return false;
  }
  //initialize a empty object//
  const lookup = {};
//loop over each elements of  first array
for(let i = 0; i < first.length; i++){
    //setting first[i] to a variable letter to reuse//
    let letter = first[i];
    //if letter exits, increment, otherwise set to 1
    //using ternary operator
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
}

 //loop over each elements of second array//
 for(let i = 0; i < second.length; i++){
     let letter = second[i];
     //can't find letter or letter is zero then it's not an anagram. return false//
     if(!lookup[letter]){
         return false;
     }else {
         lookup[letter] -= 1 //remove the matched anagram from array
     }
 }
 return true;
}

validAnagram("anagram", "nagaram");
validAnagram("123", "231");

//time complexity = O(n)
