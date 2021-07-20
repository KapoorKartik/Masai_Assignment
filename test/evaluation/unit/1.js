function runProgram(input) {
   input = input.trim().split('')
  // console.log(input)
  var n = Math.round(input.length/2)
  var half1 = ''
  var res1 = ''
  var half2 = ''
  var res2 = ''
  var a = 'no'
  for (var i = 0 ; i <n ; i++ ){
    half1 = half1 + input[i]
    res1 = res1 + input[n-1-i]
  }
  console.log(half1,res1)
    for (var i = n ; i < input.length; i++) {
        half2 = half2 + input[i]
        res2 = res2 + input[input.length-i]
    }
console.log(half2,res2)
    if (res1 = half1 ) {
      if (res2 = half2) {
        a = 'yes';
      }
    
    }
    console.log(a);
  }
  if (process.env.USER === "kartik") {
    runProgram(`ababce`);
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
  
  