var str = [2, 4, 5, 3, 6, 8]
function check(el,i){
    if (i % 2 == 0){
        if (el % 2 == 0){
            return el
        }
    }
}

var evenNumEvenIndex = str.filter(check)

console.log(evenNumEvenIndex);
