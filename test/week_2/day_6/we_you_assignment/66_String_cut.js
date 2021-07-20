function runProgram(input) {
  input = input.trim().split('')
//  console.log(input);
  var mid = Math.floor(input.length/2)
 // console.log(mid);
  var arr =[]
for (var i =0 ; i< mid; i++){
 if (input.length % 2 == 0){
  arr[i] = input[mid - 1 - i]
  arr[mid + i] = input [input.length - 1 - i]
 } else if (input.length % 2 == 1) {
      arr[i] = input[mid - 1 - i]
      arr[mid + i +1] = input [input.length - 1 - i]
      arr[mid] = input[mid]
   
 }
}   
console.log(arr.join(""));
}



if (process.env.USER === "kartik") {
  runProgram(`abcxyzk`);
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




