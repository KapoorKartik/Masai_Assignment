var a = [
    [1, 2, 3],
    [5 ,6 ,7],
    [7 ,8, 9],
]
var b = [
    [2,1,2],
    [1,2,1],
    [2,1,2]
]
var arr = []
for(var r=0;r<a.length;r++){
    for(var c=0; c<a[r].length;c++){
      //  console.log(a[r][c]+b[r][c])
        arr.push(a[r][c]+b[r][c])
    }
}

console.log(arr.join(' '));