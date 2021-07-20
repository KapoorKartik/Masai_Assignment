var weight_kg = 100;
var height_m = 1.6;
var bmi = weight_kg / (height_m * height_m);
if (bmi < 18.5){
console.log("you're in the underweight range")
}else if (bmi > 18.5 && bmi < 24.9) {
    console.log("you're in the healthy weight range")
}else if (bmi > 25 && bmi < 29.9) {
    console.log("you're in the overweight range")
}else if (bmi > 30 && bmi < 39.9) {
    console.log("you're in the obese range")
}