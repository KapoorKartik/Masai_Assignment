var a = 4;
var b = 5;
if (a < b) {
    console.log("A is smaller")
}else if (b < a) {
    console.log("B is smaller")
}

var p1 = "Kartik";
var p2 = "kartik";
if (p1 !== p2){
    console.log("Wrong Password");

}

var number = 3 ;
if (number%2 == 1){
    console.log("Odd Number");
}

var birth_year = 2000 ;
var age = 2021 - birth_year
if (age >= 20 && age <=29) {
    console.log("Twenties")
}

var age_a = 20;
var age_b = 30;
var age_c= 40;

if (age_a > age_b && age_a > age_c) {
    if (age_b > age_c){
        console.log("a , b , c");
    }else {
        console.log("a , c , b");
    }
}else if (age_b > age_c && age_b > age_a) {
if (age_c > age_a){
    console.log("b , c, a");
} else (
    console.log("b , a, c")
)
} else{
if (age_a > age_b){
    console.log("c, a, b");
}else{
    console.log("c, b, a");
}
}

var c = 4;
var d = 5;
c>d ? console.log("C") : console.log("D");

var day = "Sunday";
switch (day) {
    case "Monday":
        console.log("Mon");
        break;
        case "Tuesday" :
   console.log("Tue");
            break;
            case "Wednseday" :
 console.log("Wed");
            break;
            case "Thursday" :
   console.log("Thu");
                break;
                case "Friday" :
   console.log("Fri");
                    break;
                    case "Saturday" :
    console.log("Sat");
                        break;
  case "Sunday":
                            console.log("Sun");
break;


    default:
        break;
}
