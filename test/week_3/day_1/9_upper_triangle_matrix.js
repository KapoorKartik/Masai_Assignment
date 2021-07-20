var a = [
    [1,2,3],
    [5,6,7],
    [7,8,9]
]
sum = 0
sum1 = 0
for (var r = 0 ; r< a.length;r++){
    for (var c=0 ;c < a[r].length; c++){
        if (r==c){
            sum = sum + a[r][c];
        }
        if (r < c){
            sum1 = sum1 + a[r][c]
            
            
        }
    }
}
console.log(sum1+sum);