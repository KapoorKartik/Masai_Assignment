var arr =  ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"]
var str = ''
var upperChar = 'QWERTYUIOPASDFGHJKLZXCVBNM'
var count = 0;
arrToStr(arr)
counting(str,count,upperChar)
function arrToStr(arr) {
for (var i = 0; i <arr.length; i++) {
    str = str + arr[i]
}
}

function counting(str,count,upperChar){
for (var i = 0; i<upperChar.length; i++) {
    for (var j = 0; j<str.length; j++) {
        if (upperChar[i] == str[j]) {
            count = count + 1
        }
    }
}
//console.log(str);
console.log(count);
}