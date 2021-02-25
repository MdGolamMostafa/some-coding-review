// let a = [3,34,4]
// console.log(Math.max(a[0],a[1],a[2]));
// console.log("Maximum number is:",Math.max.apply(null, marks));

let marks = [34,44,97,45,54,53,64,68,88];
let max = [0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element > max) {
        max = element;
    }    
}
console.log("Maximum number is:",max);