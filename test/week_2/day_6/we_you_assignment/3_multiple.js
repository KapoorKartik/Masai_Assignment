function runProgram(input) {
  input = Number(input)
  var output = ""
  for (var i =1 ; i <=input ;i++ ){
     for (var j = 1; j<=input;j++){
      output = output+ ' ' +(i*j)
     } 
  }var a =output.trim().split(" ");
  console.log(a);
   for (var i = 0 ; i <a.length;i = i+4){
       a.split('\n')
   }
  
}


if (process.env.USER === "kartik") {
  runProgram(`4`);
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




