function runProgram(input) {
 input = input.trim().split('')
 //console.log(input)
 var letter = 'abcdefghijklmnopqrstuvwxyz'
 var sum = 0
 for (var i = 0; i <letter.length; i ++){
     for (var j = 0; j <input.length; j ++){
         if (letter[i] == input[j]){
             sum = sum + i + 1
         }
     }
 }
 console.log(sum)
  }
  if (process.env.USER === "kartik") {
    runProgram(`jgc`);
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
  
  