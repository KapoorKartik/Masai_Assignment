var obj = {
  array1 :  [1, 2, 3, 4],
  array2 : [2, 4, 6, 8,3],
  common: function (array1, array2) {
      var newarr = []
      for (var i = 0; i < this.array1.length ; i++) {
          for (var j = 0; j < this.array2.length; j++) {
              if (this.array1[i] == this.array2[j]) {
                  newarr.push(this.array1[i])
              }
          }
      }
      return newarr
  }
};
console.log(obj.common())