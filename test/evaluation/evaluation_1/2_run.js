function runProgram(input) {
  input = input.trim().split(' ').map(Number)
 // console.log(input);
  var a = input[0]
  //console.log(a);
  var b = input[1]
  var c = input[2]
  var d = input[3]
  var e = input[4]
  var f = input[5]
  var g = input[6]
  var h = b+c+d+e+f+g
  console.log(a-h);
}


if (process.env.USER === "kartik") {
  runProgram(`40 6 6 6 6 6 6`);
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




