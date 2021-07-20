var input = "4\n2 5 0 9"
var line = input.split("\n")


var numbers_string = line[1];
console.log(numbers_string);
var numbers_arr = numbers_string.split(" ").map(Number)
console.log(numbers_arr);