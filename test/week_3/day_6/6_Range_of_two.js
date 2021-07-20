function runProgram(input) {
  input = input.trim().split(' ').map(Number);
  //console.log(input)
  for (var i = input[0]; i <= input[1]; i = i* 2) {
   if (i <= input[1]){
       console.log(i)
   }
  }
  }
  if (process.env.USER === "kartik") {
    runProgram(`8 32`);
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
  
  