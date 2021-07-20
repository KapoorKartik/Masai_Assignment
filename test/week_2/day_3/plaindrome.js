var a = "hannah";

for (i = 0 ; i < a.length; i++){
    
    if (a[i] == a[(a.length-1)- i]){
        var b = "YES"
    }
      if (a[i] != a[(a.length-1)- i]){
          var b ="NO"
      }
    
    
}
console.log(b);

