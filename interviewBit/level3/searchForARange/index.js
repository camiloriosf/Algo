/*
 * Given a sorted array of integers, find the starting and ending position of a given target value.
 * 
 Your algorithm’s runtime complexity must be in the order of O(log n).
 
 If the target is not found in the array, return [-1, -1].
 
 Example:
 
 Given [5, 7, 7, 8, 8, 10]
 
 and target value 8,
 
 return [3, 4].
 http://www.lifeincode.net/programming/leetcode-search-for-a-range-java/
 In fact, in this problem, we are going to use binary search to find the border of certain target, because there may be duplicate numbers. 
 We can easily find the left border of certain target.
 And we can try to find the left border of target + 1. And check if it exists to determine the right border.
 
 */

/*
we will first find the first index of B using binary search
we will find last index of B
return min and max;

*/

function searchForARange(A,B) {
  var start = 0;
  var end = A.length - 1;
  var min = -1;
  var max = -1;
  while(start <= end) {
    var mid = parseInt((start + end)/2);
    if(A[mid] === B && (A[mid - 1] < B || mid === 0 )) {
      min = mid;
      break;
    } else if(A[mid] === B && A[mid - 1] === B){
      end = mid - 1;
    } else if(A[mid] < B) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if(min === -1) return [-1,-1];
  start = end;
  end = A.length - 1;

  while(start <= end) {
    var mid = parseInt((start + end)/2);
    if(A[mid] === B && (A[mid + 1] > B || mid + 1 === A.length)) {
      max = mid;
      break;
    } else if(A[mid] === B && A[mid + 1] === B){
      start = mid + 1;
    } else if(A[mid] > B) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return [min,max];
}

module.exports = searchForARange;