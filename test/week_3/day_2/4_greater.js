var numbers = {
    data : [1,2,6,7,3,4,9,0],
    lessThan : function(val){
        var items = [];
        for (var i=0 ; i < this.data.length;i++){
            if (this.data[i] < val){
                items.push(this.data[i])
            }
        }
        return items;
    },
    greaterThan : function(val){
        var items = [];
        for (var i=0 ; i < this.data.length;i++){
            if (this.data[i] > val){
                items.push(this.data[i])
            }
        }
        return items;
    }
}

var lesser = numbers.lessThan(4);
var greater = numbers.greaterThan(6)
console.log("L - " + lesser.join(","));
console.log("G - " + greater.join(","));


