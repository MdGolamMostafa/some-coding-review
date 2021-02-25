    let Allah = ' Allah is our  creator. '
    Allah = Allah.trim()
    console.log("a"+Allah);
    count = 0;
    for (let i = 0; i < Allah.length; i++) {
        let char = Allah[i];
        if (char == " " && Allah[i-1] != " ") {
            count++;
        }
        
    }
    count++;
    console.log(count);


// function WordCount(str) { 
//     return str.split(" ").length;
//   }
  
//   console.log(WordCount("hello world"));