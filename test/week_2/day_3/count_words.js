var a = "There is a smallest natural number";
var count = 0
for (var i = 0; i <a.length; i++){
   if (a[i] == " "){
    count++
   }
}
console.log(count + 1)