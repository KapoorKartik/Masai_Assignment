function runProgram(input) {
 input = input.trim().split(' ').map(Number)
 var record = input[0];
 var currentScore = input[1];
 if (currentScore > record){
     console.log('Broken');
 } else if (currentScore < record) {
     console.log('Not Yet');
 } else {
     console.log('Wao');
 }
}


if (process.env.USER === "kartik") {
  runProgram(`290 290`);
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




