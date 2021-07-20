function runProgram(input) {
 input = input.trim().split('\n');
 //console.log(input);
 var sample1 = input[0].trim().split('')
// console.log(sample1);
 var sample2 = input[1].trim().split('')
 // console.log(sample2);
   var ana1= sort(sample1)
   var ana2 = sort(sample2)
  // console.log(ana1)
  // console.log(ana2)
   if (ana1 == ana2) {
      console.log('True');
   } else {
       console.log('False');
   }
  }

  function sort(input) {
      var sortArr = ''
      var letters = 'qwertyuiopasdfghjklzxcvbnm'
      for (var i = 0; i < letters.length; i++) {
          for (var j = 0; j <input.length; j++) {
              if (letters[i] == input[j]){
                  sortArr = sortArr + input[j]
              }
          }
      }
     return sortArr
  }

  if (process.env.USER === "kartik") {
    runProgram(`anagra
    nag a ram`);
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
  
  