function runProgram(input) {
  input=input.trim().split(' ').map(Number)
  //console.log(input);
  var a =  input[0] ** 2
  //console.log(a);
  var b = input[1] ** 2
  var c = input[2] ** 2
 if ((a + b) == c ){
     console.log('Yes');
 } else {
     console.log('No');
 }
}



if (process.env.USER === "kartik") {
  runProgram(`3 4 6`);
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




