function runProgram(input) {
    input = input.trim().split('\n')
  //  console.log(input)
    var [question,difficulty] = input[0].trim().split(' ').map(Number);
  // console.log(question,difficulty)
    var questionDifficulty = input[1].trim().split(' ').map(Number);
 // console.log(questionDifficulty)
    if (question == 1){
        onlySingle(question,difficulty,questionDifficulty)
    } if (question > 1){
      noddyExam(question,difficulty,questionDifficulty)
    }
   
  }
  if (process.env.USER === "kartik") {
    runProgram(`6 1
    2 2 2 2 2 2
    `);
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
  
  function onlySingle(question,difficulty,questionDifficulty) {
    if (difficulty > questionDifficulty) {
      console.log(1)
    } else {
      console.log(0)
    }
  }


function noddyExam(question,difficulty,questionDifficulty) {
count = 0
for (var i = 0; i< question; i++) {
    if (questionDifficulty[i] <= difficulty){
        count= i
    } else if (questionDifficulty[i] > difficulty){
        break
    }
  
} 
//console.log(count);
var count1 = 0
for (var j = count+2; j<question; j++) {
    if (questionDifficulty[j] <= difficulty){
        count1= j
    } else if (questionDifficulty[j] > difficulty){
        break
    }
}
 //console.log(count1);
  if (count == 0 && count1 == 0) {
      console.log(0);
  } else if (count == 0) {
      console.log(0);
  }
  else if (count1 == 0){
     console.log(count+1);
 }else if (count != 0) {
     console.log(count1)
 }
}
