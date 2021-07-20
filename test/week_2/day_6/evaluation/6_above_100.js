function runProgram(input) {
  input=input.trim().split('\n')
 // console.log(input);
  var a = +input[0]
  var b = input[1].trim().split(' ').map(Number)
 // console.log(a,b);
  above100(a,b)
}
function above100(a,b){
    var sum = 0
    for(i = 0 ; i < a;i++){
        sum=sum+b[i]
    }
    //console.log(sum);
    if (sum > 100){
        console.log("Greater");
    }else {
        console.log("Lesser");
    }
}

if (process.env.USER === "kartik") {
  runProgram(`5
  21 2 2 54 8`);
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




