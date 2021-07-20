var a = [
  [1,2,3,4],
  [5,6,7,6],
  [7,8,9,9],
  [2,4,1,3]
]


var sum = 0
var sum1 = 0
for(var r= 0; r<a.length;r++){
    for (var c = 0;c<a[r].length;c++){
        if(r == c){
            sum = sum + a[r][c]
        } 
        if(r+c == a.length-1){
            sum1 = sum1 + a[r][c]
        }
    }
}
console.log(sum-sum1);
//console.log(sum1);
//console.log(a.length);