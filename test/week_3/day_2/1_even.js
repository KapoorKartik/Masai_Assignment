function runProgram(input) {
 num = Number(input)
 //console.log(num);
 var count = 0
 sum = 0
for (var i = 0 ; i < num;i++){
    if (i % 2 == 0){
        sum = sum + i
    }
}  
 if (num % 2 == 0){
     sum = sum + num
 }
   console.log(sum); 
}





if (process.env.USER === "kartik") {
  runProgram(`10`);
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





