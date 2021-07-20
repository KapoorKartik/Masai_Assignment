function runProgram(input) {
  input = input.trim().split('')
  //console.log(input);
  console.log(conso(input));
  }

  function conso(input){
    var count = 0
  var vovel = ['a', 'e', 'i' , 'o', 'u']
  
  for (var i = 0; i<input.length; i++) {
      for (var j = 0; j<vovel.length; j++) {
          if (input[i] == vovel[j]){
              count++
          }
      }
  }
  return input.length  - count;
}
  if (process.env.USER === "kartik") {
    runProgram(`masaischoolbcd`);
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
  
  