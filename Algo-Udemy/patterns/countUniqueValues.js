//Count the index of unique values in the array//

//examples//
// input = [1,2,2,3,4,4,5,6,6]
// output = [6] => here we have 6 unique values without counting dublicates//
 //example 2 = [2,3,3,4,4,5,5,6,7,8,9]//
 //output = [8] => we have 8 unique values here//

 //psuedo code//

 //soution using two pointer//
 //set first pointer equals to 1st index of array//
 //loop over each elements in the array//
 //set another pointer equals to index of 1 of array//
 //check condition if value of first pointer is equal to value of second pointer or not//
 //if it is not equal increment first pointer by 1//
 //set value of second pointer equals to first pointer//
 // retrun index of array//




function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log([1, 1, 1, 2, 2, 3, 4, 5 , 5, 5, 5 ,6, 7])

//space complexity = O(1)
//time complexity = O(n)