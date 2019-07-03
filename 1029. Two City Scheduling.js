/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    var minCost =0;
    var arr = _fnSort(costs);
    for(let i=0;i<arr.length;i++){
        if(i>=arr.length/2){
            minCost+=arr[i][1];
        }else{
            minCost+=arr[i][0];
        }
    }
    return minCost;  
};

_fnSort = function(a){
    a.sort(function(a, b){
        let c = a[1] -a[0];
        let d = b[1] -b[0];
        return d-c;
    });
   return a;
}

