// Determine whether an integer is a palindrome. Do this without extra space.

// A palindrome integer is an integer x for which reverse(x) = x where reverse(x) is x with its digit reversed.
// Negative numbers are not palindromic.

// Input : 12121
// Output : True

// Input : 123
// Output : False

// no negative numbers
// 101 => 1
// 0101 => 1

// 10101
// start = 2; end = 2

function palindromeInteger(A){
  if(A < 0) return 0;
  if(A === 0) return 1;
  const numToString = A.toString();
  var start = 0;
  var end = numToString.length - 1;
  while(start < end) {
    if(numToString[start] === numToString[end]) {
      start++;
      end--;
    } else return 0;
  }
  return 1;
}

module.exports = palindromeInteger;