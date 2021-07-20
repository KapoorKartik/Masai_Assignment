function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  console.log('input:', input)
  var n =Number(input[0])
  console.log('n:', n)

  var target =Number(input[1])
  console.log('target:', target)

  var arr = input[2].trim().split(" ").map(Number)
  console.log('arr:', arr)
  

}



// 3 is target element , yes-- if 3 is present in arr, else no

if (process.env.USER === "kartik") {
  runProgram(`5
          3
          1 2 3 4 5`);
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
