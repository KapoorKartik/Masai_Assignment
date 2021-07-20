function runProgram(input) {
 input = input.trim().split('\n')
// console.log(input);
 var a = input[0].trim().split(' ').map(Number);
 var b = input[1].trim().split(' ').map(Number);
// console.log(a,b);
  win(a,b)
}




function win(a,b){
    if (a[0]> b[0]){
        console.log('New Zealand');
    } else if ( a[0] < b[0]){
        console.log('England');
    } else if (a[0] == b[0]){
        if (a[1] > b[1]){
            console.log('New Zealand');
        } else if (a[1] < b[1]) {
            console.log('England');
        
    }   
     if  (a[1] == b[1]){
        if (a[2] > b[2]){
            console.log('New Zealand');
        } else if (a[2] < b[2]) {
            console.log('England');
        }
    }
        
}
}


if (process.env.USER === "kartik") {
  runProgram(`241 10 29
  241 10 36`);
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




