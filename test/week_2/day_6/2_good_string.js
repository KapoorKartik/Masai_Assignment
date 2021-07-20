function runProgram(input) { 
   input = input.trim().split('\n');
  // console.log(input)
   var testCases = Number(input[0]);
   for (var i = 1; i <= testCases; i++) {
       var badString = input[i];
      // console.log(badString)
       checkString(badString)
   }
  }

  function checkString(badString) {
    var goodString = ''
    for (var i = 0; i <badString.length; i++) {
        if (badString[i] != badString[i+1]){
            goodString = goodString + badString[i]
        } 
        
    }
      console.log(goodString);
    }

    
  if (process.env.USER === "kartik") {
    runProgram(`3
    abbb
    aaab
    ababa`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  



