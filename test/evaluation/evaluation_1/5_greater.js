function runProgram(input) {
  input = input.trim().split('\n')
 // console.log(input);
  var testcases = Number(input[0])
  //var line = 2
  
  for (var j = 2 ;j <=testcases*2; j= j+2){
    count=0
  var a = input[j].trim().split(' ').map(Number)
  for (var i =0 ;i <a.length;i++){
      if (a[i] > a[i+1]){
                count =count + 1
                
      }
     // console.log(count);
  }
  console.log(count);
} 
}



if (process.env.USER === "kartik") {
  runProgram(`2
  5 
  1 4 2 3 5
  5
  5 4 3 2 1`);
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




