function runProgram(input) {
 input = Number(input);
 var a = input-80
 var b = a-150;
 var c = a -650;
// console.log(a);
    units(a,b,c)
}


function units(a,b,c){
 if (a<= 150){
   console.log(a/3);
 } else if (a>150 && a<650){
   console.log(50 + (b/5) )
 } else (
   console.log(150 + (c/10))
 )
}





if (process.env.USER === "kartik") {
  runProgram(`930`);
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




