var items = ['a', 'b', 'c', 'd', 'a', 'c']

var repeat = [];
var unique = []


 for (var i=0 ;i<items.length;i++){
 
   var  exist = false
     for (var j=0 ; j<repeat.length;j++){
         if (items[i] == repeat[j]){
             exist = true
        unique.push(items[i])
             break
         }
       
     }
     if (!exist){
        repeat.push(items[i])
    }
 }
 //console.log(repeat);
 console.log(unique);