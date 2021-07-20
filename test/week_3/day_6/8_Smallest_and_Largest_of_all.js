function runProgram(input) {
    input = input.trim().split('\n');
 //   console.log(input);
    var length = +input[0]
    var arr = input[1].trim().split(' ').map(Number);
 //   console.log(length, arr)
    smallest (length, arr)
    largest (length, arr)
  }
  if (process.env.USER === "kartik") {
    runProgram(`4
    -2 0 8 4`);
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
  

  function smallest (length, arr) {
    var smallNum = arr[0]
    for (var i =1; i<length; i++) {
      if (arr[i] < smallNum) {
        smallNum = arr[i];
      }
    }
    console.log(smallNum)
  }

  function largest (length, arr) {
    var largeNum = arr[0]
    for (var i =1; i<length; i++) {
      if (arr[i] > largeNum) {
        largeNum = arr[i];
      }
    }
    console.log(largeNum)
  }
  