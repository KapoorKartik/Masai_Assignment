function runProgram(input) {
  var arr = input.trim().split('')
    var n = arr.length
    var sample = []
    for (var i = 0; i < n;i++) {
        for (var j =i+1; j <= n; j++) {
            substr = ''
            for (var k =i ; k < j ; k++) {
                substr = substr +  arr[k]
            }//console.log(substr)
              plaindreome(substr,sample)
         
        } 
    } 
    //console.log(sample)
    var a = ''
    for (var i = 0; i<sample.length; i++){
     // console.log(i);
      for (var j = 0 ; j < sample[i].length; j++) {
       // console.log(j)
        if ( j > a.length) {
          a = sample[i]
        }
      }
    }
    console.log(a.length)
  }
  
  if (process.env.USER === "kartik") {
    runProgram(`thisracecarisgood`);
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
  

  function plaindreome(substr,sample) {
   var res  = ''
  
   for (var i = substr.length-1 ; i >= 0 ; i--) {
      res = res + substr[i]
     
   }
    if (res == substr){
     sample.push(res)
    }
        
  }