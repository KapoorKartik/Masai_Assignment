var n = 64;
var i = 2;
var count = 0;
while (i < n && count < n) {
    
   
   if (n % i ==0){
    count++
    
   }
   i++
}
if (count == 0){
    console.log("Prime Number")
} else {
    console.log("Not prime number")
}
