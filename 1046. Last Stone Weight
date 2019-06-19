/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    var sorted = _fnSort(stones);
    var length = sorted.length;
    if(length === 1 ){
        return sorted[0];
    }else{
        let diff = sorted[length-1]-sorted[length-2];
        sorted.pop();
        sorted.pop();
        sorted.push(diff);
        return lastStoneWeight(sorted);
    }
};

var _fnSort = function(stones){
     return stones.sort(function(a,b){
        return a-b;    
    })
};
