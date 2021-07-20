function runProgram(input) {
 input = input.trim().split('\n')
 console.log(input);
 var a = +input[0];
 var b = input[1].trim().split(" ").map(Number)
 console.log(a,b);
 console.log(check42(a,b));
}
function check42(a,b){
    var c = "No"
    for (var i = 0; i < a;i++){
        if (b[i] == 42){
            c = "Yes"
        }
        // else if (b[i] != 42){
        //     return "No"
        // }
    }
   return c
}


if (process.env.USER === "kartik") {
  runProgram(`5
  2 7 42 9 2`);
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




