var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
var rs = 0
var cs = 1
var re = 2
var ce = 2
var sub = []
for(var r = rs ; r<=re; r++){
 //   console.log(matrix[r]);
    var sub_row = []
    for (var c = cs; c<=ce; c++){
      //  console.log(matrix[r][c]);
        sub_row.push(matrix[r][c])
        //console.log(sub_row);
    }
    sub.push(sub_row)
}

console.log(sub);

function sum(matrix){
    var s = 0;
    for (r=0 ; r<matrix.length; r++){
        for (c=0;c<matrix[i].length;c++){
            s = s + matrix[r][c]
              }
         }
            return s
} 
