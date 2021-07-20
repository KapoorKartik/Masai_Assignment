function runProgram(input) {
  input= input.trim().split('\n')
  console.log(input);
  var testcase = +input[0].trim()
  console.log(testcase);
  var size = +input[1]
  console.log(size);
        string(input)
        var numeric = +input[6].trim()
}

function string(input){
    var num = [1234567890]
    var numb = input[6];
    for (var j = 0 ; j <numb.length; j++){
        var numeric = numb[j]
        for (var i = 0 ; i <num.length; i++){
        if (numeric == num[i]){
            console.log("numeric");
        }
    }
   
}
}

if (process.env.USER === "kartik") {
  runProgram(`3
  5
  ab2cd
  5
  acfgh
  3
  123`);
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




