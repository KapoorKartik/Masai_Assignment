function runProgram(input) {
  input=Number(input)
  //console.log(input);
  factorial(input)
}
function factorial(input){
    var a = 1;
    for (i = 1; i <= input; i++)
    a=a*i
    console.log(a);
}

if (process.env.USER === "kartik") {
  runProgram(`6`);
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




