function runProgram(input) {
  input = input.trim().split(' ').map(Number)
 // console.log(input);
  var a = input[0]
  var b = input[1]
  var c = input[2]
  var e = a+b+c
 // console.log(e);
  coin(e);
}
function coin(e){
    if (e%2 == 0){
       console.log("YES");
    } if (e%2 != 0){
       console.log("NO");
    }
}


if (process.env.USER === "kartik") {
  runProgram(`359 129 481`);
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




