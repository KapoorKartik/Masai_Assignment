
var limit = 100 ;



for (j = 2 ; j <= limit; j++){
var num = j;
var count = 0;
for (i = 2; i< num ; i++){
    
    if (num % i == 0){
        count++;
    //console.log(num% i);
    //console.log(count + " count" );
    }
    
}
if (count == 0){
    console.log( i);
}
}