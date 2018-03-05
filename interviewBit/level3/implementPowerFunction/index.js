// 7^5%5 = 2
// A = 7; B = 5; C = 5
// rem = 1
// check = 0
// temp = 2;
//
// rem = 2;
// temp = 2 * 2 = 4
// temp = 4;
// B = 2;
//
// temp = 16;
// temp = 1;
// B = 1;
//
// rem = 2
// temp = 1;
// B = 0;


function implementPowerFunction(A, B, C) {
  if (B == 0) return 1 % C;

  var ans = 1, base = A;
  while (B > 0) {
    // We need (base ** n) % p. 
    // Now there are 2 cases. 
    // 1) n is even. Then we can make base = base^2 and n = n / 2.
    // 2) n is odd. So we need base * base^(n-1) 
    if (B % 2 == 1) {
      console.log('odd1', ans, base, B);
      ans = (ans * base) % C;
      B--;
      console.log('odd2', ans, base, B);
    } else {
      console.log('even1', ans, base, B);
      base = (base * base) % C;
      B /= 2;
      console.log('even2', ans, base, B);
    }
  }
  if (ans < 0) ans = (ans + C) % C;
  return ans;
}

module.exports = implementPowerFunction;