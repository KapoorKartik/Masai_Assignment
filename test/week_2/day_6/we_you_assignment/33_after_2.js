function runProgram(input) {
  input = input.trim().split('\n')
 // console.log(input);
  var n = +input[0] 
  //console.log(n);
  var int = input[1].trim().split(" ").map(Number)
  //console.log(int);
  find(input)
}
function find(input){
  var int = input[1].trim().split(" ").map(Number)
  //console.log(int);
  var b = -1
  for (var i =0; i <input[0];i++){
    if (int[i] == 2){
      var b = int[i+1]
      
    }
    if (int[int.length-1] == 2){
      var b = -1
    }
  }
  console.log(b)
}

if (process.env.USER === "kartik") {
  runProgram(`5
    3 4 3 0 3`);
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




