function runProgram(input) {
   input = input.trim().split('\n')
  // console.log(input)
   var [row,col] = input[0].trim().split(' ').map(Number)
 //  console.log(row,col)
   var line = 1
   var arr = []
   var str = ''
            for (var i = 0; i <row; i++) {
                arr.push(input[line].trim().split(' '))
                line++
            }
          //  console.log(arr)
            for (var i = col-1; i >= 0; i--) {
                for (var j = 0 ;j < row; j++){
                  str = str + ' ' + arr[j][i]
                }
            }
            console.log(str.trim());
  }
  if (process.env.USER === "kartik") {
    runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`);
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
  
  