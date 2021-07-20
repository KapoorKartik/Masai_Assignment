// function runProgram(input) {
//     // Write code here
//     input = input.trim().split('\n')
//     var testCases = Number(input[0])
//     var line=1

//     for (var i = 0; i < testCases; i++) {
//         var size = Number(input[line++])
//         var arr = input[line++].trim().split(" ").map(Number)
//         console.log(arr, size)
//         productOfArr(arr)
        
//     }

//     // i=0 --0<2 ---> size =input[1] -- line=2 --arr=input[2].trim()---line=3
//     //i=1 --1<2 ---->size =input[3]  ---line=4 --arr=input[4]---line=4
    
// }
  
// function productOfArr(arr) {
//     var prod = 1
//     for (var i = 0; i < arr.length; i++){
//         prod=prod*arr[i]
//     }
//     console.log(prod)
// }
//   if (process.env.USERNAME === "Chandu") {
//     runProgram(`2
//     5
//     1 2 3 4 5
//     3
//     3 2 7`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }



function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    var testCases = Number(input[0])
    var line = 1
    
    for (var i = 0; i < testCases; i++){
        var triangle = input[line].trim().split(" ").map(Number)
        line++
        var a = triangle[0]
        var b = triangle[1]
        var c = triangle[2]
        console.log(a, b, c)
        triangelCheck(a,b,c)
    }

    // i=0 -->0<4 --trai=input[1] --line=2
    // i=1 -->1<4 --tri =input[2]--line=3
    //i=3 --->2<4-- tri =input[3]--line=4
    //i=4 --4<4
   
}
  

function triangelCheck(a, b, c) {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
        console.log("yes")
    }
    else
        console.log("No")
}



  if (process.env.USERNAME === "Chandu") {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
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