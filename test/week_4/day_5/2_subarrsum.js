function runProgram(input) {
   input = input.trim().split('\n')
   var [n,x] =input[0].trim().split(' ').map(Number)
   var arr = input[1].trim().split(' ').map(Number)
 console.log(pair(n,x,arr))
 
  }
  function pair(n,x,arr){
    var count = 0;
    for (var i = 0; i < n; i++) {
      for (var j = i+1; j< n ; j++) {
        if (arr[i]+ arr[j] == x){
          count++
        }
      }
    }
    return count
  }
  if (process.env.USER === "kartik") {
    runProgram(`8 11
    1 4 1 5 6 9 4 8`);
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
  
  