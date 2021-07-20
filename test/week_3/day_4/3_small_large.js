function runProgram(input) {
 input = input.trim().split('\n')
// console.log(input);
 var a = +input[0]
 var b = input[1].trim().split(' ').map(Number)
 //console.log(a,b);
 check(a,b)
}

function check(a,b){
    var l=b[0]
    var s = b[0]
        for (var i = 0 ; i< a;i++){
           
        if (l<b[i]) {
           l=b[i]
        } 
        if (s>b[i]){
            s=b[i]
        }  
        }
        console.log(s);
        console.log(l);
}


if (process.env.USER === "kartik") {
  runProgram(`4
  -2 0 8 4`);
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




