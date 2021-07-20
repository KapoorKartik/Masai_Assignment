function runProgram(input) {
   input = input.trim().split('\n')
   var [r,c] = input[0].trim().split(' ').map(Number)
   var line = 1;
   var sum = 0
   for (var i = 0 ; i<r; i++) {
       var a = input[line].trim().split(' ').map(Number)
       line++
     //  console.log(a);
        for (var j =0 ; j<c; j++) {
            if (a[j] % 3 ==0) {
                sum = sum + a[j]
            }
        }
   }
   console.log(sum)
}
  if (process.env.USER === "kartik") {
    runProgram(`2 3
    3 1 8
    2 6 0`);
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
  
  