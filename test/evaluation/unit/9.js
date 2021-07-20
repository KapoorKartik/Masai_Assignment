var triangle = {
    hypoteneous : 5,
    side1 : 3,
    side2 : function(){
        var h = this.hypoteneous
        var p = this.side1
      var side2 = ((h ** 2)-(p ** 2)) ** .5
       return 'side2 - '+side2
    }
}
console.log(triangle.side2())