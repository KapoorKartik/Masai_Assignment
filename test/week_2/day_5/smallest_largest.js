function runProgram(input) {
 input=input.trim().split("\n")
//   console.log(input);
var n = +(input[0]);
 // console.log(n);
var array = input[1].trim().split(" ").map(Number)
 //console.log(array);
  smallest(input)
largest(input)
}
function smallest(input){
    var array = input[1].trim().split(" ").map(Number)
    //console.log(array+ " array insode loop");
    var a = array[0];
    for (var i = 0; i < array.length; i++){
        if (a >array[i]){
            var a = array[i]
        }
        //console.log(b + "b");
    }
    console.log(a);
}

function largest(input){
    var array = input[1].trim().split(" ").map(Number)
    //console.log(array+ " array insode loop");
    var b = array[0];
    for (var i = 0; i < array.length; i++){
        if (b < array[i])
            var b = array[i]
        
        //console.log(b + "b");
    }
    console.log(b);
}


if (process.env.USER === "kartik") {
  runProgram(`1
  23`);
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




