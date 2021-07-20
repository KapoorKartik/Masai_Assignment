var year = 2014 ;
if (year% 4 == 0 && year% 100 !== 0){
    console.log("LEAP YEAR")
}else if (year% 400 == 0){
    console.log("LEAP YEAR")
}
else {
    console.log("NOT LEAP YEAR")
}
