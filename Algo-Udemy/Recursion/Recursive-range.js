//Write a function called recursiveRange which accepts a number and adds up all the 
//numbers from 0 to the number passed to the function//

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// num(6)
// return 6 + (5)// => 21
//num(5)
//return 5 + (4)// => 15
//num(4)//
//return 4 + (3)// => 10
//num(3)//
//return 3 + (2)/=> => 6
//num(2)//
//return 2 + (1)//  => 3
//num(1)//
//return 1 + (0) => 1
//num(0)

//return 0//

function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}

recursiveRange(6) // output: 21 // 1 * 2 * 3 * 4 * 5 * 6

