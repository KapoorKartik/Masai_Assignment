function runProgram(input) {
 input = input.trim().split(" ").map(Number)
// console.log(input);
 var a = input[0];
 var b = input[1];
 check(a,b)
}

function check(a,b){
for (var i = a ;i<=b;i= i*2){
       if (i<=b){
           console.log(i);
       }
}
}

if (process.env.USER === "kartik") {
  runProgram(`19 49`);
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




