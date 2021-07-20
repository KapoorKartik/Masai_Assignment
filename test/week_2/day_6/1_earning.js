function runProgram(input) {
  input = input.trim().split('\n')
  testCase = Number(input[0])
  //console.log(input);
  line = 1
  for (var i =0 ; i< testCase; i++) {
    var [street, x] = input[line].trim().split(' ').map(Number)
    line++
    var height = input[line].trim().split(' ').map(Number)
    line++
 //  console.log(street,x,height);
    earning(street,x,height)
  }
}


function earning(street,x,height) {
    var h = height[0]
    var count = 1
    for ( var i = 1; i< street; i++) {
        if (height[i] > h ){
            h = height[i]
            count++
        }
    }
    console.log(count*x);
}

if (process.env.USER === "kartik") {
  runProgram(`2
  6 3
  8 2 3 11 11 10
  5 12
  12 20 39 45 89`);
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




