function runProgram(input){
    var newInput = input.split(" ");
    var a = Number(newInput[0]);
    var b = Number(newInput[1]);
    var c = Number(newInput[2]);
    var x = Number(newInput[3]);
    var y = Number(newInput[4]);
    var z = Number(newInput[5]);
    console.log((a * x) + (b * y) + (c * z));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});