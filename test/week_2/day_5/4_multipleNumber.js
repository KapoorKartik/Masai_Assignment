//multipleNumber
function runProgram(input) {
  input = input.trim().split(" ").map(Number);
  console.log("input:", input);
  console.log(avg(input));
}

function avg(input) {
  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum = sum + input[i];
  }
  avg = sum / input.length;
  return avg;
}

if (process.env.USER === "kartik") {
  runProgram(`     1 2 3 4 5`);
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
