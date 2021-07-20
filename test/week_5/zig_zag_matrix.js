function runProgram(input) {
  input = input.trim().split('\n')
 
  var [row, col] = input[0].trim().split(' ').map(Number)
 // console.log(row, col)
  var line = 1;
  var arr = []
  for (var i = 0; i <row; i++){
      var a = input[line].trim().split(' ')
      line++
      arr.push(a)
  }
 // console.log(arr);
  zigZag(arr,row,col)
  }
function zigZag(arr,row,col) {
    var str = '';
    for (var i = 0; i < row; i++) {
        if (i % 2 == 0) {
            for (var j =  col - 1; j >= 0; j--) {
                str = str + ' ' + arr[i][j]
            }
        }
        if (i % 2 == 1) {
            for (var k = 0 ; k < col; k++) {
                str = str + ' ' + arr[i][k]
            }
        }
    }
    console.log(str.trim());
}


  if (process.env.USER === "kartik") {
    runProgram(`4 3
    3 2 1
    4 5 6
    9 8 7
    10 11 12`);
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
  
  