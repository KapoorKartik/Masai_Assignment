function runProgram(input) {
  input=input.trim().split("\n")
 // console.log(input);
  var a = +input[0]
  var b = input[1].trim().split(' ').map(Number)
//  console.log(a,b);
 sum1(a,b)
}

function sum1(a,b){
  var sum = 0
  var sum2 = 0
    for (var i =0; i <a; i++){
      if (b[i] % 2 == 0){
        sum = sum + b[i]
      }
    }
   //console.log(sum);
    for (var i =0; i <a; i++){
      if (b[i] % 2 != 0){
        sum2 = sum2 + b[i]
      }
    }
  // console.log(sum2);
    if (sum < sum2){
      console.log("Odd");
    } else {
      console.log("Even");
    }
  }



if (process.env.USER === "kartik") {
  runProgram(`3
  4 3 1`);
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




