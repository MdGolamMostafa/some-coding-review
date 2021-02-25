let names = ["babo","saad","22222","76","1"];
let min = names[0];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    
    if (element.length< min.length) {
        min = element
    }
 
}
console.log("Maximum number is:",min);


