function runProgram(input) {
 input = input.trim().split('')
 //onsole.log(input);
 console.log(plain(input));
 //console.log(input.length);
  }

  function plain(input) {
      var res = 'No'
      var n = input.length - 1;
      for(var i = 0; i < input.length; i++){
      if (input[i] == input[n-i]){
          res = 'Yes'
      }
      return res;
    }
      
  }
  if (process.env.USER === "kartik") {
    runProgram(`12216`);
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
  
  