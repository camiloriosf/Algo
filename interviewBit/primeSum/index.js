function primeSum(A) {
  for(var i = 2; i <= A/2; i++){
    if(isPrime(i) === 0) continue;
    else if(i + i === A) return [i,i];
    else if(isPrime(A - i) === 1) return [i, A - i];
  }
}

function isPrime(n){
  if(n < 2) return 0;
    for(var i = 2; i <= parseInt(Math.sqrt(n)); i++){
        if(n%i === 0) return 0;
    }
    return 1;
}

module.exports = primeSum;