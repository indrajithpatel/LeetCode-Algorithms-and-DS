/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(arr) {
    var D = {};
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]){
        for(let j=0;j<arr[i].length;j++){
         if(!(arr[i][j] <= arr[i+1][j])){
            D[j] = j;
        }
        }
        }
    }
   
   return Object.keys(D).length;
    
};
