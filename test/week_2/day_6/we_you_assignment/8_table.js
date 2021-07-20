function runProgram(input) {
  input = input.trim().split('\n')
 // console.log(input);
  var testcase = +input[0];
  var line = 1;
  for (var i = 1 ; i < input.length;i++){
      var n = +input[line++]
      table(n)
  }

}
function table(n){
    var fulltable = [];
    for (var i = 1; i <=10; i++){
        fulltable.push(n * i)

    }
    console.log(fulltable.join(" "));
}




    

if (process.env.USER === "kartik") {
  runProgram(`

  2
  2
  3`);
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




