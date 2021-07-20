var year = 2021;
for (var i = 1; i <=12; i++){
    var days = 31 ;
    if (i == 4 || i == 6 || i == 9 || i == 11){
        days = 30;
    }
    if ( i == 2){
        if ( year % 4 == 0 && year % 100 != 0 ){
            days = 29
        } else if ( year % 400 == 0){
            days = 29
        } else {
            days = 28;
        }
    }
    for ( var j = 1; j<=days ; j ++){
        var month = i ;
        if (month < 10) {
            month = "0" +month
        } if ( j < 10){
            j = "0" + j
        }
        
    
        console.log(year + "-" + month + "-" + j)
    }
}

