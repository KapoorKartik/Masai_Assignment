function runProgram(input) {
  input = input.trim().split('\n')
 // console.log(input)
  var [r,c] = input[0].trim().split(' ').map(Number)
  for (var i = 1 ; i <= r;i = i + 2) {
      console.log(input[i].trim())
  }
  }
  if (process.env.USER === "kartik") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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
  
  