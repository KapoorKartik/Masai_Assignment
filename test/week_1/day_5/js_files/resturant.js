var p_1 = 80;
var p_2 = 140;
var q_1 = 6;
var q_2 = 3;
var discount = 8/100;
var tax = 5/100;
var tip = 50;
var amount = (p_1 * q_1) + (p_2 * q_2);
var dis = amount * discount;
var dis_amount = amount - dis;
var tax_1 = dis_amount * tax;
var tax_amount = dis_amount + tax_1;
var total_amount = tax_amount + tip;
console.log("Total Bill - "+total_amount);