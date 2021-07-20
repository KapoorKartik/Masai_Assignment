var array =  [34, -87, 23, 12, 98, -2, 0];
sum= 0;
count=0;
sum1 = 0;
count1 = 0;
for (var i = 0 ; i < array.length; i++){


    if (array[i] % 2 == 0){
        sum= sum + array[i]
    //console.log(sum + " Sum");
    count = count + 1
    //console.log(count+ " count ");
    }
   
    
    //console.log(count + "Count");
    //console.log(sum/count + " inside loop ");
    if (array[i] % 2 != 0 ){
        sum1= sum1 + array[i]
    //console.log(sum + " Sum");
    count1 = count1 + 1
    }
}

var odd_avg = sum1/count1
var even_avg = sum/count
console.log("Odd Average - " + odd_avg);
console.log("Even Average - " +even_avg);
