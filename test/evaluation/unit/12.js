var obj = {
    name : ['Nrupul', 'Prateek', 'Yogesh', 'Aman' , 'Albert'],
    marks : [[30, 40, 50] , [20, 10 , 10], [40, 20 , 20], [10,20,40], [25, 150,150]],
    average : function() {
       var arr =[]
        for (var i = 0; i<this.marks.length ; i++) {
            var a = this.marks[i];
            var sum = 0
            for (var j = 0; j< a.length ; j++) {
                sum = sum + a[j]
               
            }
            arr[i] = sum
         
          
        } 
        for (var k = 0; k < arr.length; k++) {
            var n  = arr[k]
            if ( n < arr[k+1]){
                n = arr[k+1]
            }
       // return arr
       
        
            return this.name[i]+ ' ' + n/3 
        }
    }
};
console.log(obj.average())