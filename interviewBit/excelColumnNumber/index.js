function excelColumnNumber(A){
  // A -> 1
  // B -> 2
  // Z -> 26
  // AA -> 27
  // AB -> 28
  // AZ -> 52
  // BA -> 53
  // AAA -> 703
  // BAA -> 1379
  // 26 * (A.length - 1) + {A..Z}
  // AA =>  
  // AAA => 1*26^2 + 1*26^1 + 1*26^0
  // BAA => 2*26^2 + 1*26^1 + 1*26^0
  var charToNum = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
    'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19,
    'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
  }
  var result = 0;
  for(var i = 0; i < A.length; i++){
    result += charToNum[A[i]] * Math.pow(26,A.length -i -1);
  }
  return result;
}

module.exports = excelColumnNumber;