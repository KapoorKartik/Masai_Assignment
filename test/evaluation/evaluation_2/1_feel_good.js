function runProgram(input) {
   input = input.trim().split('\n')
  // console.log(input)
   var N = +input[0]
   var str = input[1].trim().split('')
 //   console.log(N,str)
   var res = (feelGood(N,str))
 //  console.log(res + 'res');
   if (res >= N/2 ){
       console.log('Feel good !');
   } else  {
       console.log('Feel bad !')
  }
  
}
  function feelGood(N,str) {
    var count = 0;
      for (var i = 0; i <N; i++){
     // console.log(str[i])
         var vovel = ['a' , 'e' ,'i' , 'o' , 'u']
         for (var j = 0 ;j<vovel.length; j++){
          //   console.log(vovel[j])
             if (str[i] == vovel[j]) {
                count = count + 1
             } 
         }
      }
     return count
  }
  if (process.env.USER === "kartik") {
    runProgram(`4
    aaaa`);
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
  
  