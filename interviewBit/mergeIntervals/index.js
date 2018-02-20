function mergeInvervals(A,B) {
  let minRange = B[0];
  let maxRange = B[1];
  let result = [];
  let index = -1;
  for(let i= 0; i < A.length; i++){
    if(maxRange < A[i][0]) {
      result.push(A[i]);
      continue;
    }
    if(minRange > A[i][1]) {
      result.push(A[i]);
      continue;
    }
    if(index === -1) {
      index = i;
      result.push([minRange, maxRange]);
    }
    if(result[index][0] > A[i][0]) result[index][0] = A[i][0];
    if(result[index][1] < A[i][1]) result[index][1] = A[i][1];
  }
  return result;
}

module.exports = mergeInvervals;