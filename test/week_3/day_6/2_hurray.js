function runProgram(input) {
 var num = +input;
//console.log(num);
if (num % 7 == 0 && num % 5 == 0){
    console.log('Masai School');
} else if (num % 7 == 0){
    console.log('Masai');
} else if (num % 5 == 0){
    console.log('School');
} else {
    console.log('Hurray!');
}
}


if (process.env.USER === "kartik") {
  runProgram(`70`);
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




