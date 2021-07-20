var  a = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,2,3]
]

var col = a[0].length;
var row = a.length;
for (var c = 0; c< col;c++){
  var b = [] ;
    for (var r = 0 ; r < row; r++){
       b.push(a[r][c]);
    }
   console.log(b);
}