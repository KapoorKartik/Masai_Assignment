function runProgram(input) {
 input = input.trim().split('\n')
// console.log(input);
 var user = "Mani"
 var d = "No user found"
 for (var i = 0; i<input.length; i++){
   
   var a = input[i].trim().split(' ')
   if (a[0] == user ){
    var d = a[1]
    } 
 }
  console.log(d);
}





if (process.env.USER === "kartik") {
  runProgram(`Ajay 21345
  RamDas 32146
  Rohith 23522
  Nihal 98743`);
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




