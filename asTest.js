
///max/minimum number check



// let names = ["babo","saad","22222","76","1"];
// let min = names[0];
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
    
//     if (element.length< min.length) {
//         min = element
//     }
 
// }
// console.log("Maximum number is:",min);





/// fibonacci number


// var febo = [0,1];
// for (let i = 2; i < 10; i++) {
//      febo[i] = febo[i-1] + febo[i - 2];
    
//     console.log(febo[i],febo[i-1], febo[i-2]);
// }
// console.log(febo)

// function fibonacci(n) {
//     var febo = [0,1];
//     for (let i = 2; i < n; i++) {
//         febo[i] = febo[i-1] + febo[i - 2];
//     }
//     return febo;
// }

// const feboResult = fibonacci(10);
// console.log(feboResult);



/// Prime or not Prime number check.

function isPrime(n) {
    for(var i = 2; i<n; i++){
        // console.log(i, n%i);
        if (n%i === 0) {
            return " Not Prime number";
        }
        else
            return "Prime number";
    }
}
const prime = isPrime(7);
console.log(prime);