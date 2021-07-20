function runProgram(input) {
    input = input.trim().split('')
    console.log(input)
    var n = input.length
    console.log(sub(input,n))
    var array = sub(input,n)
    var a = ''
        for (var i = 0; i < array.length; i++) {
            for (var j = 0 ; j < array[i].length; j++) {
                    for (var k = 0; k < array[i][j].length; k++){
                      a = a + array[i][j]
                    }
            }
        }
    console.log(a)
  }
  function sub(input,n) {
      var arr = [];
      for (var i = 0; i< n ; i++) {
         var arr1 = []
          for (var j = i; j<n ;j++){
              var arr2 = []
              for (var k = i; k <= j; k++){
                arr2.push(input[k])
              } arr1.push(arr2.join(''))
          }  arr.push(arr1)
        }  
      return arr
  }
  if (process.env.USER === "kartik") {
    runProgram(`abcab`);
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
  
  