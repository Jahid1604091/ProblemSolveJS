// function isPrime(n) {
//   if (n == 2) return true;
//   if (n > 2) {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return false
// }


function isPrime2(n) {
  if (n == 2) return true;
  if (n > 2) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false
}
console.log(isPrime2(1)); //false
console.log(isPrime2(2)); //true
console.log(isPrime2(5)); //true
console.log(isPrime2(6)); //false

// Big O =Function 1=> O(n)
// Big O =Function 2=> O(sqrt(n))