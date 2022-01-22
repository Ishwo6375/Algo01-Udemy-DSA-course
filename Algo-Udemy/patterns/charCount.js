//Count every character in the string//

//example

// input = "Hello"//
//output = h:1, e:1, l:2 , o: 1

const str = "Ishwor";



function charCount(str){
  let obj = {};

  for(let char of str){
    char = char.toLowerCase();
    if(obj[char] > 0){
      obj[char]++;
    }else{
      obj[char] = 1;
    }
  }
  return obj;
}

charCount(str) // output => {i:1, s:1, h:1, w:1, o:1, r:1}