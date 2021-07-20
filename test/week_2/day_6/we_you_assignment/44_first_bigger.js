function runProgram(input) {
  input = input.trim().split('\n')
   input[0] = Number(input[0])
  var testCases = Number(input[2])
  var line = 3;
 
  for (var i = 0 ; i <testCases; i++){
    var num = Number(input[line++])
    var a=+input[0]
    var arr = input[1].trim().split(' ').map(Number)
   console.log(check(num,arr));
   
   // console.log(num);
   
  }
 // console.log(arr);
}

function check(num,arr){
  var newarr = []
  
 // console.log(arr);
 for (var i = 0; i < arr.length; i++){
   if (num < arr[i]){
        newarr.push(arr[i])
   } 
  
 }   

if (newarr == 0){
  return -1
}
//console.log(newarr);
 var b = newarr[0]
 for (var k = 0 ; k < newarr.length; k ++){
   if (newarr[k] < b){
     b = newarr[k]
   } 

 }
 return b
  
 
 
} 


if (process.env.USER === "kartik") {
  runProgram(`12
  -1 89 81 68 81 63 71 76 73 81 0 -1
  2
  15
  89`);
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




