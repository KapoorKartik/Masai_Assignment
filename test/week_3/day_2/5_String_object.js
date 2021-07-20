var special = {
    item: "FireFox",
    reverse: function(){
        var out = '';
        for (var i=this.item.length-1; i >= 0; i--){
                out = out+ this.item[i]
        }
        return out;
    },
    vowelsCount: function(){
        var count =0;
        var vowels = 'aeiouAEIOU'
            for (var i =0 ; i<this.item.length;i++){
                for (var j =0 ; j<vowels.length;j++){
                    if (this.item[i] == vowels[j]){
                        count++;
                        break
                    }
                }
            }
            console.log("Vowels Count - " + count);
        },
        changeCase : function() {
            var lower = 'abcdefdhijklmnopqrstuvwxyz';
            var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var out = ''
            for (var i = 0; i < this.item.length; i++){
                var char = this.item[i];
                var caseChar = null
                for (var j = 0 ;j<lower.length; j++){
                    if (char == lower[j]){
                        caseChar = upper[j];
                        break
                    }
                }
                if (caseChar == null){
                    for(var j =0; j < upper.length; j++){
                        if (char == upper[j]){
                            caseChar = lower[j];
                            break;
                        }
                    }
                }
                if (caseChar != null){
                    out = out + caseChar;
                }else {
                    out = out + char;
                }
            }
            console.log(out);
        }
    }
    

//special.item = "kartik"
special.vowelsCount()
console.log(special.reverse());
special.changeCase();