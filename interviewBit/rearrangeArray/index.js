// Rearrange a given array so that Arr[i] becomes Arr[Arr[i]] with O(1) extra space.

// Example:

// Input : [1, 0]
// Return : [0, 1]

// Lets say N = size of the array. Then, following holds true :
// All elements in the array are in the range [0, N-1]
// N * N does not overflow for a signed integer

function rearrangeArray(A){
  // a new Array cant be created to mantain space compexity at O(1)
  // store both numbers at the same position
  // retrieve new number
  // A=[1,2,3,4,5,0]
  // i = 0
  // A[0] = A[0] + A[A[0]] = A[0] + A[1] = 1 + 2 * 6 = 13 ; // how to encode both numbers?
  // N remains constant, so it could be useful to use it as an encoder/decoder
  // N = 6
  // 13 % 6 = 1 *
  // 13 / 6 = 2 *
  // A[1] = A[1] + A[A[1]] = A[1] + A[2] = 2 + 3 * 6 = 20
  // 20 % 6 = 2
  // 20 / 6 = 3.3333
  // A[2] = A[2] + A[A[2]] = A[2] + A[3] = 3 + 4 * 6 = 27
  // 27 % 6 = 3
  // 27 / 6 = 4.5
  // A[5] = A[5] + A[A[5]] = A[5] + A[0]
  for(var i = 0; i < A.length; i++ ) {
    A[i] += (A[A[i]] % A.length) * A.length
  }
  for(var i = 0; i < A.length; i++){
    A[i] = parseInt(A[i]/6);
  }
  return A;
}

module.exports = rearrangeArray;