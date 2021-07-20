var num = 9678;
 var s = num.toString()
// console.log(s);
// var newnum = s.split("")
// console.log(newnum)
var a = s.length
// console.log(a);
// // var p = s * 10
// // console.log(p);

for (i = s.length - 1 ; i >= 0 ; i--){
  //console.log( "this is i - " +i)
  var p = s[i]* (10** ((s.length-1)-i))
  console.log(p);
}






 