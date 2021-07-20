function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
  // console.log(input)
   var length = +input[0];
   var arr = input[1].trim().split(' ').map(Number)
 // console.log(length, arr)
  whoWins(length,arr)
  }


  function whoWins(length,arr){
      var count1 = 0;
      var count2 = 0;
      for (var i = 0; i < length; i++) {
          if (arr[i] == 1){
              count1++;
          } if (arr[i] == 0) {
              count2++
          }
      }  
     // console.log(count1);
      if (count1 > count2){
          console.log('Tom')
      } else if (count1 < count2){
          console.log('Jerry')
      } else {
          console.log('Another round')
      }
  }
  if (process.env.USER === "kartik") {
    runProgram(`5
    1 0 1 0 1`);
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
  
  