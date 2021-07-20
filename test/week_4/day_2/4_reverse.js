function runProgram(input) {
  input = input.trim().split(' ')
  //console.log(input);
  var res = reverseSentence(input);
  console.log(res.join(" "))
  }

  function reverseSentence(input) {
      var reverse = [];
      for (var i =0 ; i < input.length; i++) {
          reverse.push(input[input.length-1 -i])
      }
      return reverse;
  }
  if (process.env.USER === "kartik") {
    runProgram(`A Transformation in education`);
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
  
  