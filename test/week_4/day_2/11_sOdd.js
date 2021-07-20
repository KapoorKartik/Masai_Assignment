var str = ["Apple", "Windows", "Linux", "Kindle", "Quiz"]
function check(el){
    
            return el.length
    
}

function add(el){
    if (el % 2 == 1){
   return el
    }
}
function aadd(ac,el){
    return el + ac
} 
var res = str.map(check).filter(add).reduce(aadd)
console.log(res);
