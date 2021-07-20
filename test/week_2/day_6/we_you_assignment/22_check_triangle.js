function runProgram(input) {
  input = input.trim().split('\n')
  //console.log(input);
  var testCases = +input[0]
  //console.log(testCases);
  var test= input[1].trim().split(" ").map(Number)
  //console.log(test);
  var a = test[0];
 
  var b = test[1];
 
  var c = test[2];
  //console.log(a,b,c);
 triangle(input)
}
function triangle(input){
    var testCases = +input[0]
    for (j=1; j <= testCases;j++){
    var test= input[j].trim().split(" ").map(Number)
    var a = test[0];
    var b = test[1];
    var c = test[2]
    
        if(a < (b+c) && b < (a+c) && c  < (b+a)){
           console.log("Yes");
        } else {
          console.log("No");
        }
    
}
}
  



if (process.env.USER === "kartik") {
  runProgram(`4
  4 5 13
  7 1 8
  2 5 4
  2 2 2`);
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




