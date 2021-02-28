// function fibonacci(n) {
//   if (n == 0) return 0;
//   else if (n == 1) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// const fibo = fibonacci(10);
// console.log(fibo);


function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  else if (n === 1) {
    return 1;
  }

  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fiboResult = fibonacci(10);
console.log(fiboResult);