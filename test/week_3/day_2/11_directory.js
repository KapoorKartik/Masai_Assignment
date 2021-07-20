var dir = {
    names: ['Ajay', 'Ramdas', 'Rohith' , 'Nihal'],
    numbers: [915678,512345, 213456,120987, 09871],
    query: function(nam){
      for (var i = 0 ; i < this.names.length; i++){
        //  return this.names[i];
     
            if (nam == this.names[i]){
                return this.numbers[i]
            } if (nam != this.names[i]){
                return "User Not Found"
            }
        
      }
        },
    }
    var a = dir.query("Mani")
   
   console.log(a);


    // console.log(dir.names.length);
    // console.log(dir.names);


    // var arr = ['Yogesh' ,'Nrupul' ,'Prateek ' ,'Aman' ,'Madhukar']
    // for (var i = 0 ; i <arr.length ; i++){
    //     console.log(arr[i]);
    // }
