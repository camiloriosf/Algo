function greatestCommonDivisor(A, B){
  // Given 2 non negative integers m and n, find gcd(m, n)

  // GCD of 2 integers m and n is defined as the greatest integer g such that g is a divisor of both m and n.
  // Both m and n fit in a 32 bit signed integer.
  // m : 6
  // n : 9

  // GCD(m, n) : 3 
  //
  // The GCD will always be less or equal than the min number
  // I will iterate between the min number and 2, if no match, then the GCD will be 1
  var min;
  if(A === B) return A;
  else if(A%B === 0) return B;
  else if(B%A === 0) return A;
  else if(A < B) min = A;
  else min = B;
  for(var i = parseInt(min/2); i > 1; i--) {
    if(A%i === 0 && B%i === 0) return i;
  }
  return 1;
}

module.exports = greatestCommonDivisor;