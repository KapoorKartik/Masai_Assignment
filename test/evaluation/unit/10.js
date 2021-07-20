function runProgram(input) {
   var command = input.trim().split('')
  // console.log(command);
   var x = 0;
   var y = 0;
   for (var i = 0; i < command.length; i++) {
        if (command[i] == "L"){
            x = x -1
        } if (command[i] == "R"){
            x = x + 1
        }if (command[i] == "D"){
            y = y - 1
        }if (command[i] == "U"){
            y = y + 1
        }
   }
   console.log(x, y)
  }
  if (process.env.USER === "kartik") {
    runProgram(`LLRDDR`);
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
  
  