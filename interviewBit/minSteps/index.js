function minSteps(A,B) {
  if(A.length < 2) return 0;
  let x0 = A[0];
  let y0 = B[0];
  let count = 0;
  for(let i = 1; i < A.length; i++){
    while(x0 !== A[i] || y0 !== B[i]){
      if(x0 === A[i] || y0 === B[i]) {
        if(x0 > A[i]) {
          x0--;
        } else if(x0 < A[i]) {
          x0++;
        } else if(y0 > B[i]) {
          y0--;
        } else {
          y0++
        }
        count++;
      }else {
        if(x0 > A[i]) x0--;
        else x0++;
        if(y0 > B[i]) y0--;
        else y0++;
        count++
      }
    }
  }
  console.log(count);
  return count;
}

module.exports = minSteps;