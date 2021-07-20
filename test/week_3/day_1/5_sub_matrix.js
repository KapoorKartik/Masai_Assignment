var a = [
    [1,2,3],
    [5,6,7],
    [7,8,9]
]
var r_s = 1
var r_e = 2
var c_s = 1
var c_e = 2
for (r = r_s; r <= r_e;r++){
    var b = []
    for (var c = c_s; c<= c_e;c++){
        b.push(a[r][c])
    }
    console.log(b);
}
