// let id= [3,1,3,4,2,5];
// let uniqueId = [];
// for(i = 0; i<id.length ; i++)
// {
//     let element = id[i];
//     let index = uniqueId.indexOf(element);//check element in uniqueId
//     if(index == -1)
//         {
//             uniqueId.push(element);
//         }
// }
// console.log(uniqueId);

var id = [2,3,3,4,4,5,5,32];
var uniqueId = [];
for (let i = 0; i < id.length; i++) {
    const element = id[i];
    // console.log(element);
    var index = uniqueId.indexOf(element);
    if (index == -1) {
        uniqueId.push(element);
    }
}
console.log(uniqueId);