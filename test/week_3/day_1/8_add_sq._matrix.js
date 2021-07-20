function runProgram(input) {
 input = input.trim().split('\n')
 console.log(input);
 var first_line = input[0].trim().split(' ').map(Number)
 console.log(first_line);
 var r1 = first_line[0];
 var c1 = first_line[1];
 var r2 = first_line[2];
 var c2 = first_line[3];
 console.log(r1,c1,r1,c2);

 var mat1
}


if (process.env.USER === "kartik") {
  runProgram(`2 2 2 2
  1 2
  3 4
  2 3
  4 5`);
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




