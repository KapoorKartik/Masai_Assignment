function runProgram(input) {
  input = +input
  console.log(input);
  newpat(input)
  vertical(input)
  //v2(input)
   pattern(input)
    
}

function pattern(input){
   var arr = []
    for (var i =0 ;i<input; i++){
    // console.log("*");
    arr.push("*")
    }
 
  console.log(arr.join(' ').trim());
}

function vertical(input){
    for (var i =0 ;i<input-2; i++){
        console.log("*");
    }
}

function newpat(input){
    var arr = []
    for (var i =0 ;i<input; i++){
  
    arr.push("*")
    
   
    }
  console.log(arr.join(' ').trim());
}

// function v2(input){
//     for (var i = 0 ; i < input - 2; i++){
//         console.log("*")
//     }
// }

if (process.env.USER === "kartik") {
  runProgram(`5`);
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




