var a = {
    length: 12,
    breadth: 8,
    area: function(){
        console.log( 'Length - ' + this.length*this.breadth);
    },
    perimeter: function(){
        console.log('Perimeter - '+ 2 * (this.length+this.breadth) );
    },
}
a.area();
a.perimeter()