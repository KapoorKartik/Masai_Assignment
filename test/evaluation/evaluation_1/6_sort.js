function runProgram(input) {
  input = input.trim().split("\n")
  console.log(input);
  var a = +input[0]
  var b = input[2].trim().split(' ').map(Number)
  console.log(a,b);
  var arr = []
  var arr1 = []
  for (var i =0; i < b.length; i++){
      if (b[i] < b[i+1]){
          arr.push(b[i])
      } if (b[i] >= b[i+1]){
        arr1.push(b[i])
      }
  } console.log(arr);
  console.log(arr1);
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




