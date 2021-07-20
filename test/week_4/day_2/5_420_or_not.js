function runProgram(input) {
input = input.trim().split('').map(Number)
//console.log(input);
var n = input.length;
var subarr = subarray(input,n);
//console.log(subarr);
console.log(caught(subarr))
  }

  function subarray(input,n) {
    var arr = []
      for (var i = 0; i < n;i++) {
       var arr1 = []
          for(var j = i;j < n; j++){
              var arr2 = []
              for (var k = i; k <= j; k++) {
                var z = input[k]
                arr2.push(z)
              }  arr1.push(arr2.join(''))
          }
           arr.push(arr1)
      }  
     return arr
  }
function caught(subarr) {
    var a = 'Escaped'
    for (var i = 0; i < subarr.length; i++) {
      
        for (var j =0 ; j < subarr[i].length; j++) {
            if (subarr[i][j] == 420){
                a ='Caught'
        }
    }
  
}  return a
}


  if (process.env.USER === "kartik") {
    runProgram(`97420`);
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
  
  