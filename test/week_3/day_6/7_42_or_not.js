function runProgram(input) {
   input = input.trim().split('\n')
 //  console.log(input)
   var length = +input[0]
   var arr = input[1].trim().split(' ').map(Number);
 //  console.log(length, arr)
   check42(length, arr)
  }
  if (process.env.USER === "kartik") {
    runProgram(`5
    4 2 0 9 42`);
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
  
  function check42(length, arr) {
    var res = 'No'
    for (var i = 0; i < length; i++) {
     
        if (arr[i] == 42){
            res = 'Yes';
        }
    }
    console.log(res);
  } 