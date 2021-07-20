var n = 11;
var i = 1 ;
var count = 0;
while (i <= n) {
    i++
    if ( n % i == 0)
    count++
  
}
if (count == 2){
    console.log("Prime Number")
} else {
    console.log("Not a prime number");
}