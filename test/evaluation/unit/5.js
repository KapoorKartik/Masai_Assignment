function runProgram(input) {
    input = input.trim().split('\n');
   // console.log(input);
    var n = +input[0]
    var line = 1
   
    for (var i = 0; i < n ;i++) {
      var arr1 = []
        var a = input[line].trim().split(' ');
        line++
     // console.log(a);
        for (var j = 0; j < a.length; j++){
            var arr = []
          var b = a[j]
          for (var k = b.length - 1; k >= 0; k--) {
                arr.push(b[k]);
          }// console.log(arr.join(''));
          arr1.push(arr.join(''));
        } 
        console.log(arr1.join(' '))
    }
 
  }
  if (process.env.USER === "kartik") {
    runProgram(`3
    hi there
    hello  world
    a  b`);
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
  
  