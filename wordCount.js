    // let Allah = ' Allah is our  creator. '
    // Allah = Allah.trim()
    // console.log(Allah);
    // // console.log("a"+Allah);
    // count = 0;
    // for (let i = 0; i < Allah.length; i++) {
    //     let char = Allah[i];
    //     if (char == " " && Allah[i-1] != " ") {
    //         count++;
    //     }
        
    // }
    // count++;
    // console.log(count);




// function WordCount(Allah) { 
//     Allah = Allah.trim(); //count first space.
//     console.log(Allah);
//     // console.log("a"+Allah);
//     count = 0;
//     for (let i = 0; i < Allah.length; i++) {
//         let char = Allah[i];
//         if (char == " " && Allah[i-1] != " ") {
//             count++;
//         }
        
//     }
//     count++;
//     return count;
//     // return str.split(" ").length;
//   }

//   console.log(WordCount(" Allah is our  creator."));





function WordCount(Allah) {
    var count = 0;
    for (let i = 0; i < Allah.length; i++) {
        Allah = Allah.trim();//count first space.
        const char = Allah[i];
        if (char === " " && Allah[i-1] !== " ") {
            count++;
        }
    }
    count++;
    return count;
}
console.log(WordCount("  Allah is our creator."));
