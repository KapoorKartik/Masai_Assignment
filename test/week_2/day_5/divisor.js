function runProgram(input) {
    input=input.trim().split(" ").map(Number);
//    console.log(input);
//    console.log(input[0]);
//    console.log(input[1]);
//    console.log(input[2]);
   divisor(input)
}
function divisor(input){
    count=0;
    for(var i = input[0]; i<= input[1]; i++){
       if (i %input[2] == 0  ){
           count++
          
       }
    } 
    console.log(count);
}



if (process.env.USER === "kartik") {
  runProgram(`5 172 21`);
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




