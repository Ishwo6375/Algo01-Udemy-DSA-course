//Write a function factorial which accepts a number and returns the factorial of that 
//number. A factorial is the product of an integer and all the intergers below it; eg
//factorial four (4!) is equal to 21, because 4 * 3 * 2 * 1 equals to 24.
//factorial zero(0!) is always 1.

//factorial inerative solution//
function factorial(num){
  let total = 1;

  for(let i = num; i > 1; i--){
    total *= i;
      }

      return total;

}

factorial(4); //=> output = 24

//Recursive solution//

function factorialRecur(x){
    if(x < 0) return 0;
     if (x <= 1 ) return 1;
    return x * factorialRecur(x - 1);
}

factorialRecur(4); //=> output = 24