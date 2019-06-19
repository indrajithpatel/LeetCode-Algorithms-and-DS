/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(arr,k) {
    let sum = 0;
    //sort ascending
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        //negate for negative numbers
        if(arr[i]< 0 && k){
            arr[i] = -arr[i];
            k--;
        }
        else{
            //check if k is even or odd.Check the difference between last negative and first positive and apply the diff.
            if(!(k%2 === 0)){
                if(arr[i] - arr[i-1] > 0){
                    arr[i] = -arr[i] + arr[i-1];
                }
                else{
                    arr[i] = -arr[i];
                }
            }
            k = 0;
        }
        
        sum += arr[i]; 
    }
    return sum;
};
