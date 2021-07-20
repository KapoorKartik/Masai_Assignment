function runProgram(input) {
 var num = Number(input);
 var x = 32/num;
 if (num > 32){
     console.log('Too Low');
 } else if (num == 0){
     console.log(-1);
 } else {
   var f = Math.floor(x)
   console.log(f);
 }
}


if (process.env.USER === "kartik") {
  runProgram(`0`);
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




