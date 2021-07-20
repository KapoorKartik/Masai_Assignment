var arr = ["apple", "windows", "ubuntu", "cola", "system"]

function sPattern (el){
    if (el[0] == 'a' || el[el.length - 1] == 'a'){
        return el
    }
}
var pattern = arr.filter(sPattern)
console.log(pattern);