//[[1,3,5][2,6,9][3,6,9]]
// min = 1
// max = 5
//
// i = 0
// A[0][2] = 5 => max = 5;
// A[0][0] = 1 => min = 1;
// i = 1
// A[1][2] = 9 => max = 9;
// A[1][0] = 2 => min = 1;
// i = 2
// A[2][2] = 9 => max = 9;
// A[2][0] = 3 => min = 1;
//
// l1 = 3
// l2 = 3
// element = 5;
//
// while max = 9 > min = 1
// mid = 1 + (9 - 1) / 2 ) = 5
// counter = 0
//
// i = 0
// j = 0
// A[0][0] = 1 <= mid (5) => counter = 1
// A[0][1] = 3 => counter = 2;
// A[0][2] = 5 => counter = 3;
// A[1][0] = 2 => counter = 4;
// A[1][1] = 6 => break
// A[2][0] = 3 => counter = 5;
// A[2][1] = 6 => break;
//
// max = 5;
//
// mid = 1 + 2 = 3
// counter = 0;
//
// i = 0
// j = 0
// A[0][0] = 1 <= mid (3) => counter = 1;
// A[0][1] = 3 => counter = 2;
// A[0][2] = 5 => break
// A[1][0] = 2 => counter = 3;
// A[1][1] = 6 => break
// A[2][0] = 3 => counter = 4;
// A[2][1] = 6 => break
//
// min = 4
//
// mid = 4 + 0 = 4
// counter = 0
//
// A[0][0] = 1 <= mid (4) => counter = 1;
// A[0][1] = 3 => counter = 2;
// A[0][2] = 5 => break
// A[1][0] = 2 <= mid (4) => counter = 3;
// A[1][1] = 6 => break;
// A[2][0] = 3 => counter = 4;
// A[2][1] = 5 => break
//
// min = 5

// First check the min and max values in the whole array, any number cant be lower or higher
// than these values
// get the maximum numbers of element that an array will contain, considering the median
// get the mid value between the max and min values
// if the elements that are less or equal than the mid value are more than
// the maximum number of elements the medArray will contain, it means that this
// subarray of elements contain the median, so the maximum value of the median will be
// the max value of this array
// if the elements that are less or equal than the mid value are less than
// the maximum number of elements the medArray will contain, it meas that this
// subarray of elemens those not contain the media, so we adjust the min value to the
// one next to mid, this will be the minimum value the median could take
// we keep doing this until the max value is less or equal than the min value
// at this point, the min value will contain the median.

function matrixMedian(A) {
  var min = A[0][0];
  var max = A[0][A[0].length - 1];
  for (var i = 0; i < A.length; i++) {
    max = Math.max(max, A[i][A[0].length - 1]);
    min = Math.min(min, A[i][0]);
  }
  var l1 = A.length;
  var l2 = A[0].length;
  var element = (l1 * l2 + 1) / 2;
  
  while (max > min) {
    var mid = Math.floor((max + min) / 2);
    var counter = 0;
    for (var i = 0; i < l1; i++) {
      for (var j = 0; j < l2; j++) {
        if (A[i][j] <= mid) {
          counter++
        } else {
          break;
        }
      }
    }
    if (counter < element) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }
  return min;
}

module.exports = matrixMedian;


// function matrixMedian(A) {
//   var start = 0;
//   var end = (A.length * A[0].length) - 1;
//   var decoder = A[0].length;
//   var arr = []
//   for(var i = 0; i <= end; i++) {
//     arr.push(A[parseInt(i / decoder)][i % decoder])
//   }
//   arr = mergeSort(arr);
//   return arr[parseInt(arr.length/2)];
// }

// function mergeSort(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }

//   const center = Math.floor(arr.length / 2);
//   const left = arr.slice(0, center);
//   const right = arr.slice(center);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const results = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       results.push(left.shift());
//     } else {
//       results.push(right.shift());
//     }
//   }

//   for (var i = 0; i < left.length; i++) {
//     results.push(left[i]);
//   }

//   for (var i = 0; i < right.length; i++) {
//     results.push(right[i]);
//   }

//   return results;
// }