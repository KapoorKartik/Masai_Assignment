var marks = {
    names: ['Nrupul', 'Prateek', 'Aman', 'Albert' , 'Yogesh'],
    marks: [10, 2, 30, 25, 15],
    average: function() {
        var sum = 0;
        for (var i = 0; i< this.marks.length; i++) {
            sum = sum + this.marks[i]
        }
        return sum/this.marks.length
    },
    minimum: function() {
        var min = this.marks[0];
        for (var i = 0; i < this.marks.length; i++) {
            if (min > this.marks[i]){
                min = i
            }
        }
    }
}

console.log(marks.average())
console.log(marks.minimum())