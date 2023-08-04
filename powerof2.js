// function isPowerOf2(n){
//     while(n>1){
//         if(n%2 !==0){
//             return false
//         }
//         n/=2;
//     }
//     return true
// }

//big o => O(logn)


function isPowerOf2_2(n) {
  return n < 1 ? false : (n & (n - 1)) === 0;
}

//Big O => O(1)

console.log(isPowerOf2_2(1)); // true
console.log(isPowerOf2_2(2)); //true
console.log(isPowerOf2_2(5)); //false


