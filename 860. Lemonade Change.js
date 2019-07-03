/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fiveRupees = 0;
    let tenRupees = 0;
    let twentyRupees = 0;
    for(let i=0;i<bills.length;i++){
        if(bills[i] === 5){
            fiveRupees++;
        }
        if(bills[i] === 10){
            if(fiveRupees > 0){
            fiveRupees--;
            tenRupees++;
            }else{
                return false;
            }
        }
        if(bills[i] === 20){
            if(tenRupees >=1 && fiveRupees >=1){
                    twentyRupees++;
                    tenRupees--;
                    fiveRupees--;
            }else if(fiveRupees > 2){
                fiveRupees -= 3;
            }else{
                return false
            }

        }
    }
    return true;
};
