var names = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"];
var remove = [];
for (var i = 0 ; i < names.length ; i++){
       var name = names[i];
       if (name.length >= 4)
       remove.push(name)
       
}
console.log(remove)
