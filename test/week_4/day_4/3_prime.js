function runProgram(input) {
   input = +input;
   //console.log(input);
   var c = prime(input)
   if (c == 0) {
       console.log("Yes")
   } else {
       console.log("No")
   }
  }

  function prime(input) {
      var count = 0;
      for (var i = 2; i < input; i++) {
       if (input % i == 0){
           count = count + 1
       }
      }
      return count;
  }
  if (process.env.USER === "kartik") {
    runProgram(`9`);
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
  
  