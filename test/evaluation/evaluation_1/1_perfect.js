function runProgram(input) {
  input = input.trim().split(' ').map(Number)
 // console.log(input);
 var a = input[0]
 var b = input[1]
 var c = input[2]
 var  d = 450 - (a + b + c)
   console.log(d);
}


if (process.env.USER === "kartik") {
  runProgram(`120 120 120`);
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




