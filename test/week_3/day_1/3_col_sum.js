var a = [
    [1,2,3],
    [5,6,7],
    [7,8,9]
]


for (var i =0; i<a[0].length;i++){
    var sum = 0
    for (var j = 0; j < a.length;j++){
       sum = sum + a[j][i]
    }
    console.log(sum);
}


