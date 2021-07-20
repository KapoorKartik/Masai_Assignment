var arr2d = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9],
]
//console.log(arr2d[0].length);
var sum = 0
for(var i = 0 ;i<arr2d.length;i++){
    for(var j = 0 ; j<arr2d[i].length;j++){
        sum = sum + arr2d[i][j]
    }
}
console.log(sum);
