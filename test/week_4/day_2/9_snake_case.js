var sCase = ["apple", "windows", "ubuntu"]
function snakeC (ac , el) {
    var n = '_'
 return  ac+n+el
}
var snake = sCase.reduce(snakeC)
console.log(snake);