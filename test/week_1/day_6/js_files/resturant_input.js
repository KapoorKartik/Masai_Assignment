function runProgram(input){
    var newInput = input.split(" ");
    var p_1 = Number(newInput[0]);
    var p_2 = Number(newInput[1]);
    var q_1 = Number(newInput[2]);
    var q_2 = Number(newInput[3]);
    var discount = Number(newInput[4]);
    var tax = Number(newInput[5]);
    var tip = Number(newInput[6]);


    var amount = (p_1 * q_1) + (p_2 * q_2);
    var dis = amount * discount;
    var dis_amount = amount - dis;
    var tax_1 = dis_amount * tax;
    var tax_amount = dis_amount + tax_1;
    var total_amount = tax_amount + tip;
    console.log(" Total Bill - "+total_amount);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});