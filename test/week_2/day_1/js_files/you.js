var A = 100 ;
var B = 20 ;
if (A > B) {
    console.log("A")
}else if (A < B) {
    console.log("B")
}

var p1 = 123456789 ;
var p2 = 123456780 ;
if (p1 !== p2) {
    console.log("Wrong Password")
} else {
    console.log("Valid Password")
}

var num = 5 ;
if (num%2==1) {
    console.log("Odd Number")
} else {
    console.log("Even Number")
}

var birth_year = 1999 ;
var age = 2021 - birth_year
if (age >= 13 && age <= 19) {
    console.log("Teenage")
} else if (age >=20 && age <= 29) {
    console.log("Twenties")
}



var a = 20;
var b = 30;
var c = 40;
if (a > b && a > c){
if (b > c){
    console.log("a b c") 
}else {
    console.log("a c b")
}
}else if (b > c && b > a){
if (a > c) {
    console.log("b a c")
}else{
    console.log("b c a")
}
}else {
if (a > b) {
    console.log("c a b")
}else {
    console.log("c b a")
}
}

if (a < b && a < c){
if (b < c){
    console.log("a b c")
}else {
    console.log("a c b")
}
}else if (b < c && b < a) {
if (c < a){
    console.log("b c a")
}else {
    console.log("b a c")
}
}else {
if (a < b){
    console.log("c a b")
}else{
    console.log("c b a")
}
}


var c = 5;
var d = 7;
c == d ? console.log("Equal") : console.log("Different");


var month ="July";
switch (month) {
    case "January":
        console.log("Jan");
        break;
        case "February" :
        console.log("Feb");
        break;
        case "March":
        console.log("Mar");
        break;
        case "April" :
        console.log("Apr");
        break;
        case "May":
        console.log("May");
        break;
        case "June":
        console.log("Jun");
        break;
        case "July" :
        console.log("Jul");
        break;
        case "August":
        console.log("Aug");
        break;
        case "September":
        console.log("Sep");
        break;
        case "October":
        console.log("Oct");
        break;
        case "November":
        console.log("Nov");
        break;
        case "December":
        console.log("Dec");
        break
    default:
        console.log("Invlid Month")
        break;
}