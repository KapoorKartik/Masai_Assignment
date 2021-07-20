function runProgram(input) {
    input = input.trim().split('\n');
  //  console.log(input);
    var n = +input[0];
    var arr = input[1].trim().split(' ').map(Number);
  //  console.log(n,arr);
  var eSum = evenSum(n,arr)
   var oSum = oddsum(n,arr)
   if (oSum > eSum) {
       console.log('Odd');
   } else {
       console.log('Even');
   }
  }

  function evenSum(n,arr) {
      var sum = 0
      for (var i = 0;i < n;i++) {
          if (arr[i] % 2 == 0) {
              sum = sum + arr[i]
          }
      }
      return sum;
  }

  function oddsum(n,arr){
    var sum = 0
    for (var i = 0;i < n;i++) {
        if (arr[i] % 2 == 1) {
            sum = sum + arr[i]
        }
    }
    return sum;
  }
  if (process.env.USER === "kartik") {
    runProgram(`5
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
  
  