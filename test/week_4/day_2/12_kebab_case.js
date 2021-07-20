var arr = ["Masai", "School"]
function up(el,i){
    return el[i].toLowerCase()
}


var p = arr.filter(up)
console.log(p);

