function runProgram(input) {
   input= input.trim().split('\n')
   var n = +input[0];
   var arr = input[1].trim().split(' ').map(Number)
 //  console.log(n,arr)
   special(n,arr)
  }
  function special(n,arr) {
    var sum = 0
      for (var j= arr.length-1; j>=0; j--) {
        for(var i=0;i<j;i++){
          if(checkPrime(i,j) == 1){
            sum = sum + Math.abs(arr[j]-arr[i]) 
     }
   }
  }
  console.log(sum);
}


function checkPrime(i,j) {
  count=0;
  for (var k=2;k<=(j-i);k++){
              
    if ((j-i)%k == 0){
        count++
    }
    
}
    return count
}
  if (process.env.USER === "kartik") {
    runProgram(`8
    5 12 32 11 4 56 5 0`);
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
  
  