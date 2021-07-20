var arr = [1,2,3,4]
var n = arr.length
console.log(n);
for ( var i = 0; i < n ; i++ ) {
    for (var j = i; j < n ; i++){
        for (k=i; k <= j ; k++){
            console.log(arr[k])
        }
    }
}