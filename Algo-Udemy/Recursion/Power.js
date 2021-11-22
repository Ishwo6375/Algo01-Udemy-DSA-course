//Write a function called power which accept a base and an exponent. The function should 
//return the power of the base of the exponent. This function should mimic the functionlality
//of Math.pow() - do not worry about negative bases and exponents.

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}