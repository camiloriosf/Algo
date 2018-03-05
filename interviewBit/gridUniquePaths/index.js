function gridUniquePaths(A,B){
  if(A < 2 || B < 2) return 1;
 var upper = 1 
 var lower = 1;
 var max;
 var min;
 if(A < B) {
   min = A - 1;
   max = B - 1;
  }
 else {
   min = B - 1;
   max = A - 1;
  }
 for(var i = A + B -2; i > max; i--){
   upper *= i;
 }
 for(var i = 1; i <= min; i++) {
  lower *= i;
 }
 return upper/lower;
}

module.exports = gridUniquePaths;