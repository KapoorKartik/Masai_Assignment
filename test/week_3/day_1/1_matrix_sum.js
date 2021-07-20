

function runProgram(input) {
    var line = input.trim().split('\n')
    var rc1 = line[0].trim().split(' ').map(Number)
    var r1 = rc1[0]
    var c1 = rc1[1]
    var mat1 = []
    for (var r= 1; r<=r1;r++){
     //  console.log(line[r])
    mat1.push(line[r].trim().split(' ').map(Number))
     
    }
          var a = sum(mat1)
   // console.log(a)


        var rc2 = line[r1+1].trim().split(' ').map(Number)
             //console.log(rc2);
        var mat2 = []
         for (var r= r1+2; r<line.length;r++){
             //  console.log(line[r]);
        mat2.push(line[r].trim().split(' ').map(Number))
       
  }
  var b =  sum(mat2);
 // console.log(b);

  if (a > b){
      console.log(a);
  } else {
      console.log(b);
  }
 
}
function sum(matrix){
    var s = 0;
    for (r=0 ; r<matrix.length; r++){
        for (c=0;c<matrix[r].length;c++){
            s = s + matrix[r][c]
        }
    }
    return s
}



if (process.env.USER === "kartik") {
  runProgram(`3 4
  1 2 3 4
  0 5 6 1
  9 3 0 8
  2 2
  8 8
  8 8`);
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




