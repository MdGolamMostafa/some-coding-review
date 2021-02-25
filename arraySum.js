// function getArraySum(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         let element = numbers[i];
//         sum = element + sum;       
//         }
//         return sum
// }

// let numbers= [1,2,3,4,];

// console.log(getArraySum(numbers));
var array = [1, 2, 3, 4];
    
    // Getting sum of numbers
    var sum = array.reduce
    (
        function(a,b){
        return a+b;
    }, 
    
    );
    
    console.log(sum); 