function largestNumber(A) {
  const sorted = mergeSort(A);
  while(sorted[0] === 0 && sorted.length > 1) {
    sorted.shift();
  }
  return sorted.join('');
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
    if(parseInt(left[0] + '' + right[0]) < parseInt(right[0] + '' + left[0])) results.push(right.shift());
    else results.push(left.shift());
  }

  for (var i = 0; i < left.length; i++) {
    results.push(left[i]);
  }

  for (var i = 0; i < right.length; i++) {
    results.push(right[i]);
  }

  return results;
}

module.exports = largestNumber;