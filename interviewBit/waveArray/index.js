function waveArray(A) {
  A = mergeSort(A);
  for(var i = 1; i < A.length; i++){
    if(i % 2 === 0) { // a3, a5, ...
      if(A[i] < A[i-1]) {
        var temp = A[i - 1];
        A[i - 1] = A[i];
        A[i] = temp;
      }
    }else{
      if(A[i] > A[i - 1]) {
        var temp = A[i - 1];
        A[i - 1] = A[i];
        A[i] = temp;
      }
    }
  }
  return A;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  for (var i = 0; i < left.length; i++) {
    results.push(left[i]);
  }

  for (var i = 0; i < right.length; i++) {
    results.push(right[i]);
  }

  return results;
}

module.exports = waveArray;