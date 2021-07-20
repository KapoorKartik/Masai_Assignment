function runProgram(input) {
 num = +input
 var x = 32/num
 if (num == 0){
     console.log(-1);
 } else if (num > 32){
     console.log('Too Low');
 } else {
     console.log(Math.floor(x));
 }
}


if (process.env.USER === "kartik") {
  runProgram(`5`);
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




