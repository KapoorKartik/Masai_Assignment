function runProgram(input) {
  input= input.trim().split('\n')
// console.log(inpu[t);
  var a = +input[0]
  var b =input[1].trim().split(' ').map(Number)
 // console.log(a,b);
//   if (b[0] == 42){
//      // console.log("Yes");
  console.log(check(a,b));
}



function check(a,b){
  for (var i = 0 ; i < a ;i++){
    if (b[i] == 42){
      y = "Yes"
      
    } else if (b[i] != 42) {
         y = "No"
    }
} return y
}

if (process.env.USER === "kartik") {
  runProgram(`5
  42 7 2 9 2`);
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




