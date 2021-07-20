function runProgram(input) {
  input=input.trim().split(" ").map(Number)
  console.log(input)
  console.log(input[0])
  console.log(input[1]) 
  console.log(input[2])
  console.log(input[3])
  console.log("-------");
  m(input)
}
function m(input){
    for (var i = 1 ; i<=input.length+1;i++){
       if (input[i] == 2){
        console.log(i + ' inside loop');
       }
                console.log(i);
            }
        
        console.log(i);
    
}



function missingNum(input){
  
}

if (process.env.USER === "kartik") {
  runProgram(`4 5 1 3`);
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




