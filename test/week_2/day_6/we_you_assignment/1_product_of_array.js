function runProgram(input) {
  input=input.trim().split("\n")
  //console.log(input);
  var testcase = +(input[0]);
  // console.log(testcase);
   //var size1 = +input[1];
  // console.log(size1);
   //var arr_1 = input[2].trim().split(" ").map(Number)
  // console.log(arr_1);
  //var size2 = +input[3];
  // console.log(size2);
   //var arr_2 = input[4].trim().split(" ").map(Number)
  // console.log(arr_2);
  p1(input)
  
}

function p1(input){
  var testcase = +(input[0]);
  //var line = 2
  for (var k = 2 ; k<=2 *testcase; k = k+2){ 
   var arr_1 = input[k].trim().split(" ").map(Number)
   //console.log("arr 1 - " + arr_1);
    var b = 1;
 for(var i = 0 ; i < arr_1.length; i++){
      var b = arr_1[i]* b
    
 }
 //console.log(b);
        var out = ""
  for(var j = 0 ; j < arr_1.length; j++){
        var c = b/arr_1[j]
         out = out + " " +  c;
}
     console.log(out.trim());

 }
}



if (process.env.USER === "kartik") {
  runProgram(`10
  5
  1 9 2 3 1
  6
  10 3 7 3 10 6
  5
  6 9 6 1 2
  10
  4 9 8 5 6 4 2 2 7 3
  10
  2 5 7 7 9 7 4 3 5 3
  5
  2 7 1 10 3
  6
  3 5 2 8 10 6
  3
  1 1 6
  5
  9 10 3 8 6
  5
  9 8 5 2 3`);
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




