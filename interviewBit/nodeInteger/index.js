function nodeInteger(A) {
  // sort elements (merge Sort)
  // iterate and check if next num is !== and A[i] === A.length - i - 1
  var sorted = mergeSort(A);
  for(var i = 0; i < sorted.length - 1; i++) {
    if(sorted[i] !== sorted[i + 1] && sorted[i] === sorted.length - i - 1) return 1;
  }
  if(sorted[sorted.length - 1] === 0) return 1;
  return -1;
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

module.exports = nodeInteger;