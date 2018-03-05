// [12,13,14,15,1,2,3,4,5,6,7,8]
// First we compare if the first item is less than the last, if so, then the array was not rotated
// If not, we set the min value to the last item
// Perform a normal binary search, but if the item at mid is less than the
// min value, we set this value as the new min, and we store the index
// the new end will be mid -1
// if the mid is greater than the min value, we set the start to mid + 1

function rotatedArray(A) {
  if(A.length === 0) return 0;
  var start = 0;
  var end = A.length - 1;
  var min = A[end];
  var index = end;
  while (start <= end) {
    var mid = parseInt((start + end) / 2);
    if(A[mid] < A[mid + 1] && A[mid] < A[mid - 1]) return mid;
    if(A[mid] <= min) {
      min = A[mid];
      index = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return index;
}

module.exports = rotatedArray;