function runProgram(input) {
    input = input.trim().split('\n');
   // console.log(input)
    var length = +input[0]
    var a = input[1].trim().split(' ').map(Number)
  // console.log(length, a)
    console.log(compete(a,length))
  }

  function compete(a,length) {
      var count = 0;
     for (var i = 1; i <length - 1; i++) {
         if (a[i-1] < a[i] && a[i+1] < a[i]){
             count = count + 1
         } 
     }
     if (a[0] > a[1]){
        count = count + 1
    } if (a[length-1] > a[length - 2]) {
        count = count + 1
    }
     return count
  }
  if (process.env.USER === "kartik") {
    runProgram(`8
    -3 -2 -4 -2 -5 -1 -18 0`);
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
  
  