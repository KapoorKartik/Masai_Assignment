var names = ["HTML", "CSS", "JAVA", "JS", "ANDROID"]
count = 0;
for (var i = 0; i <names.length ; i++){
    var name = names[i];
    for (var j = 0 ; j <name.length ; j++)
    count++;
}
console.log(count);