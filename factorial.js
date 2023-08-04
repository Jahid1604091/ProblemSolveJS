function factorial(n) {
  let ans = 1;
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      ans = ans * i;
    }
  }
  return ans;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(5)); //120

//Big(O) => O(n)