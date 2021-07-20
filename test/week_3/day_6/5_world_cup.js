function runProgram(input) {
   var input = input.trim().split('\n');
   //console.log(input)
   var [score1, superover1, four1] = input[0].trim().split(' ').map(Number);
  // console.log(score1, superover1, four1)
   var [score2, superover2, four2] = input[1].trim().split(' ').map(Number);
 //  console.log(score2, superover2, four2)
   if (score1 != score2) {
    firstCase(score1, score2)
   } if (score1 == score2 && superover1 != superover2) {
    firstCase(superover1,superover2)
   } if (score1 == score2 && superover1 == superover2) {
    firstCase(four1, four2)
   }
  }
  if (process.env.USER === "kartik") {
    runProgram(`241 15 21
    240 15 26`);
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
  
 function firstCase(input1,input2) {
     if (input1 > input2) {
         console.log('New Zealand')
     } else {
        console.log('England')
     }
    }