function runProgram(input) {
  oddsum(input)
}
function oddsum(input){
  //var n = input
  var sum = 0;
  for(var i = 1 ; i <= input; i++){
    if (i%2 != 0){
      sum = sum + i
      
    }
  }
  console.log(sum);
}

if (process.env.USER === "kartik") {
  runProgram(`10`);
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