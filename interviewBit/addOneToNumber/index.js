function addOneToNumber(A) {
  var carry = 1;
  var lastZero = -1;
  if(A.length === 1 && A[0] === 0) return [1];
  for(var i = A.length - 1; i >= 0; i--) {
    if(lastZero === -1 && A[i] === 0) lastZero = i;
    if(lastZero !== -1 && A[i] !== 0) lastZero = -1;
    if(carry > 0) A[i]++;
    if(A[i] === 10) {
      A[i] = 0
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if(carry === 1) A.unshift(1);
  return A.splice(lastZero + 1);
}

module.exports = addOneToNumber;

// function addOneToNumber(A) {
//   const value = (parseInt(A.join('')) + 1).toString();
//   const result = [];
//   for(var i = 0; i < value.length; i++){
//     result.push(parseInt(value[i]));
//   }
//   return result;
// }