function runProgram(input){
    var a = Number(input);
    if (a%7 == 0 && a%5 == 0){
        console.log("Masai School");
    }
    else if (a%7 == 0 ){
        console.log("Masai");
    }else if (a%5 == 0){
        console.log("School");
    } else {
        console.log("Hurray!");
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