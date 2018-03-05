function countElementOccurence(A,B){
  var start = 0;
  var end = A.length - 1;
  var minIndex = -1;
  while(start <= end) {
    var mid = parseInt((start + end)/2);
    if(A[mid] === B) {
      minIndex = mid;
      end = mid - 1;
    }
    else if(A[mid]>B) end = mid - 1
    else start = mid + 1;
  }
  start = 0;
  end = A.length - 1;
  var maxIndex = -1;
  while(start <= end) {
    var mid = parseInt((start + end)/2);
    if(A[mid] === B) {
      maxIndex = mid;
      start = mid + 1;
    }
    else if(A[mid]>B) end = mid - 1
    else start = mid + 1;
  }
  if(maxIndex === -1 || minIndex === -1) return 0;
  return maxIndex - minIndex + 1;
}

module.exports = countElementOccurence;