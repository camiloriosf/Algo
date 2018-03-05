// [15,16,17,1,2,3], 16
// Pivot = 17;
// if pivot < 16
// [15,16,17,1,2,3], 16
// [15,16,17,18,19,20,21,22,23,1,2,3], 2

function rotatedSortedArraySearch(A,B) {
  if(A.length === 0) return -1;
  var start = 0;
  var end = A.length - 1;
  while(start <= end) {
    var mid = parseInt((start + end) / 2);
    if(A[mid] === B) return mid;
    if(A[mid + 1] === B) return mid + 1;
    if(A[mid - 1] === B) return mid - 1;
    if((A[mid] > B && B < A[end]) || (A[mid] < B && B >= A[end])) {
      start = mid + 1
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

module.exports = rotatedSortedArraySearch;