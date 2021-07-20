function runProgram(input) {
  input = input.trim().split(' ').map(Number)
 //console.log(input);
  // console.log(input[0]);
  
console.log(missing(input));
} 
function missing(input){
  sum = 0;
  sum1 = 0
  for (var i = 0;i<input.length;i++){
    sum = sum+ input[i]
  }
    for (var i = 1;i<=input.length+1;i++){
        sum1 = sum1 +i
    }
  
  return sum1-sum
 

}

if (process.env.USER === "kartik") {
  runProgram(`4 2 1 3 6`);
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




