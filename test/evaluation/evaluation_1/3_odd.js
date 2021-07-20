function runProgram(input) {
  input = input.trim().split('\n')
 // console.log(input);
  var a = Number(input[0])
  var b = input[1].trim().split(' ').map(Number)
 // console.log(a,b);
  console.log(oddeven(a,b));
}

function oddeven(a,b){
    sum = 0
    sum1 = 0
    for(var i = 0; i <a ; i++){
        if (b[i] % 2 == 0){
            sum = sum + b[i]
        }
        if (b[i] % 2 != 0){
            sum1 = sum1 + b[i]
        }
    }
    return sum-sum1
}


if (process.env.USER === "kartik") {
  runProgram(`4
  1 2 3 4`);
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




