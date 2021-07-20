function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var testCases = Number(input[0]);
  var line = 1;

  for (var i = 0; i < testCases; i++) {
    var size = Number(input[line++]);
    var str = input[line++].trim().split("");
    console.log(size, str);
  }
}
if (process.env.USERNAME === "Chandu") {
  runProgram(`3
    5
    ab2cd
    5
    acfgh
    3
    123`);
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
