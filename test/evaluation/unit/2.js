function runProgram(input) {
    input = input.trim().split('\n')
    in[ut[0] = input.trim
    console.log(input)
    var line = 0
    for (var i = 0; i < input.length;i++){
        var n = input[line].trim().split(' ').map(Number)
        line++
        // var arr = input[line].trim().split(' ').map(Number)
        // line++
    }
    console.log(n)
  }
  if (process.env.USER === "kartik") {
    runProgram(`1
    5
    1 2 3 4 5`);
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
  
  