function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0];
    var line = 1 ;
    for (var i = 0; i <n ; i++) {
        var a = input[line].trim().split(' ').map(Number)
        line++
        res = a[1]-a[0]
      var divide = (res / 2)
      if (res % 2 == 1) {
          divide = divide+1
      } 
      console.log(Math.floor(divide))
    }
  }

 
  if (process.env.USER === "kartik") {
    runProgram(`2
    5 10
    6 10`);
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
  
  