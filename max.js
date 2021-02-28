    // let b = 5;
    // let m = 2;
    // let s = 3;
    // if (b>m && b>s) {
    //     console.log("business is big");
    // }
    // else if (b<m && m>s) {
    //     console.log("Minister is big");
    // }
    // else
    // {
    //     console.log("sochib is big");
    // }

// let b = 3;
// let m = 3;
// let s = 5;

// console.log(Math.max(s,m,b));

// const a= [1,3,4,8];
// let max = a[0];
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     if (element < max) {
//         console.log("Max number.",max);
//     }
// }
//     console.log("Max number.",max);


// // let marks = [33,44,97,45,54];
// let marks = [3,1,2,2,1];
// let sum = 0;
// let max = marks[0];
// for (let i = 0; i < marks.length; i++) {
//     const element = marks[i];
//     console.log(element);
//     sum = sum + element;

//     // if (element > max) {
//     //     max = element;
//     // }
// }
// // console.log("Max number.",max);
// console.log("Max number.",sum);

function getArraySum(numbers){
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
let numbers = [1,2,2];
const result = getArraySum(numbers);
console.log(result);