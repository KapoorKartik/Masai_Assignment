function runProgram(input) {
   input =input.trim().split('\n')
  // console.log(input)
   var n = +input[0]
   var arr1 = input[1].trim().split(' ').map(Number)
   var arr2 = input[2].trim().split(' ').map(Number)
  // console.log(n, arr1, arr2)
   intersect(arr1,arr2)
  }

  function intersect(arr1,arr2) {
      for (var i = 0; i < arr1.length; i++){
          for (var j = 0; j < arr2.length;j++){
              if (arr1[i] == arr2[j]){
                  console.log(arr1[i])
              }
          }
      }
  }
  if (process.env.USER === "kartik") {
    runProgram(`3
    4 5 7
    9 2 5`);
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
  
  