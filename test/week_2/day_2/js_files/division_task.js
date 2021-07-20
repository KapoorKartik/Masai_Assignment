function runProgram(input){
    var N = Number(input);
    var x =  32/N;
   if (N == 0){
       console.log("-1")
   } else if (N > 32 ){
       console.log("Too Low");
   }else {
       console.log(Math.floor(x))
   }
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