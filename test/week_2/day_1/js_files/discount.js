var order = 250;
var discount = order/10
if (order >= 300 && discount <= 100){
    console.log( "Rs. " + discount)
}else if (discount > 100){
    console.log("Maximum Discount = Rs. 100")
}else if (order <300){
    console.log("No Discount below Rs. 300")
}