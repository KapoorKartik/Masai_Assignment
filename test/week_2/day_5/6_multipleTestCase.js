function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0];
  console.log("testCases:", testCases);
  var line = 1;
  // var str1 = input[line].trim().split("");
  // line++;
  // var str2 = input[line].trim().split("");
  // line++;
  // var str3 = input[line].trim().split("");
  // line++;
  // var str4 = input[line].trim().split("");
  // console.log(str1, str2, str3, str4);

  for (var i = 0; i < testCases; i++) {
    var str = input[line].trim().split("");
    line++;
    console.log(str);
  }
}

// i=0 -- 0<4 --> str =input[1] --line=2
// i=1 --1<4 -->str=input[2]  -- line=3
// i=2 ---2<4 --str=input[3] ---line=4
// i=3 -- 3<4 --str=input[4] --line=5
// i=4 ---4<4 -- false

if (process.env.USERNAME === "Chandu") {
  runProgram(`4
  abc
  def
  ghi
  jkl
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
