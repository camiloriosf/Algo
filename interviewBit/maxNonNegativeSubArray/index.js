function maxNonNegativeSubArray(A){
  var resultPrev = [];
  var resultNext = [];
  var sumPrev = 0;
  var sumNext = 0;
  var indexPrev = -1;
  var indexNext = -1;
  for(var i = 0; i < A.length; i++) {
    if(A[i] < 0) {
      if(resultNext.length === 0) indexNext = i+1;
      else if(sumPrev > sumNext) {
        sumNext = 0;
        resultNext = [];
        indexNext = i + 1;
      }
      else if(sumNext > sumPrev) {
        resultPrev = resultNext;
        sumPrev = sumNext;
        resultNext = [];
        sumNext = 0;
        indexNext = i + 1;
      }
      else {
        if(resultPrev.length > resultNext.length) {
          resultNext = [];
          sumNext = 0;
          indexNext = i + 1;
        }
        else if(resultNext.length > resultPrev.length) {
          resultPrev = resultNext;
          sumPrev = sumNext;
          resultNext = [];
          sumNext = 0;
          indexNext = i + 1;
        }
        else {
          if(indexPrev < indexNext) {
            resultNext = [];
            sumNext = 0;
            indexNext = i + 1;
          }
          else {
            resultPrev = resultNext;
            sumPrev = sumNext;
            resultNext = [];
            sumNext = 0;
            indexNext = i + 1;
          }
        }
      }
    } else if(indexNext > 0) {
      resultNext.push(A[i]);
      sumNext += A[i];
    } else {
      resultPrev.push(A[i]);
      if(indexPrev < 0) indexPrev = i;
      sumPrev += A[i];
    }
  }
  if(resultNext.length > 0) {
    if(sumPrev > sumNext) {
      sumNext = 0;
      resultNext = [];
      indexNext = i + 1;
    }
    else if(sumNext > sumPrev) {
      resultPrev = resultNext;
      sumPrev = sumNext;
      resultNext = [];
      sumNext = 0;
      indexNext = i + 1;
    }
    else {
      if(resultNext.length > resultPrev.length) {
        resultPrev = resultNext;
        sumPrev = sumNext;
        resultNext = [];
        sumNext = 0;
        indexNext = i + 1;
      }
      else {
        if(indexPrev >= indexNext) {
          resultPrev = resultNext;
          sumPrev = sumNext;
          resultNext = [];
          sumNext = 0;
          indexNext = i + 1;
        }
      }
    }
  }
  return resultPrev;
}

module.exports = maxNonNegativeSubArray;