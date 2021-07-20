var n = 11;
var i = 2;
var count = 0;
while (i < n && count < n) {
    
   
   if (n % i == 0){
    count++
    
   }
   i++
}
if (count == 0){
    console.log("Prime Number")
} else {
    console.log("Not prime number")
}

var limit = 12;
var sum = 0;
var count = 0;
for (var i = 1; i<= limit ; i++){
    if (i % 3 ==0){
        sum = sum + i
        count = count + 1
    } 
    
}
console.log(sum/count);


var starting = 1;
var end = 7;
var sum = 0;
var sum1 = 0
for (var i = starting ; i <= end ; i= i + 2){
        sum = sum + i
    }
    for (var j = starting ; j<= end ; j = j + 1 ){
        sum1 = sum1 + j
    }

console.log( "Odd number - "+ sum)
console.log("Even Number - " + (sum1 - sum))


var score = [12, 20, 30, 39, 10]
var lowest = score [0];
var highest = score [0]
for (var i = 1 ; i < score.length; i++){
    if (score[i] < lowest)
    lowest = score[i]
    for(var j = 1; j <score.length ; j++){
        if (score[j] > highest )
       highest = score[j]
    }
}
console.log( "Lowest Score - " +lowest);
console.log("Highest Score - " + highest);


var num = 11;
var count = 0;
for (i = 2; i< num ; i++){
    
    if (num % i == 0){
        count++;
    //console.log(num% i);
    //console.log(count + " count" );
    }
    
}
if (count == 0){
    console.log("Prime Number");
}else {
    console.log("Not Prime Number");
}





var names = ["kartik", "tanish", "shabnam", "geeta"]
var vovel = 0;
var conso = 0
for (var i = 0; i <names.length ; i++){
    var name =names[i];
    for (var j = 0; j <name.length ; j++){
        if (name[j] == "a" || name[j] == "e" || name[j] == "i" || name[j] == "o" || name[j] == "u"){
            vovel++
        }else 
        conso++
    }
}
console.log( "Vovels - " + vovel);
console.log( "Consonants - " + conso)