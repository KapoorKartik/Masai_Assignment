// single input Number

function sumOfN(n) {
  var res = (n * (n + 1)) / 2;
  return res
}
function runProgram(input) {
  input = Number(input);
 console.log(sumOfN(input)) 
}





// sumof n natural number ---> n(n+1)/2

if (process.env.USERNAME === "Chandu") {
  runProgram(`4`);
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
