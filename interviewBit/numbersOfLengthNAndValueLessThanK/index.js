// Given a set of digits (A) in sorted order, find how many numbers of 
// length B are possible whose value is less than number C.
// NOTE: All numbers can only have digits from the given set. 

// Input:
// 	  3 0 1 5  
// 	  1  
// 	  2  
// 	Output:  
// 	  2 (0 and 1 are possible)  

// 	Input:
// 	  4 0 1 2 5  
// 	  2  
// 	  21  
// 	Output:
// 	  5 (10, 11, 12, 15, 20 are possible)

// [0,1,2,3,4,5],2,21 => 7 (10,11,12,13,14,15,20)

// 1 <= B <= 9, 0 <= C <= 1e9 & 0 <= A[i] <= 9


// A => {0,1,2,3,4,5,6,7,8,9}
// B => {1,2,3,4,5,6,7,8,9}
// C => any number from 0 to 10e9

function numbersOfLengthNAndValueLessThanK(A,B,C){
  // no elements on A
  if (A.length === 0) return 0;
  // B > C
  if (C / Math.pow(10, B - 1) < 1) return 0;

  var count = 0, c, cn, d = C;
  // A = [0,1,2,3,4,5], B = 2, C = 21
  // i = 1
  // count = 0, d = 21
  // c = 2
  // cn = [1]
  // count = 0 + 1*6^1 = 6
  // d = 21 % 10 = 1
  // i = 0
  // count = 6, d = 1
  // c = 1
  // cn = [0]
  // count = 6 + 1*6^0 = 7
  // d = 0
  for (var i = B - 1; i >= 0; i--) {
    c = parseInt(d / Math.pow(10, i));

    cn = A.filter(function (a) {
      if (i == B - 1 && B > 1) {
        return a > 0 && a < c;
      } else {
        return a < c;
      }
    });
    console.log(c, d, cn);
    count += cn.length * Math.pow(A.length, i);
    console.log(count);
    if (A.indexOf(c) < 0) {
      break;
    }
    d = d % Math.pow(10, i);
  }
  return count;
}

module.exports = numbersOfLengthNAndValueLessThanK;