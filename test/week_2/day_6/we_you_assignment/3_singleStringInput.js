//singleStringInput
function runProgram(input) {
  input = input.trim().split("");
  vowelCheck(input);
}

function vowelCheck(input) {
  var vowels = 0;
  var cons = 0;
  for (var i = 0; i < input.length; i++) {
    if (
      input[i] == "a" ||
      input[i] == "e" ||
      input[i] == "i" ||
      input[i] == "o" ||
      input[i] == "u"
    ) {
      vowels = vowels + 1;
    } else {
      cons = cons + 1;
    }
  }
  console.log(vowels, cons);
}

if (process.env.USERNAME === "Chandu") {
  runProgram(`      masaischool      `);
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
