const sumAll = function(number1,number2) {
    
    let num1=parseInt(number1);
    let num2=parseInt(number2);
    let num3=0;
    
    if(num1<0 || num2<0 ){
        return "ERROR";
    }
    if(typeof(number2)!="number" || typeof(number1)!="number") {
        return "ERROR";
    }

    if(num2<num1){
        num3=num1;
        num1=num2;
        num2=num3;
    }
    let out=BigInt(0);
    for (let i=num1;i<=num2;i++){
        out+=BigInt(i);
    }
    return parseInt(out);
};

// Do not edit below this line
module.exports = sumAll;
