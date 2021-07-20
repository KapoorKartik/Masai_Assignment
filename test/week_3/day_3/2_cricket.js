function runProgram(input) {
 input = input.trim().split(' ').map(Number);
 var a = input[0];
 var b = input[1]
 //console.log(a,b);
 record(a,b)
}
  

function record(a,b){
    if (a>b){
        console.log('Not Yet');
    } else if (b<a){
        console.log('Broken');
    } else {
        console.log('Wao');
    }
}

if (process.env.USER === "kartik") {
  runProgram(`240 200`);
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




