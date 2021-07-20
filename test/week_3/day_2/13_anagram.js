var obj = {
      anagram : ['wind' , 'dwine'],
      checkAnagram : function() {
        var letter = 'abcdefghijklmnopqrstuvwxyz'
        var anagram1 = ''
        var anagram2 = ''
        for (var i = 0; i <letter.length; i++) {
         // console.log(letter[i])
           for (var j = 0; j <this.anagram[0].length;j++) {
           // console.log(ana1[j])
               if (letter[i] == this.anagram[0][j]){
                 anagram1 = anagram1 + letter[i]
               }
           }
           for (var j = 0; j <this.anagram[1].length;j++) {
             //  console.log(ana1[j])
               if (letter[i] == this.anagram[1][j]){
                 anagram2 = anagram2 + letter[i]
               }
       }
       }
       if (anagram2 == anagram1) {
       return 'TRUE'
       } else {
       return 'FALSE'
       }
      }
}
console.log(obj.checkAnagram())